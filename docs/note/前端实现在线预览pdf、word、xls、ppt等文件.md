---
title: '前端实现文件在线预览'
---

## 1、前端实现pdf文件在线预览功能

### 方式一

pdf文件理论上可以在浏览器直接打开预览但是需要打开新页面。在仅仅是预览pdf文件且UI要求不高的情况下可以直接通过a标签href属性实现预览

### 方式二

通过jquery插件jquery.media.js实现 这个插件可以实现pdf预览功能（包括其他各种媒体文件）但是对word等类型的文件无能为力。实现方式：js代码：

```js
<script type="text/javascript" src="jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="jquery.media.js"></script>
```

html结构：

```html
<body>
  <div id="handout_wrap_inner"></div>
</body>
```

调用方式：

```js
$('#handout_wrap_inner').media({
  width: '100%',
  height: '100%',
  autoplay: true,
  src:'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf',
}); 
```

### 方式三

直接通过页面内嵌iframe

```js
$("<iframe src='"+ this.previewUrl +"' width='100%' height='362px' frameborder='1'>").appendTo($(".video-handouts-preview"));
```

此外还可以在iframe标签之间提供一个提示类似这样

```js
<iframe :src="previewUrl" width="100%" height="100%">

This browser does not support PDFs. Please download the PDF to view it: <a :href="previewUrl">Download PDF</a>

</iframe>
```

### 方式四

通过标签嵌入内容

```js
<embed :src="previewUrl" type="application/pdf" width="100%" height="100%">
```

此标签h5特性中包含四个属性：高、宽、类型、预览文件src！ 与< iframe > < / iframe > 不同，这个标签是自闭合的的，也就是说如果浏览器不支持PDF的嵌入，那么这个标签的内容什么都看不到！

### 方式五

标签和iframe使用差别较小

```js
<object :src="previewUrl" width="100%" height="100%">

This browser does not support PDFs. Please download the PDF to view it: <a :href="previewUrl">Download PDF</a>

</object>
```

**除方式二以外其他都是直接通过标签将内容引入页面实现预览**

### 方式六

PDFObject

PDFObject实际上也是通过标签实现的直接上代码

```html
<!DOCTYPE html>
<html>
<head>
  <title>Show PDF</title>
  <meta charset="utf-8" />
  <script type="text/javascript" src='pdfobject.min.js'></script>
  <style type="text/css">
    html,body,#pdf_viewer{
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
    }
  </style>
</head>
<body>
  <div id="pdf_viewer"></div>
</body>
<script type="text/javascript">
  if(PDFObject.supportsPDFs){
    // PDF嵌入到网页
    PDFObject.embed("index.pdf", "#pdf_viewer" );
  } else {
    location.href = "/canvas";
  }
</script>
</html>
```

还可以通过以下代码进行判断是否支持PDFObject预览

```js
if(PDFObject.supportsPDFs){
  console.log("Yay, this browser supports inline PDFs.");
} else {
  console.log("Boo, inline PDFs are not supported by this browser");
}
```

### 方式七

PDF.js PDF.js可以实现在html下直接浏览pdf文档，是一款开源的pdf文档读取解析插件，非常强大，能将PDF文件渲染成Canvas。PDF.js主要包含两个库文件，一个pdf.js和一个pdf.worker.js，一个负责API解析，一个负责核心解析。

## 2、word、xls、ppt文件在线预览功能

word、ppt、xls文件实现在线预览的方式比较简单可以直接通过调用微软的在线预览功能实现 (预览前提：资源必须是公共可访问的)

```html
<iframe src='https://view.officeapps.live.com/op/view.aspx?src=http://storage.xuetangx.com/public_assets/xuetangx/PDF/1.xls' width='100%' height='100%' frameborder='1'></iframe>
```
src就是要实现预览的文件地址

### 3、word文件
XDOC (opens new window)可以实现预览以DataURI (opens new window)表示的DOC文档，此外XDOC还可以实现文本、带参数文本、html文本、json文本、公文等在线预览，具体实现方法请看官方文档

下面这种方式可以实现快速预览word但是对文件使用的编辑器可能会有一些限制

```html
<a href="http://www.xdocin.com/xdoc?_func=to&amp;_format=html&amp;_cache=1&amp;_xdoc=http://www.xdocin.com/demo/demo.docx" target="_blank" rel="nofollow">XDOC</a>
```
