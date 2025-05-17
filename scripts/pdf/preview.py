#!/usr/bin/env python3
import os
import sys
import re

try:
    import markdown
except ImportError:
    print("The 'markdown' package is required. Install with 'pip install markdown'")
    sys.exit(1)

try:
    from bs4 import BeautifulSoup, Comment
except ImportError:
    print("The 'beautifulsoup4' package is required. Install with 'pip install beautifulsoup4'")
    sys.exit(1)

def main():
    # Path to the preview HTML file in the repo root
    preview_path = '/workspaces/prompt5/preview.html'

    # Ask for the markdown file path
    md_path = input("Enter the path to the markdown file: ").strip()
    # Remove surrounding single or double quotes if present
    if (md_path.startswith("'") and md_path.endswith("'")) or (md_path.startswith('"') and md_path.endswith('"')):
        md_path = md_path[1:-1].strip()
    if not md_path or not os.path.isfile(md_path):
        print(f"Markdown file not found: {md_path}")
        sys.exit(1)

    # Compute directories for relative linking
    md_abs = os.path.abspath(md_path)
    markdown_dir = os.path.dirname(md_abs)
    root_dir = os.path.dirname(preview_path)
    relative_dir = os.path.relpath(markdown_dir, root_dir)
    if relative_dir == '.':
        relative_dir = ''

    # Read and convert markdown to HTML
    with open(md_abs, 'r', encoding='utf-8') as f:
        md_text = f.read()
    html_body = markdown.markdown(md_text, extensions=['extra'])

    soup = BeautifulSoup(html_body, 'html.parser')
    image_exts = ('.png', '.jpg', '.jpeg', '.gif', '.svg', '.bmp')

    # Convert <a href="..."> to <img> if it's an image, preserving paths
    for a in soup.find_all('a'):
        href = a.get('href', '')
        if href and not re.match(r'^(?:[a-z]+:|/)', href) and href.lower().endswith(image_exts):
            new_href = os.path.join(relative_dir, href) if relative_dir else href
            new_href = new_href.replace(os.sep, '/')
            alt_text = a.get_text(strip=True)
            img_tag = soup.new_tag('img', src=new_href, alt=alt_text)
            a.replace_with(img_tag)
        elif href and href.lower().endswith(image_exts):
            alt_text = a.get_text(strip=True)
            img_tag = soup.new_tag('img', src=href, alt=alt_text)
            a.replace_with(img_tag)
        else:
            # Adjust non-image links as before
            if href and not re.match(r'^(?:[a-z]+:|/)', href) and href.lower().endswith(image_exts):
                new_href = os.path.join(relative_dir, href) if relative_dir else href
                a['href'] = new_href.replace(os.sep, '/')

    # Adjust <img> src for all images under the markdown directory
    for img in soup.find_all('img'):
        src = img.get('src', '')
        if re.match(r'^(?:[a-z]+:|/)', src):
            continue
        new_src = os.path.join(relative_dir, src) if relative_dir else src
        img['src'] = new_src.replace(os.sep, '/')

    # Strip annotation comments
    for comment in soup.find_all(string=lambda t: isinstance(t, Comment)):
        if comment.strip().startswith('annotation:'):
            comment.extract()

    new_inner_html = str(soup)

    # Full HTML template with CSS link and injected body
    html_template = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Empty Page</title>
  <link rel="stylesheet" href="preview.css">
</head>
<body>
{new_inner_html}
</body>
</html>
"""

    os.makedirs(os.path.dirname(preview_path), exist_ok=True)
    with open(preview_path, 'w', encoding='utf-8') as f:
        f.write(html_template)

    print("preview.html has been updated.")

if __name__ == '__main__':
    main()
