# 音响盒
音响盒允许您将计算机上的音频流传送到世界上。

## 音响盒
音响盒允许您将计算机上的音频流传送到世界上。要使用音响盒，只需单击它，然后从弹出窗口中选择“开始广播”。

![boombox-feature-double.png](/boombox-feature-double.png)
### 编辑器
![boombox_editor_v4.25.png](/boombox_editor_v4.25.png)

#### 空间衰减

当玩家远离音频播放器时，声音逐渐消失的速度。
值介于0和5之间。

## 脚本属性
## 脚本属性 {.tabset}
### 空间衰减系数
`Double`; 取值范围从0到5

#### 获取()

```js
feature.get('rolloffFactor')
// 返回值: 1.6
```

#### 设置()

```js
feature.set({'rolloffFactor':1.6})
```

#### 默认值

`1`

## 如何使用？
单击音响盒，然后点击“开始广播”
![boombox-broadcast.png](/boombox-broadcast.png)