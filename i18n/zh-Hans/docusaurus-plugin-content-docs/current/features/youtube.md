# YouTube / Twitch

Embed YouTube videos/streams, or Twitch streams.

![youtube-example.png](/youtube-example.png)

## Editor

![youtube_editor_v4.25.png](/youtube_editor_v4.25.png)

### Screen ratio

The screen ratio of the video: `16:9` or `4:3`

### URL

The YouTube/Twitch URL of the video to play.

### Thumbnail url

`(Optional)` Let's the user set a customized thumbnail for the video.

# Scripting Properties
# Scripting Properties {.tabset}
## url
`String`; Links must be `https://` and must either be a `youtube, twitch, soundcloud, spotify`.

### get()

```js
feature.get('url')
// returns: "https://..."
```

### set()

```js
feature.set({'url':"https://www.youtube.com/?v=..."})
```

### default

`""`

## previewUrl
`String`; Links must be `https://` and must either be a `.png,.gif,jpg`.

### get()

```js
feature.get('previewUrl')
// returns: "https://..."
```

### set()

```js
feature.set({'previewUrl':"https://..."})
```

### default

`""`

## screenRatio
`String`; Links must be `https://` and must either be a `.png,.gif,jpg`.

### get()

```js
feature.get('screenRatio')
// returns: "43"
```

### set()

```js
feature.set({'screenRatio':"169"})
```

### default

`"169"`

## type
`String`;

### get()

```js
feature.get('type')
/* or */
feature.type

// returns: 'youtube'
```

# Scripting methods
# Scripting methods {.tabset}

## play()

```js
feature.play()
```
plays the video

## feature.pause()
```js
feature.pause()
```
pauses the video