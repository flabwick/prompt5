import os

folder = input("Enter folder path: ").strip().strip("'\"")

if not os.path.isdir(folder):
    print("Invalid folder path.")
    exit()

for filename in os.listdir(folder):
    if filename.endswith(".txt"):
        txt_path = os.path.join(folder, filename)
        md_path = os.path.join(folder, filename.rsplit(".", 1)[0] + ".md")
        with open(txt_path, 'r', encoding='utf-8') as txt_file:
            content = txt_file.read()
        with open(md_path, 'w', encoding='utf-8') as md_file:
            md_file.write(content)
        os.remove(txt_path)

