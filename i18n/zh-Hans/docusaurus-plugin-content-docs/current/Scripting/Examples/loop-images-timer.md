# Feature looped on timer

## Feature looped on a timer
This script allows you to loop through a list of urls given an amount of seconds.
![timer_loop.png](/timer_loop.png)

### Fixed amount of seconds
```js
var url =["URL1",
"URL2",
"URL3",
"URL4"]

let numSecs=2

//-----------Nothing to touch here-----------
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
1. Place this script on an image, nft or vox-model
2. Replace `URL1`,`URL2`,... with your URLs. And set `numSecs` to the desired number of seconds.

If you have less than 4 URLs, simply remove the extra `,"URL.."`. If you have more than 4 URLs, simply add a comma to the list followed by your URLs.
For example:
```js
var url =["URL1",
"URL2",
"URL3",
"URL4",
"URL5"]
```



### Variable amount of seconds
```js
var url =["URL1",
"URL2",
"URL3",
"URL4"] // list of URLs

let numMilliSecs=[2500,2000,3000,1500] // list of numbers of milliseconds

//-----------Nothing to touch here-----------
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
1. Place this script on an image, nft or vox-model
2. Replace `URL1`,`URL2`,... with your URLs. And set `numMilliSecs` to the desired number of milliseconds.

This script runs through a list of images/gifs for a given amount of time. So say you have a first gif that lasts 3 seconds, you can set the first number in the list of milliseconds to `3000`. If your second gif is 5.42 seconds, change the second number of milliseconds to `5420`...

Insert the script on your image feature, refresh, and you're set!
