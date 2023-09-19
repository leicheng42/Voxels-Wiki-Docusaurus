# 井字游戏

## 井字游戏

一局井字游戏

![tictactoe.png](/tictactoe.png)

#### 如何使用

1. 使用[此链接](https://cdn.discordapp.com/attachments/573736707984457738/733838799150514276/ttt-board.vox)创建井字游戏 Vox 模型。
2. 添加十字 Vox 模型，使用[此链接](https://cdn.discordapp.com/attachments/573736707984457738/733842407073775616/cross.vox)，并设置 ID 为 `cross`。
3. 添加零 Vox 模型，使用[此链接](https://cdn.discordapp.com/attachments/573736707984457738/733842416276340798/nought.vox)，并设置 ID 为 `nought`。
4. 将此脚本添加到井字游戏板上。
5. 刷新地块。

#### 脚本

```js
let o = parcel.getFeatureById('nought')
let x = parcel.getFeatureById('cross')

let clones = []
let nought = true

feature.on('click', e => {
  if (clones.length === 9) {
    clones.forEach(c => c.remove())
    clones = []
  }
  
  let c = (nought ? o : x).clone()
  c.position.copyFrom(e.point)
  clones.push(c)
  
  nought = !nought
})
```

#### 改进

* 检测胜者并画一条线
* 需要两名玩家（一旦多人游戏得以实现）