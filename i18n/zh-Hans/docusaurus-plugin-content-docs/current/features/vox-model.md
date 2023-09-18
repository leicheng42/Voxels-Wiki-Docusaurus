# Vox模型
一个小的Vox模型

## Vox模型

Vox模型是小型的（32x32x32）.vox模型，每个地块目前限制为200个。通常使用[MagicaVoxel](https://ephtracy.github.io/)制作。

![vox-example.png](/vox-example.png)

### 编辑器

![vox-model-editor_v4.13.png](/vox-model-editor_v4.13.png)

#### 链接

.vox文件的URL。

#### 超链接

（可选）；使.vox文件成为可点击的链接。

#### 缩放以适应

（可选）；将vox的大小调整以适应网格。

#### 可碰撞的

（可选）；使vox模型成为可碰撞的对象。

#### 颜色

（可选）；
允许您更改vox模型的颜色。
*如果您的vox模型具有超过5种颜色，则不会显示此选项。*


## 脚本属性
## 脚本属性 {.tabset}
### 链接
`字符串`; 链接必须以 `https://` 开头，并且必须以.vox扩展名结尾。
必须链接到一个32x32x32的vox模型或更小的模型。

#### 获取()

```js
feature.get('url')
// 返回: "https://..."
```

#### 设置()

```js
feature.set({'url':"https://www.myurl.com/file.vox"})
```

#### 默认值

`""`

### 超链接
`字符串`; 链接必须以 `https://` 开头。

#### 获取()

```js
feature.get('link')
// 返回: "https://..."
```

#### 设置()

```js
feature.set({'link':"https://www.myurl.com/"})
```

#### 默认值

`""`

### 可碰撞的
`布尔值`

#### 获取()

```js
feature.get('collidable')
// 返回: false
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
/* 或 */
feature.type

// 返回: 'vox-model'
```