# 图片
一张平面图片。

## 图片

来自URL的二维图像。

![image-feature.png](/image-feature.png)

### 编辑器

![image-editor.png](/image-editor.png)

#### URL

图像的URL。链接必须以 `https://...` 开头。

#### 超链接

（可选）；使图像成为可点击的链接。

#### 混合模式

用于确定图像与其背后的任何内容混合的方式。可用选项为`合并`、`叠加`和`筛选`。

#### 保留透明度

如果选中，图像中的任何透明部分将转换为黑色。

#### 拉伸

如果选中，图像将被拉伸以适应目标矩形区域，而不是被裁剪。

#### 每日更新

如果选中，图像将每天重新加载。这对于具有轮播广告的情况很有用，其中图像会更改。

#### uScale/vScale

帮助您正确平铺图像

#### 触发器

设置功能是否为触发器。

## 脚本属性
## 脚本属性 {.tabset}
### url
`字符串`；链接必须以 `https://` 开头，并且必须以 `.jpg/.gif/.png` 等扩展名结尾。

#### 获取()

```js
feature.get('url')
// 返回: "https://..."
```

#### 设置()

```js
feature.set({'url':"https://www.myurl.com/file.png"})
```

#### 默认

`""`

### 链接
`字符串`；链接必须以 `https://` 开头。

#### 获取()

```js
feature.get('link')
// 返回: "https://..."
```

#### 设置()

```js
feature.set({'link':"https://www.myurl.com/"})
```

#### 默认

`""`


### 混合模式
`字符串`

#### 获取()

```js
feature.get('blendMode')
// 返回: '合并'
```

#### 设置()

```js
feature.set({'blendMode': '合并'})
```

#### 默认

`"叠加"`

### 每日更新
`布尔值`

#### 获取()

```js
feature.get('updateDaily')
// 返回: false
```

#### 设置()

```js
feature.set({'updateDaily': true})
```

#### 默认

`false`

### 透明
`布尔值`

#### 获取()

```js
feature.get('transparent')
// 返回: false
```

#### 设置()

```js
feature.set({'transparent': true})
```

#### 默认

`false`

### 拉伸
`布尔值`

#### 获取()

```js
feature.get('stretched')
// 返回: false
```

#### 设置()

```js
feature.set({'stretched': true})
```

#### 默认

`false`


### uScale
`整数`

#### 获取()

```js
feature.get('uScale')
// 返回: 1
```

#### 设置()

```js
feature.set({'uScale': 1})
```

#### 默认

`1`

### vScale
`整数`

#### 获取()

```js
feature.get('vScale')
// 返回: 1
```

#### 设置()

```js
feature.set({'vScale': 1})
```

#### 默认

`1`

### 类型
`字符串`;

#### 获取()

```js
feature.get('type')
/* 或 */
feature.type

// 返回: 'image'
```