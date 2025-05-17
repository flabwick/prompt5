import os
import shutil

def clean_path(path):
    # Remove quotes if the user includes them
    return path.strip().strip('"').strip("'")

def split_file(filepath):
    filepath = clean_path(filepath)

    if not os.path.isfile(filepath):
        print(f"Error: File '{filepath}' does not exist.")
        return

    folder_name, ext = os.path.splitext(os.path.basename(filepath))
    folder_path = os.path.join(os.path.dirname(filepath), folder_name)

    # Create the new folder
    os.makedirs(folder_path, exist_ok=True)

    # Copy the original file into the new folder
    shutil.copy(filepath, os.path.join(folder_path, f"{folder_name}{ext}"))

    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    total_lines = len(lines)
    midpoint = total_lines // 2

    output1 = os.path.join(folder_path, f"{folder_name}-1{ext}")
    output2 = os.path.join(folder_path, f"{folder_name}-2{ext}")

    with open(output1, 'w', encoding='utf-8') as f1:
        f1.writelines(lines[:midpoint])

    with open(output2, 'w', encoding='utf-8') as f2:
        f2.writelines(lines[midpoint:])

    print(f"Successfully created folder '{folder_path}' with '{folder_name}{ext}', '{folder_name}-1{ext}', and '{folder_name}-2{ext}'.")

if __name__ == "__main__":
    filepath = input("Enter the path to the markdown file: ")
    split_file(filepath)