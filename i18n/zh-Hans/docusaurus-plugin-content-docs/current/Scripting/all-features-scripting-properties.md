## Table of content
- [Audio](#audio)
- [Button](#button)
- [Image](#image)
- [Megavox](#megavox)
- [particles](#particles)
- [Polytext](#polytext)
- [Text input](#text-input-currently-nerfed)
- [YouTube / Twitch](#youtube-twitch)
- [Boombox](#boombox)
- [NFT image](#nft-image)
- [Richtext](#richtext)
- [Sign](#sign)
- [Video](#video)
- [.VOX](#vox)
<hr />

## <img width='32' src='https://www.cryptovoxels.com/icons/audio.png' />   Audio {#audio} 
### Scripting Properties
### Scripting Properties {.tabset}
#### url
`String.`; Links must be `https://` and must finish with an audio extension such as `.mp3`

##### get()

```js
feature.get('url')
// returns: "https://..."
```

##### set()

```js
feature.set({'url':"https://www.myurl.com/file.mp3"})
```

##### default

`""`

#### sprite
`Boolean.`

##### get()

```js
feature.get('sprite')
// returns: false
```

##### set()

```js
feature.set({'sprite': true})
```

##### default

`false`

#### streaming
`Boolean.`

##### get()

```js
feature.get('streaming')
// returns: false
```

##### set()

```js
feature.set({'streaming': true})
```
##### default

`false`

#### autoplay
`Boolean.`

##### get()

```js
feature.get('autoplay')
// returns: false
```

##### set()

```js
feature.set({'autoplay': true})
```
##### default

`false`

#### loop
`Boolean.`

##### get()

```js
feature.get('loop')
// returns: false
```

##### set()

```js
feature.set({'loop': true})
```

##### default

`false`

#### rolloffFactor
`double`; Value ranging from 0 to 5

##### get()

```js
feature.get('rolloffFactor')
// returns: 1.6
```

##### set()

```js
feature.set({'rolloffFactor': 1.6})
```

##### default
`1.6`

#### volume
`double`; Value ranging from 0 to 1

##### get()

```js
feature.get('volume')
// returns: 0.5
```

##### set()

```js
feature.set({'volume': 0.5})
```

##### default
`0.5`

#### type
`String`;

##### get()

```js
feature.get('type')
/* or */
feature.type

// returns: 'audio'
```

### Scripting Methods
### Scripting Methods {.tabset}
#### play()
```js
feature.play()
```
plays the audio

#### pause()
```js
feature.pause()
```
pauses the audio

## <img width='32' src='https://www.cryptovoxels.com/icons/button.png' /> Button {#button}


### Scripting Properties
### Scripting Properties {.tabset}
#### color
`String.`; Options are 'white', 'red', 'green', and 'blue'.

##### get()

```js
feature.get('color')
// returns: "red"
```

##### set()

```js
feature.set({'color':"blue"})
```

##### default

`"red"`

#### soundId
`Integer`; can be an integer in the range of 0 - 14.

`'-1'` - None
`'0'` - ding dong
`'1'` - pong
`'2'` - pshlick - sounds like a hydraulic trigger
`'3'` - breet - sounds like a PC attempting to connect to internet
`'4'` - claclack - sounds like a someone spamming a keyboard
`'5'` - tpow Cling - sounds like a ball hitting a racket and then a metal pole
`'6'` - traarz - sounds like a printer
`'7'` - wuwuwuwu - sounds like a UFO
`'8'` - flickfli - sounds like someone going through a paper tray
`'9'` - pshing dong - sounds like a cymbal and a ding dong
`'10'` - bzing - sounds like a quick zing (honestly)
`'11'` - tadaw - sounds like a clown noise
`'12'` - shplow - sounds like a PVC pipe being hit
`'13'` - tshlshlsh - sounds like a notes counter
`'14'` - miaaaaaa - sounds like a cat being harassed
`'15'` - miaoowww - sounds like a hungry cat

##### get()

```js
feature.get('soundId')
// returns: "0"
```

##### set()

```js
feature.set({'soundId':"-1"})
//Remember the soundId has to be a String
```

##### default

`"0"`

#### type
`String`; 

##### get()

```js
feature.get('type')
/* or */
feature.type
// returns: "button"
```

#### How to use
Using the scripting field, you can listen to clicks with

```js
feature.on('click',e=>{
Your action when click here
})
```

You can also know who clicked the button by doing:

```js
feature.on('click',e=>{
console.log(e.player)
})
```

## <img width='32' src='https://www.cryptovoxels.com/icons/image.png' /> Image {#image}


### Scripting Properties
### Scripting Properties {.tabset}
#### url
`String`; Links must be `https://` and must finish with an extension such as `.jpg/.gif/.png`.

##### get()

```js
feature.get('url')
// returns: "https://..."
```

##### set()

```js
feature.set({'url':"https://www.myurl.com/file.png"})
```

##### default

`""`

#### link
`String`; Links must be `https://`.

##### get()

```js
feature.get('link')
// returns: "https://..."
```

##### set()

```js
feature.set({'link':"https://www.myurl.com/"})
```

##### default

`""`


#### blendMode
`String`

##### get()

```js
feature.get('blendMode')
// returns: 'Combine'
```

##### set()

```js
feature.set({'blendMode': 'Combine'})
```

##### default

`"Multiply"`

#### updateDaily
`Boolean.`

##### get()

```js
feature.get('updateDaily')
// returns: false
```

##### set()

```js
feature.set({'updateDaily': true})
```

##### default

`false`

#### transparent
`Boolean.`

##### get()

```js
feature.get('transparent')
// returns: false
```

##### set()

```js
feature.set({'transparent': true})
```

##### default

`false`

#### stretched
`Boolean.`

##### get()

```js
feature.get('stretched')
// returns: false
```

##### set()

```js
feature.set({'stretched': true})
```

##### default

`false`


#### uScale
`Integer`

##### get()

```js
feature.get('uScale')
// returns: 1
```

##### set()

```js
feature.set({'uScale': 1})
```

##### default

`1`

#### vScale
`Integer`

##### get()

```js
feature.get('vScale')
// returns: 1
```

##### set()

```js
feature.set({'vScale': 1})
```

##### default

`1`

#### type
`String`;

##### get()

```js
feature.get('type')
/* or */
feature.type

// returns: 'image'
```



## <img width='32' src='https://www.cryptovoxels.com/icons/megavox.png' /> Megavox {#megavox}


### Scripting Properties
### Scripting Properties {.tabset}
#### url
`String`; Links must be `https://` and must finish with a vox extension `.vox`
Has to link to a 126x126x126 vox model.

##### get()

```js
feature.get('url')
// returns: "https://..."
```

##### set()

```js
feature.set({'url':"https://www.myurl.com/file.vox"})
```

##### default

`""`

#### link
`String`; Links must be `https://`.

##### get()

```js
feature.get('link')
// returns: "https://..."
```

##### set()

```js
feature.set({'link':"https://www.myurl.com/"})
```

##### default

`""`

#### collidable
`Boolean`

##### get()

```js
feature.get('collidable')
// returns: false
```

##### set()

```js
feature.set({'collidable': true})
```

##### default

`false`

#### type
`String`;

##### get()

```js
feature.get('type')
/* or */
feature.type

// returns: 'megavox'
```

## <img width='32' src='https://www.cryptovoxels.com/icons/particle.png'/> Particles {#particles}


### Scripting Properties
### Scripting Properties {.tabset}
#### url
`String`; Links must be `https://` and must finish with an extension such as `.jpg/.gif/.png`.
> If you set an URL, the custom colors color1 and color2 will be ignored.
{.is-info}

##### get()

```js
feature.get('url')
// returns: "https://..."
```

##### set()

```js
feature.set({'url':"https://www.myurl.com/file.png"})
```

##### default

`""`

#### emitRate
`Double`; Must be a number between 0 and 100.

##### get()

```js
feature.get('emitRate')
// returns: 50.0
```

##### set()

```js
feature.set({'emitRate':52})
```

##### default

`50`


#### minSize
`Double`; Must be a number between 0 and 1.

##### get()

```js
feature.get('minSize')
// returns: 0.5
```

##### set()

```js
feature.set({'minSize':0.5})
```

##### default

`0.5`


#### maxSize
`Double`; Must be a number between 0 and 1.

##### get()

```js
feature.get('maxSize')
// returns: 0.5
```

##### set()

```js
feature.set({'maxSize':0.5})
```

##### default

`0.5`

#### color1
`String`- hexadecimal; 

##### get()

```js
feature.get('color1')
// returns: "#4cb844"
```

##### set()

```js
feature.set({'color1':"#4cb844"})
```

##### default

`#000000`

#### color2
`String`- hexadecimal; 

##### get()

```js
feature.get('color2')
// returns: "#4cb888"
```

##### set()

```js
feature.set({'color2':"#4cb844"})
```

##### default

`"#000000"`


#### type
`String`;

##### get()

```js
feature.get('type')
/* or */
feature.type

// returns: 'particles'
```





## <img width='32' src='//www.cryptovoxels.com/icons/polytext.png' /> PolyText {#polytext}

### Scripting Properties
### Scripting Properties {.tabset}
#### url
`String`; 

##### get()

```js
feature.get('text')
// returns: "My new text"
```

##### set()

```js
feature.set({'text':"My new text"})
```

##### default

`""`


#### edges
`Boolean`

##### get()

```js
feature.get('edges')
// returns: false
```

##### set()

```js
feature.set({'edges': true})
```

##### default

`false`

#### type
`String`; 

##### get()

```js
feature.get('type')
/* or */
feature.type
// returns: "polytext"
```



## <img width='32' src='//www.cryptovoxels.com/icons/text-input.png' /> Text input {#text-input-currently-nerfed}

### Scripting Properties
### Scripting Properties {.tabset}
#### text
`String`; 

##### get()

```js
feature.get('text')
// returns: "my text"
```

##### set()

```js
feature.set({'text':"my text"})
```

##### default

`""`

#### placeholder
`String`; 

##### get()

```js
feature.get('placeholder')
// returns: "my text"
```

##### set()

```js
feature.set({'placeholder':"my text"})
```

##### default

`"placeholder"`

#### type
`String`;

##### get()

```js
feature.get('type')
/* or */
feature.type

// returns: 'text-input'
```



## <img width='16' src='//www.cryptovoxels.com/icons/youtube.png' /> YouTube / Twitch {#youtube-twitch}

### Scripting Properties
### Scripting Properties {.tabset}
#### url
`String`; Links must be `https://` and must either be a `youtube, twitch, soundcloud, spotify`.

##### get()

```js
feature.get('url')
// returns: "https://..."
```

##### set()

```js
feature.set({'url':"https://www.youtube.com/?v=..."})
```

##### default

`""`

#### previewUrl
`String`; Links must be `https://` and must either be a `.png,.gif,jpg`.

##### get()

```js
feature.get('previewUrl')
// returns: "https://..."
```

##### set()

```js
feature.set({'previewUrl':"https://..."})
```

##### default

`""`

#### screenRatio
`String`; Links must be `https://` and must either be a `.png,.gif,jpg`.

##### get()

```js
feature.get('screenRatio')
// returns: "43"
```

##### set()

```js
feature.set({'screenRatio':"169"})
```

##### default

`"169"`

#### type
`String`;

##### get()

```js
feature.get('type')
/* or */
feature.type

// returns: 'youtube'
```

### Scripting methods
### Scripting methods {.tabset}

#### play()

```js
feature.play()
```
plays the video

#### feature.pause()
```js
feature.pause()
```
pauses the video

## <img width='32' src='https://www.cryptovoxels.com/icons/audio.png' /> Boombox {#boombox}

### Scripting Properties
### Scripting Properties {.tabset}
#### rollOffFactor
`Double`; Value ranging from 0 to 5

##### get()

```js
feature.get('rolloffFactor')
// returns: 1.6
```

##### set()

```js
feature.set({'rolloffFactor':1.6})
```

##### default

`1`


## <img width='32' src='https://www.cryptovoxels.com/icons/nft-image.png'/> Nft image {#nft-image}
### Scripting Properties
### Scripting Properties {.tabset}
#### url
`String`; Links must be `https://`.

##### get()

```js
feature.get('url')
// returns: "https://..."
```

##### set()

```js
feature.set({'url':"https://www.opensea.io/"})
```

##### default

`""`

#### stretch
`Boolean`; 

##### get()

```js
feature.get('stretch')
// returns: "https://..."
```

##### set()

```js
feature.set({'stretch':true})
```

##### default

`false`

#### type
`String`;

##### get()

```js
feature.get('type')
/* or */
feature.type

// returns: 'nft-image'
```

## <img width='32' src='//www.cryptovoxels.com/icons/richtext.png' /> Richtext {#richtext}

### Scripting Properties
### Scripting Properties {.tabset}
#### text
`String`; 

##### get()

```js
feature.get('text')
// returns: "https://..."
```

##### set()

```js
feature.set({'text':"my paragraph"})
```

##### default

`""`
#### blendMode
`String`

##### get()

```js
feature.get('blendMode')
// returns: 'Combine'
```

##### set()

```js
feature.set({'blendMode': 'Combine'})
```

##### default

`"Multiply"`

#### inverted
`Boolean`; 

##### get()

```js
feature.get('inverted')
// returns: false
```

##### set()

```js
feature.set({'inverted': true})
```

##### default

`false`

#### type
`String`;

##### get()

```js
feature.get('type')
/* or */
feature.type

// returns: 'richtext'
```




## <img width='32' src='//www.cryptovoxels.com/icons/sign.png' /> Sign {#sign}
### Scripting Properties
### Scripting Properties {.tabset}
#### text
`String`; 

##### get()

```js
feature.get('text')
// returns: "my line of text"
```

##### set()

```js
feature.set({'text':"my line of text"})
```

##### default

`""`

#### link
`String`; 

##### get()

```js
feature.get('link')
// returns: "https://..."
```

##### set()

```js
feature.set({'link':"https://..."})
```

##### default

`""`

#### fontSize
`Integer`; 

##### get()

```js
feature.get('fontSize')
// returns: 25
```

##### set()

```js
feature.set({'fontSize':25})
```

##### default

`25`

#### color
`String`-hexadecimal; 

##### get()

```js
feature.get('color')
// returns: "#00000"
```

##### set()

```js
feature.set({'color':"#fcba03"})
```

##### default

`"#00000"`

#### background
`String`-hexadecimal; 

##### get()

```js
feature.get('background')
// returns: "#00000"
```

##### set()

```js
feature.set({'background':"#fcba03"})
```

##### default

`"#fffff"`

#### type
`String`;

##### get()

```js
feature.get('type')
/* or */
feature.type

// returns: 'sign'
```





## <img width='32' src='//www.cryptovoxels.com/icons/video.png' /> Video {#video}

### Scripting Properties
### Scripting Properties {.tabset}
#### url
`String`; Has to start with `https://` and has to end with a video extension such as `.mp4`.

##### get()

```js
feature.get('url')
// returns: "https://..."
```

##### set()

```js
feature.set({'url':"https://..."})
```

##### default

`""`

#### previewUrl
`String`; Links must be `https://` and must either be a `.png,.gif,.jpg`.

##### get()

```js
feature.get('previewUrl')
// returns: "https://..."
```

##### set()

```js
feature.set({'previewUrl':"https://..."})
```

##### default

`""`

#### type
`String`;

##### get()

```js
feature.get('type')
/* or */
feature.type

// returns: 'video'
```


### Scripting methods
### Scripting methods {.tabset}

#### play()

```js
feature.play()
```
plays the video

#### pause()
```js
feature.pause()
```
pauses the video

## <img width='32' src='//www.cryptovoxels.com/icons/vox-model.png' /> .VOX {#vox}

### Scripting Properties
### Scripting Properties {.tabset}
#### url
`String`; Links must be `https://` and must finish with a vox extension `.vox`
Has to link to a 32x32x32 vox model or smaller.

##### get()

```js
feature.get('url')
// returns: "https://..."
```

##### set()

```js
feature.set({'url':"https://www.myurl.com/file.vox"})
```

##### default

`""`

#### link
`String`; Links must be `https://`.

##### get()

```js
feature.get('link')
// returns: "https://..."
```

##### set()

```js
feature.set({'link':"https://www.myurl.com/"})
```

##### default

`""`

#### collidable
`Boolean`

##### get()

```js
feature.get('collidable')
// returns: false
```

##### set()

```js
feature.set({'collidable': true})
```

##### default

`false`

#### type
`String`;

##### get()

```js
feature.get('type')
/* or */
feature.type

// returns: 'vox-model'
```