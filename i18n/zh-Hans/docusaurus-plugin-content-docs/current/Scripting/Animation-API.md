# 动画 API

## 动画 API
制作流畅的动画效果。
![animation_example_movement.gif](/animation_example_movement.gif)
调用 `Feature#createAnimation('position' 或 'rotation' 或 'scale')` 来创建一个动画对象。使用 `setKeys` 来指定关键帧。第一个关键帧将在 `frame: 0` 处创建，其位置将与物体的当前位置相同。

调用 `feature#startAnimations` 来播放一旦创建的动画。

任何正在播放的动画将在从 API 启动动画时停止。

附注：不要尝试通过每秒调用 `feature.position.x += 0.1` 60 次来制作您的特征动画 - 因为从脚本主机到世界引擎的消息会以每秒 5 次的速度进行限制，您的 "动画" 将会非常卡顿。使用动画 API，就像涂抹黄油一样顺滑。🧈

附注：尽管我们在 30fps 下指定关键帧，但动画以本机屏幕刷新率运行（60/90/144/240hz）。

### 位置动画

以下示例将火箭 Vox 模型向上移动 10 个 Voxels，持续 1 秒。

```js
let rocket = parcel.getFeatureById('rocketvox')

let r1 = rocket.createAnimation('position')

r1.setKeys([{
  frame: 30, // 标准为 30 fps（意味着它需要 1 秒）
  value: rocket.position.add( new Vector3(0,10,0) )
}])

rocket.startAnimations( [r1] ) // 启动动画
```

### 旋转动画

此代码片段使其绕 Y 轴旋转。旋转以 [弧度](https://en.wikipedia.org/wiki/Radian) 为单位。

```js
let r2 = rocket.createAnimation('rotation')

r2.setKeys([{
  frame: 30,
  value: rocket.rotation.add(new Vector3(0, feature.rotation.y + Math.PI / 2, 0) )
}])

rocket.startAnimations( [r2] ) // 启动动画
```

### 多个动画

使用前面的两个示例：

```js
rocket.startAnimations( [r1, r2] )
```

### 旋转中心

在使用旋转动画时，您可能会注意到 Vox 模型实际上不会围绕其自然中心旋转。

对于打算旋转的 Vox 模型，您应该将中心放在 Magicavoxel 画布上的特定坐标上。
对于 32x32x32 Vox 模型，请使用 `x:20` 和 `y:15` 作为真正的旋转中心。
您可以使用 [此 Vox 模型](/true_center_rotation_tool.vox) 来帮助您获取真正的旋转中心。在此模型中，深蓝色 Voxels 表示大致的旋转中心，而浅蓝色表示中心。
![true_center_rotation_32x32x32.png](/true_center_rotation_32x32x32.png)

使用此方法的不便之处在于它会强制您缩小 Vox 模型。