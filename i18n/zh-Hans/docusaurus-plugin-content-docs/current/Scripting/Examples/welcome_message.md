# 欢迎/告别标志

## 欢迎/告别标志
在访客进入/离开您的地块时欢迎他们！

![welcome-goodbye_example.png](/welcome-goodbye_example.png)

#### 过程

1. 放置两个标志，将第一个标志的 ID 设置为 `welcometxt`。
2. 在第二个标志上放置以下脚本：

```js
let msg = parcel.getFeatureById('welcometxt')

parcel.on('playerenter', event => { 
  msg.set({text:"欢迎"})
  feature.set({text:event.player.name})

  console.log(event.player.name)
})

parcel.on('playerleave', event => { 
  msg.set({text:"再见"})
  feature.set({text:event.player.name})

  console.log(event.player.name)
})
```

#### 发生了什么
脚本会检测用户何时进入/离开地块，并检索玩家的姓名。
它将显示 "欢迎 玩家名字" 或 "再见 玩家名字"。