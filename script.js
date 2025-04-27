const API_BASE = '';
const PROMPTS_DIR = 'prompts/';
const REFERENCES_DIR = 'references/';

window.onload = () => {
  const folderSelect = document.getElementById('folder-select');
  folderSelect.onchange = () => loadFileTree(folderSelect.value, 'file-tree');
  folderSelect.dispatchEvent(new Event('change'));

  document.getElementById('copy-button').onclick = () => {
    copyToClipboard(window._resolvedPromptText || '');
  };

  document.getElementById('save-button').onclick = saveEditedFile;

  document.getElementById('add-file-button').onclick = () => addFile(window._selectedPath);
  document.getElementById('add-folder-button').onclick = () => addFolder(window._selectedPath);
  document.getElementById('rename-button').onclick = () => renameItem(window._selectedPath);
  document.getElementById('delete-button').onclick = () => deleteItem(window._selectedPath);
};

async function loadFileTree(root, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  try {
    const res = await fetch(`/api/tree?folder=${root}`);
    const items = await res.json();
    const tree = buildTree(items);
    container.appendChild(tree);
  } catch (err) {
    console.error('Error loading tree:', err);
  }
}

function buildTree(items, depth = 0) {
  const ul = document.createElement('ul');

  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.name;
    li.dataset.path = item.path;
    li.dataset.type = item.type;
    li.classList.add(item.type);
    li.style.paddingLeft = `${depth * 16}px`;

    if (item.type === 'folder') {
      li.classList.add('folder-collapsed');
      li.onclick = async (e) => {
        e.stopPropagation();
        const isExpanded = li.classList.toggle('folder-expanded');
        li.classList.toggle('folder-collapsed', !isExpanded);

        document.querySelectorAll('#file-tree li').forEach(el => el.classList.remove('selected'));
        li.classList.add('selected');
        window._selectedPath = item.path;

        if (isExpanded && !li.dataset.loaded) {
          const res = await fetch(`/api/tree?folder=${item.path}`);
          const children = await res.json();
          const childTree = buildTree(children, depth + 1);
          li.appendChild(childTree);
          li.dataset.loaded = 'true';
        } else {
          const childUl = li.querySelector('ul');
          if (childUl) childUl.style.display = isExpanded ? 'block' : 'none';
        }
      };
    }

    if (item.type === 'file') {
      li.onclick = async (e) => {
        e.stopPropagation();
        document.querySelectorAll('#file-tree li').forEach(el => el.classList.remove('selected'));
        li.classList.add('selected');
        window._selectedPath = item.path;

        const content = await fetchMarkdown(item.path);
        document.getElementById('editor').value = content;
        document.getElementById('editor').dataset.path = item.path;

        const resolved = await resolveReferencesRecursive(content);
        document.getElementById('prompt-content').textContent = resolved;
        window._resolvedPromptText = resolved;
      };
    }

    ul.appendChild(li);
  });

  return ul;
}

async function fetchMarkdown(path) {
  try {
    const res = await fetch(path, { cache: 'no-store' });
    return await res.text();
  } catch (err) {
    console.error('Error fetching:', path, err);
    return '';
  }
}

function extractReferences(content) {
  const matches = [...content.matchAll(/\[([^\]]+)\]/g)];
  return matches.map(m => m[1]).filter(name => /^[\w\-\/\.]+$/.test(name));
}

function countTokensAndWords(text) {
  const wordCount = text.trim().split(/\s+/).length;
  const tokenCount = Math.round(text.length / 4); // rough token estimate
  return { tokenCount, wordCount };
}

function updateCounter(text) {
  const { tokenCount, wordCount } = countTokensAndWords(text);
  const counter = document.getElementById('counter');
  counter.textContent = `${tokenCount} tokens • ${wordCount} words`;
  counter.classList.toggle('exceeded', tokenCount > 50000 || wordCount > 40000);
}

