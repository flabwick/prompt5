import os
from datetime import datetime

# Get folder path input and sanitize it
folder_path = input("Enter the folder path: ").strip().strip("'\"")
folder_path = os.path.abspath(folder_path)

# Get source markdown file to paste into content.md
source_md_path = input("Enter the path to the markdown file to insert into content.md: ").strip().strip("'\"")
source_md_path = os.path.abspath(source_md_path)

# Ensure the folder exists
os.makedirs(folder_path, exist_ok=True)

# Read content from source markdown file
with open(source_md_path, 'r', encoding='utf-8') as f:
    source_content = f.read()

# Create markdown files in the folder
main_files = {
    "content.md": source_content,
    "log.md": "",  # Will be updated below
    "report.md": "EMPTY",
    "visuals.md": "EMPTY",
    "session.md": "EMPTY"
}

for file, content in main_files.items():
    with open(os.path.join(folder_path, file), 'w', encoding='utf-8') as f:
        f.write(content)

# Create logs/ and visuals/ directories
logs_dir = os.path.join(folder_path, "logs")
visuals_dir = os.path.join(folder_path, "visuals")
os.makedirs(logs_dir, exist_ok=True)
os.makedirs(visuals_dir, exist_ok=True)

# Create today's date markdown in logs/ with EMPTY
today_str = datetime.today().strftime("%d-%m")
log_file_path = os.path.join(logs_dir, f"{today_str}.md")
with open(log_file_path, 'w', encoding='utf-8') as f:
    f.write("EMPTY")

# Calculate relative log link path, excluding 'references/'
rel_path = os.path.relpath(log_file_path, start="/workspaces/prompt5/references")
rel_link = os.path.splitext(rel_path)[0]

# Write to log.md
log_md_path = os.path.join(folder_path, "log.md")
with open(log_md_path, 'w', encoding='utf-8') as f:
    f.write(f"# {today_str}\n[{rel_link}]")
