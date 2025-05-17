1 remove prompts and reference difference.
2 allow API requests and chat UI.
3 add dsl language and rendering. This includes calendar views for things. Maybe have this for documents. Some of the cells can be viewed with a certain prompt.

Prompts and reference. Instead of this you just have cells or whatever and they all have links to other ones. When you export it or send it maybe then it's added to a clipboard and you can go in between chats to interact. There could be a separate setting that deals with the depth of it.

Docs have gemini-style editing capabilities. Maybe within a thread sort of deal again.

Add a more comprehensive file manager.
- Drag and drop. Creating folders, changing files & renaming them.
- Processing EPUB books, PDFs, txt files.
- Splitting and merging bits and pieces (creating subnotes and stuff)
- Link view and file tree view. Link view has backlinks and stuff.
- Link to emails and that.
- Extracting image data within cells. Instead of extracting the image and transfering it each time we just add links and make the links whenever it seems to be like that. Then they can be used.
- Vision software. Allows you to upload them and that using the API services.
- Tagging? Maybe some natural language tags or searching like that.
- Highlight and extract/append.

Much better looking view of things.

Templating

Cloudsync.

4 Website support and sign in.


# Spec2

I want a website that you can log into and access an application with your own unique files and data entirely on the cloud. 

The UI is a tab-based interface. Tabs each include a **file** or **chat**. There is a sidebar that includes a toggle selection 1) files 2) 

When you open a file it opens as a new tab in the main panel. Tabs can be reordered and split screened.



## CHAT UI
The chat UI works in blocks. Programmed by the system as json.

Compact block language

A minimal-token format for structured long-form chats. Designed for easy parsing, cheap token usage, flexible insertions.

Basics:
	•	Each block starts with # followed by:
	•	u = user
	•	a = AI
	•	Then a unique numeric ID (e.g., #u1, #a2).
	•	Inside a block:
	•	:c starts the content (the message). Content sections can include types denoted immediately after by @type.
	•	:r starts the response (the reply).
	•	Block ends with ---.

AI can generate new blocks. The full chat history is sent as context and the AI is asked to generate a new block(s) to add to a certain place in the feed. So the AI will respond with the content of a new block with a specific type and a note to direct where the new block should be inserted.
	•	[>id+] → Insert after block id
	•	[>id-] → Insert before block id
	•	[>id=] → Replace block id
	•	[>end] → Insert at the end