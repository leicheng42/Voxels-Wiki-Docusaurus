# 标牌
一行文本。

## 标牌

标牌功能允许您显示一行文本。不同于[Richtext](/docs/features/richtext)，它们可以用作超链接。

![sign-example.png](/sign-example.png)

### 编辑器

![sign-editor.png](/sign-editor.png)

#### 文本

您想要显示的文本。

#### 字体大小

字体的大小。

#### 混合模式

用于确定文本与其后面的内容混合方式。可用选项包括`Combine`（合并）、`Multiply`（相乘）和`Screen`（屏幕）。

#### 反色

选中后，文本将显示在黑色背景上，而不是相反。

#### 超链接

一个链接，点击后将弹出警告消息，然后允许玩家转到所需的链接。

#### 字体大小

不言自明。

#### 颜色

字体颜色。

#### 背景颜色

背景的颜色。

## 脚本属性
## 脚本属性 {.tabset}
### 文本
`String`； 

#### 获取（get）

```js
feature.get('text')
// 返回："我要显示的文本"
```

#### 设置（set）

```js
feature.set({'text':"我要显示的文本"})
```

#### 默认值

`""`

### 超链接
`String`； 

#### 获取（get）

```js
feature.get('link')
// 返回："https://..."
```

#### 设置（set）

```js
feature.set({'link':"https://..."})
```

#### 默认值

`""`

### 字体大小
`Integer`； 

#### 获取（get）

```js
feature.get('fontSize')
// 返回：25
```

#### 设置（set）

```js
feature.set({'fontSize':25})
```

#### 默认值

`25`

### 颜色
`String`-十六进制； 

#### 获取（get）

```js
feature.get('color')
// 返回："#00000"
```

#### 设置（set）

```js
feature.set({'color':"#fcba03"})
```

#### 默认值

`"#00000"`

### 背景颜色
`String`-十六进制； 

#### 获取（get）

```js
feature.get('background')
// 返回："#00000"
```

#### 设置（set）

```js
feature.set({'background':"#fcba03"})
```

#### 默认值

`"#fffff"`

### 类型
`String`;

#### 获取（get）

```js
feature.get('type')
/* 或 */
feature.type
// 返回："sign"
```