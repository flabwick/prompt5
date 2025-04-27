**Project Architecture for `prompt6` GitHub Codespace UI**

**Folder Structure:**
- `/`
  - `index.html`
  - `style.css`
  - `app.js`
  - `/components`
    - `Sidebar.js`
    - `TabBar.js`
    - `MainPanel.js`
    - `FileTree.js`
    - `Editor.js`
    - `PDFViewer.js`
    - `EPUBViewer.js`
    - `CSVViewer.js`
  - `/utils`
    - `fileSystem.js`
    - `dragDrop.js`
    - `tabManager.js`
    - `viewerManager.js`
    - `fileSaver.js`
    - `fileTypes.js`
  - `/assets`
    - `icons/` (for folder/file icons, arrows, close buttons)

---

**File: index.html**
- Set up base layout: sidebar, top tab bar, main panel.
- Load `style.css` and `app.js`.
- Simple divs with IDs:
  - `#sidebar`
  - `#tab-bar`
  - `#main-panel`

---

**File: style.css**
- Flexbox layout:
  - Sidebar fixed width, vertical scroll.
  - Tab bar top, horizontal scroll.
  - Main panel takes remaining space.
- Basic classes:
  - `.tab`, `.tab.active`, `.sidebar-item`, `.sidebar-item.active`, `.folder-arrow`, etc.

---

**File: app.js**
- Initialize UI.
- Set up event listeners.
- Handle file clicks, tab creation, drag-and-drop.
- Load components from `/components`.

---

**Components:**

**Sidebar.js**
- Renders file tree.
- Functions:
  - `renderSidebar(treeData)`
  - `createFolder()`
  - `createMarkdownFile()`
  - `renameItem(itemId)`
  - `highlightItem(itemId)`
  - `handleItemClick(itemId)`
  - `setupDragAndDrop()`

**TabBar.js**
- Manages tabs at the top.
- Functions:
  - `addTab(fileId, fileName)`
  - `removeTab(tabId)`
  - `selectTab(tabId)`
  - `reorderTabs(draggedTabId, targetTabId)`

**MainPanel.js**
- Displays the content depending on file type.
- Functions:
  - `showEditor(fileId, fileContent, fileType)`
  - `showPDFViewer(fileId, filePath)`
  - `showEPUBViewer(fileId, filePath)`
  - `showCSVViewer(fileId, fileContent)`

**FileTree.js**
- Utility to build expandable/collapsible tree structure.
- Functions:
  - `buildTree(treeData)`
  - `expandFolder(folderId)`
  - `collapseFolder(folderId)`

**Editor.js**
- Simple text/markdown editor.
- Functions:
  - `renderEditor(fileId, content)`
  - `handleEditChange(fileId)`
  - `saveFile(fileId)`

**PDFViewer.js**
- Basic embedded PDF viewer using `<iframe>`.
- Functions:
  - `renderPDF(filePath)`

**EPUBViewer.js**
- Simple EPUB preview: render table of contents and chapter text.
- Functions:
  - `renderEPUB(filePath)`

**CSVViewer.js**
- Parses CSV and displays as a table.
- Functions:
  - `renderCSVTable(fileContent)`

---

**Utilities:**

**fileSystem.js**
- Mock file system object in memory.
- Functions:
  - `loadFileSystem()`
  - `saveFileSystem()`
  - `getFile(fileId)`
  - `saveFile(fileId, content)`
  - `moveItem(itemId, newParentId)`
  - `renameItem(itemId, newName)`
  - `createFolder(parentId, folderName)`
  - `createFile(parentId, fileName, fileType)`

**dragDrop.js**
- Drag-and-drop utilities.
- Functions:
  - `enableDrag(itemId)`
  - `enableDrop(folderId)`
  - `handleDrop(sourceId, targetId)`

**tabManager.js**
- Logic to manage open tabs.
- Functions:
  - `openTab(fileId)`
  - `closeTab(fileId)`
  - `setActiveTab(fileId)`

**viewerManager.js**
- Decides which viewer/editor to render.
- Functions:
  - `openFileInPanel(fileId)`

**fileSaver.js**
- Trigger download/save to local storage.
- Functions:
  - `saveContentToFileSystem(fileId, content)`

**fileTypes.js**
- Maps file extensions to types.
- Functions:
  - `getFileType(fileName)`

---

**Interactions:**
- Clicking a file:
  - Highlight file in sidebar ➔ Open tab if not open ➔ Show in main panel.
- Clicking a folder:
  - Expand/collapse.
- Tab actions:
  - Click to switch.
  - Drag to reorder.
  - X to close.
- Sidebar actions:
  - Right-click or button to create folder/file.
  - Drag files/folders to move.
- Editing:
  - Inline edit for `.md` and `.txt`.
  - Save updates file system.

---