Make a UI that works on Github Codespace. I want to be able to operate this app entirely on the codespace without any local environment. The repository includes two directories which each include markdown files (titled prompts/ and references/). On open the UI shows a list of “prompts”, which are the titles of the markdown files in the prompts/ directory in alphabetical order. When you click on one of the titles, it will copy the content to the system’s clipboard through the browser.

Within the content of prompt markdown files may be links to references. For example, a prompt might link to the reference “ref1.md” in the reference folder for example: “Read the content of the following document and summarize it: [ref1]”. Lets say the content of ref1 is “this is the content of ref1”. When you click the prompt here, it will copy the following to your clipboard: “Read the content of the following document and summarize it: [this is the content of ref1]”.

# PLAn
**Directory Structure & File Plan**

**Root Directory:**
- `index.html`  
- `style.css`  
- `script.js`  
- `/.devcontainer/devcontainer.json`  
- `/prompts/`  
- `/references/`

---

**1. `index.html`**
- Display list of markdown files from `/prompts/`
- Show clickable titles
- Placeholder for full prompt content with resolved references

**Functions/IDs/Elements:**
- `<ul id="prompt-list">` – holds prompt file titles  
- `<div id="prompt-content">` – holds parsed prompt content  
- `<button id="copy-button">` – copy content to clipboard

**2. `style.css`**
- Basic layout and styling for list and content areas
- Responsive and minimal

**3. `script.js`**
- **Global Variables**
  - `PROMPTS_DIR = 'prompts/'`
  - `REFERENCES_DIR = 'references/'`

- **Functions**
  - `loadPromptList()`:  
    Reads `/prompts/` directory, extracts file names, sorts alphabetically, and populates `#prompt-list`.

  - `fetchMarkdown(filePath)`:  
    Returns raw content from a given `.md` file.

  - `extractReferences(content)`:  
    Finds `[refName]` patterns, maps them to `references/refName.md`, and returns a map of `refName -> content`.

  - `resolveReferences(content, referenceMap)`:  
    Replaces `[refName]` with `[actual reference content]`.

  - `displayPromptContent(content)`:  
    Renders the resolved content inside `#prompt-content`.

  - `copyToClipboard(text)`:  
    Copies the resolved content to clipboard.

- **Event Listeners**
  - `click` on a prompt title:  
    1. Fetch prompt file  
    2. Extract references  
    3. Fetch each reference  
    4. Replace refs with content  
    5. Render & prepare for copy

  - `click` on copy button:  
    Triggers `copyToClipboard()` with resolved content

**4. `/.devcontainer/devcontainer.json`**
- Configure GitHub Codespaces to serve static files via a lightweight web server (like Python HTTP server)

**devcontainer.json contents:**
```json
{
  "postCreateCommand": "python3 -m http.server 3000",
  "forwardPorts": [3000]
}
```

---

**Directory: `/prompts/`**
- Markdown files like `prompt1.md`, `prompt2.md`, etc.

**Directory: `/references/`**
- Markdown files like `ref1.md`, `ref2.md`, etc.

---

**All interactions are client-side only. No server-side processing.**  
Uses `fetch()` and local file access through GitHub Codespaces’ served environment.  
Let me know what to tweak.


**Updates to Architecture for Live Refresh**

**Changes to `script.js`:**

- Modify `loadPromptList()` to:
  - Re-fetch `/prompts/` directory on each page load.
  - Clear and repopulate `#prompt-list`.

- Always perform **fresh fetches**:
  - `fetchMarkdown()` must not cache—use `{ cache: 'no-store' }` in `fetch()`.

```js
fetch(filePath, { cache: 'no-store' })
```

- On prompt click:
  - Re-fetch prompt file and **all referenced files** live.

- Disable any client-side caching.

**Changes to GitHub Codespace setup (`devcontainer.json`):**

- Ensure `python3 -m http.server` always serves fresh content:
  - Python's HTTP server by default doesn’t cache, so no extra headers needed.

**Summary Checklist Addendum:**

- [ ] `loadPromptList()` clears existing list and re-fetches all filenames  
- [ ] `fetchMarkdown(path)` uses `{ cache: 'no-store' }`  
- [ ] Every prompt click re-fetches all related markdown content  
- [ ] No data stored or reused between sessions  
- [ ] Full reload reflects all changes from filesystem every time

Everything is now fully dynamic, always in sync with markdown file updates.