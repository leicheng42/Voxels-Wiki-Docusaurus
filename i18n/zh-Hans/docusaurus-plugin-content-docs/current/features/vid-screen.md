# VidScreen
可编程的64x64屏幕。

## VidScreen

VidScreen是一个可编程的64x64屏幕，您可以使用箭头键、`a` 和 `b` 进行交互。

![vid-screen-example.png](/vid-screen-example.png)

### 脚本属性

#### feature.screen

这是一个64宽 x 64高 x 3字节（r、g、b）的数组，您可以用来在屏幕上绘制图像。

#### feature.screenWidth

#### feature.screenHeight

### 事件

除了所有功能共享的事件之外，vidscreens 还具有三个独特的事件。

#### 按键事件：`on('keys', (event) => {})`

每当按键被按下或释放时触发此事件。可用的按键包括箭头键、A 和 B。

#### 帧事件：`on('frame', (event) => {})`

此事件在每帧（30 fps）上触发。

#### 启动事件：`on('start', (event) => {})`

当玩家点击vidscreen以激活它时触发此事件。

## VidScreen 示例：打砖块

这是一个为Cryptovoxels vidscreen编写的街机游戏Breakout的简化版本。[完整的源代码在此](https://gist.github.com/moritree/5970fca2a61b3dab1179467a6ffcbe07)。您可以控制屏幕底部的挡板，它可以左右移动。屏幕顶部有一排方块。球会从挡板和游戏的墙壁上反弹，每当它击中一个方块时，它不仅会反弹，还会销毁方块。如果球击中屏幕底部，游戏将重置。

让我们演示一下vidscreen的独特事件和属性如何使用。

```javascript
feature.on('keys', e => {
    if (e.keys.left) {
        paddle.moveLeft()
    } else if (e.keys.right) {
        paddle.moveRight()
    }
})
```

每当检测到按键按下时，如果按下左或右箭头键之一，我们就会将挡板向左或向右移动。

```javascript
feature.on('start', e => {
    reset()
})
```

当打开vidscreen时，将调用reset()，它会从头开始设置游戏。

```javascript
feature.on('frame', e => {
    frame += 1
    update()
    draw()
})
```

这是游戏的主要循环 - 在每一帧上，我们会更新球的位置，然后在屏幕上绘制所有内容。

让我们更仔细地看一下draw()方法。

```javascript
function draw() {
    feature.screen.fill(0)

    ball.draw()
    paddle.draw()
    for (j = 0; j < blocks.length; j ++) {
        blocks[j].draw()
    }
}
```

在这里，我们在feature.screen上绘制，首先用黑色背景填充它，然后在上面绘制对象。

```javascript
class Ball {
    draw() {
        for (let i = 0; i < 3; i ++) {
            feature.screen[this.yPos * feature.screenWidth * 3 + this.xPos * 3 + i] = 255
        }
    }
}
```

球被绘制为一个白色的单个像素。这意味着该像素的R、G和B的三个字节都必须设置为255。这段代码片段演示了在(this.xPos, this.yPos)处填充单个像素。