I want to code an app that helps me organise my files and make prompts to AI.

The app includes lots of online data that I want to stay synced with the cloud. No local environments, you log in and thats it.

The app works in tabs. There is a main panel with a sidebar and a horizontal bar at the top that displays the tabs for selection.

You can select items from the sidebar and they will open as a new tab in the main panel and appear in the tab bar. Sidebar includes different tabs that can be toggled between:
    - Files. TXT and MD. Includes folders.
    - EPUB books - With attached highlights, sections/chunks and preset selections.
    - Chats - json sequences
    - Mail - API inboxes.

The app is basically a tool to mix and match all of these sources as context for prompts that you give to AI. 


FILES
When you open a file it appears in the main panel as an INLINE EDITOR. That is when you change stuff and click out of it, it saves the changes. At the top of the file there are buttons for 1) copy 2) view 3) create new chat. These are all executions and require the file to be processed prior to execution. The copy button will copy the whole text file plus substitution (to be explained later) to the clipboard through the browser. The view buttons will take the content of the file and process it in a certain way (depending on which view you choose) and then it will display it according to that view.
  
This tab includes a lot of functions, like new file or folder, rename, delete. Also includes functions that will split, merge and reorganise more complex or long-form files. For example there may be a simple prompt to split the selected file into two equal parts.

LINKS
Files can have links to other files that are substituted whenever you execute it (by copying or exporting or viewing etc). Links are in [] brackets and include the file path and name of the text file it is linking to. Links can also go to books, chats and mail, but the links are interpreted and executed differently. For text file links, on execute the system just substitutes the link inside the brackets with the content of the linked text file. The links are recursive, that is links within links all substitute on execute. You can also include numbers in the brackets, in which case on execute it will request for a file before executing anything.

BOOKS
In EPUB form. Books include:
  - the EPUB file itself
  - Highlights: a file which includes extracted quotes from the book
  - Sections/chunks: data about how it is split up. 
  - Selection presets: selections of little snippets that are saved and then can be used again as links.

Links can include just the epub, in which case on execute the system will show a pop-up that prompts you to select chunks, a preset, or the highlights file. When you select chunks, you can turn it into a preset. Otherwise you can always embed the selection within the link that you include.

MAIL
Linked from Gmail or Outlook. Allows you to scroll and look through your inbox. You can make links to the inbox in a bunch of ways through files. Ways include: 
    - Select a timeframe and it will extract all of the content of the mail within that timeframe
    - Select a sender and it will extract all of the content from that recipient at once.
  
Similarly to books, links to mail can inlcude these details in the links, otherwise it will prompt you for more specific information about waht you're linking.

CHATS
This is how you interact with the AI. It is done through ChatGPT completions API. You can begin a chat by starting a new one from the sidebar. Or you can start one by selecting the option within a file to create a new chat with the processed file as the first message. You can link to files by making the same bracket links that are within the files and when you send the prompt it will substitute.