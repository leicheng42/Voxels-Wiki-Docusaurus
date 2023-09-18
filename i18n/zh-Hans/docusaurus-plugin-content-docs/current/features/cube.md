# 立方体

## 立方体

立方体功能是一个简单的立方体网格，您可以对其进行纹理或上色。

![[cube-feature]example.png](/features/[cube-feature]example.png)

### 编辑器

![[cube-feature]editor_5.57.png](/features/[cube-feature]editor_5.57.png){.align-center}

#### URL

将用作纹理的图像的URL。

#### 可碰撞性

`(可选)`；将立方体设置为可碰撞对象。

#### 颜色

`(可选)`；
允许您更改立方体的颜色。


## 脚本属性
## 脚本属性 {.tabset}
### URL
`字符串`；链接必须以 `https://` 开头并以图像扩展名结尾。

#### 获取()

```js
feature.get('url')
// 返回值: "https://..."
```

#### 设置()

```js
feature.set({'url':"https://www.myurl.com/file.png"})
```

#### 默认值

`""`

### 颜色
`字符串`；一个十六进制颜色字符串，例如 `#000`。

#### 获取()

```js
feature.get('color')
// 返回值: "#ffffff"...
```

#### 设置()

```js
feature.set({'color':"#4287f5"})
```

#### 默认值

`"#000000"`

### 可碰撞性
`布尔值`

#### 获取()

```js
feature.get('collidable')
// 返回值: false
```

#### 设置()

```js
feature.set({'collidable': true})
```

#### 默认值

`false`

### 类型
`字符串`;

#### 获取()

```js
feature.get('type')
/* 或者 */
feature.type

// 返回值: 'cube'
```