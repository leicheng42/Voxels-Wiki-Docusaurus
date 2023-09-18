# 外部API

Cryptovoxels有一些API，您可以用它们进行自己的分析，或在您的网站上展示。

**以下是截止到v 4.25的API列表：**
1. 地块信息
2. 单个地块信息
3. 地块内的所有功能
4. 郊区
5. 岛屿
6. Womps（即社交信息）
7. 头像
8. 服饰
9. 单个服饰

**额外**: 获取Leaflet地图。

## 1. 地块信息

## 所有地块信息 {.tabset}
### 描述

返回Cryptovoxels的每个单独地块的所有者、合作者、地块描述、地块几何信息等。

### cURL

```js
cURL --request GET \
  --url 'https://www.cryptovoxels.com/api/parcels.json'
```
### Nodejs
```js
const request = require('request');

const options = {
  method: 'GET',
  url: 'https://www.cryptovoxels.com/api/parcels.json'
};

request(options, function (error, response, body) {
  if (error) throw an Error(error);

  console.log(body);
});
```
### Python
```python
import requests

url = "https://www.cryptovoxels.com/api/parcels.json"
response = requests.request("GET", url)

print(response.text)
```
### 响应
```json
{"success":true,
 "parcels":[
   {"id":1,
    "height":9,
    "address":"70 Block Fork",
    "name":"Metaverse",
    "contributors":["0x4595ff64328faf80a8cf0d52355639984b6af23c",""],
    "geometry":{
      "type":"Polygon",
      "coordinates":[
        [
          [0.15,0.02],
          [0.02,0.02],
          [0.02,0.2],
          [0.15,0.2],[0.15,0.02]
        ]
      ]
    },
    "area":234,
    "distance":2.82842712474619,
    "price":0,
    "owner":"0xe5a994be9e94513bcb1a0a5991470d9fde380d26",
    "owner_name":"anonymous",
    "x1":2,
    "x2":15,
    "y1":0,
    "y2":9,
    "z1":2,
    "z2":20
   },
   ...
```

## 2. 单个地块

## 单个地块信息 {.tabset}
### 描述

根据参数`:id`返回特定地块的基本信息。

### cURL

```js
cURL --request GET \
  --url 'https://www.cryptovoxels.com/p/:id'
```
### Nodejs
```js
const request = require('request');

const options = {
  method: 'GET',
  url: 'https://www.cryptovoxels.com/p/:id'
};

request(options, function (error, response, body) {
  if (error) throw an Error(error);

  console.log(body);
});
```
### Python
```python
import requests

url = "https://www.cryptovoxels.com/p/:id"
response = requests.request("GET", url)

print(response.text)
```
### 响应
```json
请求 "https://www.cryptovoxels.com/p/5" =>
{
  "name":"76 Block Fork",
 "image":"https://map.cryptovoxels.com/tile/parcel?x=0.07&y=-0.24",
 "description":"100m² plot title parcel near The Center in Origin City, 19m from the origin, with a 6m build height and near to Addy Center, Block Fork, Silver Expressway and Night Pass",
 "attributes":{
   "area":100,
   "width":10,
   "depth":10,
   "height":6,
   "elevation":0,
   "suburb":"The Center",
   "island":"Origin City",
   "title":"plot"
 },
 "external_url":"https://www.cryptovoxels.com/parcels/5",
 "background_color":"f3f3f3"
}
```

## 3. 地块内的所有功能

## 单个地块功能 {.tabset}
### 描述

根据参数`:id`返回特定地块内的所有功能。

### cURL

```js
cURL --request GET \
  --url 'https://www.cryptovoxels.com/grid/parcels/:id'
```

### Nodejs
```js
const request = require('request');

const options = {
  method: 'GET',
  url: 'https://www.cryptovoxels.com/grid/parcels/:id'
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

### Python
```python
import requests

url = "https://www.cryptovoxels.com/grid/parcels/:id"
response = requests.request("GET", url)

