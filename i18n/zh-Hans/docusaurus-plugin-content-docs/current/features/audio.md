# 音频功能

## 音频

音频功能是一个用于播放mp3文件的小型播放器。您可以链接到任何mp3文件，我们将尝试进行流媒体播放。

![audio-feature.png](/audio-feature.png)

### 编辑器

![[audio]editor_v8.1.png](/features/[audio]editor_v8.1.png)

#### 精灵

显示一个较小的音频元素

#### 流媒体

直接流媒体播放音频，无需尝试通过我们的服务器代理。应该能使音频播放更快，但如果您在托管服务器上有奇怪的引用者规则，可能无法正常工作。

#### 自动播放

一旦有人进入您的地块，就开始播放这个音频。（伴随着强大的功能，也伴随着伟大的责任）。

#### 循环

永久循环播放音频。

#### 空间衰减因子

当玩家远离音频播放器时，声音消失的速度有多快。
取值范围在0到5之间。

#### 音量

音频播放的音量有多大。
取值范围在0到1之间。

#### 链接

链接必须以 `https://` 开头，因为我们强制所有链接使用https。

## 脚本属性
## 脚本属性 {.tabset}
### url
`字符串.`；链接必须以 `https://` 开头，并且必须以音频扩展名结尾，例如 `.mp3`

#### get()

```js
feature.get('url')
// 返回: "https://..."
```

#### set()

```js
feature.set({'url':"https://www.myurl.com/file.mp3"})
```

#### 默认

`""`

### 精灵
`布尔值.`

#### get()

```js
feature.get('sprite')
// 返回: false
```

#### 设置()

```js
feature.set({'sprite': true})
```

#### 默认值

`false`

### 流媒体
`布尔值.`

#### 获取()

```js
feature.get('streaming')
// 返回: false
```

#### 设置()

```js
feature.set({'streaming': true})
```

#### 默认值

`false`

### 自动播放
`布尔值.`

#### 获取()

```js
feature.get('autoplay')
// 返回: false
```

#### 设置()

```js
feature.set({'autoplay': true})
```

#### 默认值

`false`

### 循环
`布尔值.`

#### 获取()

```js
feature.get('loop')
// 返回: false
```

#### 设置()

```js
feature.set({'loop': true})
```

#### 默认值

`false`

### 空间衰减因子
`双精度`; 取值范围在0到5之间

#### 获取()

```js
feature.get('rolloffFactor')
// 返回: 1.6
```

#### 设置()

```js
feature.set({'rolloffFactor': 1.6})
```

#### 默认值

`1.6`

### 音量
`双精度`; 取值范围在0到1之间

#### 获取()

```js
feature.get('volume')
// 返回: 0.5
```

#### 设置()

```js
feature.set({'volume': 0.5})
```

#### 默认值

`0.5`

### 类型
`字符串`;

#### 获取()

```js
feature.get('type')
/* 或 */
feature.type

// 返回: 'audio'
```

## 脚本方法
## 脚本方法 {.tabset}
### 播放()
```js
feature.play()
```
播放音频

### 暂停()
```js
feature.pause()
```
暂停音频

### 停止()
```js
feature.stop()
```
停止音频