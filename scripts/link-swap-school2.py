import os

def sanitize_input_path(input_path):
    return os.path.normpath(input_path.strip('\'"'))

def get_relative_path(path, marker="school"):
    parts = path.split(os.sep)
    if marker in parts:
        return os.path.join(*parts[parts.index(marker):])
    return path

def overwrite_with_link(file_path, new_relative_base, filename):
    link = f"[{os.path.join(new_relative_base, os.path.splitext(filename)[0])}]"
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(link + "\n")

def main():
    source_folder = input("Enter the path to the source folder: ")
    source_folder = sanitize_input_path(source_folder)

    target_folder = os.path.join("references", "substitutes", "school2")
    filenames = ["content.md", "log.md", "report.md", "visuals.md", "session.md"]

    relative_base = get_relative_path(source_folder)

    for fname in filenames:
        target_file_path = os.path.join(target_folder, fname)
        overwrite_with_link(target_file_path, relative_base, fname)

if __name__ == "__main__":
    main()
