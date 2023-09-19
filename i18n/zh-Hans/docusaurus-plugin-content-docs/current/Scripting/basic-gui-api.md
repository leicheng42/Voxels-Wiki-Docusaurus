# 基本 GUI API

![[basicgui]example.png](/features/[basicgui]example.png)

## 基本 GUI 对象
本部分包括了基本 GUI 的属性、方法和事件。示例可在[脚本示例](/docs/Scripting/Examples)中找到。

### 构造函数 - new Gui(options?)

#### 选项:
**billBoardMode**
确定 GUI 是否应该跟随用户移动。
billBoardMode = 0 -> 无 billboard 效果
billBoardMode = 1 -> 在 X 轴上跟随用户（默认）
billBoardMode = 2 -> 在 Y 轴上跟随用户

例如: `new Gui({billBoardMode:0})`

### 属性

#### ID - `gui.id`
- 返回: 字符串，GUI 的唯一标识符。
- 可以设置。例如: `feature.id = 'myvoxId'`

#### Uuid - `gui.uuid`
- 返回: 字符串，GUI 的唯一 UUID。

#### feature - `gui.feature`
- 返回: Feature，父特性

#### showing - `gui.showing`
- 返回 GUI 是否显示。

#### listOfControls - `gui.listOfControls`
- 返回: 一个 guiControls 数组。

#### defaultControl - `gui.defaultControl`
- 返回默认控件的示例。

### 方法

#### addButton(text=null,positionInGrid=[0,0],id=null) - `gui.addButton('My button')`
- **参数:**
	- text（可选）: 一个字符串,
  - Id（可选）: 一个字符串,
  - positionInGrid（可选）: 一个包含 2 个整数的数组，第一个整数是行号，第二个是列号。
- **返回:** 一个按钮类型的 guiControl。

#### addText(text=null,positionInGrid=[0,0],id=null) - `gui.addtext('My text')`
- **参数:**
	- text（可选）: 一个字符串,
  - positionInGrid（可选）: 一个包含 2 个整数的数组，第一个整数是行号，第二个是列号。
- **返回:** 一个文本类型的 guiControl。

#### getControlById(id) - `gui.getControlById('buttonId')`
- 参数: 一个字符串
- 返回: 一个 guiControl 或 Null

#### getControlByUuid(id) - `gui.getControlByUuid('wdwdw-dwd-wd..')`
- 参数: 一个字符串
- 返回: 一个 guiControl 或 Null

#### getControlByPosition(array) - `gui.getControlByUuid([1,0])`
- 参数: 一个包含 2 个整数的数组。
- 返回: 一个 guiControl 或 Null

#### show() - `gui.show()`
- 返回: void

#### destroy() - `gui.destroy()`
- 返回: void

## guiControl 对象
本部分包括了基本 GUI 的属性、方法和事件。

### 属性

#### gui - `guiControl.gui`
- 返回: FeatureBasicGui 对象，父 GUI

#### id - `guiControl.id`
- 返回: 字符串，guiControl 的标识符。
- 可以设置。例如: `control.id = 'myId'`

#### Uuid - `guiControl.uuid`
- 返回: 字符串，guiControl 的唯一 UUID。

#### type - `guiControl.type`
- 返回: 字符串，guiControl 的类型。
目前只能返回 `button` 或 `text`。

#### text - `guiControl.text`
- 返回: 字符串，Text 或 Button 控件的文本。

#### positionInGrid - `guiControl.positionInGrid`
- 返回: 一个包含 2 个整数的数组，控件在网格中的位置。
默认值为 [0,0]

#### summary - `guiControl.summary`
- 返回: 包含控件基本信息的对象。
- **在网格中使用 console.log 很有用**

### 方法

#### update() - `guiControl.update()`
更新控件。
- 返回 void