# 视频
添加短视频。

## 视频

添加可以通过点击播放的短视频。

![video-feature.png](/video-feature.png)

### 编辑器

![video_editor_v4.25.png](/video_editor_v4.25.png)

#### URL

要播放的视频的URL。必须以 `https://` 开头，必须以视频扩展名（如 `.mp4`）结尾。

#### 图像预览

（可选）允许用户为视频设置自定义缩略图。

#### 混合模式

用于确定图像与其后面的内容混合的方式。可用的选项包括 `Combine`、`Multiply` 和 `Screen`。

## 脚本属性
## 脚本属性 {.tabset}
### url
`String`；必须以 `https://` 开头，必须以视频扩展名（如 `.mp4`）结尾。

#### get()

```js
feature.get('url')
// 返回: "https://..."
```

#### set()

```js
feature.set({'url':"https://..."})
```

#### 默认值

`""`

### previewUrl
`String`；链接必须是 `https://`，并且必须是 `.png`、`.gif` 或 `.jpg`。

#### get()

```js
feature.get('previewUrl')
// 返回: "https://..."
```

#### set()

```js
feature.set({'previewUrl':"https://..."})
```

#### 默认值

`""`

### 类型
`String`；

#### get()

```js
feature.get('type')
/* 或 */
feature.type

// 返回: 'video'
```

## 脚本方法
## 脚本方法 {.tabset}

### 播放()

```js
feature.play()
```
播放视频

### 暂停()
```js
feature.pause()
```
暂停视频

### 停止()
```js
feature.stop()
```
停止视频