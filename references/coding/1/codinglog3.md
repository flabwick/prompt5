
**Changelog:**

- **File Structure Creation**  
  - Terminal command provided and executed to create full directory layout:
    - `/index.html`
    - `/style.css`
    - `/app.js`
    - `/components/` folder with individual JS modules for UI parts.
    - `/utils/` folder with utility JS modules.
    - `/assets/icons/` folder placeholder.

- **`index.html`**  
  - Added basic structure:
    - `#sidebar`, `#tab-bar`, `#main-panel` inside body.
  - Later updated:
    - Wrapped `#sidebar`, `#resizer`, `#right-panel` inside new `#container`.
    - Added new `#resizer` div between sidebar and main panel.

- **`style.css`**  
  - Initial styles for sidebar, tab bar, main panel using flex layout.
  - Later updated:
    - New styles for:
      - `#container` (flex full height)
      - `#resizer` (5px width, `ew-resize` cursor)
      - `#right-panel` (flex column inside right side)
    - Added classes:
      - `.sidebar-item.active` (light blue background for selected items)
      - `.sidebar-item.dragover` (deeper blue background for dragover highlights)

- **`server.js`**  
  - Initial server using Express created to:
    - Serve frontend files statically.
    - Serve `/api/files`, `/api/file?path`, `/api/folder?path` endpoints.
  - Adjusted to avoid Express 5 wildcard route errors:
    - Used query parameters for file access instead of route wildcards.
  - Later added endpoints:
    - `POST /api/file?path=...` to save file contents.
    - `POST /api/rename` to rename files and folders.
    - `POST /api/move` to move files/folders.
    - `POST /api/delete` to fully delete files or folders.
  - Improved `/api/move` to:
    - Prevent moving folders into themselves.
    - Automatically create parent directories if needed.

- **`app.js`**  
  - Initial loading of in-memory fake file system removed.
  - Replaced with live fetch to `/api/files` on `window.onload`.
  - Integrated loading of Sidebar and TabBar.
  - Added mouse events to:
    - Handle sidebar resizing with drag on `#resizer`.
    - Update sidebar width dynamically.

- **`components/Sidebar.js`**  
  - `renderSidebar(treeData)` created to render the file tree.
  - Added:
    - `setupControls()` to create "New Folder" and "New Markdown File" buttons.
    - `setupContextMenu()` for right-click menu (Rename, Delete).
    - `makeSidebarDraggable()` to enable drag-and-drop moves.
    - `highlightItem(itemId)` updated to:
      - Track selected folder for creation.
      - Manage selection vs multi-selection using Ctrl key.
    - Multi-selection with Ctrl+Click implemented:
      - `selectedItems` array added globally.
    - Dragging multiple selected items implemented.
    - Highlighting folders on dragover (via adding/removing `.dragover` class).

- **`components/FileTree.js`**  
  - `buildTree(treeData)`:
    - Initial version expanded to:
      - Apply folder nesting levels with padding.
      - Filter unsupported file types (only `.txt`, `.md`, `.csv`, `.pdf`, `.epub` shown).
      - Preserve expanded/collapsed folder states between renders.
      - Attach `.folder` class for easier CSS targeting.

- **`components/TabBar.js`**  
  - `addTab(fileId)`, `setActiveTab(fileId)`, `removeTab(fileId)` implemented to:
    - Add new tabs without duplication.
    - Switch active tabs correctly without infinite recursion.
  - Added `setupTabBar()`:
    - Allow drag-and-drop reordering of tabs.
    - Attach event listeners for tab operations.
  - Added `reRenderTabs()` utility inside TabBar to fully rebuild tab order.

- **`components/MainPanel.js`**  
  - Functions added:
    - `showEditor(fileId, content, fileType)`
    - `showPDFViewer(filePath)`
    - `showEPUBViewer(filePath)`
    - `showCSVViewer(fileContent)`
  - Each type of viewer/editor dynamically injected into `#main-panel`.

- **`components/Editor.js`**  
  - `renderEditor(fileId, content)`:
    - Renders textarea editor inside main panel.
    - Added visible Save button under editor.
    - Save button triggers POST to `/api/file?path=...` with updated content.

- **`utils/fileSystem.js`**  
  - Not used in final flow — replaced with live server file system interaction.

- **`utils/dragDrop.js`**  
  - Drag-and-drop manually handled inside Sidebar.js instead (no separate dragDrop.js needed).

- **`utils/tabManager.js`**  
  - Tab management (openTab, closeTab, setActiveTab) implemented inside TabBar.js instead.

- **`utils/viewerManager.js`**  
  - `openFileInPanel(fileId)` modified:
    - Open file content dynamically from server based on file type.
  - Added `openFileInPanelWithoutTab(fileId)`:
    - For switching tab content without creating duplicate tabs.

- **`utils/fileSaver.js`**  
  - Local saving deferred to live server saves via `/api/file` endpoint.

- **`utils/fileTypes.js`**  
  - Utility function:
    - `getFileType(fileName)` maps extensions to display types.

---

**Granularity of Changes:**
- Functions created or replaced:  
  - `renderSidebar`, `setupControls`, `setupContextMenu`, `makeSidebarDraggable`, `highlightItem`, `buildTree`, `reloadSidebarPreserveState`
  - `addTab`, `setActiveTab`, `removeTab`, `setupTabBar`, `reRenderTabs`
  - `showEditor`, `showPDFViewer`, `showEPUBViewer`, `showCSVViewer`
  - `renderEditor`, `openFileInPanel`, `openFileInPanelWithoutTab`
- Variables added globally:  
  - `selectedFolderId`, `selectedItems`
- UI Behavior added:  
  - Ctrl+Click multi-selection
  - Dragging multiple files
  - Sidebar resizable width
  - Right-click context menu
  - Highlighting clicked and dragged-over items
- Server API extended with new routes and move/delete safeguards.

