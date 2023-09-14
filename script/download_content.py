import os
import re
import requests
from tqdm import tqdm
from urllib.parse import urlparse

# 读取Markdown文件
with open('voxel-library.md', 'r') as file:
    markdown_content = file.read()

# 提取以 "src='URL'" 形式定义的资源链接
src_links = re.findall(r"src='(.*?)'", markdown_content)

# 使用正则表达式提取文件路径
file_paths = re.findall(r'\((.*?)\)', markdown_content)
# print(file_paths)

# 过滤出以斜杠开头的文件路径
filtered_file_paths = [path for path in file_paths if path.startswith('/')]
filtered_file_paths = []
for path in file_paths:
    path = path.split(' ')[0]
    if path.startswith('/') and path.endswith((".png", ".gif", ".vox")):
        filtered_file_paths.append(path)

# 合并两个列表以获取所有资源链接
all_links = filtered_file_paths + src_links

print(all_links)

# 指定保存资源的基础文件夹
base_folder = 'static'
os.makedirs(base_folder, exist_ok=True)

# 计算总文件大小
total_file_size = 0

for link in all_links:
    # 构建完整的下载链接
    if link.startswith('/'):
        full_url = 'https://wiki.cryptovoxels.com' + link
    else:
        full_url = link

    # 发起HEAD请求以获取文件大小
    response = requests.head(full_url)
    if response.status_code == 200:
        content_length = int(response.headers.get('content-length', 0))
        total_file_size += content_length

# 下载并保存资源，显示总进度条
with tqdm(total=total_file_size, unit='B', unit_scale=True, unit_divisor=1024) as progress_bar:
    for link in all_links:
        # 构建完整的下载链接
        if link.startswith('/'):
            full_url = 'https://wiki.cryptovoxels.com' + link
        else:
            full_url = link

        # 发起HTTP请求并保存文件
        response = requests.get(full_url, stream=True)
        if response.status_code == 200:
            # 提取文件名
            parsed_url = urlparse(full_url)
            filename = os.path.basename(parsed_url.path)
            
            # 提取文件夹路径（不包括文件名）
            folder_path = base_folder + os.path.dirname(parsed_url.path)
            os.makedirs(folder_path, exist_ok=True)

            with open(os.path.join(folder_path, filename), 'wb') as output_file:
                for data in response.iter_content(chunk_size=1024):
                    output_file.write(data)
                    progress_bar.update(len(data))
            print(f"下载并保存 '{filename}' 成功")
        else:
            print(f"下载 '{link}' 失败，HTTP 状态码: {response.status_code}")
import os
import re
import requests
from tqdm import tqdm
from urllib.parse import urlparse
from concurrent.futures import ThreadPoolExecutor

# 读取Markdown文件
with open('docs/voxel-library.md', 'r') as file:
    markdown_content = file.read()

# 提取以 "src='URL'" 形式定义的资源链接
src_links = re.findall(r"src='(.*?)'", markdown_content)

# 使用正则表达式提取文件路径
file_paths = re.findall(r'\((.*?)\)', markdown_content)

# 过滤出以斜杠开头的文件路径
filtered_file_paths = [path.split(' ')[0] for path in file_paths if path.startswith('/') and path.endswith((".png", ".gif", ".vox"))]

# 合并两个列表以获取所有资源链接
all_links = filtered_file_paths + src_links

# 指定保存资源的基础文件夹
base_folder = 'static'
os.makedirs(base_folder, exist_ok=True)

# 下载并保存资源，显示总进度条
def download_and_save(link):
    # 构建完整的下载链接
    if link.startswith('/'):
        full_url = 'https://wiki.cryptovoxels.com' + link
    else:
        full_url = link

    # 发起HTTP请求并保存文件
    response = requests.get(full_url, stream=True)
    if response.status_code == 200:
        # 提取文件名
        parsed_url = urlparse(full_url)
        filename = os.path.basename(parsed_url.path)

        # 提取文件夹路径（不包括文件名）
        folder_path = base_folder + os.path.dirname(parsed_url.path)
        os.makedirs(folder_path, exist_ok=True)

        file_path = os.path.join(folder_path, filename)

        if not os.path.exists(file_path):
            with open(file_path, 'wb') as output_file:
                for data in response.iter_content(chunk_size=1024):
                    output_file.write(data)
        print(f"下载并保存 '{filename}' 成功")
    else:
        print(f"下载 '{link}' 失败，HTTP 状态码: {response.status_code}")

total_file_size = sum([int(requests.head(link).headers.get('content-length', 0)) for link in all_links if link.startswith('/')])

with tqdm(total=total_file_size, unit='B', unit_scale=True, unit_divisor=1024) as progress_bar:
    with ThreadPoolExecutor(max_workers=5) as executor:  # 调整max_workers以控制并发度
        futures = [executor.submit(download_and_save, link) for link in all_links]

        for future in tqdm(futures, total=len(futures), desc="下载进度"):
            future.result()
