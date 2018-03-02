# AutoUI

适配于移动端的ui库

## 组件
- ✓ Layout - 外容器 
- ✓ Cell - 列表
- Alert - 提示框
- ✓ Button - 按钮
- ActionSheet - 动作弹层
- Dialog - 对话框
- ✓ Input - 输入框
- ✓ Loading - 加载提示
- Panel - 板块
- Popup - 浮出层
- Radio - 勾选框
- Select - 选择框
- Switch - 开关
- Tabs - 切换
- ✓ Toast - 轻提示


----
## Layout

`Layout`组件为整体页面的外容器，分为`Header`、`Body`与`Footer`三部分。
使用方式：

```html
<Layout className="foo">
	<Layout.Header
		title="AutoUI"
		onBackClick={this.props.history.goBack}
	/>

	<Layout.Body loading={false} errorInfo="系统错误">
		Body部分
	</Layout.Body>

	<Layout.Footer>
		Footer部分
	</Layout.Footer>
</Layout>
```

#### Layout.Header

|属性|说明|类型|默认值|
|-|-|-|-|
|className|样式名|String|-|
|innerClassName|内层额外样式名，因为有2层嵌套|String|-|
|title|标题|String|-|
|onBackClick|返回事件（会显示一个返回按钮），onBackClick与onCloseClick二选一使用|Function|-|
|onCloseClick|关闭事件（会显示一个关闭按钮），onBackClick与onCloseClick二选一使用|Function|-|
|addonBefore|左边挂载组件|Component/DOM|-|
|addonAfter|右边挂载组件|Component/DOM|-|
|addonBottom|下边挂载组件|Component/DOM|-|
|ghost|透明底白色文字的模式|Boolean|false|
|children|子组件，有title属性时无效|Component/DOM|-|

#### Layout.Body

|属性|说明|类型|默认值|
|-|-|-|-|
|className|样式名|String|-|
|loading|是否显示loading|Boolean|false|
|errorInfo|错误信息，为空时不显示|String|-|
|children|子组件|Component/DOM|-|

#### Layout.Footer

|属性|说明|类型|默认值|
|-|-|-|-|
|className|样式名|String|-|
|visible|是否显示该组件，一般在loading显示时或有errorInfo时将它设置为false|Boolean|true|
|children|子组件|Component/DOM|-|

----
## Cell

`Cell`用于列表，包裹`Cell.Row`使用

```html
<Cell>
	<Cell.Row
		label="title"
		value={1}
		onClick={val => console.log(val)}
	/>

	<Cell.Row>
		<p>请输入</p>
		<input placeholder="什么什么" />
	</Cell.Row>
</Cell>
```

#### Cell

|属性|说明|类型|默认值|
|-|-|-|-|
|className|样式名|String|-|
|indentLine|分割线缩进，默认是头尾顶死的，设置该属性后头会缩进一点|Boolean|false|
|onClick|代理Cell.Row的onClick事件，且都存在时权重比它高|Function|-|

#### Cell.Row

|属性|说明|类型|默认值|
|-|-|-|-|
|className|样式名|String|-|
|value|属性值，用于在onClick时带回来|Any|-|
|onClick|点击事件，当有value属性时会把value的值带回来，注意：上下文中如果有多个需要click时可以使用Cell的onClick事件|Function|-|
|activeable|按下时的交互效果，有onClick时会自动开启|Boolean|false|
|label|label标签内容，性质同在children中写&lt;label&gt;xxx&lt;/label&gt;|String|-|

----

## Popup

`Popup`用于从弹出层，从下往上弹出或从上往下弹出

```html
<Popup visible={this.state.visible} height={100}>
	Content
</Popup>
```

#### Popup

|属性|说明|类型|默认值|
|-|-|-|-|
|className|样式名|String|-|
|top|是否从顶部往下弹出，默认从底部往上|Boolean|false|
|height|容器高度，%单位|Int|50|
|noPadding|容器是否有padding，默认0.4rem，与Layout.Body保持一致|Boolean|false|
|visible|是否显示|Boolean|false|
|onBgClick|背景空白区域点击事件|Function|-|

#### Popup.Scroller


xxxxxxx

----

## Loading

全局显示一个loading覆盖层

```js
// 显示
Loading.show()

// 带文字显示
Loading.show('loading...')

// 隐藏
Loading.hide()
```

----

## Toast

轻提示
```js
// 显示
Toast.show('hello')

// 显示5秒（默认2秒）
Toast.show('hello with 5s', 5000)

// 隐藏（一般不调用，因为toast会定时自动隐藏）
Toast.hide()
```

----

## Button

按钮组件
```html
{/* 普通按钮，占据整栏 */}
<Button>Click me!</Button>

{/* 其他样式 */}
<Button type="danger">Click me!</Button>

{/* 小个体 */}
<Button mini>Click me!</Button>

{/* 带loading效果 */}
<Button loading>Click me!</Button>

{/* 不可用 */}
<Button disabled>Click me!</Button>

```

|属性|说明|类型|默认值|
|-|-|-|-|
|className|样式名|String|-|
|type|按钮样式，[default, primary, danger]三种可选|String|primary|
|disabled|设置为不可用|Boolean|false|
|mini|小按钮（同时变为行内元素）|Boolean|false|
|loading|是否在显示文字的左侧显示loading|Boolean|false|
|onClick|点击事件|Function|-|

----

## Input

输入框

```html
<Input value={this.state.val} onChange={this.inputChange} />

```

|属性|说明|类型|默认值|
|-|-|-|-|
|className|样式名|String|-|
|error|出错样式|Boolean|false|
|disabled|设置为不可用|Boolean|false|
|addonAfter|按钮左侧挂载|Component/DOM	|-|
|addonAfter|按钮右侧挂载|Component/DOM	|-|
|multi|多行，即textarea（使用后addonBefore与addonAfter将会失效）|Boolean|false|

----

## Switch

滑块

```html
<Switch active={this.state.active} onClick={this.changeActive} />
```