# 自托管脚本

## 自托管脚本

自 2022 年 6 月起，我们引入了用户托管自己的脚本服务器的功能。

### 什么是脚本服务器？

它是一个运行 WebSocket 并使用基于事件的触发器与 Cryptovoxels 客户端进行交互的进程。

**注意**：创建 VSS（Voxels 脚本服务器）对于脚本是可选的；默认情况下，分区将具有 `wss://grid.cryptovoxels.com/grid/{您的分区 id}` 作为主机，这是 Cryptovoxels 官方托管的服务。

### 如何创建 Voxels 脚本服务器（VSS）？
以下步骤是使用 replit.com 创建 VSS 的示例；

1. **转到 `replit.com` 并创建应用程序**
如果需要的话，创建一个新的 NodeJS 应用程序（或一个新的 NodeJS "Repl")，并创建一个帐户。
然后，您将被欢迎到这个屏幕：
![vss]tutorial_1.png](/tutorials/[vss]tutorial_1.png)

2. **安装 Voxels-Scripting-Server 包**
转到“包”选项卡，搜索“voxels-scripting-server”包。
一旦找到它，单击 `+` 安装该包。
![vss]tutorial_2.png](/tutorials/[vss]tutorial_2.png)

3. **运行脚本**
返回到您的 `index.js` 文件，复制以下代码：
```js
const vss =require("voxels-scripting-server");

vss.default.makeVSS(670).then((wss) => {
  if (wss) {
    console.log("Websocket started");
  } else {
    console.error("Websocket did not start");
  }
});
```
并将 `670` 替换为您的分区 id 号码。

4. **运行服务器！**
现在您已经复制了代码，请点击 **RUN** 按钮！
Replit.com 将尝试启动您的服务器，当网页加载并显示 `Server v 0... running!` 时，您将知道您的服务器正在运行。

![vss]tutorial_3.png](/tutorials/[vss]tutorial_3.png)

5. **将地址复制并粘贴到您的分区设置中**

复制 Replit 给出的地址（例如，对于我来说，地址是 `https://testCryptovoxelsserver.benjythebee.repl.co`），然后粘贴到您的 Voxels 分区设置中：

![vss]voxels_settings.png](/tutorials/[vss]voxels_settings.png)

点击保存，完成，您的分区现在在托管服务器上运行脚本。

##### 需要了解的事项
默认情况下，Replit 不会保持您的服务器保持活动状态。要保持 Replit 服务器保持活动状态，您必须升级您的帐户，并在设置中选择 "始终保持开启" 功能。

![vss]replit_tutorial.png](/tutorials/[vss]replit_tutorial.png)