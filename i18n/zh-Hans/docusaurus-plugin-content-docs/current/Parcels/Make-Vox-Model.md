# 制作 Vox 模型

Cryptovoxels 具有允许导入 .vox 和超大体素（Mega-vox）特性的功能。
请查看 [体素库](/docs/voxel-library) 以获取 .vox 模型的示例。
下面我们将介绍如何制作 .vox 或超大体素模型。

![如何制作 Vox 模型示例.png](/how-to-vox-models-example.png)

## 1. 获取 MagicaVoxel
MagicaVoxel 是用于创建 .vox 3D 模型的软件。它经常会更新，其创作者 Ephtracy 也相当活跃和响应迅速。
- 您可以从以下网址获取：[ephtracy.github.io](https://ephtracy.github.io/)
- 安装该软件。

## 2. 打开 Magica
**并设置您的画布。**

如果您要制作普通的 .Vox 文件（用于 .VOX 特性），则画布必须是 `32x32x32`。
如果您要制作超大体素特性，则画布必须是 `126x126x126`。

您可以像这样更改画布大小：
![magicavoxel_changeto32.png](/magicavoxel_changeto32.png)

## 3. 创建您的 Vox 模型
使用 Magica 的各种工具，您可以轻松创建您理想的 Vox 模型。该软件具有许多快捷键，可能需要一些实践才能熟练使用。

示例 Vox 模型：
![small_lamp.png](/small_lamp.png)

您可以使用右上角的 :floppy_disk: 图标保存它。

## 4. 上传
您可以在几个地方保存您的 Vox 模型。推荐的平台有：

- Cryptovoxels Discord 服务器 => [#Files](https://discord.gg/BFxEEGc)
- [Pinata cloud](https://pinata.cloud/)（IPFS 服务）
- [Slate](https://slate.host/)（开源 IPFS 服务）
- [Dropbox](https://www.dropbox.com/)

## 5. 进入虚拟世界并分享您的作品

前往 [您的地块](https://www.cryptovoxels.com/account/parcels) 并放置一个 .vox 或超大体素特性，具体取决于您拥有的文件类型。

然后将可分享的 URL 复制粘贴到“URL”字段中。
![如何制作 Vox 模型示例2.gif](/how-to-vox-model-example2.gif)

## 旋转中心

在使用旋转动画时，您可能会注意到 Vox 模型并不真正围绕其自然中心旋转。

对于打算旋转的 Vox 模型，您应该将其中心放置在 Magicavoxel 画布上的特定坐标处。
对于一个 32x32x32 的 Vox 模型，将 `x:20` 和 `y:15` 作为真正的旋转中心。
您可以使用 [这个 Vox 模型](/true_center_rotation_tool.vox) 来帮助您获取真正的旋转中心。在该模型中，深蓝色的体素代表了近似的旋转中心，而浅蓝色的体素代表了中心。
![32x32x32 真正的旋转中心.png](/true_center_rotation_32x32x32.png)

这种方法的一个不便之处是它会迫使您缩小 Vox 模型的尺寸。