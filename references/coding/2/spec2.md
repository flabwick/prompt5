# SPEC

**Overview**
The app is a cloud-based login-only app for organising content and interacting with AI. content in the form of markdown, epub, pdf. It can also be linked to API's like emails which come in as markdown. Markdown files are called Cells in the app. 

Epub and PDF files and anything that is imported will all go through their own unique processes of being converted into Cells. Chats are interactions with AI that use cells as context.

**UI**

Tabbed interface. Main panel displays open tabs. Sidebar allows you to select cells and files to open. The sidebar can be toggled between different menus for Cells, epub files, pdf files, chats and mail. There is a top tab bar above the main panel that you can switch between, reorder and close.

**Cells**

The cells toggle panel on the sidebar shows as a folder-supported file explorer. It supports drag and drop, creation of new cells and new folders renaming and deleting.

When you open a cell from the proper toggled sidebar menu it appears as a new tab in the interface and shows in the main panel. You can edit the markdown here. At the top of the main panel here, unique to just cells when you have them open, there are a few buttons titled 1) 'copy' 2) 'view' 3) 'new chat'. Just leave these as placeholders for now.

Within the cells there can be links to other cells (eg [path/to/cellname]). These links are dynamically substituted whenever the cell is used. In the main panel they are not substituted, but whenever you link the cell in a chat or something similar, it will substitute the links with the content of the linked cells. The substitution logic is recursive, linked files can contain links and so on.

**EPUB Books**

Epub books appear in the `books` tab from the sidebar. The panel is very similar to the cells panel, showing as a file explorer with folders and books. You cannot create a new book from here, but you can upload them. 

Each book in the system can have cells which are kind of linked to them. When you open the book, it first shows a checkbox list of all of the html/htmlx snippets extracted from the epub file in the main panel. At the top of the panel, where the other buttons for the cells were, is a button called 'create cell'. This button will create a new cell that is linked underneath that book. This cell can then be linked and used just like any other cell and appears in a /bookcells folder in the cells sidebar menu.

**PDF**

PDFs appear in the `PDF` tab from the sidebar. The panel is very similar to the cells panel, showing as a file explorer with folders and books. You cannot create a new book from here, but you can upload them. 

Each PDF in the system can have cells which are kind of linked to them. When you open a pdf, it shows as a pdf viewer in the main panel. At the top is a button that says "convert to cell". When you click this, it will convert the PDF into a markdown cell with very particular parameters. The idea is to try and avoid images from appearing as unformatted text in the conversion. It's quite a complex process actually, here's how it works.
    1) All the text is extracted from the PDF and converted to markdown.
    2) The markdown extraction is sent to AI and a response is given which identifies the sections which are likely to be unformatted graphs or figures.
    3) Then the system parses the response and replaces the unformatted text with markdown links to images.
    4) Then the system will prompt you to upload images to use as these links. When you upload them, the images will then become a part of the cell's data. The links in the cell will be rendered when needed in the chats later.

**API and Mail**

To be added later. Just put a placeholder for now.


**Chats**

Chats is a chat UI with ChatGPT API. You can type in messages and receive responses. All of the messages and interactions with ChatGPT are done in markdown form, but they render in the chat as HTML.

The sidebar just shows a chronological list of all the chats. you can start a new one or continue an old one.

# PLAN
**Big Picture**

This module outlines the full implementation plan for the first version of the app, covering file structure, core logic, UI structure, and internal behaviors as described in the Spec. The app is a login-only, cloud-based content management interface with markdown ("Cell") editing, EPUB and PDF processing, and ChatGPT integration for context-aware chats. The entire project will be built using raw HTML, CSS, and JavaScript—no frameworks, packages, or builds. All functionality must be achieved via native browser APIs and minimal, copy-pastable code.

---

**Implementation Checklist**

**1. Root Folder Structure**

