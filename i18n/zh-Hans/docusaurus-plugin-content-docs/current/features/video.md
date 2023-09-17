## Video

Add short videos that can be played by clicking.

![video-feature.png](/video-feature.png)

### Editor

![video_editor_v4.25.png](/video_editor_v4.25.png)

#### URL

The URL of the video to play. Has to start with `https://` and has to end with a video extension such as `.mp4`.

#### Image preview

`(Optional)` Let's the user set a customized thumbnail for the video.

#### Blend mode

This is used to determine how the image is blended with whatever is behind it. The available options are `Combine`, `Multiply`, and `Screen`.


## Scripting Properties
## Scripting Properties {.tabset}
### url
`String`; Has to start with `https://` and has to end with a video extension such as `.mp4`.

#### get()

```js
feature.get('url')
// returns: "https://..."
```

#### set()

```js
feature.set({'url':"https://..."})
```

#### default

`""`

### previewUrl
`String`; Links must be `https://` and must either be a `.png,.gif,.jpg`.

#### get()

```js
feature.get('previewUrl')
// returns: "https://..."
```

#### set()

```js
feature.set({'previewUrl':"https://..."})
```

#### default

`""`

### type
`String`;

#### get()

```js
feature.get('type')
/* or */
feature.type

// returns: 'video'
```


## Scripting methods
## Scripting methods {.tabset}

### play()

```js
feature.play()
```
plays the video

### pause()
```js
feature.pause()
```
pauses the video

### stop()
```js
feature.stop()
```
stops the videos