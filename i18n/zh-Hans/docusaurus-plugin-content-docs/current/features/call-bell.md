# 呼叫铃
一种特殊类型的按钮，当激活时将发送Discord私信消息。

:::danger
此功能自版本4.16以来已被削弱，并不再可用。
:::

## 呼叫铃

呼叫铃在外观上类似于[按钮](/docs/features/button)，当按下时，它将向Discord用户发送一条消息。

![call-bell-feature.png](/call-bell-feature.png)

### 编辑器

#### Discord ID

要ping的Discord用户的Discord ID。

### 属性

#### feature.discordId

字符串。

#### feature.soundId

整数；按钮在点击时发出的声音的ID。这可以是0到14范围内的整数。