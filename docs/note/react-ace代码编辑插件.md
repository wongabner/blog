---
title: 'react-ace代码编辑插件'
---

### 1.安装

```
yarn add react-ace //或 npm install react-ace
```

### 2.在项目中引入

```
import AceEditor from 'react-ace';
```

### 3.在组件中使用

```js
<AceEditor
  ref="editor"
  mode="mysql"
  theme="xcode"
  onChange={this.onChange.bind(this)}
  name="UNIQUE_ID_OF_DIV"
  editorProps={{ $blockScrolling: true }}
  enableBasicAutocompletion={true}
  enableLiveAutocompletion={true}
  enableSnippets={true}
  style={{ width: "100%", height: "100%", fontSize: "18px" }}
  onLoad={this.complete.bind(this)}
/>
```

### 4.API
#### mode：代码语言，可选类型如下

```js
 javascript 
 java
 python
 xml
 ruby
 sass
 markdown
 mysqi
 json
 html
 handlebars
 golang
 csharp
 elixir
 typescript
 css
```

#### theme:主题，可选类型如下

```js
monokai
github
tomorrow
kuroir
twilight
xcode
textmate
solarized_dark
solarized_light
treminal
```

#### enableBasicAutocompletion 普通自动完成，可选类型(true/false)

#### enableLiveAutocompletion 实时自动完成，可选类型(true/false)

#### enableSnippets 代码自动补全，可选类型(true/false)

#### onLoad:加载完成后执行的函数，第一个参数是编辑器的实例

这里主要说一下自定义代码提示列表，实现的功能示例如下 在这里插入图片描述

![gif](https://img-blog.csdnimg.cn/20190223173041376.gif)

1. 首先定义自定义提示列表，如下

```js
const completers = [
  {
    name: 'name',
    value: 'one',
    score: 100,
    meta: '手动添加1'
  },
  {
    name: 'name',
    value: 'two',
    score: 100,
    meta: '手动添加2'
  },
  {
    name: 'name',
    value: 'three',
    score: 100,
    meta: '手动添加3'
  }
];
```

2. 接着在onLoad函数里执行如下方法即可

```js
complete(editor) {
    //向编辑器中添加自动补全列表
    editor.completers.push({
      getCompletions: function (callback) {
        callback(null, completers);
      }
    });
  }
```

### 配置详细介绍

| Prop(配置名) | Default(默认值) | Type(类型) | Description(描述) |
| :---------- | :------------- | :-------- | :---------------- |
| name | 'ace-editor' | String | 编辑器使用的唯一Id
| placeholder | null | String | 当编辑器为空时显示的占位符文本
| mode | '' | String | 用于解析和代码突出显示的语言
| theme | '' | String | 使用主题
| value | '' | String | 要填充到代码高亮显示中的值
| defaultValue | '' | String | 编辑器的默认值
| height | '500px' | String | CSS高度值
| width | '500px' | String | CSS宽度值
| className |  | String | 自定义class名称
| fontSize | 12 | Number | 字体大小的像素值
| showGutter | true | Boolean | 是否显示行号
| showPrintMargin | true | Boolean | 是否显示打印线
| highlightActiveLine | true | Boolean | 高亮显示当前行
| focus | false | Boolean | 是否聚焦
| cursorStart | 1 | Number | 光标位置
| wrapEnabled | false | Boolean | 换行
| readOnly | false | false | make the editor read only
| minLines |  | Number | 显示的最小行数
| maxLines |  | Number | 显示的最大行数
| enableBasicAutocompletion | false | Boolean | 代码基本自动补全
| enableLiveAutocompletion | false | Boolean | 代码实时自动补全
| enableSnippets | false | Boolean | 启动代码片段
| tabSize | 4 | Number | 自定义制表符的宽度
| debounceChangePeriod | null | Number | onChange事件的延迟时间
| onLoad |  | Function | 在编辑器加载时调用。第一个参数是编辑器的实例
| onBeforeLoad |  | Function | 在编辑器加载之前调用。第一个参数是ace的一个实例
| onChange |  | Function | 在文档更改时发生。它有两个参数值和事件。
| onCopy |  | Function | 由编辑器复制事件触发，并将文本作为参数传递
| onPaste |  | Function | 由编辑器粘贴事件触发，并将文本作为参数传递
| onSelectionChange |  | Function | 由编辑器selectionChange事件触发，并将选择作为第一个参数传递，将事件作为第二个参数传递
| onCursorChange |  | Function | 由编辑器changeCursor事件触发，并将选择作为第一个参数传递，将事件作为第二个参数传递
| onFocus |  | Function | 由编辑器焦点事件触发
| onBlur |  | Function | 由编辑模糊事件触发。它有两个参数:事件和编辑器
| onInput |  | Function | 由编辑器输入事件触发
| onScroll |  | Function | 由编辑器滚动事件触发
| onValidate |  | Function | 当注释更改时触发
| editorProps |  | Object | 直接应用于Ace编辑器实例的属性
| setOptions |  | Object | 直接应用于Ace编辑器实例的选项
| keyboardHandler |  | String | 对应于要设置的键绑定模式（例如vim或emacs）
| commands |  | Array | 要添加到编辑器的新命令
| annotations |  | Array | 要在编辑器中显示的批注 如[{ row: 0, column: 2, type: 'error', text: 'Some error.'}],
| markers |  | Array | 在编辑器中显示的标记，[{ startRow: 0, startCol: 2, endRow: 1, endCol: 20, className: 'error-marker', type: 'background' }]确保定义了类(例如。“.error-marker”)和设置位置:绝对定位。
| style |  | Object | 采用驼峰命名法书写
