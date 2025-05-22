I want to create an AI chat ui.

SYSTEM
- Will have a cells/ folder inside the repo which will include the folder structure filepaths of the cells and all the markdown files.

SIDEBAR
- Togglable between two states, 1) cells and 2) chats.
- Cells: Includes search bar where you can search for files from the "cells/" folder. This contains markdown files which you can select, each possibly within their own nested folders within the cells folder. The result when you search will include the entire file path in the list that comes of it. You can search and scroll looking through the list of filenames. Each result will have a little arrow button next to it which you can select and it will copy the full content of the cell to the input textbox in the chat UI in the main panel
- Chats: allows you to open chats in the main panel. The sidebar is just a chronological list of the most recent chats and a button at the top to start a new one. Chats are stored in memory, you can open old ones. 

CHAT UI
- Features a text input box at the bottom with a send button.
- Sending something will send as a user input. Then the chat history will be sent to AI and a new response will STREAM into the UI. That is written gradually not waiting until the entire response is finished to add it to the chat.

There should also be comprehensive STYLES that can be changed and edited dynamically. Optimise for this later.
