# 使 vox 模型可抓取

## 让玩家拿起一个 vox 模型
以下脚本将使一个特性变得“可抓取”。之所以加上双引号是因为我们在技术上采用了**欺骗**的艺术，使它看起来像我们抓取了它。例如：

![pick-up-bottle.gif](/pick-up-bottle.gif)

### 1. 放置一个 vox 模型。
并赋予它您想要的 URL。

### 2. 复制并粘贴此脚本
```js
// 让对象可抓取 v1.1 - Fayelure

let Distance_to_player=0.5 // 物体相对于玩家的距离（负数将在后方）
let up_down_constant= -0.65  // 正数会使物体抬高，负数会使物体降低。例如：-0.65 将物体放在您的手所在的位置，大致上。0 将使物体放在您眼睛的正上方。
let refresh_rate = 50 			// 毫秒数。请避免刷新速率小于 30，因为它可能会导致网格崩溃。

let clone = true; // 如果您不想克隆物体，请将此值更改为 false。

//-------------- 不要触碰 ---------------------------

function moveObject(object,player){ // 计算物体的新位置

  let spherePos = object.position;
  let playerRotation = player.rotation;

  let xDelta = Distance_to_player*Math.cos(-playerRotation.y+Math.PI/2 + Math.PI);
  let yDelta = Distance_to_player*Math.tan(playerRotation.x);
  let zDelta = Distance_to_player*Math.sin(-playerRotation.y+Math.PI/2 + Math.PI);

      var positionRell = [
    player.position.x - xDelta,
    player.position.y - yDelta +(up_down_constant),
    player.position.z - zDelta
  ];

return positionRell
}

function setPosition(newobject,e){ // 刷新位置
	newobject.set({position:moveObject(newobject,e.player)})
  if(!newobject.position || !newobject.rotation){
  	parcel.removeFeature(newobject)
  }else{
  setTimeout(()=>{
  	setPosition(newobject,e)
  },refresh_rate)
  }
}

feature.on('click',e=>{ // 单击时，创建新物体并开始刷新位置
let newobject = feature
if(clone){
newobject = parcel.createFeature('vox-model')
newobject.set({scale:[feature.scale.x,feature.scale.y,feature.scale.z]})

newobject.set({url:feature._content.url})
newobject.position=feature.position
newobject.rotation=feature.rotation
}

setPosition(newobject,e)

})

```

为了使这个脚本易于实施，您只需编辑前四行：
```js

let Distance_to_player=0.5 // 物体相对于玩家的距离（负数将在后方）
let up_down_constant= -0.65  // 正数会使物体抬高，负数会使物体降低。例如：-0.65 将物体放在您的手所在的位置，大致上
let refresh_rate = 50 			// 毫秒数。请避免刷新速率小于 30，因为它可能会导致网格崩溃。
let clone = true; // 如果您不想克隆物体，请将此值更改为 false。

```
### 3. 刷新
然后，一旦 parce 完全加载，脚本就会起作用。

### 4.（可选）激活网格
[激活网格](/docs/Scripting/TheGrid)将使您能够看到其他人拿起物体，并让其他人看到您与特性互动。

因为如果别人看不到您的酗酒问题，那有什么意义呢？

## 它是做什么的？
在单击时，脚本会创建一个新特性，并为其分配相同的 URL、位置和旋转以及原始特性。
然后，它会根据玩家的位置每隔 x 毫秒重新定位副本。

:::警告
尽情享受！请注意，这个脚本并不完美，因为它没有正确处理玩家离开 parce。因此，太多玩家拿起物体可能会导致网格的间隔饱和。谁知道呢？

我将随着时间的推移更新这个脚本。
:::