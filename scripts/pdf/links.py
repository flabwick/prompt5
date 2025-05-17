#!/usr/bin/env python3
import re
import os
import sys

def load_config(config_path):
    """
    Reads replacements.txt and returns a list of dicts:
    [{ 'tag': 'TABLE 1.1',
       'start': 'TABLE 1.1 Selected Observations',
       'end':   'Note: The California test score' }, ...]
    """
    text = open(config_path, 'r', encoding='utf-8').read()
    pattern = re.compile(
        r"\[([^\]]+)\].*?---BOUNDS---\s*START:\s*(.*?)\s*END:\s*(.*?)\s*---END---",
        re.DOTALL
    )
    entries = []
    for m in pattern.finditer(text):
        entries.append({
            'tag':   m.group(1).strip(),
            'start': m.group(2).strip(),
            'end':   m.group(3).strip()
        })
    return entries

def build_fuzzy_regex(phrase):
    """
    Turns a user phrase like "TABLE 1.1 Selected Observations"
    into a regex that matches those words in order, allowing any whitespace.
    """
    tokens = phrase.split()
    escaped = [re.escape(tok) for tok in tokens]
    # allow any whitespace (spaces, newlines) between tokens
    return r'\s+'.join(escaped)

def main():
    config_path = "/workspaces/prompt5/scripts/pdf/replacements.txt"
    if not os.path.isfile(config_path):
        print(f"Error: '{config_path}' not found.")
        sys.exit(1)

    replacements = load_config(config_path)
    if not replacements:
        print("Error: No valid entries found in replacements.txt.")
        sys.exit(1)

    md_path = input("Enter the path to the .md file: ").strip()
    # Remove surrounding quotes if present
    if (md_path.startswith("'") and md_path.endswith("'")) or (md_path.startswith('"') and md_path.endswith('"')):
        md_path = md_path[1:-1].strip()
    if not os.path.isfile(md_path):
        print(f"Error: '{md_path}' not found.")
        sys.exit(1)

    md_text = open(md_path, 'r', encoding='utf-8').read()

    for entry in replacements:
        tag = entry['tag']
        start_rx = build_fuzzy_regex(entry['start'])
        end_rx   = build_fuzzy_regex(entry['end'])
        # match from start boundary through end boundary (inclusive)
        pattern = re.compile(
            rf"{start_rx}.*?{end_rx}.*?(?:\n|$)",
            re.DOTALL | re.IGNORECASE
        )
        # Replace spaces with underscores, periods with hyphens
        filename = tag.lower().replace(' ', '_').replace('.', '-')
        link = f"![{filename}.png]({filename}.png)\n"

        def repl(match):
            annotation_text = match.group(0).strip()
            return (
                link +
                f"<!-- annotation:{filename}.png\n"
                f"{annotation_text}\n"
                f"-->\n"
            )

        new_text, count = pattern.subn(repl, md_text)
        if count == 0:
            print(f"⚠️ Warning: no match for '{tag}' "
                  f"(START: '{entry['start']}' END: '{entry['end']}')")
        else:
            print(f"✔ Replaced {count} block(s) for '{tag}'")
        md_text = new_text

    out_path = md_path.replace(".md", "_updated.md")
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(md_text)

    print(f"\n✅ Updated file written to: {out_path}")

if __name__ == "__main__":
    main()
