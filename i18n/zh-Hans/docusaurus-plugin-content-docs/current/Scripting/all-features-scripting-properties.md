# 特性脚本速查表
包含所有特性属性和方法的一页

## 目录
- [音频](#音频)
- [按钮](#按钮)
- [图像](#图像)
- [Megavox](#megavox)
- [粒子](#粒子)
- [Polytext](#polytext)
- [文本输入](#文本输入-目前已被限制)
- [YouTube / Twitch](#youtube-twitch)
- [Boombox](#boombox)
- [NFT 图像](#nft-图像)
- [富文本](#富文本)
- [标志](#标志)
- [视频](#视频)
- [.VOX 模型](#vox)
<hr />

## <img width='32' src='https://www.cryptovoxels.com/icons/audio.png' /> 音频 {#音频} 
### 脚本属性
### 脚本属性 {.tabset}
#### url
`字符串`; 链接必须以 `https://` 开头，必须以音频文件扩展名结尾，如 `.mp3`

##### 获取()

```js
feature.get('url')
// 返回: "https://..."
```

##### 设置()

```js
feature.set({'url':"https://www.myurl.com/file.mp3"})
```

##### 默认值

`""`

#### sprite
`布尔值`

##### 获取()

```js
feature.get('sprite')
// 返回: false
```

##### 设置()

```js
feature.set({'sprite': true})
```

##### 默认值

`false`

#### streaming
`布尔值`

##### 获取()

```js
feature.get('streaming')
// 返回: false
```

##### 设置()

```js
feature.set({'streaming': true})
```
##### 默认值

`false`

#### autoplay
`布尔值`

##### 获取()

```js
feature.get('autoplay')
// 返回: false
```

##### 设置()

```js
feature.set({'autoplay': true})
```
##### 默认值

`false`

#### loop
`布尔值`

##### 获取()

```js
feature.get('loop')
// 返回: false
```

##### 设置()

```js
feature.set({'loop': true})
```

##### 默认值

`false`

#### rolloffFactor
`双精度`; 取值范围从 0 到 5

##### 获取()

```js
feature.get('rolloffFactor')
// 返回: 1.6
```

##### 设置()

```js
feature.set({'rolloffFactor': 1.6})
```

##### 默认值

`1.6`

#### volume
`双精度`; 取值范围从 0 到 1

##### 获取()

```js
feature.get('volume')
// 返回: 0.5
```

##### 设置()

```js
feature.set({'volume': 0.5})
```

##### 默认值

`0.5`

#### type
`字符串`

##### 获取()

```js
feature.get('type')
/* 或者 */
feature.type

// 返回: 'audio'
```

### 脚本方法
### 脚本方法 {.tabset}
#### play()
```js
feature.play()
```
播放音频

#### pause()
```js
feature.pause()
```
暂停音频

## <img width='32' src='https://www.cryptovoxels.com/icons/button.png' /> 按钮 {#按钮}


### 脚本属性
### 脚本属性 {.tabset}
#### color
`字符串`; 选项为 'white', 'red', 'green', 和 'blue'。

##### 获取()

```js
feature.get('color')
// 返回: "red"
```

##### 设置()

```js
feature.set({'color':"blue"})
```

##### 默认值

`"red"`

#### soundId
`整数`; 可以是范围在 0 到 14 的整数。

`'-1'` - 无
`'0'` - 叮咚
`'1'` - 乒乓
`'2'` - pshlick - 声音像液压触发器
`'3'` - breet - 声音像 PC 尝试连接互联网
`'4'` - claclack - 声音像有人疯狂敲击键盘
`'5'` - tpow Cling - 声音像球击中球拍然后撞到金属杆
`'6'` - traarz - 声音像打印机
`'7'` - wuwuwuwu - 声音像不明飞行物
`'8'` - flickfli - 声音像有人在纸盒中翻找东西
`'9'` - pshing dong - 声音像铙钹和叮咚
`'10'` - bzing - 声音像快速的嗡嗡声（老实说）
`'11'` - tadaw - 声音像小丑的噪音
`'12'` - shplow - 声音像 PVC 管子被击中
`'13'` - tshlshlsh - 声音像票据计数器
`'14'` - miaaaaaa - 声音像一只被骚扰的猫
`'15'` - miaoowww - 声音像一只饥饿的猫

##### 获取()

```js
feature.get('soundId')
// 返回: "0"
```

##### 设置()

```js
feature.set({'soundId':"-1"})
//请记住，soundId 必须是字符串
```

##### 默认值

`"0"`

#### type
`字符串`; 

##### 获取()

```js
feature.get('type')
/* 或者 */
feature.type
// 返回: "button"
```

#### 如何使用
通过脚本字段，您可以监听点击事件：

```js
feature.on('click', e => {
    // 在此处执行单击操作
})
```

您还可以通过以下方式知道谁点击了按钮：

```js
feature.on('click', e => {
    console.log(e.player)
})
```

## <img width='32' src='https://www.cryptovoxels.com/icons/image.png' /> 图像 {#图像}


### 脚本属性
### 脚本属性 {.tabset}
#### url
`字符串`; 链接必须以 `https://` 开头，必须以扩展

名结尾，如 `.jpg/.gif/.png`。

##### 获取()

```js
feature.get('url')
// 返回: "https://..."
```

##### 设置()

```js
feature.set({'url':"https://www.myurl.com/file.png"})
```

##### 默认值

`""`

#### link
`字符串`; 链接必须以 `https://` 开头。

##### 获取()

```js
feature.get('link')
// 返回: "https://..."
```

##### 设置()

```js
feature.set({'link':"https://www.myurl.com/"})
```

##### 默认值

`""`


#### blendMode
`字符串`

##### 获取()

```js
feature.get('blendMode')
// 返回: 'Combine'
```

##### 设置()

```js
feature.set({'blendMode': 'Combine'})
```

##### 默认值

`"Multiply"`

#### updateDaily
`布尔值`

##### 获取()

```js
feature.get('updateDaily')
// 返回: false
```

##### 设置()

```js
feature.set({'updateDaily': true})
```

##### 默认值

`false`

#### transparent
`布尔值`

##### 获取()

```js
feature.get('transparent')
// 返回: false
```

##### 设置()

```js
feature.set({'transparent': true})
```

##### 默认值

`false`

#### stretched
`布尔值`

##### 获取()

```js
feature.get('stretched')
// 返回: false
```

##### 设置()

```js
feature.set({'stretched': true})
```

##### 默认值

`false`


#### uScale
`整数`

##### 获取()

```js
feature.get('uScale')
// 返回: 1
```

##### 设置()

```js
feature.set({'uScale': 1})
```

##### 默认值

`1`

#### vScale
`整数`

##### 获取()

```js
feature.get('vScale')
// 返回: 1
```

##### 设置()

```js
feature.set({'vScale': 1})
```

##### 默认值

`1`

#### type
`字符串`;

##### 获取()

```js
feature.get('type')
/* 或者 */
feature.type

// 返回: 'image'
```



## <img width='32' src='https://www.cryptovoxels.com/icons/megavox.png' /> Megavox {#megavox}


### 脚本属性
### 脚本属性 {.tabset}
#### url
`字符串`; 链接必须以 `https://` 开头，必须以 `.vox` 扩展名结尾。
链接到一个 126x126x126 的 vox 模型。

##### 获取()

```js
feature.get('url')
// 返回: "https://..."
```

##### 设置()

```js
feature.set({'url':"https://www.myurl.com/file.vox"})
```

##### 默认值

`""`

#### link
`字符串`; 链接必须以 `https://` 开头。

##### 获取()

```js
feature.get('link')
// 返回: "https://..."
```

##### 设置()

```js
feature.set({'link':"https://www.myurl.com/"})
```

##### 默认值

`""`

#### collidable
`布尔值`

##### 获取()

```js
feature.get('collidable')
// 返回: false
```

##### 设置()

```js
feature.set({'collidable': true})
```

##### 默认值

`false`

#### type
`字符串`;

##### 获取()

```js
feature.get('type')
/* 或者 */
feature.type

// 返回: 'megavox'
```

## <img width='32' src='https://www.cryptovoxels.com/icons/particle.png'/> 粒子 {#粒子}


### 脚本属性
### 脚本属性 {.tabset}
#### url
`字符串`; 链接必须以 `https://` 开头，必须以扩展名结尾，如 `.jpg/.gif/.png`。
:::info
如果您设置了 URL，自定义颜色 color1 和 color2 将被忽略。
:::

##### 获取()

```js
feature.get('url')
// 返回: "https://..."
```

##### 设置()

```js
feature.set({'url':"https://www.myurl.com/file.png"})
```

##### 默认值

`""`

#### emitRate
`双精度`; 必须是介于 0 和 100 之间的数字。

##### 获取()

```js
feature.get('emitRate')
// 返回: 50.0
```

##### 设置()

```js
feature.set({'emitRate':52})
```

##### 默认值

`50`


#### minSize
`双精度`; 必须是介于 0 和 1 之间的数字。

##### 获取()

```js
feature.get('minSize')
// 返回: 0.5
```

##### 设置()

```js
feature.set({'minSize':0.5})
```

##### 默认值

`0.5`


#### maxSize
`双精度`; 必须是介于 0 和 1 之间的数字。

##### 获取()

```js
feature.get('maxSize')
// 返回: 0.5
```

##### 设置()

```js
feature.set({'maxSize':0.5})
```

##### 默认值

`0.5`

#### color1
`字符串`- 十六进制; 

##### 获取()

```js
feature.get('color1')
// 返回: "#4cb844"
```

##### 设置()

```js
feature.set({'color1':"#4cb844"})
```

##### 默认值

`#000000`

#### color2
`字符串`- 十六进制; 

##### 获取()

```js
feature.get('color2')
// 返回: "#4cb888"
```

##### 设置()

```js
feature.set({'color2':"#4cb844"})
```

##### 默认值

`"#000000"`


#### type
`字符串`;

##### 获取()

```js
feature.get('type')
/* 或者 */
feature.type

// 返回: 'particles'
```





## <img width='32' src='//www.cryptovoxels.com/icons/polytext.png' /> PolyText {#polytext}

### 脚本属性
### 脚本属性 {.tabset}
#### url
`字符串`; 

##### 获取()

```js
feature.get('text')
// 返回: "My new text"
```

##### 设置()

```js
feature.set({'text':"My new

 text"})
```

##### 默认值

`""`


#### edges
`布尔值`

##### 获取()

```js
feature.get('edges')
// 返回: false
```

##### 设置()

```js
feature.set({'edges': true})
```

##### 默认值

`false`

#### type
`字符串`; 

##### 获取()

```js
feature.get('type')
/* 或者 */
feature.type
// 返回: "polytext"
```



## <img width='32' src='//www.cryptovoxels.com/icons/text-input.png' /> Text input {#text-input-currently-nerfed}

### 脚本属性
### 脚本属性 {.tabset}
#### text
`字符串`; 

##### 获取()

```js
feature.get('text')
// 返回: "my text"
```

##### 设置()

```js
feature.set({'text':"my text"})
```

##### 默认值

`""`

#### placeholder
`字符串`; 

##### 获取()

```js
feature.get('placeholder')
// 返回: "my text"
```

##### 设置()

```js
feature.set({'placeholder':"my text"})
```

##### 默认值

`"placeholder"`

#### type
`字符串`;

##### 获取()

```js
feature.get('type')
/* 或者 */
feature.type

// 返回: 'text-input'
```



## <img width='16' src='//www.cryptovoxels.com/icons/youtube.png' /> YouTube / Twitch {#youtube-twitch}

### 脚本属性
### 脚本属性 {.tabset}
#### url
`字符串`; 链接必须以 `https://` 开头，必须是 `youtube, twitch, soundcloud, spotify` 之一。

##### 获取()

```js
feature.get('url')
// 返回: "https://..."
```

##### 设置()

```js
feature.set({'url':"https://www.youtube.com/?v=..."})
```

##### 默认值

`""`

#### previewUrl
`字符串`; 链接必须以 `https://` 开头，必须以 `.png,.gif,jpg` 之一结尾。

##### 获取()

```js
feature.get('previewUrl')
// 返回: "https://..."
```

##### 设置()

```js
feature.set({'previewUrl':"https://..."})
```

##### 默认值

`""`

#### screenRatio
`字符串`; 链接必须以 `https://` 开头，必须以 `.png,.gif,jpg` 之一结尾。

##### 获取()

```js
feature.get('screenRatio')
// 返回: "43"
```

##### 设置()

```js
feature.set({'screenRatio':"169"})
```

##### 默认值

`"169"`

#### type
`字符串`;

##### 获取()

```js
feature.get('type')
/* 或者 */
feature.type

// 返回: 'youtube'
```

### 脚本方法
### 脚本方法 {.tabset}

#### play()

```js
feature.play()
```
播放视频

#### feature.pause()
```js
feature.pause()
```
暂停视频

## <img width='32' src='https://www.cryptovoxels.com/icons/audio.png' /> Boombox {#boombox}

### 脚本属性
### 脚本属性 {.tabset}
#### rollOffFactor
`双精度`; 取值范围从 0 到 5

##### 获取()

```js
feature.get('rolloffFactor')
// 返回: 1.6
```

##### 设置()

```js
feature.set({'rolloffFactor':1.6})
```

##### 默认值

`1`


## <img width='32' src='https://www.cryptovoxels.com/icons/nft-image.png'/> Nft image {#nft-image}
### 脚本属性
### 脚本属性 {.tabset}
#### url
`字符串`; 链接必须以 `https://` 开头。

##### 获取()

```js
feature.get('url')
// 返回: "https://..."
```

##### 设置()

```js
feature.set({'url':"https://www.opensea.io/"})
```

##### 默认值

`""`

#### stretch
`布尔值`; 

##### 获取()

```js
feature.get('stretch')
// 返回: "https://..."
```

##### 设置()

```js
feature.set({'stretch':true})
```

##### 默认值

`false`

#### type
`字符串`;

##### 获取()

```js
feature.get('type')
/* 或者 */
feature.type

// 返回: 'nft-image'
```

## <img width='32' src='//www.cryptovoxels.com/icons/richtext.png' /> Richtext {#richtext}

### 脚本属性
### 脚本属性 {.tabset}
#### text
`字符串`; 

##### 获取()

```js
feature.get('text')
// 返回: "https://..."
```

##### 设置()

```js
feature.set({'text':"my paragraph"})
```

##### 默认值

`""`
#### blendMode
`字符串`

##### 获取()

```js
feature.get('blendMode')
// 返回: 'Combine'
```

##### 设置()

```js
feature.set({'blendMode': 'Combine'})
```

##### 默认值

`"Multiply"`

#### inverted
`布尔值`; 

##### 获取()

```js
feature.get('inverted')
// 返回: false
```

##### 设置()

```js
feature.set({'inverted': true})
```

##### 默认值

`false`

#### type
`字符串`;

##### 获取()

```js
feature.get('type')
/* 或者 */
feature.type

// 返回: 'richtext'
```




## <img width='32' src='//www.cryptovoxels.com/icons/sign.png' /> Sign {#sign}
### 脚本属性
### 脚本属性 {.tabset}
#### text
`字符串`; 

##### 获取()

```js
feature.get('text')
// 返回: "my line of text"
```

##### 设置()

```js
feature.set({'text':"my line of text"})
```

##### 默认值

`""`

#### link
`字符串`; 

##### 获取()

```js
feature.get('link')
// 返回: "https://..."
```

##### 设置()

```js
feature.set({'link':"https://..."})
```

##### 默认值

`""`

#### fontSize
`整数`; 

##### 获取()

```js
feature.get('fontSize')
// 返回: 25
```

##### 设置()

```js
feature.set({'fontSize':25})
```

##### 默认值

`25`

#### color
`字符串`- 十六进制; 

##### 获取()

```js
feature.get('color')
// 返回: "#00000"
```

##### 设置()

```js
feature.set({'color':"#fcba03"})
```

##### 默认值

`"#00000"`

#### background
`字符串`- 十六进制; 

##### 获取()

```js
feature.get('background')
// 返回: "#00000"
```

##### 设置()

```js
feature.set({'

background':"#fcba03"})
```

##### 默认值

`"transparent"`

#### type
`字符串`;

##### 获取()

```js
feature.get('type')
/* 或者 */
feature.type

// 返回: 'sign'
```



## <img width='32' src='https://www.cryptovoxels.com/icons/video.png' /> 视频 {#video}

### 脚本属性
### 脚本属性 {.tabset}
#### url
`字符串`; 链接必须以 `https://` 开头，必须以 `.mp4` 扩展名结尾。

##### 获取()

```js
feature.get('url')
// 返回: "https://..."
```

##### 设置()

```js
feature.set({'url':"https://www.myurl.com/file.mp4"})
```

##### 默认值

`""`

#### transparent
`布尔值`

##### 获取()

```js
feature.get('transparent')
// 返回: false
```

##### 设置()

```js
feature.set({'transparent': true})
```

##### 默认值

`false`

#### stretched
`布尔值`

##### 获取()

```js
feature.get('stretched')
// 返回: false
```

##### 设置()

```js
feature.set({'stretched': true})
```

##### 默认值

`false`

#### uScale
`整数`

##### 获取()

```js
feature.get('uScale')
// 返回: 1
```

##### 设置()

```js
feature.set({'uScale': 1})
```

##### 默认值

`1`

#### vScale
`整数`

##### 获取()

```js
feature.get('vScale')
// 返回: 1
```

##### 设置()

```js
feature.set({'vScale': 1})
```

##### 默认值

`1`

#### type
`字符串`;

##### 获取()

```js
feature.get('type')
/* 或者 */
feature.type

// 返回: 'video'
```




## <img width='32' src='https://www.cryptovoxels.com/icons/vox.png' /> .VOX 模型 {#vox}

### 脚本属性
### 脚本属性 {.tabset}
#### url
`字符串`; 链接必须以 `https://` 开头，必须以 `.vox` 扩展名结尾。

##### 获取()

```js
feature.get('url')
// 返回: "https://..."
```

##### 设置()

```js
feature.set({'url':"https://www.myurl.com/file.vox"})
```

##### 默认值

`""`

#### collidable
`布尔值`

##### 获取()

```js
feature.get('collidable')
// 返回: false
```

##### 设置()

```js
feature.set({'collidable': true})
```

##### 默认值

`false`

#### type
`字符串`;

##### 获取()

```js
feature.get('type')
/* 或者 */
feature.type

// 返回: 'vox'
```



<hr />

以上是特性脚本的速查表，其中包含了每种特性的属性和方法。您可以根据需要查找相应的特性，以便在构建 Cryptovoxels 场景时进行参考和使用。如果您需要特定的帮助或示例代码，请随时询问！