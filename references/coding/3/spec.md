The app is a cloud-based login-only app for organising content and interacting with AI. The idea is you consolidate all the information and content you need from life into markdown files called Cells. Then you can use these cells as units of context, and you can tailor the context in your interactions with AI. 

So the app functions as:
1) a file manager where you can manage, create and delete Cells.
2) An engine to convert complex formats (pdf, epub, etc) into Cells.
3) A chat UI where you can have chat sessions with AI and the ability to dynamically link cells to the chat context.

**UI**

**Tabs** - The UI is tabbed. It includes a sidebar, top tab bar and a main panel. 
**Sidebar** - The sidebar can be toggled in various views, the default being the cell view. Other views will be for books, mail and pdf processing which will come later. The cell view shows a folder file tree of the cells. Cells can be created, renamed, deleted and they can be dragged and dropped to be moved around between folders and the root. 
**Cells** - When you open a cell it appears as a new tab in the top tab bar. Whichever tab you select in the tab bar shows in the main panel. The main panel should show a scrolling live preview mode that blends editing and reading mode. While editing a line, raw Markdown syntax (e.g., **bold**, # heading) is shown. When you move the cursor away, the line **renders** automatically. It’s powered by a **Markdown parser with real-time DOM updates**, managing both syntax highlighting and rendered output inline.

**Cell Links**

Cells can include links to other cells (eg [path/to/cellname]). These links are dynamically substituted whenever the cell is used. By default they show just as the linked paths. If you click on them, the link will be substituted with the actual cell content and shown as a nested box within the file preview where the link was, almost like an embed. You can then edit the cell from this embedded view even without opening the cell as a new tab.

**File handling**

All edits are saved in real time and system wide, you don't need to refresh the page to have changes update. The cells are managed within the repository itself in a data/cells directory. The folders and files are all stored here and are dynamically pulled and updated by the system.