async function resolveReferencesRecursive(content, visited = new Set()) {
  const refs = extractReferences(content);
  for (const ref of refs) {
    if (visited.has(ref)) continue;
    visited.add(ref);

    const refPath = `${REFERENCES_DIR}${ref}.md`;
    const refContent = await fetchMarkdown(refPath);
    const resolvedContent = await resolveReferencesRecursive(refContent, visited);
    content = content.replaceAll(`[${ref}]`, `[${resolvedContent.trim()}]`);
  }
  updateCounter(content);
  return content;
}

function copyToClipboard(text) {
  if (!text) return;
  navigator.clipboard.writeText(text)
    .then(() => showToast('Copied!'))
    .catch(err => console.error('Copy failed:', err));
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

async function saveEditedFile() {
  const path = document.getElementById('editor').dataset.path;
  const content = document.getElementById('editor').value;
  if (!path) return;
  try {
    await fetch(`${API_BASE}/api/file`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path, content })
    });
    showToast('Saved!');
  } catch (err) {
    console.error('Save failed:', err);
  }
}

async function addFile(parentPath) {
  const nameRaw = prompt('New file name (no extension):');
  const name = nameRaw?.trim();
  if (!name) return;
  const fullName = name.endsWith('.md') ? name : `${name}.md`;

  let selectedPath = parentPath;
  const selectedEl = document.querySelector(`li[data-path="${selectedPath}"]`);
  if (!selectedEl || selectedEl.dataset.type === 'file') {
    selectedPath = document.getElementById('folder-select').value;
  }

  try {
    await fetch(`${API_BASE}/api/add-file`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ parentPath: selectedPath, name: fullName })
    });
    refreshTree();
  } catch (err) {
    console.error('Add file failed:', err);
  }
}

async function addFolder(parentPath) {
  const name = prompt('New folder name:');
  if (!name) return;
  try {
    await fetch(`${API_BASE}/api/add-folder`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ parentPath, name })
    });
    refreshTree();
  } catch (err) {
    console.error('Add folder failed:', err);
  }
}

async function renameItem(path) {
  const newRaw = prompt('New name (no extension):');
  const name = newRaw?.trim();
  if (!name) return;

  const selected = document.querySelector(`#file-tree li[data-path="${path}"]`);
  const isFile = selected?.dataset.type === 'file';
  const newName = isFile && !name.endsWith('.md') ? `${name}.md` : name;

  try {
    await fetch(`${API_BASE}/api/rename`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path, newName })
    });
    refreshTree();
  } catch (err) {
    console.error('Rename failed:', err);
  }
}

async function deleteItem(path) {
  if (!confirm('Are you sure you want to delete this item?')) return;

  const parentPath = path.split('/').slice(0, -1).join('/');
  const isRoot = parentPath === '';

  try {
    await fetch(`${API_BASE}/api/delete`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path })
    });

    window._selectedPath = isRoot ? document.getElementById('folder-select').value : parentPath;
    refreshTree();
  } catch (err) {
    console.error('Delete failed:', err);
  }
}

function refreshTree() {
  const selected = document.querySelector(`#file-tree li[data-path="${window._selectedPath}"]`);
  const root = document.getElementById('folder-select').value;

  if (!selected) {
    loadFileTree(root, 'file-tree');
    return;
  }

  const type = selected.dataset.type;
  const path = selected.dataset.path;

  if (type === 'file') {
    const parent = path.split('/').slice(0, -1).join('/') || root;
    fetch(`/api/tree?folder=${parent}`)
      .then(res => res.json())
      .then(children => {
        const parentLi = document.querySelector(`#file-tree li[data-path="${parent}"]`);
        const existing = parentLi?.querySelector('ul');
        if (existing) parentLi.removeChild(existing);
        const subtree = buildTree(children, (parent.match(/\//g) || []).length + 1);
        if (parentLi) {
          parentLi.appendChild(subtree);
          parentLi.dataset.loaded = 'true';
        }
      });
    return;
  }

  fetch(`/api/tree?folder=${path}`)
    .then(res => res.json())
    .then(children => {
      const existing = selected.querySelector('ul');
      if (existing) selected.removeChild(existing);
      const subtree = buildTree(children, (path.match(/\//g) || []).length + 1);
      selected.appendChild(subtree);
      selected.dataset.loaded = 'true';
    });
}