const EpubTool = (() => {
  // Utility: parse XML string to DOM
  function parseXml(str) {
    return new DOMParser().parseFromString(str, 'application/xml');
  }

  // Utility: count words in HTML
  function countWords(html) {
    const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
    return text.trim().split(' ').length;
  }

  // Find OPF path from container.xml
  async function findOpfPath(zip) {
    const containerPath = 'META-INF/container.xml';
    if (!zip.files[containerPath]) return null;
    const xml = parseXml(await zip.files[containerPath].async('string'));
    const rootfile = xml.querySelector('rootfile');
    return rootfile ? rootfile.getAttribute('full-path') : null;
  }

  // Parse OPF for manifest and spine
  async function parseOpf(zip, opfPath) {
    const xml = parseXml(await zip.files[opfPath].async('string'));
    const manifest = {};
    xml.querySelectorAll('manifest > item').forEach(item => {
      manifest[item.getAttribute('id')] = {
        href: item.getAttribute('href'),
        mediaType: item.getAttribute('media-type')
      };
    });
    const spine = [];
    xml.querySelectorAll('spine > itemref').forEach(itemref => {
      spine.push(itemref.getAttribute('idref'));
    });
    // Try to extract section titles from guide/landmarks/navMap
    const sections = [];
    // EPUB 2: guide
    xml.querySelectorAll('guide > reference').forEach(ref => {
      sections.push({
        title: ref.getAttribute('title') || ref.getAttribute('type'),
        href: ref.getAttribute('href')
      });
    });
    // EPUB 3: landmarks/nav
    // (not always present, fallback to TOC later)
    return { manifest, spine, sections, opfDir: opfPath.replace(/[^/]+$/, '') };
  }

  // Try to get section boundaries from TOC or OPF
  function getSectionBoundaries(toc, opfSections, manifest, opfDir) {
    // Prefer TOC if available
    if (toc && toc.length) {
      // Flatten TOC to [{label, src}]
      const flat = [];
      function walk(items, parentLabel) {
        for (const item of items) {
          flat.push({
            label: parentLabel ? `${parentLabel} > ${item.label}` : item.label,
            src: item.src
          });
          if (item.children && item.children.length) {
            walk(item.children, item.label);
          }
        }
      }
      walk(toc, '');
      // Group by top-level label (e.g. "Part I", "Book One")
      const boundaries = [];
      let lastLabel = null;
      for (const entry of flat) {
        const topLabel = entry.label.split('>')[0].trim();
        if (topLabel !== lastLabel) {
          boundaries.push({
            label: topLabel,
            href: entry.src.split('#')[0]
          });
          lastLabel = topLabel;
        }
      }
      return boundaries.map(b => {
        // Convert relative to absolute path
        let href = b.href;
        if (opfDir && href && !href.startsWith(opfDir)) href = opfDir + href;
        return { label: b.label, href };
      });
    }
    // Fallback: use OPF guide/sections
    if (opfSections && opfSections.length) {
      return opfSections.map(s => {
        let href = s.href;
        if (opfDir && href && !href.startsWith(opfDir)) href = opfDir + href;
        return { label: s.title, href };
      });
    }
    return [];
  }

  async function parseTOC(zip) {
    // Try to find toc.ncx or content.opf
    let tocFile = Object.keys(zip.files).find(f => f.match(/toc\.ncx$/i));
    if (!tocFile) {
      tocFile = Object.keys(zip.files).find(f => f.match(/content\.opf$/i));
    }
    if (!tocFile) return null;
    const tocContent = await zip.files[tocFile].async('string');
    const parser = new DOMParser();
    const xml = parser.parseFromString(tocContent, 'application/xml');
    // Try toc.ncx first
    const navMap = xml.querySelector('navMap');
    if (navMap) {
      function parseNavPoints(navPoints) {
        return Array.from(navPoints).map(np => {
          const label = np.querySelector('text')?.textContent || '';
          const src = np.querySelector('content')?.getAttribute('src') || '';
          const children = np.querySelectorAll(':scope > navPoint');
          return {
            label,
            src,
            children: parseNavPoints(children)
          };
        });
      }
      return parseNavPoints(navMap.querySelectorAll(':scope > navPoint'));
    }
    // Try content.opf (EPUB 3 nav)
    const nav = xml.querySelector('nav[epub|type="toc"], nav[type="toc"]');
    if (nav) {
      function parseNavList(ol) {
        return Array.from(ol.children).map(li => {
          const a = li.querySelector('a');
          const label = a?.textContent || '';
          const src = a?.getAttribute('href') || '';
          const subOl = li.querySelector('ol');
          return {
            label,
            src,
            children: subOl ? parseNavList(subOl) : []
          };
        });
      }
      const ol = nav.querySelector('ol');
      if (ol) return parseNavList(ol);
    }
    return null;
  }

  function renderSnippets(list, snippets, fileName) {
    snippets.forEach(snippet => {
      const li = document.createElement('li');
      li.className = 'snippet-item';
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = snippet.innerText;
      li.appendChild(checkbox);
      const label = document.createElement('span');
      label.className = 'snippet-label';
      label.textContent = `[${fileName}] ` + snippet.innerText.slice(0, 50);
      li.appendChild(label);
      list.appendChild(li);
    });
  }

  async function handleFile(file) {
    const zip = await JSZip.loadAsync(file);
    const list = document.getElementById('snippetList');
    list.innerHTML = '';

    // 1. Find OPF
    const opfPath = await findOpfPath(zip);
    if (!opfPath) {
      list.innerHTML = '<li>Could not find OPF file in EPUB.</li>';
      return;
    }

    // 2. Parse OPF for manifest/spine/sections
    const { manifest, spine, sections, opfDir } = await parseOpf(zip, opfPath);

    // 3. Parse TOC (for section boundaries)
    const toc = await parseTOC(zip);

    // 4. Build reading order: [{idref, href, mediaType}]
    const readingOrder = spine.map(idref => {
      const item = manifest[idref];
      if (!item) return null;
      let href = item.href;
      if (opfDir && href && !href.startsWith(opfDir)) href = opfDir + href;
      return { idref, href, mediaType: item.mediaType };
    }).filter(Boolean);

    // 5. Get section boundaries (list of {label, href})
    const sectionBoundaries = getSectionBoundaries(toc, sections, manifest, opfDir);

    // 6. Merge files into ~10k-word chunks, respecting section boundaries
    const chunks = [];
    let currentChunk = { files: [], wordCount: 0, section: null };
    let sectionIdx = 0;
    let nextSectionHref = sectionBoundaries[sectionIdx]?.href;
    let currentSection = sectionBoundaries[sectionIdx]?.label || 'Section';

    for (let i = 0; i < readingOrder.length; ++i) {
      const { href } = readingOrder[i];
      if (!zip.files[href]) continue;
      const html = await zip.files[href].async('string');
      const words = countWords(html);

      // If this file is a section boundary, start a new chunk
      if (href === nextSectionHref && currentChunk.files.length) {
        chunks.push({ ...currentChunk });
        currentChunk = { files: [], wordCount: 0, section: currentSection };
        sectionIdx++;
        nextSectionHref = sectionBoundaries[sectionIdx]?.href;
        currentSection = sectionBoundaries[sectionIdx]?.label || 'Section';
      }
      // If adding this file would exceed 10k words, start a new chunk
      if (currentChunk.wordCount + words > 10000 && currentChunk.files.length) {
        chunks.push({ ...currentChunk });
        currentChunk = { files: [], wordCount: 0, section: currentSection };
      }
      currentChunk.files.push({ href, html });
      currentChunk.wordCount += words;
      currentChunk.section = currentSection;
    }
    if (currentChunk.files.length) chunks.push(currentChunk);

    // Cyclical merging to keep chunks between 5k-10k words
    let merged = false;
    do {
      merged = false;
      for (let i = 0; i < chunks.length; ++i) {
        if (chunks[i].wordCount < 5000 && chunks.length > 1) {
          // Merge with next chunk (cycle to first if at end)
          const nextIdx = (i + 1) % chunks.length;
          if (nextIdx === i) break; // Only one chunk left
          // Merge files and word counts
          chunks[i].files = chunks[i].files.concat(chunks[nextIdx].files);
          chunks[i].wordCount += chunks[nextIdx].wordCount;
          // Optionally, combine section labels
          if (chunks[i].section !== chunks[nextIdx].section) {
            chunks[i].section = `${chunks[i].section} + ${chunks[nextIdx].section}`;
          }
          // Remove the merged chunk
          chunks.splice(nextIdx, 1);
          merged = true;
          break; // Restart loop after mutation
        }
      }
    } while (merged);

    // 7. Render merged chunks
    chunks.forEach((chunk, idx) => {
      const li = document.createElement('li');
      li.className = 'chunk-item';

      // Dropdown toggle
      const toggleBtn = document.createElement('button');
      toggleBtn.type = 'button';
      toggleBtn.className = 'chunk-toggle';
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.style.marginRight = '8px';
      toggleBtn.textContent = '▶'; // right arrow for collapsed

      // Create a select-all checkbox for this chunk
      const selectAllDiv = document.createElement('div');
      selectAllDiv.style.marginBottom = '4px';
      selectAllDiv.style.display = 'inline-block';
      const selectAllCheckbox = document.createElement('input');
      selectAllCheckbox.type = 'checkbox';
      selectAllCheckbox.className = 'chunk-select-all';
      selectAllCheckbox.id = `chunk-select-all-${idx}`;
      const selectAllLabel = document.createElement('label');
      selectAllLabel.htmlFor = selectAllCheckbox.id;
      selectAllLabel.textContent = ' Select all in this section';
      selectAllDiv.appendChild(selectAllCheckbox);
      selectAllDiv.appendChild(selectAllLabel);

      // Header row: arrow, title, select-all
      const headerDiv = document.createElement('div');
      headerDiv.style.display = 'flex';
      headerDiv.style.alignItems = 'center';
      headerDiv.appendChild(toggleBtn);
      const titleSpan = document.createElement('strong');
      titleSpan.textContent = `${chunk.section || ''} (Chunk ${idx + 1}, ~${chunk.wordCount} words)`;
      headerDiv.appendChild(titleSpan);
      headerDiv.appendChild(selectAllDiv);
      headerDiv.style.gap = '8px';
      li.appendChild(headerDiv);

      // The snippet list (ul), initially hidden
      const ul = document.createElement('ul');
      ul.style.display = 'none';
      // Merge all HTML for this chunk
      const mergedHtml = chunk.files.map(f => f.html).join('\n');
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = mergedHtml;
      const snippets = tempDiv.querySelectorAll('p, h1, h2, li');
      renderSnippets(ul, snippets, chunk.files.map(f => f.href).join(', '));
      li.appendChild(ul);
      list.appendChild(li);

      // Toggle dropdown
      toggleBtn.addEventListener('click', function() {
        const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        toggleBtn.setAttribute('aria-expanded', String(!expanded));
        ul.style.display = expanded ? 'none' : '';
        toggleBtn.textContent = expanded ? '▶' : '▼'; // right/collapse, down/expand
      });

      // Add event listener for select-all checkbox
      selectAllCheckbox.addEventListener('change', function() {
        const checkboxes = ul.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(cb => { cb.checked = selectAllCheckbox.checked; });
      });

      // Keep select-all in sync if user manually checks/unchecks all
      ul.addEventListener('change', function() {
        const checkboxes = ul.querySelectorAll('input[type="checkbox"]');
        const checked = Array.from(checkboxes).filter(cb => cb.checked).length;
        if (checked === checkboxes.length) {
          selectAllCheckbox.checked = true;
          selectAllCheckbox.indeterminate = false;
        } else if (checked === 0) {
          selectAllCheckbox.checked = false;
          selectAllCheckbox.indeterminate = false;
        } else {
          selectAllCheckbox.checked = false;
          selectAllCheckbox.indeterminate = true;
        }
      });
    });
  }

  async function listEpubFiles() {
    const listDiv = document.getElementById('epubFileList');
    if (!listDiv) return;
    listDiv.innerHTML = 'Loading...';
    try {
      // Use absolute path to ensure correct API call regardless of current URL
      const res = await fetch(`${window.location.origin}/api/epub-files`);
      const files = await res.json();
      if (!files.length) {
        listDiv.innerHTML = '<em>No EPUB files found in references/books/</em>';
        return;
      }
      const ul = document.createElement('ul');
      files.forEach(file => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.textContent = file;
        btn.onclick = async () => {
          // Fetch the epub file as a Blob and pass to handleFile
          const resp = await fetch(`/references/books/${encodeURIComponent(file)}`);
          const blob = await resp.blob();
          const fileObj = new File([blob], file, { type: blob.type });
          handleFile(fileObj);
        };
        li.appendChild(btn);
        ul.appendChild(li);
      });
      listDiv.innerHTML = '';
      listDiv.appendChild(ul);
    } catch (e) {
      listDiv.innerHTML = 'Failed to load EPUB list';
    }
  }

  function copySelected() {
    const checks = document.querySelectorAll('#snippetList input:checked');
    const text = Array.from(checks).map(c => c.value).join('\n\n');
    navigator.clipboard.writeText(text);
  }

  document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('epubInput');
    if (input) {
      input.addEventListener('change', e => {
        if (e.target.files[0]) handleFile(e.target.files[0]);
      });
    }
    listEpubFiles();
  });

  return { copySelected };
})();