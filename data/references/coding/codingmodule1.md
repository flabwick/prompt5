I want you to make this so that the references are substituted in cycles. For instance, If I have a prompt which references a document and that document also references other documents, the system should put a fully resolved output in the output box. Ideally this should work for as many cycles necessary in the system.


# PLAN

📁 Directory & File Architecture Checklist (Recursive Reference Resolution Edition)

Root Directory:
	•	index.html
	•	style.css
	•	script.js
	•	/prompts/
	•	/references/
	•	/.devcontainer/devcontainer.json
	•	server.py (Flask static server)
	•	requirements.txt
	•	/scripts/dev.sh

⸻

📄 index.html
	•	<ul id="prompt-list"> – list of prompt titles
	•	<div id="prompt-content"> – output box for fully resolved prompt
	•	<button id="copy-button"> – copies current output
	•	<div id="toast"> – toast notification

⸻

🎨 style.css
	•	Flex layout for prompt list and output view
	•	Scrollable panels
	•	Button styling
	•	Toast styling

⸻

🧠 script.js

Constants:
	•	const PROMPTS_DIR = 'prompts/'
	•	const REFERENCES_DIR = 'references/'

Functions:
	•	loadPromptList()
	•	Fetch list of prompt filenames from backend API
	•	Sort and render into #prompt-list
	•	handlePromptClick(filename)
	•	Load prompt content
	•	Recursively resolve references
	•	Render resolved text to #prompt-content
	•	Set window._resolvedPromptText for clipboard

🔁 Core Recursion Functions:
	•	fetchMarkdown(path: string): Promise<string>
	•	Fetch markdown content with { cache: 'no-store' }
	•	extractReferences(content: string): string[]
	•	Parse [refName] style references from content
	•	async resolveReferencesRecursive(content: string, visited: Set<string> = new Set()): Promise<string>
	•	Extract references
	•	For each ref:
	•	Skip if already visited (cycle prevention)
	•	Fetch and recursively resolve its content
	•	Replace [ref] with [resolved content]
	•	Return resolved content

UI:
	•	displayPromptContent(content: string)
	•	copyToClipboard(text: string)
	•	showToast(message: string)

Events:
	•	On load → loadPromptList()
	•	On prompt title click → handlePromptClick(filename)
	•	On copy click → copyToClipboard(window._resolvedPromptText)

⸻

⚙️ Backend: /server.py
	•	Route /api/files?folder=prompts → JSON list of .md files in folder
	•	Route /api/files?folder=references → same for references
	•	Route /prompts/<filename> → returns raw prompt file
	•	Route /references/<filename> → returns raw reference file
	•	Static fallback for frontend assets

⸻

🛠 Devcontainer: .devcontainer/devcontainer.json
	•	Install Flask + CORS
	•	Start python3 server.py
	•	Forward port 5000

⸻

📜 /scripts/dev.sh
	•	startserver → starts Flask server
	•	stopserver → stops Flask server

⸻

📦 requirements.txt
	•	flask
	•	flask-cors

⸻

📂 /prompts/ and /references/
	•	Plain .md files only
	•	Content may recursively link to other references

⸻

Let me know if you want to support reference aliases, embedded formatting, or link previews.