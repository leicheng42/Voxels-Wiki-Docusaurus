# 创造一个可穿戴物品

## 1. 需求
可穿戴物品位于一个[收藏品](/docs/Player_customization/Create_a_wearable#h-3-collections)内，在创建收藏品之前，您需要拥有一个[地块](/docs/Parcels/Buy-a-parcel)。
如果您没有拥有地块，您可以选择要么[提交到公共收藏品](/docs/Player_customization/Create_a_wearable#submit-to-a-public-collection)，或者请拥有地块的人为您创建一个收藏品。
:::caution
您被允许在每个拥有的地块上创建一个收藏品。
:::

您还需要使用 Matic 或 ETH（取决于收藏品）进行每笔交易。
最后，请注意有关可穿戴物品的社区准则 - 它们不能包含冒犯性、种族歧视、鼓吹暴力或不适宜内容。

## 2. 创建一个 vox 模型
### 使用 MagicaVoxel
要创建一个 vox 模型，您需要[MagicaVoxel](https://ephtracy.github.io/)。下载最新版本，安装它，然后打开它。

第一步是将大小设置为32x32x32 - 您可以通过在右上角选择40，输入32并按回车键来实现此目的。

![magica_size.png](/createawearable/magica_size.png)

现在，您可以使用 MagicaVoxel 创建您自己的帽子、滑雪板、T 恤等等。

:::info
在制作物品时，大小和旋转并不是非常重要，因为所有者可以在他们想要佩戴时重新调整和旋转可穿戴物品 - [点击此处查看用户如何佩戴和定制可穿戴物品的方式](/docs/Player_customization/Costume_tab)。
:::

### 保存您的 vox

一旦您制作好了您的可穿戴物品，请将其保存。

![magica_save.png](/createawearable/magica_save.png)

确保画布是32x32x32！

### 上传您的可穿戴物品
您的物品已经创建好了，现在是时候上传以供审核了！

**您有两个选择：**
1. [将您的可穿戴物品铸造到您的收藏品中](/docs/Player_customization/Create_a_wearable#minting-a-wearable)（您需要[创建一个收藏品](/docs/Player_customization/Create_a_wearable#creating-a-collection)首先）
1. [将您的可穿戴物品提交到公共收藏品](/docs/Player_customization/Create_a_wearable#submit-to-a-public-collection)

选择第2个选项而不是第1个的优点是，您让其他人管理收藏品，而且该人必须支付铸造费用。
然而，收藏品所有者也有资格从 OpenSea 交易中获得版税费用。

### 提示、脚本和教程
MagicaVoxel 允许使用脚本（着色器），具有导入特定文件类型以简化创建过程的功能，并可以加载颜色调色板，以及轻松创建渐变色。

#### 导入
要导入 PNG 或 JPG，请将其拖放到 MagicaVoxel 中（但事先清除它）。例如，您可以导入一个像素艺术的面部，然后将其挤压到您喜欢的样子。如果您选择这种方式，您可能需要事先将其缩小到 32x32（如果您在 Photoshop 中这样做，请确保使用最近邻插值以进行重采样）。

![magica_import_png.gif](/createawearable/magica_import_png.gif)

要导入一个 OBJ，请将其拖放到 MagicaVoxel 中。当您导入文件时，MagicaVoxel 可能会包含一个隐藏的层，您需要将其清除 - 否则您将无法将您的 vox 导入 Cryptovoxels。请参考下面的 GIF 以了解如何清除。

![magica_import_obj.gif](/createawearable/magica_import_obj.gif)

#### 着色器和颜色
着色器放入着色器文件夹，调色板放入调色板文件夹。在加载了一些着色器后，可以通过右侧面板或底部的控制台访问它们。[这个网站](https://mode-vis.gumroad.com/?sort=newest)提供了许多不同的着色器可以供您尝试。

![magica_shaders.png](/createawearable/magica_shaders.png)

为了创建渐变色，按住 CTRL+ALT，然后单击/按住起始颜色并将其拖动到结束颜色。

![magica_gradient.gif](/createawearable/magica_gradient.gif)

#### 在铸造前试戴
尽管在铸造前没有官方功能可以先试戴可穿戴物品，但您可以将 vox 放入您的地块（或沙盒地块）中，并走进去以在某种程度上模拟。

将 vox 放入并调整位置/缩放/旋转后，按 C 进入第三人称并走入其中。虽然不是完美的，但可以使用。

![trying_it.gif](/createawearable/trying_it.gif)

查看[定制](/docs/Player_customization/Costume_tab)部分，以了解玩家如何将可穿戴物品附在自己身上的所有方法。

#### 让其他人试戴
如果您已经将可穿戴物品铸造并存储在您的钱包中，您可以允许其他人在购买前试戴。

1. 按 *TAB* 键或单击右上角附近的方块
1. 选择 **可收

藏模型** 并将其放在您的地块上
1. 在 **您的可收藏品** 下选择可穿戴物品
1. 勾选 **允许地块访客试戴可收藏品** 复选框
1. 选择 **骨骼**
1. 调整 **位置** / **旋转** / **缩放**
1. 测试一下以确保您看起来很好

![trying_it2.gif](/createawearable/trying_it2.gif)

#### 故障面孔
[Stella](https://www.cryptovoxels.com/avatar/0xf1182c5e5bcd7c90b04eb14eb4f971c52f510d47) 发现了一种在 Cryptovoxels 中制作出色的故障可穿戴物品的方法。😸
![glitchedface.gif](/createawearable/glitchedface.gif)
要复制这种疯狂的效果，请查看[此处的教程](https://www.youtube.com/watch?v=Frn3JCyWHY4)！

#### 扁平可穿戴物品
如果您打算制作一个扁平或薄的可穿戴物品，您将不得不在 MagicaVoxel 中以某种特定的方式创建它，否则缩放可能会出现问题。下面您可以看到三个不同的 VOX，它们看起来相似，但在缩放时，其中一个明显偏离了（并随之移动）。

![flat3.gif](/createawearable/flat3.gif)

为了确保您的扁平可穿戴物品在缩放时看起来正常，可以将其创建在“地面”上，或者将其放在下面所示的中心点（即 y:15）。

![flat.png](/createawearable/flat.png)

#### 教程
如果您对 MagicaVoxel 完全不熟悉，或者只是想更深入地了解它，请查看以下资源：

- [初学者的书面指南](https://www.raywenderlich.com/375-magicavoxel-3d-art-tutorial)
- [快速入门视频](https://www.youtube.com/watch?v=J5fK79E_RXE)（图标来自旧版本）
- [详细视频](https://www.youtube.com/watch?v=uKOBIHSgIwI)（忽略渲染部分）
- [官方资源](https://ephtracy.github.io/index.html?page=mv_resource)（很多好东西）

## 3. 收藏品
一个收藏品是一组可以在虚拟世界中生成或佩戴的 3D NFT。

在 Cryptovoxels 中创建并获得收藏品的白名单意味着您可以基于区块链创建您自己的品牌收藏品（在本例中是可穿戴物品）。

玩家可以在虚拟世界中佩戴或放置该收藏品的可收藏物品。他们也将能够在 Cryptovoxels 网站和 OpenSea 上找到您的收藏品和可收藏物品。您还可以从 Cryptovoxels 和 OpenSea 管理您收藏品的各个方面。

:::caution
您只允许拥有的地块上创建一个收藏品。如果您不拥有地块，您将需要提交到公共收藏品。地块的大小并不决定您可以在一个收藏品中拥有的可穿戴物品数量。
:::

### 创建一个收藏品
1. 使用您的钱包登录 CV 并单击顶部栏的 [Marketplace](https://www.cryptovoxels.com/marketplace) 
1. 点击 [Collections](https://www.cryptovoxels.com/collections)
1. 点击 **创建您自己！**
1. 点击 **创建一个收藏品**

![create_collection.png](/createawearable/create_collection.png)

5. 点击 **创建一个收藏品** 按钮

![create_eligibility.png](/createawearable/create_eligibility.png)

6. 选择 **链 ID**，然后点击 **下一步** 按钮

![select_a_chain.png](/createawearable/select_a_chain.png)

7. 您的钱包可能会要求您切换网络，因此单击 **切换网络**（如果您没有看到此消息，请忽略）

![switch_network.png](/createawearable/switch_network.png)

8. 填写收藏品的信息，然后单击 **保存并下一步** 按钮（您可以随时通过 **⚙管理** 页面修改名称、描述和徽标）

![collection_info2.png](/createawearable/collection_info2.png)

9. 命名合同，选中 **我断言...** 复选框，然后点击 **上传并部署** 按钮以继续

10. 您将需要在 Matic 主网上具有 Matic（或以太坊主网上的 ETH）来进行下一步，所以一旦您有了一些可用的，就点击 **确认**

![confirm_transaction.png](/createawearable/confirm_transaction.png)

11. 在成功部署后，将弹出一个确认窗口

![deployed_contract.png](/createawearable/deployed_contract.png)

12. 填写缺失的信息

![collection_info.png](/createawearable/collection_info.png)

13. 添加所需信息后，点击复选框，然后点击 **提交** 按钮

14. 所有的文本都应该已经清空，一个带有绿色背景的消息应该出现 - 点击其中声明 **点击此处查看！** 的链接

15. 您现在应该可以看到您的收藏品 - 点击 **⚙管理** 按钮并将该页面添加到书签

![admin.png](/createawearable/admin.png)

恭喜 - 您现在拥有了一个收藏品！

::

:info
您所有的收藏品（和可收藏品）都可以在[这里](https://www.cryptovoxels.com/account/collectibles)找到。
:::

### 铸造一个可穿戴物品
现在您已经准备好铸造了！前往您的收藏品页面并确保您已登录（它将类似于 https://www.cryptovoxels.com/collections/1）。 
如果您要提交到公共收藏品，请跳过下一节。

:::caution
打算铸造鞋子或需要用户拥有两者的物品吗？请记住，**用户需要拥有两份您的可穿戴物品**（这意味着您可能需要铸造双倍数量）。这个更改是在2021年11月左右进行的。
:::

#### Polygon/Matic RPC
为了确保稳定性，我们建议将您的钱包的 Polygon/Matic RPC 切换到 https://rpc-mainnet.maticvigil.com/。

![rpc.png](/createawearable/rpc.png)

#### 上传到您的收藏品
![mint.png](/createawearable/mint.png)

1. 单击 **🏭铸造** 按钮。
1. 输入 **名称** 和 **描述**（不要触碰所有者信息）
1. 设置 **问题** 的数量
*稀有度：1–9 传奇 | 10–99 史诗 | 100–999 稀有 | ≥1000 普通*
1. 单击 **选择文件** 按钮并选择您的 vox 文件
1. 单击同意 TOS 的复选框
1. 单击 **提交** 按钮
1. 滚动下来，您的提交将在 *可收藏品提交* 下 - 如果您没有看到它，请单击 **刷新** 按钮
1. 检查您的预览是否显示了动画 GIF

![gif_before.png](/createawearable/gif_before.png)

9. 如果看起来破损，请单击操作下的 **刷新 GIF** 按钮。然后您将看到之后打开了这个窗口：

![gif_refresh.png](/createawearable/gif_refresh.png)

10. 如果您得到了一个 **ok**，刷新浏览器，然后再次单击 **🏭铸造** 并向下滚动以查看提交

![gif_fixed.png](/createawearable/gif_fixed.png)

11. 如果一切看起来正常，请单击 **铸造**。如果看起来有问题，请单击 **拒绝**。

12. 如果您铸造它，您的钱包将弹出以确认交易，这将需要极少量的 Matic（或 ETH）- 单击确认以继续铸造。

![token_id.png](/createawearable/token_id.png)

13. 在 *可收藏品提交* 下，将有一个右侧链接声明 **可收藏品已准备就绪** - 单击它

![collectible_ready.png](/createawearable/collectible_ready.png)

14. 您现在应该可以在 Cryptovoxels 页面上看到您的可穿戴物品

![mint_success.png](/createawearable/mint_success.png)

恭喜，您刚刚铸造了您的第一个可穿戴物品！

:::info
请前往[这里](/docs/Player_customization/Costume_tab)学习如何穿戴可穿戴物品。
:::


#### 提交到公共收藏品

如果您没有拥有地块，您可以随时将其提交到公共收藏品。

1. 前往 [https://www.cryptovoxels.com/collections](https://www.cryptovoxels.com/collections)
2. 勾选 **Available to public** 复选框
3. 选择一个收藏品
4. 点击 **🏭提交** 按钮

![public_collection.png](/createawearable/public_collection.png)

5. 阅读警告，填写信息并勾选底部的复选框，然后点击 **提交** 按钮
6. 现在您需要等待收藏品所有者批准 - 您可能想通过 Cryptovoxels / Discord 向他们发送一条消息
7. 一旦收藏品所有者铸造了该可穿戴物品，您将在 Cryptovoxels 收到一条消息（如果收到消息，您将在顶部看到 **Inbox** 旁边有一个红色圆点）

### 可穿戴物品交易

您可以在 Cryptovoxels 网站或 OpenSea 上转让可穿戴物品。

#### 在 Cryptovoxels 上交易

要使用 Cryptovoxels 网站进行转让，请前往您想发送的可穿戴物品页面 [例如 https://www.cryptovoxels.com/collections/1/1] 并点击底部的 **Transfer** 按钮。如果您看不到 **Transfer** 按钮，这要么意味着您需要在您的钱包上切换网络，或者您没有拥有任何数量的该可穿戴物品。

![transfer_wearable.png](/createawearable/transfer_wearable.png)

会弹出一个对话框询问要转让给谁以及数量。填写并点击 **Transfer** 按钮。

![transfer_to_who.png](/createawearable/transfer_to_who.png)

然后会要求确认地址 - 如果看起来正确，请点击 **OK** 按钮。您的钱包将弹出并要求确认交易（Matic 或 ETH 燃气），点击 **Confirm** 按钮以继续。对话框会显示转让正在进行中，然后关闭。

#### 在 OpenSea 上交易

如果您更愿意通过 OpenSea 发送，您也可以这样做。前往 OpenSea 上的可穿戴物品页面，点击右上角的 **Transfer** 按钮。

![transfer_opensea.png](/createawearable/transfer_opensea.png)

如果您看不到转让按钮，请确保已登录。

### 在 OpenSea 上出售

如果您想出售您的可穿戴物品，您必须在 OpenSea 上为其定价。前往 Cryptovoxels 页面上您收藏的物品，然后点击 **Buy Now** 按钮。

![selling_wearable.png](/createawearable/selling_wearable.png)

:::caution
在 OpenSea 上列出的物品如果您看不到可穿戴物品在旋转，请单击 **Refresh metadata** 按钮。如果等待一分钟后仍然看不到，请在 Cryptovoxel 的论坛上报告此问题，或者可能需要等待更长时间。
:::

您现在应该在 OpenSea 页面上看到您的可穿戴物品正在旋转。点击 **Sell** 按钮。

![sell_wearable2.png](/createawearable/sell_wearable2.png)

请注意 - 在您的可穿戴物品发布出售后，**Sell** 按钮会向下移动，显示在 *Listings* 下方。

![sell_wearable3.png](/createawearable/sell_wearable3.png)

在点击 **Sell** 按钮后，会弹出 *Sell your item* 对话框。填写以太币的数量，以确定您要出售可穿戴物品的价格。请记住，OpenSea 将会收取 2.5% 的手续费。可能还会涉及版税费用，但您现在不应该看到。

如果您希望，可以设置销售的结束日期，以便在有限的时间内列出物品。如果您愿意，点击 **Schedule listing** 并设置结束日期。

![sell_item.png](/createawearable/sell_item.png)

准备就绪后，点击 **Complete listing** 按钮，您的可穿戴物品将被列出出售。

:::caution
对于 Matic/Polygon 收藏品，您收到的以太将是 PoS-WETH。如果您在钱包中看不到它，请切换网络或前往 [此处](https://wallet.polygon.technology/wallet)。
:::

### 定制和版税

您可以在 Cryptovoxels 和 OpenSea 上定制您的收藏品。您还可以为您的收藏品设置版税。

#### 在 Cryptovoxels 上定制您的收藏品

前往您的收藏品页面，然后点击 **⚙Admin** 按钮。

在 *Settings* 下，您可以更改 **Collection Name**、**Description**、**Cover Color** 和 **Logo**。

![customize_collection1.png](/createawearable/customize_collection1.png)

在 *Social and interactions* 下，您可以添加您的 **Twitter handle**、**OpenSea store**、**In-world store**（如果您拥有一个地块，请输入 ID）和 **Featured collectible**（输入可穿戴物品的 ID）。如果您输入了所有这些信息，您将在收藏品页面右侧看到您的 Twitter 动态和推荐可穿戴物品，还将显示两个新按钮（**View on Opensea** 和 **Visit store**）。

![customize_collection2.png](/createawearable/customize_collection2.png)

#### 在 OpenSea 上定制您的收藏品

在开始在 OpenSea 上定制之前，我们必须让他们知道您是实际的所有者，这不会立即生效。从您的收藏品管理页面复制地址。

![

customize_opensea1.png](/createawearable/customize_opensea1.png)

在 OpenSea 上转到 [Collection Manager](https://opensea.io/collections)，点击 **kebab menu** 并选择 **Import an existing smart contract**。

![customize_opensea2.png](/createawearable/customize_opensea2.png)

点击第一个按钮，**Live on a mainnet**，然后点击左侧的下拉菜单，选择 Polygon（用于 Matic）或 ETH，输入您的地址，然后点击 **Submit** 按钮。

![customize_opensea3.png](/createawearable/customize_opensea3.png)

提交后，您必须等待直到有人手动将收藏品连接到您的帐户。您可以在 [Collection Manager](https://opensea.io/collections) 页面上编辑收藏品时知道您是否已连接。

![customize_opensea4.png](/createawearable/customize_opensea4.png)

一旦您的帐户已连接，您将能够编辑您的收藏品信息，包括添加 Logo 图像、Featured 图像和 Banner 图像。

![customize_opensea6.png](/createawearable/customize_opensea6.png)

如果您向下滚动，您将到达版税部分。从这里，您可以为手续费设置高达 10%，并输入您的支付钱包地址。

![customize_opensea5.png](/createawearable/customize_opensea5.png)

玩得开心，定制您的收藏品！

### 可穿戴物品属性

您可以向您的可穿戴物品添加最多三个属性。这是可选的，但非常有用和有趣。

#### 设置属性

前往您的收藏品页面，然后点击 **⚙Admin** 按钮，向下滚动并转到 *Custom Attributes* 部分，然后点击 **Add a trait**。

![attributes1.png](/createawearable/attributes1.png)

点击下拉菜单并选择 [type](https://docs.opensea.io/docs/metadata-standards#section-attributes)。

![attributes2.png](/createawearable/attributes2.png)

设置完属性后，点击 **Save changes**。

![attributes3.png](/createawearable/attributes3.png)

#### 将属性应用于现有的可穿戴物品

在收藏品中设置自定义属性后，可以将属性添加到现有的可穿戴物品中。前往 Cryptovoxels 上的可穿戴物品页面，向下滚动，然后添加信息并点击 **Save Attribute** 按钮。

![attributes4.png](/createawearable/attributes4.png)

:::caution
如果您不想在可穿戴物品上使用某个属性，请点击属性框中的 **Ignore** 复选框。
:::

#### 将属性应用于新的可穿戴物品

在收藏品中设置自定义属性后，可以在上传可穿戴物品的过程中添加属性。

![attributes5.png](/createawearable/attributes5.png)

#### 在 OpenSea 上的显示

下面您可以看到在 OpenSea 上的显示方式。**AUTHOR**、**RARITY** 和 **VOX** 属性是由 Cryptovoxels 自动输入的，**TYPE** 是由属性手动添加的。在统计信息下，您可以看到手动添加的 **#** 和 **Generation**。

![attributes6.png](/createawearable/attributes6.png)

添加属性的另一个好处是可以帮助人们过滤和排序您的收藏品。

![attributes7.png](/createawearable/attributes7.png)

### 稀有度级别

可穿戴物品的发行数量将决定其稀有度。

**普通** = 大于或等于 1000 个发行数量
**稀有** = 大于或等于 100 个，小于 1000 个
**史诗** = 大于或等于 10 个，小于 100 个
**传奇** = 大于或等于 1 个，小于 10 个