import sys
import os

def fix_vue_template(file_path):
    if not os.path.exists(file_path):
        print(f"File {file_path} not found.")
        return

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Fix </div without >
    content = content.replace('</div', '</div')
    # Fix </span without >
    content = content.replace('</span', '</span')
    # Fix </p without >
    content = content.replace('</p', '</p')

    # Fix double brackets
    content = content.replace('</div>>', '</div>')
    content = content.replace('</span>>', '</span>')
    content = content.replace('</p>>', '</p>')

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Fixed tags in {file_path}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 scripts/fix_vue_tags.py <file_path>")
    else:
        fix_vue_template(sys.argv[1])
