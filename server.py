import os
from flask import Flask, request, jsonify, send_from_directory, abort
from flask_cors import CORS
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
ALLOWED_DIRS = {'prompts', 'references'}

def resolve_path(path):
    full_path = os.path.abspath(os.path.join(BASE_DIR, path))
    for allowed in ALLOWED_DIRS:
        allowed_path = os.path.abspath(os.path.join(BASE_DIR, allowed))
        if full_path.startswith(allowed_path + os.sep) or full_path == allowed_path:
            return full_path
    abort(403)


@app.route('/api/tree')
def get_tree():
    folder = request.args.get('folder')
    if not folder:
        abort(400)
    root_path = resolve_path(folder)
    if not os.path.isdir(root_path):
        abort(404)
    result = []

    for entry in os.scandir(root_path):
        result.append({
            'type': 'folder' if entry.is_dir() else 'file',
            'name': entry.name,
            'path': os.path.relpath(entry.path, BASE_DIR)
        })
    return jsonify(sorted(result, key=lambda x: (x['type'] != 'folder', x['name'].lower())))

@app.route('/api/files')
def list_files():
    folder = request.args.get('folder')
    if folder not in ALLOWED_DIRS:
        abort(403)
    full = resolve_path(folder)
    files = [f for f in os.listdir(full) if f.endswith('.md')]
    return jsonify(sorted(files))

@app.route('/api/file')
def get_file():
    path = request.args.get('path')
    if not path or '..' in path:
        abort(400)
    abs_path = resolve_path(path)
    if not os.path.isfile(abs_path):
        abort(404)
    with open(abs_path, 'r') as f:
        return f.read()

@app.route('/api/file', methods=['POST'])
def save_file():
    data = request.get_json()
    path = data.get('path')
    content = data.get('content', '')
    if not path or '..' in path:
        abort(400)
    abs_path = resolve_path(path)
    os.makedirs(os.path.dirname(abs_path), exist_ok=True)
    with open(abs_path, 'w') as f:
        f.write(content)
    return jsonify(success=True)

@app.route('/api/add-file', methods=['POST'])
def add_file():
    data = request.get_json()
    parent = data.get('parentPath')
    name = data.get('name')
    if not parent or '..' in parent or not name.endswith('.md'):
        abort(400)
    abs_path = resolve_path(os.path.join(parent, name))
    os.makedirs(os.path.dirname(abs_path), exist_ok=True)
    open(abs_path, 'w').close()
    return jsonify(success=True)

@app.route('/api/add-folder', methods=['POST'])
def add_folder():
    data = request.get_json()
    parent = data.get('parentPath')
    name = data.get('name')
    if not parent or '..' in parent:
        abort(400)
    abs_path = resolve_path(os.path.join(parent, name))
    os.makedirs(abs_path, exist_ok=True)
    return jsonify(success=True)

@app.route('/api/rename', methods=['POST'])
def rename():
    data = request.get_json()
    path = data.get('path')
    new_name = data.get('newName')
    if not path or '..' in path or not new_name:
        abort(400)
    src = resolve_path(path)
    dst = os.path.join(os.path.dirname(src), secure_filename(new_name))
    if not os.path.exists(src):
        abort(404)
    os.rename(src, dst)
    return jsonify(success=True)

@app.route('/api/delete', methods=['POST'])
def delete():
    data = request.get_json()
    path = data.get('path')
    if not path or '..' in path:
        abort(400)
    target = resolve_path(path)
    if os.path.isdir(target):
        os.rmdir(target)
    elif os.path.isfile(target):
        os.remove(target)
    else:
        abort(404)
    return jsonify(success=True)

@app.route('/api/epub-files')
def list_epub_files():
    books_dir = os.path.join(BASE_DIR, 'references', 'books')
    # Ensure the directory exists, create if not
    if not os.path.exists(books_dir):
        os.makedirs(books_dir, exist_ok=True)
    if not os.path.isdir(books_dir):
        return jsonify([])
    files = [f for f in os.listdir(books_dir) if f.lower().endswith('.epub')]
    return jsonify(sorted(files))

@app.route('/', defaults={'path': 'index.html'})
@app.route('/<path:path>')
def static_files(path):
    return send_from_directory('.', path)

@app.route('/epub')
def epub_page():
    return send_from_directory('epub', 'index.html')

@app.route('/epub/<path:filename>')
def epub_static(filename):
    # Prevent /epub/api/* from being handled here
    if filename.startswith('api/'):
        abort(404)
    return send_from_directory('epub', filename)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
