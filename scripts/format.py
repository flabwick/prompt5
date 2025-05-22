import shutil
from pathlib import Path
from datetime import date

def clean_dir(path: Path):
    for child in path.iterdir():
        if child.is_dir():
            shutil.rmtree(child)
        else:
            child.unlink()

def make_files(root: Path, content_src: Path):
    files = ["content.md", "log.md", "report.md", "session.md", "visuals.md"]
    clean_dir(root)
    for fname in files:
        (root / fname).write_text(
            content_src.read_text() if fname == "content.md" else "EMPTY"
        )
    (root / "log").mkdir()
    today = date.today().strftime("%d-%m")
    (root / "log" / f"{today}.md").write_text("")
    (root / "visuals").mkdir()

def rewrite_substitutes(project_root: Path, linked: Path):
    refs_dir = project_root / "references"
    subs_dir = refs_dir / "substitutes" / "school2"
    # ensure existing static files only; do not create new folders
    if not subs_dir.is_dir():
        raise FileNotFoundError(f"Expected static directory: {subs_dir}")
    rel = linked.relative_to(refs_dir)
    for fname in ["content.md", "log.md", "report.md", "session.md", "visuals.md"]:
        # overwrite existing files with link only
        link_text = f"[{rel.as_posix()}/{Path(fname).stem}]"
        (subs_dir / fname).write_text(link_text)

if __name__ == "__main__":
    project_root = Path(__file__).parent.parent.resolve()
    ld_input = input("Linked directory path: ").strip('"\'')
    lc_input = input("Linked content file: ").strip('"\'')
    ld = (project_root / ld_input).expanduser().resolve()
    lc = (project_root / lc_input).expanduser().resolve()
    make_files(ld, lc)
    rewrite_substitutes(project_root, ld)
