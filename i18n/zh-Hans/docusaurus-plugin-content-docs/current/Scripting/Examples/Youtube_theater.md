# YouTube 剧场

## YouTube 剧场

让用户实时分享他们的视频。

:::danger
自 v4.16 版本以来，文本输入功能已不存在，因此此示例实际上无法实现。然而，我们不会删除此页面，因为对于好奇的用户来说，该示例仍然可能很有用。
:::

![youtube_theater_example.png](/youtube_theater_example.png)

### 过程

1. 放置一个 YouTube 特性并调整其比例。
2. 在某个位置放置一个按钮，并在墙上放置一个文本输入框。
3. 给 YouTube 特性分配 ID 为 'video_object'。
4. 给文本输入框分配 ID 为 'text_input'。
5. 将下面的脚本插入到按钮中：

```js
let image = parcel.getFeatureById('video_object')

let input = parcel.getFeatureById('text_input')

function validateYouTubeUrl(url) {    
    if (url != undefined || url != '') {        
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
            return true;
        } else {
            alert('不是有效的链接');
            return false;
        }
    }
}


feature.on('click',e=>{
  const newurl = input.text

if(validateYouTubeUrl(newurl)){
  image.set({url:newurl})
}
})
```

6. 网格

进入您的分区设置并选中网格框。
![grid-settings.png](/grid-settings.png)

**功能**

一旦输入了 YouTube 链接并点击了按钮，将调用 `validateYouTubeUrl` 函数来检查 URL 的有效性。如果是一个有效的 YouTube URL，则会更改视频，然后您可以开始播放它。