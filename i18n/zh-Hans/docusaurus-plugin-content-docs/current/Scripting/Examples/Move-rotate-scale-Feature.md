# 移动/旋转/缩放特性
关于如何移动、旋转或缩放特性的快速教程。

关于如何更改特性位置以及如何旋转的页面。
![script-example_move-feature.gif](/script-example_move-feature.gif)

## 1. 位置
有几种方法可以移动一个特性。下面我们将逐一介绍它们。

### A. 获取位置
您可以使用以下行获取物品的位置：
```js
feature.position
```
它将返回一个类似`{x:..,y:..,z:..}`的Vector3对象。

因此，要获取位置的x、y或z，您可以写：
```js
feature.position.x
// 或
feature.position.y
// 或
feature.position.z
```


### B. 设置位置
您可以使用以下行设置物品的位置：
```js
feature.position.set(x,y,z)
//或
feature.set({position:[x,y,z]}) // 但现在先忽略这个。参见第4节。
```
例如：
```js
let myObject = parcel.getFeatureById('myImage') // 获取名为 'myImage' 的特性
setTimeout(()=>{ // 等待5秒钟
  myObject.position.set(4.5,0.75,0.5) // 将名为 'myImage' 的特性移动到 x:4.5，y:0.75，z:0.5
},5000)
```

**仅更改一个轴**

现在假设您只想更改一个轴。比如说，您有一个位置为`{x:1,y:1,z:1}`的特性，您想将其更改为`y=0.5`。

当然，您可以写成
```js
feature.position.set(1,0.5,1)

```
但在添加不必要的1的情况下，这样做有什么意义呢？如果您没有其他坐标怎么办呢？

在这种情况下，最好写成以下形式之一：
```js
feature.position.x = 5 // 如果您想将x更改为5
// 或
feature.position.y = 0.5 // 如果您想将y更改为0.5
// 或
feature.position.z = 6 // 如果您想将z更改为6
```

### C. 实际示例

在这个快速示例中，我们让一个物品每1秒钟向左和向右移动（或者向北/向南）。

```js
let right=true // 充当开关（如果为true：向左移动，如果为false：向右移动）

setInterval(()=>{ // 开始间隔
	if(right){
  	feature.position.z = feature.position.z + 0.25 // 向左移动（或者向北）
    right = !right
  }else{
    feature.position.z = feature.position.z - 0.25 // 向右移动（或者向南）
    right = !right
  }
},1000)

```
看起来是这样的：
![script-example_practical_position_example.gif](/script-example_practical_position_example.gif)

## 2. 旋转
就像位置一样，您可以有几种方法旋转一个特性。下面我们将逐一介绍它们。
:::警告
当使用脚本来获取或设置特性的旋转时，请记住旋转角度以弧度表示，而在编辑器中的旋转度量以度数表示。
。
作为参考：**360度**的转角是**3.14弧度**，而**180度**的转角是**~1.57弧度**。
:::

### A. 获取旋转
您可以使用以下行获取物品的旋转：
```js
feature.rotation
```
它将返回一个类似`{x:..,y:..,z:..}`的Vector3对象。

因此，要获取旋转的x、y或z，您可以写：
```js
feature.rotation.x
// 或
feature.rotation.y
// 或
feature.rotation.z
```

### B. 设置旋转
您可以使用以下行设置物品的旋转：
```js
feature.rotation.set(x,y,z)
//或
feature.set({rotation:[x,y,z]}) // 但现在先忽略这个。参见第4节。
```
例如：
```js
let myObject = parcel.getFeatureById('myImage') // 获取名为 'myImage' 的特性
setTimeout(()=>{ // 等待5秒钟
  myObject.rotation.set(0,1.57,1.57) // 将名为 'myImage' 的特性绕其y轴和z轴旋转180度。
},5000)
```

**仅更改一个轴**

现在假设您只想旋转一个轴。比如说，您有一个旋转为`{x:0.52,y:1.57,z:0.1}`的特性，您想将其更改为`y=3.14`。

当然，您可以写成
```js
feature.rotation.set(0.52,3.14,0.1)
```
但同样，复制和粘贴以前的旋转数据有什么意义呢。如果您没有x和z轴怎么办呢？

