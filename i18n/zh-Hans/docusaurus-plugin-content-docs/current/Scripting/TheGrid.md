# 网格
多人服务器

## 网格

有一天，我进入了这里。- 凯文·弗林

网格是在 Cryptovoxels 基础设施上运行您分区脚本的多人服务器。它运行与普通脚本引擎完全相同的 API，但它会跟踪服务器上的状态并将更改发送给所有连接的用户。这意味着如果您点击一个门并打开它，那么站在您附近的所有其他人也将看到门打开。这还意味着您可以与其他玩家一起玩多人游戏，并且服务器将维护游戏的状态。

多人服务器是免费使用的，由 Cryptovoxels Corporation 托管。您的脚本会按需启动，具有 8MB 堆内存的严格限制，CPU 时间受限，并且在您的分区处于空闲状态时会被终止。

使用网格的优势：

* 您的脚本是多人脚本
* 您的脚本在受信任的环境中运行
* 您的脚本始终可用
* 您不必支付托管费用，也不必等待托管提供商启动您的脚本

缺点：

* 调试可能有些棘手
* 您必须将您的体验适应 8MB 的内存

### 如何激活
1. 转到[分区选项卡](https://www.cryptovoxels.com/account/parcels)中的您的分区。确保已登录！

2. 如果您拥有该分区，并且已登录，您应该看到一个如下所示的管理员面板：

![admin_panel_parcel_v4.55.png](/tutorials/admin_panel_parcel_v4.55.png){.align-center}

3. 勾选“on Grid”复选框。

完成！您的脚本现在支持多人游戏。

### 发生了什么

（以 [分区 #78](https://www.cryptovoxels.com/parcels/78) 为例 - 请放入您自己的分区 ID 进行参考）

1. 您进入一个分区
2. 分区设置为 `grid: true`（在分区设置中设置）

![how_to_grid]adming_panel_grid_activated_v4.55.png](/tutorials/[how_to_grid]adming_panel_grid_activated_v4.55.png){.align-center}

3. Web 客户端连接到 `wss://grid.cryptovoxels.com/grid/78`
4. 网格服务器启动了一个 v8 [isolated-vm](https://www.npmjs.com/package/isolated-vm?activeTab=readme)
5. 隔离加载了 [脚本主机](http://github.com/cryptovoxels/scripting)
6. 隔离从 `https://untrusted.cryptovoxels.com/grid/parcels/78/scripts.js` 获取并评估了您的 JavaScript
7. WebSocket 连接被接受，您的客户端开始与您的网格服务器通信
8. 所有客户端断开连接，隔离被销毁

目前，网格服务器会立即从您的脚本发送消息回到客户端，但在将来的版本中，这将被限制为每秒 5 或 10 次，因为在公共互联网上通过 WebSocket 发送实时的 60Hz 更新会导致大量的延迟和数据包堆积。

### 查看日志

您的日志将写入 Redis 并持久保存。它们是公开可见的（请不要在您的日志中放入任何机密信息），网址为：

`https://grid.cryptovoxels.com/grid/78/logs`

### 可用的 API

:::警告
截至版本 1.1.2，API 非常基础，随着时间的推移将提供更多功能。
:::

网格服务器有自己的版本信息。请查看当前发布的版本：https://grid.cryptovoxels.com/

* [脚本 API](/docs/Scripting/)
* [内置功能](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
* `setTimeout`
* `setInterval`
* `console.log`

路线图：

* `clearTimeout`
* `clearInterval`
* [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [`AsyncStorage`](https://reactnative.dev/docs/asyncstorage.html)
* [`importScripts`](https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/importScripts)
* [物理学](https://schteppe.github.io/cannon.js/)