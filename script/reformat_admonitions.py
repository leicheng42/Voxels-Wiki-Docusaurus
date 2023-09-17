import os
import re


# 递归获取文件夹中的所有Markdown文件
def find_markdown_files(folder):
    markdown_files = []
    for root, dirs, files in os.walk(folder):
        for file in files:
            if file.endswith('.md'):
                markdown_files.append(os.path.join(root, file))
    return markdown_files

# 递归查找Markdown文件
markdown_files = find_markdown_files('docs')

# markdown_files = ["docs/Parcels/Parcels.md"]

# 下载每个Markdown文件中的资源
for markdown_file in markdown_files:
    with open(markdown_file, 'r', encoding='utf-8') as file:
        markdown_content = file.read()
    
    # is-warning replace to caution
    pattern = r'> (.*?)\n\{\.is-warning\}'
    replacement = r':::caution\n\1\n:::'
    markdown_content = re.sub(pattern, replacement, markdown_content)
    # 匹配多行，这里不可用
    # markdown_content = re.sub(pattern, replacement, markdown_content, flags=re.DOTALL)

    # is-info replace to info
    pattern = r'> (.*?)\n\{\.is-info\}'
    replacement = r':::info\n\1\n:::'
    markdown_content = re.sub(pattern, replacement, markdown_content)

    # is-danger replace to danger
    pattern = r'> (.*?)\n\{\.is-danger\}'
    replacement = r':::danger\n\1\n:::'
    markdown_content = re.sub(pattern, replacement, markdown_content)

    # 将修改后的内容写回到原始文件
    with open(markdown_file, 'w', encoding='utf-8') as file:
        file.write(markdown_content)
    
    print(f'Modified Markdown content saved to {markdown_file}')
