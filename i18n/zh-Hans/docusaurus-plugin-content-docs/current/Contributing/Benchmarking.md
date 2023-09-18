# 基准测试
如何测量您的代码对性能的贡献

## 基准测试

当提交可能对性能产生影响（积极或消极）的分支时，有人可能会将您链接到这个维基页面，并要求您对您的分支进行基准测试，以确保您对性能产生积极影响。

在CV的前两年里，我们通过“凭感觉快”（也称为“感觉更快”）来进行测试。然而，这种方法是无法持续发展的，因此我们不得不为性能创建了一些略微烦人但可量化的测试。

### 1. 使用检查器

切换到主分支。找到一个使用您正在优化的功能的地块，并以检查器模式加载它：

`?isolate=true&inspect=true&benchmark=true`

然后，截取检查器的相关部分的屏幕截图。在这里，我正在截取材料数量。

![benchmark-stats.png](/benchmark-stats.png)

然后，切换到您的分支，再截取另一张屏幕截图。将这两张屏幕截图粘贴到您的拉取请求中以进行突出显示。

> 嘿，我的分支将材料数量从120个减少到60个。

### 2. 使用记录/回放

> Stig可以对此发表评论

从 https://follower.cryptovoxels.com/recordsings/ 播放一个录像

例如：

`/play?playback=
https://follower.cryptovoxels.com/recordings/gangnam-recording.json`

获取日志并比较您的分支和主分支，然后将其粘贴到您的拉取请求中。