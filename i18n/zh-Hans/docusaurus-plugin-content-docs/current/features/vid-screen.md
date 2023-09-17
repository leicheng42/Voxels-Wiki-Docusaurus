## VidScreen

A VidScreen is a programmable 64x64 screen which you can interact with using the arrow keys, `a` and `b`.

![vid-screen-example.png](/vid-screen-example.png)

### Scripting Properties

#### feature.screen

This is a 64 wide x 64 high x 3 bytes (r, g, b) array that you can use to draw onto the screen.

#### feature.screenWidth

#### feature.screenHeight

### Events

As well as the events shared between all features, vidscreens have three unique events.

#### Keys event: `on('keys', (event) => {})`

This event triggers whenever a key is pressed or released. The available keys are the arrow keys, A, and B.

#### Frame event: `on('frame', (event) => {})`

This event triggers on every frame (30 fps).

#### Start event: `on('start', (event) => {})`

This event triggers when the player clicks on the vidscreen to activate it.

## VidScreen example: Breakout

This is a simple version of the arcade game Breakout, written for a Cryptovoxels vidscreen. [Full Source code here](https://gist.github.com/moritree/5970fca2a61b3dab1179467a6ffcbe07). You have control over a paddle at the bottom of the screen, which can move left and right. There is an array of blocks at the top of the screen. A ball bounces off of the paddle and walls of the game, and any time it hits a block it not only bounces off but also destroys the block. If the ball hits the bottom of the screen, the game resets.

Let's demonstrate how the vidscreen's unique events and attributes are used.

```
feature.on('keys', e => {
    if (e.keys.left) {
        paddle.moveLeft()
    } else if (e.keys.right) {
        paddle.moveRight()
    }
})
```

Whenever a key press is detected, we move the paddle left or right if one of the left or right arrow keys are pressed.

```
feature.on('start', e => {
    reset()
})
```

When the vid screen is opened, reset() is called, which sets up the game from the start.

```
feature.on('frame', e => {
    frame += 1
    update()
    draw()
})
```

This is the main game loop - on every frame, we update the position of the ball, and then draw everything on the screen.

Let's take a closer look at the draw() method.

```
function draw() {
    feature.screen.fill(0)

    ball.draw()
    paddle.draw()
    for (j = 0; j < blocks.length; j ++) {
        blocks[j].draw()
    }
}
```

Here we are drawing into feature.screen, first filling it with a black background, then drawing the objects on top.

```
class Ball {
    draw() {
        for (let i = 0; i < 3; i ++) {
            feature.screen[this.yPos * feature.screenWidth * 3 + this.xPos * 3 + i] = 255
        }
    }
}
```

The ball is drawn as a single white pixel. This means that the three bytes for R, G, and B, all have to be set to 255 on that pixel. This code snippet demonstrates filling in a single pixel at (this.xPos, this.yPos).