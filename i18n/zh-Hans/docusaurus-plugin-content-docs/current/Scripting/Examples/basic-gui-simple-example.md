# 基本GUI：简单示例

## 单击时显示或隐藏基本GUI
使用[basicGUI API](/docs/Scripting/basic-gui-api)在单击时显示GUI

#### 过程

1. 为了本示例，请放置一个按钮
2. 在特性上放置以下脚本：

```js
// 创建GUI
let gui  = feature.createBasicGui()
feature.on('click',e=>{
	if(gui.showing){
    // 如果GUI已显示，则隐藏它（像切换一样）
  	gui.destroy()
    return
  }
  
  // 添加我们的第一个控件：
  gui.addText('你好！')
  
  // 调用GUI来显示。
  gui.show()
  
})
```

3. 如果您想要在触发而不是单击时执行此操作，请将'click'替换为'trigger'

#### 发生了什么
脚本会监听单击事件，并在单击时切换图形界面的显示/隐藏。