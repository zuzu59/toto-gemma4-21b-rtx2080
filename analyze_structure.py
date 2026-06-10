import re
import sys

def analyze_template(file_path):
    with open(file_path, 'r') as f:
        content = f.read()

    # Remove script and style blocks to focus on template
    template_content = ""
    in_script = False
    in_style = False
    for line in content.splitlines():
        if "<script" in line: in_script = True
        if "<style" in line: in_style = True
        if in_script and "</script>" in line: in_script = False
        if in_style and "</style>" in line: in_style = False
        
        if not in_script and not in_style:
            template_content += line + "\n"

    # Regex for tags
    # This handles <tag>, <tag />, </tag>, and <template v-if="...">
    tag_pattern = re.compile(r'<(/?\w+)([^>]*?)(/?)>')
    
    stack = []
    line_num = 1
    lines = template_content.splitlines()
    
    for line in lines:
        for match in tag_pattern.finditer(line):
            tag_name = match.group(1)
            is_closing = tag_name.startswith('/')
            is_self_closing = match.group(3) == '/'
            
            clean_tag = tag_name.replace('/', '')
            
            # Ignore special Vue tags or purely boolean attributes
            if clean_tag in ['template', 'br', 'img', 'input', 'meta', 'link']:
                continue

            if is_self_closing or clean_tag == 'input' or clean_tag == 'br':
                continue

            if is_closing:
                if not stack or stack[-1] != clean_tag:
                    print(f"Error: Unexpected closing tag </{clean_tag}> at line {line_num}")
                    return
                stack.pop()
            else:
                stack.append((clean_tag, line_num))
        
        line_num += 1

    if stack:
        for tag, line in stack:
            print(f"Error: Unclosed tag <{tag}> opened at line {line}")

if __name__ == "__main__":
    analyze_template('src/views/RecordView.vue')
