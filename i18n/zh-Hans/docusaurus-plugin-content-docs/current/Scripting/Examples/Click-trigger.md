# 简单的点击触发示例

这里我们介绍一个非常简单的点击触发示例。

![script_example_click_trigger.png](/script_example_click_trigger.png)

## 1. 放置一个按钮和一个标志

并将标志的ID字段设置为'triggerResult'

## 2. 复制并粘贴此脚本

将其粘贴到按钮的脚本字段中。

```js
let textSign = parcel.getFeatureById('triggerResult')

feature.on('click',e=>{
	textSign.set({text:'点击！'})
})
```

快速刷新，就可以看到效果了！

## 3. 它的作用是什么？
第一行
```js
let textSign = parcel.getFeatureById('triggerResult')
```
查找您创建的标志并将其插入到变量textSign中。
接下来的部分处理点击事件。
```js
feature.on('click',e=>{
	textSign.set({text:'点击！'})
}
```
它只是监听点击事件，一旦按钮被点击，就告诉标志显示"点击！"。

## 它在体素模型上可以工作吗？

可以！您可以将此脚本复制并粘贴到体素模型的脚本字段中，它也会起作用！