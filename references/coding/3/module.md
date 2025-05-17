# OBJECTIVE

2. File Manager (Cells)

Backend: CRUD operations for cells (create, read, update, delete), organized in a data/cells directory.

Frontend: File tree sidebar with drag-and-drop, folder support, rename/delete/create actions, and real-time updates.

# PLAN
**/core/fileSystem.js**

* Implement all filesystem operations for cells and folders: create, read, update, delete.
* Provide interface for listing directory contents recursively.
* Handle drag-and-drop (move/rename) logic as atomic filesystem operations.
* Design methods so each operation can be called independently without external dependencies.
* Ensure all methods update the cell directory (`/data/cells`) and emit change events.

**/core/liveSync.js**

* Add logic to observe changes in `/data/cells` and broadcast updates to UI.
* Provide hooks for UI components to subscribe/unsubscribe to updates.
* Trigger sync events after each filesystem operation.

**/src/sidebar.js**

* Refactor:

  * Listen for filesystem updates and re-render sidebar as needed.
  * Provide callbacks for file/folder actions (create, rename, delete, move).
  * Integrate with fileSystem and liveSync modules.

**/ui/createSidebar.js**

* Refactor:

  * Accept tree data and action callbacks.
  * Support rendering folder tree with correct nesting and drag-and-drop handles.
  * Trigger UI updates on sidebar state change.

**/ui/createFolderTree.js**

* Refactor:

  * Accepts recursive folder/file data and renders structure as interactive tree.
  * Render UI for drag-and-drop, create, rename, delete per node.
  * Handle expansion/collapse for folders.

**/events/bindings/sidebarEvents.js**

* Add event logic for:

  * Node selection (open in tab).
  * Drag-and-drop for moving files/folders.
  * Context menus or inline controls for create, rename, delete actions.
  * Call core/fileSystem methods on each event, then trigger sidebar update.

**/state/cellRegistry.js**

* Implement registry for loaded cells and folders, tracking open/selected state.
* Provide interface for sidebar and tabs to query current cells/folders.

**/state/globalState.js**

* Add or update state to track current sidebar view, selected cell, expanded folders.

**/utils/id.js**

* Implement utility for generating unique IDs for files/folders as needed (for temporary or unsaved nodes).

**New File: /ui/contextMenu.js**

* Provide reusable UI component for context menus (create, rename, delete) on files/folders.

**New File: /core/treeBuilder.js**

* Recursively build file/folder tree data from `/data/cells` directory for use by sidebar UI.

**General Integration**

* All UI and event handling should rely on new or existing interfaces; no changes should require editing existing files except refactoring stubs to proper functions.
* All new logic should be isolated to new files or clear function expansions inside files currently containing only placeholders or stubs.
* Do not introduce any frameworks or outside dependencies.
* Maintain modularity: every component is responsible for only one concern, interacting via defined interfaces/events.
