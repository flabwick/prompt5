Implement inline editing for .md and .txt files with instant save and content refresh without requiring tab or panel reload. Remove the save button and have it all autosave yk.

Also make the UI so that it works on a mobile device. Right now the sidebar is just too small, it might be better to have an alternative system. 


**Planned Architecture:**

**Files:**
- `/index.html`
- `/style.css`
- `/app.js`
- `/server.js`
- `/components/Sidebar.js`
- `/components/TabBar.js`
- `/components/MainPanel.js`
- `/components/Editor.js`
- `/components/FileTree.js`
- `/utils/fileTypes.js`
- `/utils/debounce.js` *(new)*
- `/utils/mobileUIManager.js` *(new)*

---

**Components and Functions:**

**/components/Editor.js**
- `renderEditor(fileId, content)`
- `setupAutoSave(editorElement, fileId)`
  - Uses debounce.
  - Auto-saves content to server on typing stop (300ms delay).
- `updateEditorContent(fileId, newContent)`
  - Updates the textarea if external refresh happens.

**/components/MainPanel.js**
- `showEditor(fileId, content, fileType)`
  - Inline editor for `.md` and `.txt`.
  - Calls `setupAutoSave`.

**/utils/debounce.js**
- `debounce(func, delay)`
  - Simple debounce function to limit auto-save calls.

**/components/TabBar.js**
- No changes needed for autosave.

**/components/Sidebar.js**
- `renderSidebar(treeData)`
- `setupControls()`
- `setupContextMenu()`
- `makeSidebarDraggable()`
- `highlightItem(itemId)`
- `enableMobileSidebarToggle()` *(new)*
  - Adds a hamburger button on small screens.
  - Shows/hides sidebar.

**/utils/mobileUIManager.js**
- `isMobileDevice()`
- `setupResponsiveUI()`
  - Adds mobile sidebar behavior.
  - Adjusts tabbar/main-panel layout on small screens.
  - Example: collapse sidebar into a slide-over panel.

**/app.js**
- On window resize or load:
  - Call `setupResponsiveUI()`.

---

**Server-side `/server.js`:**
- `/api/file?path=...` (POST)
  - Already exists for save — no change.
- Optional improvement:
  - Add timestamp checking for concurrency (later).

---

**UI Behavior:**
- **Autosave:** No save button; textareas autosave after small typing pauses.
- **Mobile:**
  - Hamburger button to toggle sidebar.
  - Sidebar overlays content on small screens.
  - Main panel and tabs remain full width when sidebar hidden.

---

**Interactions:**
- Typing in editor triggers debounce -> POST updated content -> server saves -> no page reload.
- On mobile:
  - User clicks hamburger → sidebar slides open.
  - Select file → sidebar auto-closes after file opens.

---

Would you like me to also propose rough class and ID names for the new mobile sidebar elements? (It would make the next step even faster.)