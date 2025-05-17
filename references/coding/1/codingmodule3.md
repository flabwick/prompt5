# MODULE 3
In the next module I want you to add the copy button on the top of the main panel for files. Do all the logic to substitute the links and everything too.

# PLAN
**Structured Checklist for MODULE 3: Add "Copy" Button for Files in Main Panel**

**Files to Update:**
- `/index.html`
- `/style.css`
- `/script.js`
- `/server.js` (optional, if needed for new endpoints, but ideally not)

---

**In `/index.html`:**
- **Inside `#main-panel` tabs structure:**
  - Above `.tab-content` when the content is a file (not a chat), add:
    - `<button id="copy-button" class="file-copy-button">Copy</button>`

**In `/style.css`:**
- **Add style for `#copy-button` or `.file-copy-button`:**
  - Position: top-right of `.tab-content`
  - Padding, small background color (e.g., light gray), border-radius
  - Hover effect to slightly darken

---

**In `/script.js`:**

- **New function:**
  - `setupCopyButton()`
    - Called inside `initializeLayout()`
    - Adds click event listener to `#copy-button`
    - Runs `copyFileContentWithLinksSubstituted()`

- **New function:**
  - `copyFileContentWithLinksSubstituted()`
    - Only runs if the active tab is a file.
    - Steps:
      1. Read current `currentFileLines` array (which holds the file lines).
      2. Join lines into a full markdown text string.
      3. Parse the markdown looking for link-like syntax `[some text]`.
      4. For each detected link:
         - Extract file path inside brackets.
         - Load the corresponding file content **synchronously** using `fetch('/data/' + path)` (no async/await, just chained `.then`).
         - Replace the bracketed text `[some text]` with the **raw content** of that file (not markdown parsed, just the file’s text).
      5. After all substitutions:
         - Copy the final substituted text to clipboard using:
           - `navigator.clipboard.writeText(finalText);`
      6. Optional: Display a brief "Copied!" message near button.

- **Helper function:**
  - `findLinksInMarkdown(text)`
    - Returns an array of detected link paths.

- **Helper function:**
  - `substituteLinks(text, linkReplacements)`
    - Given text and a dictionary `{ linkText: replacementText }`, replaces all links with their content.

- **Modify `openFileTab()` function:**
  - When opening a file tab:
    - Ensure `#copy-button` is made visible.
  - When opening a chat tab:
    - Ensure `#copy-button` is hidden.

---

**In `/server.js` (optional, not mandatory but fallback):**
- **Nothing if loading files via frontend fetch.**
- If needed, create a fallback `/load` endpoint:
  - Accepts `?path=/data/xxx.md`
  - Responds with raw file content.

---

**New Functions Summary:**
- `setupCopyButton()`
- `copyFileContentWithLinksSubstituted()`
- `findLinksInMarkdown(text)`
- `substituteLinks(text, linkReplacements)`

**New UI Elements:**
- Button: `#copy-button` (only shown when a file is active)

**Interactions:**
- Clicking Copy:
  - Reads open file
  - Finds bracketed links
  - Fetches contents
  - Substitutes inline
  - Copies final text to clipboard

ALSO add a red error toast thingy that notes when a link doesn't work with the substitution like the file isn't found or the file is empty.