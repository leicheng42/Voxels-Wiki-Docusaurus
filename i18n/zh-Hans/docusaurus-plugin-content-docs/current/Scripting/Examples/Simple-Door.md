# 简单的门

一个简单的门，通过点击打开和关闭。
![simple_door_example.gif](/simple_door_example.gif)

## 1. 获取您的门 Vox 模型。

**首先，在制作 Vox 模型时，请确保使旋转中心位于正确的位置。**

- [了解如何制作 Vox 模型](/docs/Parcels/Make-Vox-Model)
- [了解真实的旋转中心](/docs/Scripting/Animation-API#center-of-rotation)

为了让您的生活更轻松，您可以随时使用和修改[我在上面的 GIF 中使用的门。](/door_edited_centered.vox)

在编辑模型时，您必须确保保持旋转轴在 `x:20` 和 `y:15` 上。在我分享的门模型中，它由黑色体素标记。
![simple_door_centered_script_example.png](/simple_door_centered_script_example.png)

## 2. 放置并添加脚本

将您的 .vox 特性放置在世界中（请参阅[这里](/docs/Parcels/Make-Vox-Model)以了解如何放置在世界中或托管您的模型），然后添加以下脚本：
```js
let closed = true

feature.on('click',e=>{

  if(closed){
  		feature.rotation.y=0
  }else{
      feature.rotation.y=1.57   

  }
closed=!closed
})
```

## 3. 自定义
- 如果 **2.** 中的脚本打开而不是关闭您的门，请在第 1 行将 `closed` 更改为 `false`。

- 如果您想部分打开门，而不是完全打开门，请更改 `open` 角度。因此，如果您的门在弧度角为 0 时打开，请将其更改为 0.5 或 -0.5，具体取决于它是拉门还是推门。这可能需要一些试错。

玩得开心！