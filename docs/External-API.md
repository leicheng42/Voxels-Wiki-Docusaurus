# External APIs

Cryptovoxels has a few APIs that you can use for your own analysis or to show on your website.

**Here is a list of APIs you can obtain, as of v 4.25:**
1. Parcels info
2. Single parcel info
3. All features inside a parcel
4. Suburbs
5. Islands
6. Womps
7. Avatars
8. Wearables
9. Single wearable

**Extra**: Obtain the leaflet map.

## 1. Parcels info

## All Parcels info {.tabset}
### Description

Returns owner, collaborators, parcel description, parcel geometry and more for every single parcels of Cryptovoxels.

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
  if (error) throw new Error(error);

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
### response
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

## 2. Single parcel

## Single parcel info {.tabset}
### Description

Returns basic parcel info for a specific parcel given the parameter `:id`.


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
  if (error) throw new Error(error);

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
### response
```json
request "https://www.cryptovoxels.com/p/5" =>
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

## 3. All features in a parcel

## Single parcel features {.tabset}
### Description

Returns all features inside a specific parcel given the parameter `:id`.

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
### response
```json
request "https://www.cryptovoxels.com/grid/parcels/670" =>
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


## 4. Suburbs
## Suburbs {.tabset}
### Description

Returns informations about all suburbs .

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
### response
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


## 5. Islands
## Suburbs {.tabset}
### Description

Returns a list of all islands and their geometry.

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
### response
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
### Description

Returns the last 100 womps and their info.

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
### response
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
### Rss feed:
```
https://www.cryptovoxels.com/womps.rss
```

## 7. Avatars
## Avatars {.tabset}
### Description

Returns avatars informations and their corresponding parcels.

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
  if (error) throw new Error(error);

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
### response
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

## 8. Collectibles
## Collectibles {.tabset}
### Description

Returns all collectibles and their info.

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
  if (error) throw new Error(error);

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
### response
```json
{"success":true,
 "collectibles":[
   {
     "id":"492622e7-4588-45e3-9ca9-f96fb59ed3f9",
     "name":"Black Spray Paint",
     "token_id":59,
     "description":"",
     "issues":8,
     "author":"0x2999377cd7a7b5fc9fd61db33610c891602ce037",
     "hash":"3abf98ffa393afba38fde06187b0ed1f1d902126"
   },
   ...
```

## 9. Collectibles of one collections
## Collection's collectibles {.tabset}
### Description

Returns all collectibles and their info from one specific collection

Replace `:id` by the collection id.

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
### response
```json
{"success":true,
 "collectibles":[
   {
     "id":"492622e7-4588-45e3-9ca9-f96fb59ed3f9",
     "name":"Black Spray Paint",
     "token_id":59,
     "description":"",
     "issues":8,
     "author":"0x2999377cd7a7b5fc9fd61db33610c891602ce037",
     "hash":"3abf98ffa393afba38fde06187b0ed1f1d902126"
   },
   ...
```

## 10. Single collectible
## Single collectible {.tabset}
### Description

Returns all information about a specific collectible given the parameter `:collection_id` and `:id`.

:::caution
Because this API reveals the vox file of the wearable it is not to be abused.
:::

:::caution
Because this API reveals the vox file of the wearable it is not to be abused.
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
### Python
```python
import requests

url = "https://www.cryptovoxels.com/c/:collection_id/:id"
response = requests.request("GET", url)

print(response.text)
```
### response
```json
request "https://www.cryptovoxels.com/c/1/5" =>
{"name":"Royal Edge",
 "image":"https://www.cryptovoxels.com/w/3e67f51d6c17281963c948456b7032d3f7f3f9bb/png",
 "description":"A short sword designed for the Royal Guards and worn as a medal of prestige rather than a combat weapon. While its main purpose is symbolic, do not underestimate the damage it can deliver to a piece of crusty loaf.",
 "attributes":{
  "vox":"https://www.cryptovoxels.com/w/3e67f51d6c17281963c948456b7032d3f7f3f9bb/vox",
  "author":"topper",
   "issues":32,
   "rarity":"epic"
 },
 "external_url":"https://www.cryptovoxels.com/wearables/5",
 "background_color":"FAD961"
}
```



## Show the leaflet map on your website.
The map is generated using the free [leaflet library](https://leafletjs.com/).

#### Add leaflet to your page
Via your favorite mean.
Below we load up leaflet from the CDN using the `link` and `script` element at the top of the page.
```html
    <!--  JQUERY -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
  
    <!-- LEAFLET-->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css" integrity="sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ==" crossorigin="">
    <script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet.js" integrity="sha512-/Nsx9X4HebavoBvEBuyp3I7od5tA0UzAxs+j83KgC8PU0kgB4XiK4Lfe4y4cgBtaRJQEIFCW+oC506aPT2L1zw==" crossorigin=""></script>

```

#### Have a div ready
here we add a `div` element that will contain our map.
```html
<div id="cvmap" style="height: 700px; position: relative; outline: none;">
<!-- It is important that the leaflet map is in a "defined" size container Or that it has a defined size.-->
```

#### Add the javascript
In a `<script></script>` element we add the following code.
```js
       var CVmap = L.map('cvmap').setView([1.80, 0.98], 9);
      /* Load the tileLayer x and y*/
      L.tileLayer(`https://map.cryptovoxels.com/tile?z={z}&x={x}&y={y}`, {
        minZoom: 3,
        maxZoom: 20,
        attribution: 'Map data &copy; Cryptovoxels',
        id: 'cryptovoxels'
      }).addTo(CVmap)
```
It loads up the leaflet layer, which is available from:
`https://map.cryptovoxels.com/tile?z={z}&x={x}&y={y}`.

### Example:
[CV interactive map](https://benjythebee.github.io/CV_interactive_map/index.html)
and the repo of the example:
https://github.com/Benjythebee/CV_interactive_map
