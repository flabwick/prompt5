#!/usr/bin/env python3

import os
import sys
import shutil
import subprocess


def main():
    # Prompt for PDF file path, strip whitespace and optional quotes
    raw_input = input("Enter PDF file path (relative or full, quotes optional): ")
    pdf_path = raw_input.strip().strip('\'\"')

    # Validate existence
    if not os.path.isfile(pdf_path):
        print(f"File not found: {pdf_path}")
        sys.exit(1)

    # Derive base name and root name
    base_name = os.path.basename(pdf_path)
    name_root, ext = os.path.splitext(base_name)
    if ext.lower() != '.pdf':
        print("Warning: selected file does not have a .pdf extension")

    # Create output directory next to PDF or in current dir
    parent_dir = os.path.dirname(pdf_path) or '.'
    output_dir = os.path.join(parent_dir, name_root)
    os.makedirs(output_dir, exist_ok=True)

    # Move original PDF into new folder (not copy)
    dest_pdf = os.path.join(output_dir, base_name)
    shutil.move(pdf_path, dest_pdf)

    # Define markdown output path
    md_path = os.path.join(output_dir, f"{name_root}.md")

    # If pdftotext is available, use it to extract with layout
    if shutil.which('pdftotext'):
        try:
            txt_path = os.path.join(output_dir, f"{name_root}.txt")
            subprocess.run(['pdftotext', '-layout', dest_pdf, txt_path], check=True)
            # rename .txt to .md
            os.replace(txt_path, md_path)
            print(f"Converted PDF to markdown via pdftotext: {md_path}")
            return
        except subprocess.CalledProcessError:
            print("pdftotext conversion failed. Falling back to pdfminer.")

    # Fallback: extract text with pdfminer if installed
    try:
        from pdfminer.high_level import extract_text
        print("Extracting text with pdfminer (formatting limited)...")
        text = extract_text(dest_pdf)
        with open(md_path, 'w', encoding='utf-8') as f:
            f.write(text)
        print(f"Extracted text to markdown file: {md_path}")
        return
    except ImportError:
        pass

    # All methods failed
    print("All conversion methods failed.\n"
          "Install poppler-utils for pdftotext, or pdfminer.six (`pip install pdfminer.six`).")
    sys.exit(1)


if __name__ == "__main__":
    main()
