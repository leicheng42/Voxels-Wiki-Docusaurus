# 基本 GUI：高级示例

## 带有按钮的 GUI
使用 [basicGUI API](/docs/Scripting/basic-gui-api) 在单击时显示 GUI

#### 过程

1. 为了本示例，放置一个按钮
2. 在功能上放置以下脚本：

```js
// 创建 GUI
let gui  = feature.createBasicGui()
feature.on('click',e=>{
    if(gui.showing){
    // 如果 GUI 正在显示，隐藏它（就像切换开关）
    gui.destroy()
    return
  }

  // 添加第一个控件：
  let textControl =gui.addText('你好!')

    // 在其下添加一个按钮
  let leftButton = gui.addButton('左边',[1,0])
      // 在其下添加一个按钮
  let rightButton = gui.addButton('右边',[1,1])

  // 调用 GUI 显示出来
  gui.show()

  rightButton.on('click',e=>{
    // 当右按钮被点击时
    textControl.text = '右边被点击'
    // 调用 update 来更新控件
    textControl.update()
  })
    leftButton.on('click',e=>{
      // 当左按钮被点击时
    textControl.text = '左边被点击'
      // 调用 update 来更新控件
     textControl.update()
  })
})
```

3. 如果您想要在触发器而不是点击时发生这种情况，请将第一个 'click' 替换为 'trigger'

#### 发生了什么
该脚本侦听单击事件，并在单击时切换图形界面的打开/关闭状态。它还显示两个按钮并根据点击做出反应。
![[basicgui]buttonsexample.png](/scripting/[basicgui]buttonsexample.png)