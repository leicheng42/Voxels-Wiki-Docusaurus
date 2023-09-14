# Show hide a basic GUI on click
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
  gui.addText('Hello!')
  
  // Call the GUI to show.
  gui.show()
  
})
```

3. if you want this to happen on a trigger instead of click, replace 'click' with 'trigger'

### What happens
The scripts listens for a click and toggles a graphic interface on/off when clicked on.

