In this module you will add the following functionality

1) make it so the chat input textbox doesn't show unless you open a chat. the chats should be stored in history and when you click on one in the sidebar it should appear. Clicking a cell arrow when a chat isn't selected should show a toast error.

2) Link substitution. When I send a chat, sometimes there will be links which are just the file path of a cell within square brackets. When the message is sent in the chat, the links should be substituted with the content of the cells they are linking to. This should be done behind the scenes, when it will be sent to AI it will substitute the links, but the UI should keep the links as they are visibly. The user should see the links but behind the scenes the links are replaced when sending to chatgpt API.
3) 
4) Within cells there are links which is just the file path of a different cell within square brackets. When the cell is copied into the chat UI, it should dynamically substitute the links with the content of the cells it is linking to still in the square brackets. This process should be recursive, allowing for substitution in infinitely nested links within links. If the file is not found or empty, write the link and a little error message that says the file name and whether its empty or not found.

5) the Textbox input should wrap text down.

