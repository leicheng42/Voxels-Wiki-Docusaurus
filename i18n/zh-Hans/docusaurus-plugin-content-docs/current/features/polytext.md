# Polytext
3D文本。

## Polytext

![polytext-example.png](/polytext-example.png)

### 编辑器

![polytext-editor.png](/polytext-editor.png)

#### 文本

Polytext的文本内容。简单明了。

#### 颜色

Polytext的颜色。直截了当。

#### 边缘

指定Polytext是否用黑色边缘描边。

![polytext-edges.png](/polytext-edges.png)

## 脚本属性
## 脚本属性 {.tabset}
### 文本
`String`;

#### 获取（get）

```js
feature.get('text')
// 返回："My new text"
```

#### 设置（set）

```js
feature.set({'text':"My new text"})
```

#### 默认值

`""`

### 边缘
`Boolean`

#### 获取（get）

```js
feature.get('edges')
// 返回：false
```

#### 设置（set）

```js
feature.set({'edges': true})
```

#### 默认值

`false`

### 类型
`String`;

#### 获取（get）

```js
feature.get('type')
/* 或 */
feature.type
// 返回："polytext"
```