# 片段
可插入脚本编辑器的片段

## 代码片段：

### 单击时设置标志
```js
/* 更多信息请参阅 
/docs/Scripting/Examples/Click-trigger
*/

let textSign = parcel.getFeatureById('triggerResult')

feature.on('click',e=>{
    textSign.set({text:'点击了！'})
})
```

### 是否穿戴可穿戴物品

```js
/*
这将在玩家进入时检查玩家是否穿戴了可穿戴物品
使用 '.hasWearable(token_id,collection_id(optional))'
*/

parcel.on('playerenter',e=>{
  if(e.player.isAnonymous){
    // 如果玩家是匿名的，我们无法检查他是否有穿戴品。
    return false
  }
  console.log(e.player.hasWearable(94,1)) // 显示 true 或 false
})

```

### 玩家进入时播放

```js
// 不必要，视频和音频有一个`autoplay`功能
parcel.on('playerenter', () => {
  feature.play()
})
```

### 玩家离开时暂停

```js
parcel.on('playerleave', () => {
  feature.pause()
})
```

### 欢迎/告别信息

```js
/* 更多信息请参阅 
/docs/Scripting/Examples/welcome_message
*/

let msg = parcel.getFeatureById('welcometxt')

parcel.on('playerenter', event => {
  msg.set({text:"欢迎"})
  feature.set({text:event.name})

  console.log(event.name)
})

parcel.on('playerleave', event => {
  msg.set({text:"再见"})
  feature.set({text:event.name})

  console.log(event.name)
})
```

### 在计时器上更改特性网址
```js

/* 更多信息请参阅 
/docs/Scripting/Examples/loop-images-timer
*/

var url =["网址1",
"网址2",
"网址3",
"网址4"]

let numSecs=2 // 秒数

//-----------不要在这里触碰-----------
i=0
setInterval(()=>{
  if(i!=url.length){
    feature.set({url:url[i]})
    i++
  }else{
    i=0
  }
},numSecs*1000)
```

### 单击时删除

```js
feature.on('click', () => {
  feature.dispose()
})
```

### Youtube 影院
```js
/* 更多信息请参阅 
/docs/Scripting/Examples/Youtube_theater
*/

// 此代码在 Grid 上运行效果最佳！

let image = parcel.getFeatureById('video_object')

let input = parcel.getFeatureById('text_input')

function validateYouTubeUrl(url) {
    if (url != undefined || url != '') {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
            return true;
        } else {
            alert('无效');
            return false;
        }
    }
}


feature.on('click',e=>{
  const newurl = input.text

if(validateYouTubeUrl(newurl)){
  image.set({url:newurl})
}
})
```

### 可碰撞 - 按钮切换

```js
/* 更多信息请参阅 
/docs/Scripting/Examples/trap_door
*/


let b = parcel.getFeatureById('trapdoor')
let collide=true
b.set({collidable:true})

feature.on('click',e=>{
  if(collide){
    b.set({collidable:false})
    collide=!collide
  }else{
    b.set({collidable:true})
    collide=!collide
  }

})
```

### 可碰撞 - 按钮触发和恢复

```js
/* 更多信息请参阅 
/docs/Scripting/Examples/trap_door
*/

// 单击按钮将使项目不可碰撞
// 项目将在1秒后变为可碰撞

let b = parcel.getFeatureById('trapdoor')

b.set({collidable:true})
let timeNonCollidable = 1 // 秒数

feature.on('click',e=>{
    b.set({collidable:false})
    setTimeout(()=>{b.set({collidable:true})},timeNonCollidable*1000)

})
```

### 压力板

```js
/* 放置一个 vox 模型并给它以下网址: */
// /docs/vox_library/pressure-plate.vox

// 将其缩放设置为 [1, 0.75, 1]

// 在编辑器中选择`设置为触发器`，无需编辑其他设置

feature.on('trigger',e=>{
    console.log('我被踩了')
})
```

### 单击时传送

```js

feature.on('click',e=>{
	e.player.teleportTo('N@43W,250N,1U')
})
```

### 获取可收集物品

```js
/*
这将在'playerenter'时返回玩家的可收集物品
*/

parcel.on('playerenter',e=>{
  e.player.collectibles.forEach(c=>{
   console.log(c) 
  })
})

```
