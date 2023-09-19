# 陷阱门
改变 Vox 的可碰撞属性

## 陷阱门
在这个示例中，我们制作一个具有动态可碰撞属性的对象

![wooden_trap_door_example.png](/wooden_trap_door_example.png)
### 过程
1. 放置一个 Vox 模型（[您可以使用这个陷阱门模型](/wooden_trap_door.vox)）和一个按钮。
2. 将 Vox 模型的 ID 设置为 "trapdoor"。
3. 在按钮上添加以下脚本。

```js
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
**它的作用是什么:**
陷阱门最初是可碰撞的，按下按钮将切换 Vox 的可碰撞状态。

#### 增加一个定时器怎么样？
假设我们希望门在变回可碰撞之前的一小段时间内不可碰撞。这样才是一个真正的陷阱！

```js
let b = parcel.getFeatureById('trapdoor')

b.set({collidable:true})
let timeNonCollidable = 1 // 以秒为单位的时间

feature.on('click',e=>{
    b.set({collidable:false})
    setTimeout(()=>{b.set({collidable:true})},timeNonCollidable*1000)
  
})

```
只需更改变量 `timeNonCollidable` 为陷阱门应该变为不可碰撞的秒数。

#### 网格
现在这很有趣，但如果您看不到陷阱的目标被困住，那就不好玩了。
为此，建议您转到您的地块设置，并勾选 "网格" 复选框。
![grid-settings.png](/grid-settings.png)