# 基于定时器的特性循环

## 基于定时器的特性循环
此脚本允许您在给定的时间间隔内循环播放一系列URL。
![timer_loop.png](/timer_loop.png)

### 固定秒数
```js
var url =["URL1",
"URL2",
"URL3",
"URL4"]

let numSecs=2

//-----------这里不需要更改-----------
i=0
setInterval(()=>{
  if(i!=url.length){
    feature.set({url:url[i]})
    i++
  }else{
    i=0
  }
},numSecs*1000)

```
1. 将此脚本放置在图像、NFT 或 Vox 模型上。
2. 用您的 URL 替换 `URL1`、`URL2`，并将 `numSecs` 设置为所需的秒数。

如果您的 URL 少于 4 个，请简单地删除额外的 `,"URL.."`。如果您的 URL 多于 4 个，请在列表后面加上逗号，然后添加您的 URL。
例如：
```js
var url =["URL1",
"URL2",
"URL3",
"URL4",
"URL5"]
```

### 可变秒数
```js
var url =["URL1",
"URL2",
"URL3",
"URL4"] // URL 列表

let numMilliSecs=[2500,2000,3000,1500] // 毫秒数列表

//-----------这里不需要更改-----------
var i=0

function newUrl(i){

  if(i!=url.length){
    	feature.set({url:url[i]})
      let m =numMilliSecs[i]
      i++
      setTimeout(()=>{
				newUrl(i)
       },m)
  }else{
    i=0
    let m =numMilliSecs[i]
    setTimeout(()=>{
				newUrl(i)
    },m)
  }


    
}

newUrl(i)


```
1. 将此脚本放置在图像、NFT 或 Vox 模型上。
2. 用您的 URL 替换 `URL1`、`URL2`，并将 `numMilliSecs` 设置为所需的毫秒数。

此脚本会在给定的时间内循环播放一系列图像/ GIF。假设您有一个持续 3 秒的 GIF，您可以将毫秒列表中的第一个数字设置为 `3000`。如果您的第二个 GIF 为 5.42 秒，将毫秒列表中的第二个数字更改为 `5420`...

将脚本插入到您的图像特性中，刷新，完成！