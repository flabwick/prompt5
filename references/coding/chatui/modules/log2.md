**CHANGELOG**

---

**`src/chat/input/init.js`**
*Added.* Initializes the chat input UI into the DOM container.

* Creates a `div` wrapper (`#chat-input-inner`) with a `textarea` and send button.
* Sets initial `display: none`.
* Imports and calls:

  * `enableTextWrap()` from `wrapText.js`
  * `attachInputEvents()` from `events.js`
  * `toggleInputVisibility()` from `toggle.js`

**`src/chat/input/toggle.js`**
*Added.* Manages visibility of the input box based on chat selection.

* Calls `subscribe()` to the global store.
* On change, shows/hides `#chat-input-inner` depending on `state.activeChatId`.

**Note**: This file currently fails at runtime due to importing `subscribe` from `../../store/index.js` which does not export it.

**`src/chat/input/wrapText.js`**
*Added.* Sets `white-space: pre-wrap` and `overflow-wrap: break-word` on the `textarea`.

* Ensures long text does not overflow horizontally and wraps correctly.

**`src/chat/input/events.js`**
*Added.*

* Sets up click event for the Send button.
* On send:

  * Calls `substituteLinksInMessage()` to replace `[file.md]` links before streaming.
  * Appends user message with original content, appends empty AI message, and initiates `streamAIResponse()` with substituted text.
* Also defines `insertIntoInput()` to inject cell content into the `textarea`.

**`src/chat/utils/linkSubstitute.js`**
*Added.*

* Performs inline substitution of `[filename.md]` links in user messages.
* Uses `getFileContent()` to fetch file content.
* Returns the modified string while preserving UI display of links.

**`src/sidebar/cells/events.js`**
*Added.*

* Defines `handleArrowClick(path)` for use by arrow buttons in Cells view.
* Checks if `activeChatId` exists; if not, displays toast.
* If chat is active:

  * Fetches cell content with `getFileContent()`
  * Calls `resolveLinksRecursively()` for nested substitutions
  * Calls `insertIntoInput()` to inject final content into input

**`src/utils/toast.js`**
*Added.*

* Defines `showToast(msg)` utility function.
* Renders a floating message at the bottom-left of the screen for 3s.

**`src/utils/linkResolver.js`**
*Added.*

* Defines `resolveLinksRecursively(content, seen)`
* Recursively replaces `[filename.md]` within cell content using `getFileContent()`
* Prevents infinite loops via a `Set` of seen paths
* Substitutes missing files with an inline error message

**`src/api/cells.js`**
*Added.*

* Defines `getFileContent(path)` to fetch markdown content from `/api/cell?path=...`
* Defines `searchCells(query)` to fetch filtered cell list from `/api/cells?search=...`

**`tests/test_module1.js`**
*Added.*

* Unit test runner script to verify:

  * File fetch (`getFileContent`)
  * Missing file handling
  * Cell search results
  * User message link substitution (`substituteLinksInMessage`)
  * Recursive link resolution (`resolveLinksRecursively`)
* Logs test pass/fail and uses `console.assert()` for validation.

---

**Existing Files – Integration Points**

* `sidebar/cells/init.js`: Expected to integrate `handleArrowClick(path)` for arrow clicks.
* `store/index.js`: Assumed to export `getState()` but not `subscribe()`, causing runtime failure in `toggle.js`.
* `chat/main/stream.js`: Assumed to already export `streamAIResponse(content)`, called by `input/events.js`.

---

**PROGRESS OVERVIEW**


