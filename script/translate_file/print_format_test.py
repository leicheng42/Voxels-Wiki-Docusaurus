# import time

# # 要滚动输出的文本
# long_text = "This is a very long text that you want to scroll in the console. " * 10

# # 控制每次滚动的字符数
# scroll_width = 50

# # 循环滚动输出
# for i in range(0, len(long_text), scroll_width):
#     end_idx = i + scroll_width
#     # 切片文本以适应当前滚动窗口宽度
#     current_text = long_text[i:end_idx]
#     # 清除当前行并打印新的文本
#     print("\r" + current_text, end="")
#     # 等待一段时间，模拟滚动效果
#     time.sleep(0.1)

# # 添加换行以确保文本不被覆盖
# print()


import time
import sys

def scroll_text(text, width=40, delay=0.1):
    for i in range(len(text) - width + 1):
        sys.stdout.write('\r' + text[i:i+width])
        sys.stdout.flush()
        time.sleep(delay)
    print()  # 换行以避免文本被覆盖

# 要滚动输出的文本
long_text = "This is a very long text that you want to scroll in the console. " * 10

# 调用滚动函数
scroll_text(long_text, width=50, delay=0.1)