print(response.text)
```

### 响应
```json
请求 "https://www.cryptovoxels.com/grid/parcels/670" =>
{"success":true,
  "parcel":{
    "id":670,
      "hash":"815b69b39ee84f2a30c6ae6fab46bef2da3b6bb7",
        "features":[
          {
            "type":"youtube",
            "scale":[11.7,7.2,0],
            "url":"https://www.youtube.com/watch?v=l9_-2oG4Cc0",
            "position":[-6.2,5.25,0.25],
            "rotation":[0,4.71238898038469,0],
            "uuid":"35f6dbfd-d255-4706-9635-cfa2d2c9a366",
            "script":"",
            "id":"videoo",
            "inverted":false,
            "screenRatio":"169"
          },
          ...
          ],
          "settings":{},
          "scripting":false,
            "voxels":"eJzt1LEJw0AQRFELleJSXIv6uNKNg81swZ1hGYn3Np5AcPrb2FrucM7F38q//Zy+bTymHTY2/OE15k8PbLI3rNIDm/ttWHW1Huzjc7++5vvbWdmcs8nesOpqPTg3/3b2kfyubfSglx4kv2sbPeilB8nv2kYP8t2pBzZ33NBJD2yyN3TSAxv/KUUPbPSAogc2ekDRAxs9oOiBjR5Q9MBGDyh6YKMHFD2w0QOKHtjoAUUPkjfQSw+SN9BLD5I30EsPkjfQSw+SN9BLD5I30EsP/KdQ9EAPoOiBHkB5A17GCZE=",
          "owner":"0x0fA074262d6AF761FB57751d610dc92Bac82AEf9",
          "sandbox":false,
           "grid":true,
           "bake":true,
           "contributors":["0x98be1b7feb2eb8f84251968d3b8d7d51fe04f323"],
          "description":null,
           "images":[""],
           "name":"Theater",
           "address":"4 Prime Passage",
            "suburb":"Scripting",
           "island":"Origin City",
           "x1":-52,
            "y1":0,
            "z1":246,
           "x2":-38,
            "y2":10,
            "z2":259,
           "tileset":null,
            "palette":["#ffffff","#888888","#000000","#b44141","#665757","#05ffa1","#b967ff","#fffb96"]
	}
}
```


## 4. 郊区
## 郊区 {.tabset}
### 描述

返回有关所有郊区的信息。

### cURL

```js
cURL --request GET \
  --url 'https://www.cryptovoxels.com/api/suburbs.json'
```
### Nodejs
```js
const request = require('request');

