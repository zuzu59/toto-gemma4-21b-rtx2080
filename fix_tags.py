import re

def fix_tags(content):
    # Fix </h1
    content = re.sub(r'<\/h1', '</h1>', content)
    # Fix </div
    content = re.sub(r'<\/div', '</div>', content)
    # Fix </section
    content = re.sub(r'<\/section', '</section>', content)
    return content

with open('src/views/RecordView.vue', 'r') as f:
    content = f.read()

fixed_content = fix_tags(content)

with open('src/views/RecordView.vue', 'w') as f:
    f.write(fixed_content)
