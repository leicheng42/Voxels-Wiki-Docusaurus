# 滑块输入

## 滑块输入

允许用户在一个范围内输入数值。

![[slider_input]example_v5.18.png](/features/[slider_input]example_v5.18.png)

### 编辑器
![[slider_input]editor_7.18.2.png](/features/[slider_input]editor_7.18.2.png)

#### 文本

将显示在滑块输入框上方的文本。

## 脚本属性
## 脚本属性 {.tabset}
### 值
`字符串`; 

#### 获取()

```js
feature.get('value')
// 返回：滑块的值
```

#### 设置()

```js
feature.set({'value':0.2})
```

#### 默认值

`0.25`

### 文本
`字符串`; 

#### 获取()

```js
feature.get('text')
// 返回：滑块上方的文本
```

#### 设置()

```js
feature.set({'text':"我的文本"})
```

#### 默认值

`""`

### 最小值
`数字`; 

#### 获取()

```js
feature.get('minimum')
// 返回：滑块的最小值
```

#### 设置()

```js
feature.set({'minimum':0.01}) // 最小值为0将不起作用
```

#### 默认值

`0.01`

### 最大值
`数字`; 

#### 获取()

```js
feature.get('maximum')
// 返回：滑块的最大值
```

#### 设置()

```js
feature.set({'maximum':1})
```

#### 默认值

`1`


### 类型
`字符串`;

#### 获取()

```js
feature.get('type')
/* 或 */
feature.type

// 返回: 'slider-input'
```