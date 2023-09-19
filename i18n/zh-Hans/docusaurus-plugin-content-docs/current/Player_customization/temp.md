# 制作可穿戴物品（临时）

## 1. 要求
可穿戴物品位于 [收藏品](/docs/Player_customization/temp#h-3-collections) 内，为了创建一个收藏品，您需要拥有一个 [地块](/docs/Parcels/Buy-a-parcel)。
如果您没有拥有地块，您将需要 [提交到公开收藏品](/docs/Player_customization/temp#submit-to-a-public-collection) 或请求拥有地块的人为您创建一个收藏品。
:::caution
您只能为每个拥有的地块创建一个收藏品。
:::

您还需要 Matic 或 ETH（根据收藏品而定）来进行每笔交易。
最后，关于可穿戴物品有社区指南 - 它们不能包含冒犯性的种族主义、歧视、鼓吹暴力或不适合工作的内容。

## 2. 创建 vox 模型
### 使用 MagicaVoxel
要创建一个 vox 模型，您需要 [MagicaVoxel](https://ephtracy.github.io/)。下载最新版本，安装它，然后打开它。

第一步是将大小设置为 32x32x32 - 您可以通过选择右上角的 40s，键入 32 并按回车键来实现这一点。

![magica_size.png](/createawearable/magica_size.png)

现在您已经准备好使用 MagicaVoxel 来创建自己的帽子、滑雪板、T 恤等物品。

:::info
在制作物品时，大小和旋转并不重要，因为所有者可以在想要佩戴时重新缩放和旋转可穿戴物品 - [单击此处查看用户如何佩戴和自定义可穿戴物品](/docs/Player_customization/Costume_tab)。
:::

### 保存您的 vox

制作完可穿戴物品后，请保存它。

![magica_save.png](/createawearable/magica_save.png)

确保画布是 32x32x32！

### 上传您的可穿戴物品
您的物品已创建，现在是时候上传并进行审查了！

**您有两种选择：**
1. [将您的可穿戴物品铸造到您的收藏品中](/docs/Player_customization/temp#minting-a-wearable)（首先需要[创建一个收藏品](/docs/Player_customization/temp#creating-a-collection)）
2. [将您的可穿戴物品提交到公开收藏品](/docs/Player_customization/temp#submit-to-a-public-collection)

选择第 2 项而不是第 1 项的好处是，您可以让其他人管理收藏品，而该人必须支付铸造费用。
然而，收藏品所有者也有资格获得来自 OpenSea 交易的版税。

### 提示、脚本和教程
MagicaVoxel 允许使用脚本（着色器），具有导入某些文件类型以简化创建过程的能力，并可以加载调色板，以及轻松创建渐变色。

#### 导入
要导入 PNG 或 JPG，只需将其拖入 MagicaVoxel 中（首先清空它）。例如，您可以导入一个像素艺术面孔，然后按照自己的喜好拉伸它。如果您选择这条路线，您可能希望事先将其缩小到 32x32（如果您在 Photoshop 中进行操作，请确保使用最近邻的重新采样类型）。

![magica_import_png.gif](/createawearable/magica_import_png.gif)

要导入 OBJ，请将其拖入 MagicaVoxel。当您导入文件时，MagicaVoxel 可能会包括一个隐藏的层，您需要擦除它 - 否则您将无法将您的 vox 导入 Cryptovoxels。查看下面的 GIF 以了解如何擦除。

![magica_import_obj.gif](/createawearable/magica_import_obj.gif)

#### 着色器和颜色
着色器放入着色器文件夹，调色板放入调色板文件夹。在加载了一些着色器后，可以从右侧面板或底部的控制台访问它们。[这个网站](https://mode-vis.gumroad.com/?sort=newest) 提供了许多不同的着色器供您玩耍。

![magica_shaders.png](/createawearable/magica_shaders.png)

为了创建渐变色，按住 CTRL+ALT，然后单击/按住起始颜色并将其拖到结束颜色。

![magica_gradient.gif](/createawearable/magica_gradient.gif)

#### 试穿
虽然没有官方功能可以在铸造之前先试穿可穿戴物品，但您可以将 vox 放入您的地块（或沙盒地块）并走进去以模拟一下。

在放入 vox 并调整位置/缩放/旋转后，按 C 进入第三人称并走进去。这不是完美的，但可以工作。

![trying_it.gif](/createaw

earable/trying_it.gif)

请查看 [自定义](/docs/Player_customization/Costume_tab) 部分，以查看玩家如何将可穿戴物品附加到自己身上的所有方式。

#### 教程
如果您完全不熟悉 MagicaVoxel，或者只是想更深入了解，可以查看以下资源：

- [初学者的书面指南](https://www.raywenderlich.com/375-magicavoxel-3d-art-tutorial)
- [快速入门视频](https://www.youtube.com/watch?v=J5fK79E_RXE)（图标来自旧版本）
- [详细视频](https://www.youtube.com/watch?v=uKOBIHSgIwI)（忽略渲染部分）
- [官方资源](https://ephtracy.github.io/index.html?page=mv_resource)（很多好东西）

## 3. 收藏品
收藏品是一组可以在虚拟世界内生成或佩戴的 3D NFT。

在 Cryptovoxels 中创建并加入白名单的收藏品意味着您可以基于区块链创建自己的品牌收藏品（在这种情况下是可穿戴物品）。

玩家可以佩戴或在虚拟世界中放置该收藏品的物品。他们还将能够在 Cryptovoxels 网站和 OpenSea 上找到您的收藏品和收藏品。您还可以从 Cryptovoxels 和 OpenSea 管理收藏品的各个方面。

:::caution
每个拥有的地块只允许一个收藏品。地块的大小不决定您可以在收藏品中拥有的可穿戴物品数量。
:::

### 创建一个收藏品
1. 访问 https://www.cryptovoxels.com/collections
1. 登录 Cryptovoxels 和您的钱包
1. 单击 **Make your own!**
1. 单击 **Create a collection**

![create_collection.png](/createawearable/create_collection.png)

5. 单击 **Create a collection** 按钮

![create_eligibility.png](/createawearable/create_eligibility.png)

6. 选择 **Chain Id**，然后单击 **Next** 按钮

![select_a_chain.png](/createawearable/select_a_chain.png)

7. 您的钱包可能会要求您切换网络，因此单击 **Switch network**（如果没有看到此消息，请忽略）

![switch_network.png](/createawearable/switch_network.png)

8. 填写收藏品的信息，然后单击 **Save & Next** 按钮（您可以随时通过 **⚙Admin** 页面修改名称、描述和徽标）

![collection_info2.png](/createawearable/collection_info2.png)

9. 给合同命名，单击 **I assert…** 复选框以及 **Upload And Deploy** 按钮以继续

10. 进行下一步需要 Matic（或 ETH）在 Matic Mainnet（或 Ethereum Mainnet）上，所以一旦您有了一些可用，单击 **Confirm** 继续

![confirm_transaction.png](/createawearable/confirm_transaction.png)

11. 成功部署后，将弹出一个确认窗口

![deployed_contract.png](/createawearable/deployed_contract.png)

12. 填写缺失的信息

![collection_info.png](/createawearable/collection_info.png)

13. 在添加所需信息后，单击复选框，然后单击 **Submit** 按钮

14. 所有文本应已清除，并出现了带有绿色背景的消息 - 单击右侧显示 **Click here to see it!** 的链接

15. 现在您应该看到您的收藏品 - 单击 **⚙Admin** 按钮并将页面添加到书签

![admin.png](/createawearable/admin.png)

恭喜 - 您现在拥有一个收藏品！



### 铸造一个可穿戴物品
现在您已经准备好铸造了！前往您的收藏品页面，确保已登录（页面将类似于 https://www.cryptovoxels.com/collections/1#）。
如果您要提交到公开收藏品，请跳过下一部分。

#### 上传到您的收藏品
![mint.png](/createawearable/mint.png)

1. 单击 **🏭Mint** 按钮。
1. 输入 **Name** 和 **Description**（不要触摸所有者信息）
1. 设置 **Issues** 的数量
*稀有度：1–9 传奇 | 10–99 史诗 | 100–999 稀有 | ≥1000 普通*
1. 单击 **Choose File** 按钮，然后选择您的 vox 文件
1. 单击同意 TOS 的复选框
1. 单击 **Submit** 按钮
1. 向下滚动，您的提交将显示在 *Collectible submissions* 下 - 如果您看不到它，请单击 **Refresh** 按钮
1. 检查预览是否显示为动画 gif

![gif_before.png](/createawearable/gif_before.png)

9. 如果看起来有问题，请单击操作下的 **Refresh gif** 按钮。然后您将看到以下窗口打开：

![gif_refresh.png](/createawearable/gif_refresh.png)

10. 如果收到 **ok**，请刷新浏览器，然后再次单击 **🏭Mint** 并滚动到提交

![gif_fixed.png](/createawearable/gif_fixed.png)

11. 如果一切看起来正常，请单击 **Mint**。如果有什么问题，请单击 **Reject**。

12. 如果铸造，您的钱包将弹出以确认交易，这将需要非常少量的 Matic（或 ETH） - 单击确认以继续铸造

![token_id.png](/createawearable/token_id.png)

13. 在 *Collectible submissions* 下，右侧将有一个标有 **Collectible ready** 的链接 - 单击该链接

![collectible_ready.png](/createawearable/collectible_ready.png)

14. 您现在应该在 Cryptovoxels 页面上看到您的可穿戴物品

![mint_success.png](/createawearable/mint_success.png)

恭喜，您刚刚铸造了您的第一个可穿戴物品！

#### 提交到公开收藏品
如果您没有拥有地块，您总是可以提交到公开收藏品。

1. 前往 https://www.cryptovoxels.com/collections
2. 单击 **Available to public** 复选框
3. 选择一个收藏品
4. 单击 **🏭Submit** 按钮

![public_collection.png](/createawearable/public_collection.png)

5. 阅读警告，填写信息，然后单击底部的复选框，然后单击 **Submit** 按钮
6. 现在，您必须等待由收藏品所有者批准 - 您可能需要通过 Cryptovoxels / Discord 向他们发送消息
7. 一旦可穿戴物品由收藏品所有者铸造，您将在 Cryptovoxels 上收到一条消息（如果您收到该消息，则会在顶部的 **Inbox** 旁边看到一个红点）

### 交易可穿戴物品
您可以在 Cryptovoxels 网站或 OpenSea 上进行可穿戴物品的转移。

#### 在 Cryptovoxels 上交易
要使用 Cryptovoxels 网站进行转移，请前往您想发送的可穿戴物品 [例如 https://www.cryptovoxels.com/collections/1/1]，然后单击底部的 Transfer 按钮。如果您看不到 Transfer 按钮，要么意味着您需要在钱包上切换网络，要么意味着您不拥有该可穿戴物品的任何数量。

![transfer_wearable.png](/createawearable/transfer_wearable.png)

会弹出一个对话框，询问要转移给谁以及多少。填写后，点击 Transfer 按钮。

![transfer_to_who.png](/createawearable/transfer_to_who.png)

然后会要求确认地址 - 如果看起来没问题，请点击 **OK** 按钮。您的钱包将弹出以确认交易（Matic 或 ETH 交易费用），点击 **Confirm** 按钮以继续。一个对话框会显示传输正在进行，然后关闭。

#### 在 OpenSea 上交易
如果您更愿意通过 OpenSea 发送，也可以这样做。前往 OpenSea 上的可穿戴物品，并单击右上角的 Transfer 按钮。

![transfer_opensea.png](/createawearable/transfer_opensea.png)

如果您看不到转移按钮，请确保已登录。

### 在 OpenSea 上出售

如果您想出售您的可穿戴物品，您需要在 OpenSea 上为其定价。前往 Cryptovoxels 页面上您收藏品中的物品，然后点击 **Buy Now** 按钮。

![selling_wearable.png](/createawearable/selling_wearable.png)

:::caution
在 OpenSea 上的列表中，如果您看不到可穿戴物品在旋转，请点击 **Refresh metadata** 按钮。如果等待一分钟后仍然看不到它，您可能需要在 Cryptovoxel 的论坛上报告此问题，或者可能需要再等一段时间。
:::

现在您应该在 OpenSea 页面上看到您的可穿戴物品正在旋转。单击 Sell 按钮。

![sell_wearable2.png](/createawearable/sell_wearable2.png)

请注意 - 在您的可穿戴物品上架后，Sell 按钮会下移，出现在 *Listings* 下面。

![sell_wearable3.png](/createawearable/sell_wearable3.png)

在点击 **Sell** 按钮时，将弹出 *出售物品* 对话框。输入以 ETH 为单位的出售价格。请记住，OpenSea 将收取 2.5% 的费用。还可能涉及版税费用，但目前您不应该看到。

如果需要，可以设置销售的结束日期，以防需要有限时间上架。如果愿意，请点击 **Schedule listing** 并设置结束日期。

![sell

_item.png](/createawearable/sell_item.png)

准备好后，点击 **Complete listing** 按钮，您的可穿戴物品将被上架出售。

:::caution
对于 Matic/Polygon 收藏品，您收到的 ETH 将是 PoS-WETH。如果在钱包中看不到它，请切换网络或前往 [此处](https://wallet.polygon.technology/wallet)。
:::


### 定制和版税
您可以在 Cryptovoxels 和 OpenSea 上定制您的收藏品。您还可以为您的收藏品设置版税。

#### 在 Cryptovoxels 中定制您的收藏品
前往您的收藏品页面，然后点击 **⚙Admin** 按钮。

在 *Settings* 下，您可以更改您的 **Collection Name**、**Description**、**Cover Color** 和 **Logo**。

![customize_collection1.png](/createawearable/customize_collection1.png)

在 *Social and interactions* 下，您可以添加您的 **Twitter handle**、**OpenSea store**、**In-world store**（如果您拥有地块，请输入 ID）和 **Featured collectible**（输入可穿戴物品的 ID）。如果您输入所有这些信息，您将在收藏品页面右侧看到您的 Twitter 动态和特色可穿戴物品，还会显示两个新按钮（**View on Opensea** 和 **Visit store**）。

![customize_collection2.png](/createawearable/customize_collection2.png)

#### 在 OpenSea 中定制您的收藏品
在我们开始在 OpenSea 上进行定制之前，我们必须让他们知道您是实际的所有者，这不会是瞬时完成的。从您的收藏品的 Admin 页面复制地址。

![customize_opensea1.png](/createawearable/customize_opensea1.png)

在 OpenSea 上前往 [Collection Manager](https://opensea.io/collections)，单击 **kebab menu**，然后选择 **Import an existing smart contract**。

![customize_opensea2.png](/createawearable/customize_opensea2.png)

单击第一个按钮，**Live on a mainnet**，然后点击左侧的下拉菜单，选择 Polygon（用于 Matic）或 ETH，输入您的地址，然后点击 **Submit** 按钮。

![customize_opensea3.png](/createawearable/customize_opensea3.png)

提交后，您必须等待有人手动将收藏品连接到您的帐户。您会知道是否已连接，因为您可以在 [Collection Manager](https://opensea.io/collections) 页面上编辑您的收藏品。

![customize_opensea4.png](/createawearable/customize_opensea4.png)

一旦您的帐户连接，您将能够编辑您的收藏品信息，包括添加 Logo 图像、Featured 图像和 Banner 图像。

![customize_opensea6.png](/createawearable/customize_opensea6.png)

如果您向下滚动，您将看到 Royaleites 部分。从这里，您可以设置最多 10% 的费用，并输入您的支付钱包地址。

![customize_opensea5.png](/createawearable/customize_opensea5.png)

尽情享受定制您的收藏品！

### 可穿戴物品属性
您可以为您的可穿戴物品添加最多三个属性。这是可选的，但非常有用和有趣。

#### 设置属性

前往您的收藏品页面，然后点击 **⚙Admin** 按钮，向下滚动并转到 *Custom Attributes* 部分，然后点击 **Add a trait**。

![attributes1.png](/createawearable/attributes1.png)

单击下拉菜单并选择 [type](https://docs.opensea.io/docs/metadata-standards#section-attributes)。

![attributes2.png](/createawearable/attributes2.png)

一旦设置了您的属性，点击 **Save changes**。

![attributes3.png](/createawearable/attributes3.png)

#### 应用属性到现有可穿戴物品

在收藏品中设置自定义属性后，可以将属性添加到现

有的可穿戴物品中。
前往 Cryptovoxels 上的可穿戴物品页面，然后向下滚动，然后添加信息，然后点击 **Save Attribute** 按钮。

![attributes4.png](/createawearable/attributes4.png)

:::caution
如果您不想将属性之一用于可穿戴物品，请在属性框中点击 **Ignore** 复选框。
:::

#### 应用属性到新可穿戴物品

在收藏品中设置自定义属性后，可以在上传可穿戴物品的过程中添加属性。

![attributes5.png](/createawearable/attributes5.png)

#### 在 OpenSea 上的效果
在下面，您可以看到在 OpenSea 上的效果。**AUTHOR**、**RARITY** 和 **VOX** 属性是由 Cryptovoxels 自动输入的，而 **TYPE** 是由属性手动添加的。在统计信息下，您可以看到手动添加的 **#** 和 **Generation**。

![attributes6.png](/createawearable/attributes6.png)

添加属性的另一个好处是帮助人们过滤和排序您的收藏品。

![attributes7.png](/createawearable/attributes7.png)

### 稀有度级别
可穿戴物品的问题数量将决定其稀有度。

**Common（普通）** = 大于或等于 1000 个问题
**Rare（稀有）** = 大于或等于 100 个问题并小于 1000 个
**Epic（史诗）** = 大于或等于 10 个问题并小于 100 个
**Legendary（传奇）** = 大于或等于 1 个问题并小于 10 个