```
/project-root
  /index.html
  /main.js
  /styles.css
  /assets/
  /data/
    /cells/
    /pdfs/
    /books/
    /chats/
  /templates/
```

---

**2. HTML (UI Shell)**

* **File:** `index.html`
* **Purpose:** Bootstrap and structure layout
* **Contents:**

  * Sidebar panel with toggle tabs: **Cells**, **Books**, **PDFs**, **Chats**, **Mail (placeholder)**
  * Top tab bar for open tabs
  * Main panel for displaying tab content
  * Floating buttons in context-specific panels (e.g., 'copy', 'view', 'new chat' for Cells)

---

**3. CSS**

* **File:** `styles.css`
* **Purpose:** Minimal styling for layout, toggles, tabs, markdown viewer/editor, PDF viewer
* **Features:**

  * Responsive tabbed interface
  * Collapsible sidebar
  * Markdown rendering styles
  * Button and input styling

---

**4. JavaScript Logic**

* **File:** `main.js`

**Core Modules inside `main.js`:**

1. **Router/Tab Manager**

   * Manage open tabs, switching, reordering, and closing
   * Tab IDs should link to types: cells, books, pdfs, chats

2. **Sidebar Toggle Manager**

   * Toggles visibility of different menus (Cells, Books, PDFs, Chats)
   * Loads file tree from `/data/*` into sidebar panel dynamically

3. **Cells Manager**

   * Load markdown cells from `/data/cells/`
   * Render editable markdown editor in main panel
   * Placeholder buttons: `'copy'`, `'view'`, `'new chat'`
   * Recognize `[path/to/cellname]` and substitute recursively only when used in chat context

4. **Markdown Link Substitution**

   * Detect and replace cell references with actual cell content
   * Recursive substitution logic

5. **Books Manager (EPUB)**

   * Load EPUB list from `/data/books/`
   * Display list of parsed snippets with checkboxes
   * On "create cell" button click, create new markdown cell in `/data/cells/bookcells/`

6. **PDF Manager**

   * Load PDFs from `/data/pdfs/`
   * Show PDF in viewer (native `object/embed` tag)
   * Button: `convert to cell`

     * Simulate text extraction (dummy logic or textarea)
     * Send text to AI (mock function)
     * Identify unformatted images, replace with `![image](img_link)`
     * Prompt file uploads for image insertion

7. **Chats Manager**

   * List of chats from `/data/chats/`
   * Markdown input/output UI
   * Use `fetch` to send prompt (with substituted Cells) to ChatGPT API
   * Render markdown responses as HTML

8. **Storage**

   * Use `localStorage` or `IndexedDB` to simulate read/write for:

     * Cells
     * PDFs
     * EPUBs
     * Chats

9. **Uploader Utility**

   * Upload EPUB, PDF, images
   * Save to `/data/` folders as JSON or blob references

10. **Markdown Renderer**

    * Simple JS-based markdown-to-HTML converter
    * Support links, headers, inline code, images, etc.

---

**5. Data Format**

* **Markdown Cells:** `/data/cells/filename.md`
* **Linked Cells (Books):** `/data/cells/bookcells/bookname_section.md`
* **PDFs/Books:** Saved as metadata in `/data/books.json` and `/data/pdfs.json`
* **Chats:** Each chat is a JSON file with message array

---

**6. Placeholder and Stubs**

* **Email/API Tab:** Placeholder with dummy message: *Coming Soon*
* **AI Processing (PDF):** Mock function to simulate AI identifying unformatted areas
* **ChatGPT API:** Dummy endpoint and mock responses initially; structure designed for easy integration later

---

**Module Connections**

* Tabs are routed through a global state object (`openTabs`)
* Each tab links to a specific manager (cells, pdf, book, chat)
* Sidebar lists dynamically read from `/data/`
* Every interaction in the main panel is tied to the current active tab's type and ID
* Internal logic (like link substitution or cell editing) flows through content managers in `main.js`

Would you like a visual layout wireframe to accompany this plan?