const options = {
  method: 'GET',
  url: 'https://www.cryptovoxels.com/api/suburbs.json'
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```
### Python
```python
import requests

url = "https://www.cryptovoxels.com/api/suburbs.json"
response = requests.request("GET", url)

print(response.text)
```
### 响应
```json
{"success":true,
 "suburbs":[
   {
     "id":1,
    "name":"The Center",
     "position":
     {
       "type":"Point",
       "coordinates":
       [0,0]
     }
   },
   ...
```


## 5. 岛屿
## 岛屿 {.tabset}
### 描述

返回所有岛屿及其几何信息的列表。

### cURL

```js
cURL --request GET \
  --url 'https://www.cryptovoxels.com/api/islands.json'
```
### Nodejs
```js
const request = require('request');

const options = {
  method: 'GET',
  url: 'https://www.cryptovoxels.com/api/islands.json'
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```
### Python
```python
import requests

url = "https://www.cryptovoxels.com/api/islands.json"
response = requests.request("GET", url)

print(response.text)
```
### 响应
```json
{"success":true,
 "islands":[
   {
     "id":1,
     "name":"Origin City",
     "position":{
     	"type": "point",
       "coordinates": [0,0]
     },
     "geometry":{
       "type":"Polygon",
       "coordinates":[
         [[-4.81,-4.81],
          [-4.81,4.81],
          [4.81,4.81],
          [4.81,-4.81],
          [-4.81,-4.81]]
       ]
     }
   },
   ...
```

## 6. Womps
## Womps {.tabset}
### 描述

返回最新的100个“Womp”以及它们的信息。

### cURL

```js
cURL --request GET \
  --url 'https://www.cryptovoxels.com/api/womps.json'
```
### Nodejs
```js
const request = require('request');

const options = {
  method: 'GET',
  url: 'https://www.cryptovoxels.com/api/womps.json'
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```
### Python
```python
import requests

url = "https://www.cryptovoxels.com/api/womps.json"
response = requests.request("GET", url)

print(response.text)
```
### 响应
```json
{"success":true,
 "womps":[
   {
     "id":4746,
     "author":"0x83E81d747529F0Eb6145b149C438aB7f9BBD651C",
     "content":"supa cool",
     "parcel_id":856,
     "coords":"SW@265E,117S",
     "created_at":"2020-09-29T03:21:35.660Z",
     "updated_at":"2020-09-29T03:21:35.660Z",
     "image_supplied":false
   },
   ...
```
### Rss订阅:
```
https://www.cryptovoxels.com/womps.rss
```

## 7. Avatars
## Avatars {.tabset}
### 描述

返回有关头像的信息以及它们对应的地块。

### cURL

```js
cURL --request GET \
  --url 'https://www.cryptovoxels.com/api/avatars.json'
```
### Nodejs
```js
const request = require('request');

const options = {
  method: 'GET',
  url: 'https://www.cryptovoxels.com/api/avatars.json'
};

request(options, function (error, response, body) {
  if (error) throw an Error(error);

  console.log(body);
});
```
### Python
```python
import requests

url = "https://www.cryptovoxels.com/api/avatars.json"
response = requests.request("GET", url)

print(response.text)
```
### 响应
```json
{"id":645,
 "owner":"0x0fa074262d6af761fb57751d610dc92bac82aef9",
 "name":"Fayelure",
 "parcels":[{
     "f1":670,
   "f2":"Theater",
   "f3":"4 Prime Passage"
 }
           ]},
   ...
```

## 8. 收藏品
## 收藏品 {.tabset}
### 描述

返回所有收藏品及其信息。

### cURL

```js
cURL --request GET \
  --url 'https://www.cryptovoxels.com/api/collectibles.json'
```
### Nodejs
```js
const request = require('request');

const options = {
  method: 'GET',
  url: 'https://www.cryptovoxels.com/api/collectibles.json'
};

request(options, function (error, response, body) {
  if (error) throw an Error(error);

  console.log(body);
});
```
### Python
```python
import requests

url = "https://www.cryptovoxels.com/api/collectibles.json"
response = requests.request("GET", url)

print(response.text)
```
### 响应
```json
{"success":true,
 "collectibles":[
   {
     "id":"492622e7-4588-45e3-9ca9-f96fb59ed3f9",
     "name":"黑色喷漆",
     "token_id":59,
     "description":"",
     "issues":8,
     "author":"0x2999377cd7a7b5fc9fd61db33610c891602ce037",
     "hash":"3abf98ffa393afba38fde06187b0ed1f1d902126"
   },
   ...
```

## 9. 一个收藏品的收藏品
## 收藏品的收藏品 {.tabset}
### 描述

返回来自一个特定收藏品的所有收藏品和它们的信息

用收藏品的ID替换 `:id`。

### cURL

```js
cURL --request GET \
  --url 'https://www.cryptovoxels.com/api/collections/:id/collectibles.json'
```
### Nodejs
```js
const request = require('request');

const options = {
  method: 'GET',
  url: 'https://www.cryptovoxels.com/api/collections/:id/collectibles.json'
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```
### Python
```python
import requests

url = "https://www.cryptovoxels.com/api/collections/:id/collectibles.json"
response = requests.request("GET", url)

print(response.text)
```
### 响应
```json
{"success":true,
 "collectibles":[
   {
     "id":"492622e7-4588-45e3-9ca9-f96fb59ed3f9",
     "name":"黑色喷漆",
     "token_id":59,
     "description":"",
     "issues":8,
     "author":"0x2999377cd7a7b5fc9fd61db33610c891602ce037",
     "hash":"3abf98ffa393afba38fde06187b0ed1f1d902126"
   },
   ...
```

## 10. 单个收藏品
## 单个收藏品 {.tabset}
### 描述

返回有关特定收藏品的所有信息，给定参数 `:collection_id` 和 `:id`。

:::caution
由于此API会公开可穿戴物品的vox文件，因此请勿滥用。
:::

:::caution
由于此API会公开可穿戴物品的vox文件，因此请勿滥用。
:::

### cURL

```js
cURL --request GET \
  --url 'https://www.cryptovoxels.com/c/:collection_id/:id'
```
### Nodejs
```js
const request = require('request');

const options = {
  method: 'GET',
  url: 'https://www.cryptovoxels.com/c/:collection_id/:id'
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```
以下是您提供的代码的翻译：

### Python
```python
import requests

url = "https://www.cryptovoxels.com/c/:collection_id/:id"
response = requests.request("GET", url)

print(response.text)
```

### 响应
```json
请求 "https://www.cryptovoxels.com/c/1/5" =>
{"name":"Royal Edge",
 "image":"https://www.cryptovoxels.com/w/3e67f51d6c17281963c948456b7032d3f7f3f9bb/png",
 "description":"这是为皇家卫兵设计的短剑，作为威望的勋章而不是战斗武器佩戴。尽管其主要目的是象征性的，但不要低估它对一块发硬的面包造成的伤害。",
 "attributes":{
  "vox":"https://www.cryptovoxels.com/w/3e67f51d6c17281963c948456b7032d3f7f3f9bb/vox",
  "author":"topper",
   "issues":32,
   "rarity":"史诗"
 },
 "external_url":"https://www.cryptovoxels.com/wearables/5",
 "background_color":"FAD961"
}
```

## 在您的网站上显示leaflet地图。
该地图是使用免费的[leaflet库](https://leafletjs.com/)生成的。

#### 将leaflet添加到您的页面
通过您喜欢的方式进行添加。
在下面的示例中，我们使用`link`和`script`元素从CDN加载leaflet库，并将它们放在页面顶部。
```html
    <!--  JQUERY -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
  
    <!-- LEAFLET-->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css" integrity="sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ==" crossorigin="">
    <script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet.js" integrity="sha512-/Nsx9X4HebavoBvEBuyp3I7od5tA0UzAxs+j83KgC8PU0kgB4XiK4Lfe4y4cgBtaRJQEIFCW+oC506aPT2L1zw==" crossorigin=""></script>
```

#### 准备一个div
在这里，我们添加一个`div`元素，该元素将包含我们的地图。
```html
<div id="cvmap" style="height: 700px; position: relative; outline: none;">
<!-- 非常重要的是leaflet地图位于一个"已定义"大小的容器中，或者它本身具有已定义的大小。-->
```

#### 添加JavaScript代码
在`<script></script>`元素中，我们添加以下代码。
```js
       var CVmap = L.map('cvmap').setView([1.80, 0.98], 9);
      /* 加载tileLayer x 和 y */
      L.tileLayer(`https://map.cryptovoxels.com/tile?z={z}&x={x}&y={y}`, {
        minZoom: 3,
        maxZoom: 20,
        attribution: '地图数据 &copy; Cryptovoxels',
        id: 'cryptovoxels'
      }).addTo(CVmap)
```
它加载了leaflet图层，该图层可从以下地址获得：
`https://map.cryptovoxels.com/tile?z={z}&x={x}&y={y}`。

### 示例：
[CV交互地图](https://benjythebee.github.io/CV_interactive_map/index.html)
示例的仓库：
https://github.com/Benjythebee/CV_interactive_map
