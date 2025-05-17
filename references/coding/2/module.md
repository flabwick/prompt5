# MODULE2
Sidebar Cell Explorer

Reads folder structure from /data/cells/

Renders nested folders and files

Supports:

New Cell

New Folder

Rename

Delete

Drag-and-drop for reordering/moving

Open/Edit Cells

Clicking a cell opens it as a tab in #main-panel

Editable markdown textarea

Show top bar buttons: 'copy', 'view', 'new chat' (no behavior yet)

Save and Persist

Edited cell content saved to localStorage or mock backend on blur or Save button

On reload, sidebar reflects persisted state

File Structure Reflection

Any structural change (rename, delete, create) updates the sidebar view live


# PLAN


**Sidebar Cell Explorer – Implementation Plan**

This module introduces the interactive cell management system via a dynamic, folder-based sidebar. It enables users to view and manipulate markdown cells organized in a file-explorer structure. The interface reflects changes live and persists edits or reorganizations to the mock backend (`/data/cells/`) using localStorage or mock APIs. Interaction with this module results in cell tabs opening in the main panel where markdown can be edited and saved.

---

**Checklist: Files, Functions, and Structure**

**1. Folder and File Placement**

```
/project-root
  /main.js
  /styles.css
  /templates/sidebar-cells.html     ← sidebar UI template
  /data/cells/                      ← nested folder and cell markdown files
```

---

**2. HTML Template: Sidebar View**

* **File:** `templates/sidebar-cells.html`
* **Purpose:** Defines container for nested folder/file tree and action buttons.
* **Contains:**

  * `<ul id="cell-tree"></ul>`: dynamic tree mount point
  * Buttons: **New Cell**, **New Folder**
  * (Hidden) rename input field

---

**3. JavaScript Additions (in `main.js`)**

**A. `initCellsSidebar()`**

* Injects `sidebar-cells.html` into `#sidebar-content`
* Calls `renderCellTree()` to display structure

**B. `renderCellTree()`**

* Reads from localStorage or `/data/cells/`
* Recursively renders tree structure:

  * Folder nodes with collapse/expand
  * Markdown files as clickable items (calls `openCellTab(filepath)`)

**C. `openCellTab(filepath)`**

* Checks if cell already has an open tab
* Calls `openTab(id, title)` with cell name
* Loads file content into editable `<textarea>` in `#main-panel`

**D. `renderCellEditor(content, filepath)`**

* Displays:

  * `<textarea>` with markdown
  * Top bar with buttons: **copy**, **view**, **new chat** (no behavior)
* Binds blur or save to trigger `saveCellContent(content, filepath)`

**E. `saveCellContent(content, filepath)`**

* Writes to localStorage (or mock API)
* Updates tree if renamed/new

**F. `createNewCell(folderPath)`**

* Prompts user for filename
* Creates empty `.md` file in `folderPath`
* Calls `renderCellTree()` to update sidebar

**G. `createNewFolder(parentPath)`**

* Prompts for folder name
* Updates tree and storage
* Creates nested structure in-memory or via JSON metadata

**H. `renameItem(oldPath, newPath)`**

* Applies to both cells and folders
* Triggers re-render of tree

**I. `deleteItem(path)`**

* Confirms and deletes item from structure
* Re-renders tree view

**J. `dragDropTreeHandler()`**

* Enables drag-and-drop folder/file reordering
* Updates paths and internal references

---

**4. CSS Enhancements (`styles.css`)**

* Indent nested folders
* Add expand/collapse indicators
* Style selected cell
* Style drag-over and drag-handle

---

**5. Data Model**

Stored in localStorage or mock-backed by:

```json
{
  "cells": {
    "Folder A": {
      "file1.md": "...",
      "Subfolder": {
        "file2.md": "..."
      }
    }
  }
}
```

* Maps folder hierarchy to file content
* JSON used in-memory and persisted

---

**6. Interactions & Connections**

* Selecting a `.md` cell → opens editable tab via `openTab()`
* Changes in editor are saved and reflected in tree
* New/Rename/Delete → modify structure and call `renderCellTree()`
* Sidebar tab labeled **Cells** triggers `initCellsSidebar()` from `toggleSidebar()`

---

**Summary of Components and Paths**

| Item                 | Path or ID                      | Function           |
| -------------------- | ------------------------------- | ------------------ |
| Sidebar Template     | `/templates/sidebar-cells.html` | Layout             |
| Tree Container       | `#cell-tree`                    | Mount point        |
| Markdown Cell Folder | `/data/cells/`                  | Data               |
| New Cell Button      | `#new-cell-btn`                 | Creates empty file |
| Open Cell            | `openCellTab(filepath)`         | Loads into editor  |
| Save Cell            | `saveCellContent()`             | Writes changes     |
| Re-render Tree       | `renderCellTree()`              | Updates view       |
