# 文本输入
允许用户输入消息。

:::info
该功能自版本5.0以来已重新引入。
:::

## 文本输入

允许用户输入消息。

![text-input-feature.png](/text-input-feature.png)

### 编辑器

![text-input-editor.png](/text-input-editor.png)

#### 占位符

当没有用户输入时出现的占位符文本。


## 脚本属性
## 脚本属性 {.tabset}
### 文本
`字符串`; 

#### 获取()

```js
feature.get('text')
// 返回: "我的文本"
```

#### 设置()

```js
feature.set({'text':"我的文本"})
```

#### 默认值

`""`

### 占位符
`字符串`; 

#### 获取()

```js
feature.get('placeholder')
// 返回: "我的文本"
```

#### 设置()

```js
feature.set({'placeholder':"我的文本"})
```

#### 默认值

`"占位符"`

### 类型
`字符串`;

#### 获取()

```js
feature.get('type')
/* 或 */
feature.type

// 返回: 'text-input'
```