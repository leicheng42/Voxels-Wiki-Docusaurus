# GUI with buttons
Use the [basicGUI api](/docs/Scripting/basic-gui-api) to show a GUI onclick

### Process

1. Place a button for the sake of this example
2. Place the following script on the feature:

```js
// Create GUI
let gui  = feature.createBasicGui()
feature.on('click',e=>{
    if(gui.showing){
    // if GUI is showing, hide it. (act like a toggle)
    gui.destroy()
    return
  }

  // Add our first control:
  let textControl =gui.addText('Hello!')

    // Add a button under it
  let leftButton = gui.addButton('left',[1,0])
      // Add a button under it
  let rightButton = gui.addButton('right',[1,1])

  // Call the GUI to show.
  gui.show()

  rightButton.on('click',e=>{
    // On right button is clicked
    textControl.text = 'right is clicked'
    // Call update to update the control
    textControl.update()
  })
    leftButton.on('click',e=>{
      // On left button is clicked
    textControl.text = 'left is clicked'
      // Call update to update the control
     textControl.update()
  })
})
```

3. if you want this to happen on a trigger instead of click, replace the first 'click' with 'trigger'

### What happens
The scripts listens for a click and toggles a graphic interface on/off when clicked on. It also shows two buttons and reacts accordingly.
![[basicgui]buttonsexample.png](/scripting/[basicgui]buttonsexample.png)
