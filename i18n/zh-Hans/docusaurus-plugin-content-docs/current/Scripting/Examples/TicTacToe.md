# Tic Tac Toe

## Tic Tac Toe

A game of Tic Tac Toe

![tictactoe.png](/tictactoe.png)

#### How to use

1. Create tic tac toe vox model with [this url](https://cdn.discordapp.com/attachments/573736707984457738/733838799150514276/ttt-board.vox)
2. Add cross vox model with [this url](https://cdn.discordapp.com/attachments/573736707984457738/733842407073775616/cross.vox) and set the id `cross`
3. Add nought vox model with [this url](https://cdn.discordapp.com/attachments/573736707984457738/733842416276340798/nought.vox) and set the id `nought`
3. Add this script to the tic tac toe board
4. Reload the parcel

#### Script

```js
let o = parcel.getFeatureById('nought')
let x = parcel.getFeatureById('cross')

let clones = []
let nought = true

feature.on('click', e => {
  if (clones.length === 9) {
    clones.forEach(c => c.remove())
    clones = []
  }
  
  let c = (nought ? o : x).clone()
  c.position.copyFrom(e.point)
  clones.push(c)
  
  nought = !nought
})
```

#### Improvements

* Detect the winner and draw a line
* Require two players (once multiplayer is implemented)