在这种情况下，根据您的需求，最好写成以下形式之一：
```js
feature.rotation.x = 0.85 // 如果您想将x更改为0.85弧度
// 或
feature.rotation.y = 3.14 // 如果您想将y更改为π（360度）
// 或
feature.rotation.z = 0.5 // 如果您想将z更改为0.5弧度
```

### C. 实际示例

在这个快速示例中，我们让一个物品每1秒钟顺时针和逆时针旋转。

```js
let clockwise=true // 充当开关（如果为true：逆时针旋转，如果为false：顺时针旋转）

setInterval(()=>{ // 开始间隔
	if(clockwise){
  	feature.rotation.y = feature.rotation.y + 30 // 逆时针

旋转
    clockwise = !clockwise
  }else{
    feature.rotation.y = feature.rotation.y - 30 // 顺时针旋转
    clockwise = !clockwise
  }
},1000)

```
![script-example_practical_rotation_example.gif](/script-example_practical_rotation_example.gif)

## 3. 缩放

特性的缩放属性与位置和旋转非常相似。

### A. 获取缩放
您可以使用以下行获取物品的缩放：
```js
feature.scale
```
它将返回一个类似`{x:..,y:..,z:..}`的Vector3对象。

因此，要获取缩放的x、y或z，您可以写：
```js
feature.scale.x
// 或
feature.scale.y
// 或
feature.scale.z
```


### B. 设置缩放
您可以使用以下行设置物品的缩放：
```js
feature.scale.set(x,y,z)
//或
feature.set({scale:[x,y,z]}) // 但现在先忽略这个。参见第4节。
```
例如：
```js
let myObject = parcel.getFeatureById('myVox') // 获取名为 'myImage' 的特性
setTimeout(()=>{ // 等待5秒钟
  myObject.scale.set(5,5,5) // 将缩放更改为大型的5x5x5物体。
},5000)
```

**仅更改一个轴**

现在假设您只想缩放一个轴。
假设您有一个树，其缩放如下`{x:1,y:1,z:1}`，您想将其更改为`y=6`，因为树往往具有良好的高度。（哈..嗯我爱你盆景）

当然，您可以写成
```js
feature.scale.set(1,6,1)
```
但同样一遍又一遍地复制和粘贴先前的缩放数据有什么意义呢？如果您没有x和z轴怎么办呢？

在这种情况下，因为我们只需要更改一个轴，所以可以根据您的需求使用以下之一：
```js
feature.rotation.x = 6 // 如果您想将x更改为6
// 或
feature.rotation.y = 6 // 如果您想将y更改为6
// 或
feature.rotation.z = 6 // 如果您想将z更改为6
```

### C. 实际示例

在这个快速示例中，我们让一个物品每1秒钟变大。

```js
let small=true // 充当开关（如果为true：变大，如果为false：变小）

setInterval(()=>{ // 开始间隔
	if(small){
  	feature.scale.set(2.5,2.5,2.5) // 让它变大
    small= !small
  }else{
    feature.scale.set(1,1,1) // 让它变小
    small= !small
  }
},1000) 

```
![script-example_practical_scale_example.gif](/script-example_practical_scale_example.gif)


## 4. 其他方法。

要设置特性的属性（位置、旋转或缩放），您也可以使用以下行：

```js
feature.set({position:[x,y,z]})
//或
feature.set({rotation:[x,y,z]})
//或
feature.set({scale:[x,y,z]})
```

要正确理解这种方法，您必须对[数组](https://www.w3schools.com/js/js_arrays.asp)有一定了解。这是因为我们为每个属性分配的数据是一个数组`[x,y,z]`。

这种方法的优势在于它允许您在一行中分配多个属性，例如：
```js
feature.set({position:[x,y,z],rotation:[x,y,z]})
// 分配位置和旋转。
```

以下是一个实际示例：
```js
let small=true // 充当开关（如果为true：向左移动，如果为false：向右移动）

setInterval(()=>{ // 开始间隔
	if(small){
  	feature.set({scale:[2.5,2.5,2.5],position:[4.5,0.75,1.5]}) // 向左移动并变大
    small= !small
  }else{
  	feature.set({scale:[1,1,1],position:[4.5,0.75,0.2]}) // 向右移动并变小 
    small= !small
  }
},1000) 
```
![script-example_practical_combined_example.gif](/script-example_practical_combined_example.gif)