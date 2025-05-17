Debugging Plan for Sidebar Cell Explorer Issues

⸻

1. Files and folders do not show as visually nested
Severity: Low
Complexity: Easy

Fix Plan:
	•	Ensure the recursive renderCellTree() function applies increasing left-margin or padding to nested <ul> elements or their children.
	•	In styles.css, add rule:

#cell-tree ul { padding-left: 1em; border-left: 1px dotted #ccc; }


	•	Verify each ul within a folder node is appended properly as a child of that folder’s li, not flat at root.

Backup:
	•	Add data-depth attribute per node and apply indentation dynamically via JS or CSS.

⸻

2. Drag-and-drop into root does not work
Severity: Medium
Complexity: Moderate

Fix Plan:
	•	Likely cause: drop target detection fails on root node.
	•	Ensure root <ul id="cell-tree"> itself is registered as a valid drop target.
	•	On drop, check if the destination is root (/ or empty string). Update filepath and cellTreeData, then re-render.
	•	Add visual feedback by applying a class (e.g., drag-over-root) and removing it on dragleave/drop.

Backup:
	•	Add invisible “drop zone” div above root list to act as fallback drop target.
	•	Prevent folders from collapsing during drop with event.preventDefault() and stopPropagation() logic.

⸻

3. Folders can be nested inside themselves (infinite loop)
Severity: High
Complexity: Deep

Fix Plan:
	•	On drop: prevent any folder from being moved into one of its descendants.
	•	Implement isDescendant(parentPath, targetPath) check before move.
	•	If targetPath.startsWith(parentPath + '/'), block the move.
	•	Alert user or ignore drop silently if this is detected.

Backup:
	•	Disable drop event on any of a folder’s children when it is being dragged.
	•	Add recursive sanitization on tree save/load to prevent corrupt states.

⸻

4. Same markdown file can open twice in tabs
Severity: Critical
Complexity: Moderate

Fix Plan:
	•	openCellTab(filepath) should check if filepath already exists in openTabs by path or unique ID.
	•	If found, call switchTab(existingId) instead of opening a new one.
	•	Use filepath as unique tab ID to avoid collision.

Backup:
	•	On file open, scan all .tab elements for existing data-filepath. If match, reuse.
	•	Prevent duplicate tab creation by disabling click handler while one is being opened.

Post-Fix Follow-up:
	•	Add autosave debounce or warning if duplicate tabs were previously opened to avoid loss.
	•	Validate tab close/update logic to ensure content persists only from last active editor.

⸻

Next Steps Summary
	1.	Apply indentation via CSS and verify nested DOM structure.
	2.	Validate drag targets for root and fix drop-to-root behavior.
	3.	Block folder self-nesting by validating move targets pre-drop.
	4.	Enforce unique tabs per filepath and protect user content from overwrites.

Would you like a patch order recommendation or focused implementation code for any of the above?