
![[basicgui]example.png](/features/[basicgui]example.png)

# Basic GUI Object
This section includes properties, functions and events for basic GUIs.
Examples at [Scripting examples](/Scripting/Examples)

## Constructor - new Gui(options?)

### Options:
**billBoardMode**
Whether the GUI should follow the user or not
billBoardMode = 0 -> No billboard effect
billBoardMode = 1 -> Follows the user on the X axis (default)
billBoardMode = 2 -> Follows the user on the Y axis

eg: `new Gui({billBoardMode:0})`

## Properties

### ID - `gui.id` 
- Returns: string, the GUI's unique id.
- Can be set. eg: `feature.id = 'myvoxId' ` 

### Uuid - `gui.uuid` 
- Returns: string, the GUI's unique uuid. 

### feature - `gui.feature` 
- Returns: Feature, the parent feature

### showing - `gui.showing`
- Returns whether the GUI is shoing or not

### listOfControls - `gui.listOfControls` 
- Returns: an array of guiControls.

### defaultControl - `gui.defaultControl` 
- Returns an example of default control.

## Methods

### addButton(text=null,positionInGrid=[0,0],id=null) - `gui.addButton('My button')` 
- **Arguments:**
	- text (optional): a string,
  - Id (optional): a string,
  - positionInGrid (optional): An array of 2 integers, the first integer being the row number, and the second being the column number.
- **Returns:** a guiControl of the button type.

### addText(text=null,positionInGrid=[0,0],id=null) - `gui.addtext('My text')` 
- **Arguments:**
	- text (optional): a string,
  - positionInGrid (optional): An array of 2 integers, the first integer being the row number, and the second being the column number.
- **Returns:** a guiControl of the text type.

### getControlById(id) - `gui.getControlById('buttonId')` 
- Arguments: a string
- Returns: a guiControl or Null

### getControlByUuid(id) - `gui.getControlByUuid('wdwdw-dwd-wd..')` 
- Arguments: a string
- Returns: a guiControl or Null

### getControlByPosition(array) - `gui.getControlByUuid([1,0])` 
- Arguments: an array of 2 integer.
- Returns: a guiControl or Null

### show() - `gui.show()` 
- Returns: void

### destroy() - `gui.destroy()` 
- Returns: void

# guiControl Object
This section includes properties, functions and events for basic GUIs.

## Properties

### gui - `guiControl.gui` 
- Returns: a FeatureBasicGui object, the parent GUI

### id - `guiControl.id` 
- Returns: string, the guiControl's id.
- Can be set. eg: `control.id = 'myId' ` 

### Uuid - `guiControl.uuid` 
- Returns: string, the guiControl's unique uuid. 

### type - `guiControl.type` 
- Returns: string, the type of guiControl 
At the moment this can only return `button` or `text`

### text - `guiControl.text` 
- Returns: string, the text of the Text or Button control

### positionInGrid - `guiControl.positionInGrid` 
- Returns: an Array of 2 integers, the position of the control in a grid. 
Default is [0,0]

### summary - `guiControl.summary` 
- Returns: an object with the basic information of the control.
- **Useful for console.log in the grid**

## Methods

### update() - `guiControl.update()`
Update the control.
- Returns void
