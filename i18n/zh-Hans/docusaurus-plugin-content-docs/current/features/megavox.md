# Megavox
大型（126x126x126）.vox模型。

## Megavox

Megavox是大型（126x126x126）的.vox模型，每个地块目前限制最多5个。

![megavox-example.png](/megavox-example.png)

### 编辑器

![megavox-editor.png](/megavox-editor.png)

#### URL

.vox文件的URL。

#### 超链接

（可选）；使Megavox成为可点击的链接。

## 脚本属性
## 脚本属性 {.tabset}
### url
`String`；链接必须以`https://`开头，并且必须以.vox扩展名结尾。
必须链接到一个126x126x126的vox模型。

#### get()

```js
feature.get('url')
// 返回："https://..."
```

#### set()

```js
feature.set({'url':"https://www.myurl.com/file.vox"})
```

#### 默认值

`""`

### link
`String`；链接必须以`https://`开头。

#### get()

```js
feature.get('link')
// 返回："https://..."
```

#### set()

```js
feature.set({'link':"https://www.myurl.com/"})
```

#### 默认值

`""`

### collidable
`Boolean`

#### get()

```js
feature.get('collidable')
// 返回：false
```

#### set()

```js
feature.set({'collidable': true})
```

#### 默认值

`false`

### type
`String`；

#### get()

```js
feature.get('type')
/* 或 */
feature.type

// 返回：'megavox'
```