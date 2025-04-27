**Changelog**

• Added `index.html` with structure for prompt list, content display, copy button, and toast notification.

• Created `style.css` with base layout, list styling, content box, button styles, and toast notification styles.

• Created `script.js` with the following functions:
  – `loadPromptList()` to dynamically list `.md` files from `/prompts/`
  – `handlePromptClick(filename)` to load, resolve, display, and return prompt content
  – `fetchMarkdown(path)` with `{ cache: 'no-store' }` to fetch markdown content
  – `extractReferences(content)` to map `[ref]` to reference file content
  – `resolveReferences(content, map)` to replace `[ref]` with resolved content
  – `displayPromptContent(content)` to update DOM with prompt text
  – `copyToClipboard(text)` to copy content to clipboard and trigger toast
  – `showToast()` to show and auto-hide the “Copied!” message

• Modified `loadPromptList()`:
  – Replaced single call to `handlePromptClick()` with an async wrapper that also copies resolved content

• Modified `handlePromptClick()`:
  – Changed return type to return the resolved content for reuse by caller

• Updated `copyToClipboard()`:
  – Added call to `showToast()` after successful copy

• Moved `<button id="copy-button">` above `<pre>` in `index.html`

• Added `<div id="toast">` to `index.html` for copy notifications

• Appended `#toast` CSS and `#toast.show` transition state to `style.css`

• Created `.devcontainer/devcontainer.json` to autostart Python HTTP server on port 3000 via:
  – `"postCreateCommand": "python3 -m http.server 3000"`
  – `"forwardPorts": [3000]`

• Added permanent aliases (`startserver`, `stopserver`) to `~/.bashrc` in Codespace for manual HTTP server control:
  – `startserver='python3 -m http.server 3000'`
  – `stopserver='pkill -f "python3 -m http.server"'`



  **Changelog**

• Modified `scripts/dev.sh`:  
  – Removed aliases for `startfrontend`, `stopfrontend`, `startservers`, `stopservers`  
  – Added unified `startserver` and `stopserver` aliases for Flask-based backend + static serving

• Modified `server.py`:  
  – Added route `@app.route('/<path:path>')` with fallback to `index.html` via `send_from_directory()` to serve frontend assets through Flask

• Modified `.devcontainer/devcontainer.json`:  
  – Replaced `postCreateCommand` to install requirements and start Flask server  
  – Added forwarding for port 5000 only  
  – Ensured persistent sourcing of `scripts/dev.sh` in `.bashrc`

• Added `requirements.txt`:  
  – Declared `flask` and `flask-cors` for backend dependencies

• Modified `index.html`:  
  – Refactored `<main>` layout to two-column split with `#editor-section` and `#output-section`  
  – Moved `#save-button` above the `#editor`  
  – Moved `#copy-button` above `#prompt-content`  
  – Added section headers for both panels

• Modified `style.css`:  
  – Replaced vertical `main` layout with horizontal flexbox layout for editor/output  
  – Added styling for `#editor-section`, `#output-section`, `#save-button`, and `#copy-button`  
  – Adjusted flex sizing and height handling for scrollable panels

• Modified `script.js`:  
  – Updated `loadPromptList()` to use `/api/files?folder=prompts` instead of raw directory HTML  
  – Replaced `fetch(PROMPTS_DIR)` parsing logic with JSON-based response  
  – Moved `document.getElementById('prompt-content').textContent = resolved` into prompt click handler  
  – Added `window._resolvedPromptText` assignment for copy reuse  
  – Updated `copyToClipboard()` to read from `window._resolvedPromptText` and remove DOM writing  
  – Updated `showToast(message)` to accept custom text  
  – Updated `saveEditedFile()` to use `showToast('Saved!')` instead of default message  
  – Updated `window.onload` to bind copy button with the new logic and reset prompt display correctly