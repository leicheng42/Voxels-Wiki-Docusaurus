# 让 Vox 模型面向玩家

## 让 Vox 模型面向玩家

Vox 模型将跟随分区内的第一个玩家并转身以面向他们。

![turn-to-face.png](/turn-to-face.png)

#### 如何使用

1. 创建一个 Vox 模型。
2. 分配一个网址（示例外星人: `https://cdn.discordapp.com/attachments/573736707984457738/733461614107426836/aliem.vox`）。
3. 添加此脚本。
4. 重新加载分区。

#### 脚本

```js
setInterval(() => {
  let p = parcel.getPlayers()[0]
  
  if (!p) {
    return
  }

  let v1 = feature.position
  let v2 = p.position
  let angle = Math.atan2(v1.z - v2.z, v1.x - v2.x)

  feature.rotation.y = Math.PI / -2 - angle
}, 200)
```

#### 改进

重构以以 2hz 运行，并使用动画 API 平滑地在旋转之间进行动画。

> 颂扬 `Math.atan2`！