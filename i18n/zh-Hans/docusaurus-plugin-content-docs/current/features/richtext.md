# 富文本
多行Markdown格式的文本。

## 富文本

富文本功能允许您显示多行格式化的文本。不过，与[标志](/docs/features/sign)不同，它们不能用作超链接。

![richtext-example.png](/richtext-example.png)

### 编辑器

![richtext-editor.png](/richtext-editor.png)

#### 文本

您要显示的文本，采用Markdown格式。
:::info
您可以通过在文本后添加类似以下内容来使用CSS样式：`{:style="color:red;background:green;font-size:18px"}`
:::

#### 混合模式

这用于确定文本与其后的任何内容混合的方式。可用的选项包括 `组合`，`相乘` 和 `屏幕`。

#### 反相

选中后，文本将以白色显示在黑色背景上，而不是相反。

## 脚本属性
## 脚本属性 {.tabset}
### 文本
`字符串`; 

#### 获取()

```js
feature.get('text')
// 返回: "https://..."
```

#### 设置()

```js
feature.set({'text':"我的段落"})
```

#### 默认值

`""`
### 混合模式
`字符串`

#### 获取()

```js
feature.get('blendMode')
// 返回: '组合'
```

#### 设置()

```js
feature.set({'blendMode': '组合'})
```

#### 默认值

`"相乘"`

### 反相
`布尔值`; 

#### 获取()

```js
feature.get('inverted')
// 返回: false
```

#### 设置()

```js
feature.set({'inverted': true})
```

#### 默认值

`false`

### 类型
`字符串`;

#### 获取()

```js
feature.get('type')
/* 或 */
feature.type

// 返回: 'richtext'
```