# 粒子
添加一个粒子发射器。

## 粒子

![particles-example.png](/particles-example.png)

### 编辑器

![particles-editor.png](/particles-editor.png)

#### 发射速率

新粒子生成的频率。0 - 100

#### 最小尺寸

新粒子的最小尺寸。

#### 最大尺寸

新粒子的最大尺寸。

#### 链接

自定义粒子图像的URL；如果未提供，则将使用默认粒子图像（灰色方块）。

#### 颜色1和颜色2

新粒子的初始颜色取决于这些参数的值 - 颜色将在两种给定颜色之间的范围内。

## 脚本属性
## 脚本属性 {.tabset}
### 链接
`字符串`；链接必须以 `https://` 开头，并且必须以扩展名结尾，例如 `.jpg/.gif/.png`。
:::info
如果设置了URL，自定义颜色color1和color2将被忽略。
:::

#### 获取()

```js
feature.get('url')
// 返回: "https://..."
```

#### 设置()

```js
feature.set({'url':"https://www.myurl.com/file.png"})
```

#### 默认值

`""`

### 发射速率
`双精度`；必须是0到100之间的数字。

#### 获取()

```js
feature.get('emitRate')
// 返回: 50.0
```

#### 设置()

```js
feature.set({'emitRate':52})
```

#### 默认值

`50`


### 最小尺寸
`双精度`；必须是0到1之间的数字。

#### 获取()

```js
feature.get('minSize')
// 返回: 0.5
```

#### 设置()

```js
feature.set({'minSize':0.5})
```

#### 默认值

`0.5`


### 最大尺寸
`双精度`；必须是0到1之间的数字。

#### 获取()

```js
feature.get('maxSize')
// 返回: 0.5
```

#### 设置()

```js
feature.set({'maxSize':0.5})
```

#### 默认值

`0.5`

### 颜色1
`字符串`- 十六进制；

#### 获取()

```js
feature.get('color1')
// 返回: "#4cb844"
```

#### 设置()

```js
feature.set({'color1':"#4cb844"})
```

#### 默认值

`#000000`

### 颜色2
`字符串`- 十六进制；

#### 获取()

```js
feature.get('color2')
// 返回: "#4cb888"
```

#### 设置()

```js
feature.set({'color2':"#4cb844"})
```

#### 默认值

`"#000000"`


### 类型
`字符串`;

#### 获取()

```js
feature.get('type')
/* 或 */
feature.type

// 返回: 'particles'
```

## 弃用
有关版本信息，请[点击此处](/docs/versioning-and-deprecations)

### 5.7.0

粒子特性现在可以在X轴上旋转，而不是硬编码为90度。这意味着下次编辑粒子系统时，它将使用所有者设置的X轴旋转，这可能看起来奇怪，但可以在那时轻松更正。