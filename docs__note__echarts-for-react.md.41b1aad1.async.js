(self["webpackChunkblog"]=self["webpackChunkblog"]||[]).push([[1724],{42601:function(e,t,n){"use strict";n.r(t);var a=n(67294),r=n(96089),l=n(65659),o=a.memo((e=>{e.demos;return a.createElement(a.Fragment,null,a.createElement("div",{className:"markdown"},a.createElement("h2",{id:"echarts-for-react"},a.createElement(r.AnchorLink,{to:"#echarts-for-react","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"echarts-for-react"),a.createElement("p",null,a.createElement(r.Link,{to:"https://www.npmjs.com/package/echarts-for-react"},"https://www.npmjs.com/package/echarts-for-react")),a.createElement("h3",{id:"\u53c2\u6570\u7b80\u4ecb"},a.createElement(r.AnchorLink,{to:"#\u53c2\u6570\u7b80\u4ecb","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570\u7b80\u4ecb:"),a.createElement("ul",null,a.createElement("li",null,a.createElement("p",null,a.createElement("code",null,"option")," (required, object)"),a.createElement("p",null,"\u8fd9\u4e2a\u662f\u6838\u5fc3\uff0c\u662f\u5fc5\u987b\u7684\uff0c\u5305\u542becharts\u56fe\u8868\u7684\u914d\u7f6e\u9879\u548c\u6570\u636e\uff0c\u5982\u6807\u9898title\u3001\u56fe\u4f8blegend\u3001\u63d0\u793a\u6846tooltip\u3001x\u8f74xAxis\u3001y\u8f74yAxis\u3001series\u7b49 \u8be6\u89c1 ",a.createElement(r.Link,{to:"https://echarts.apache.org/zh/option.html#title"},"https://echarts.apache.org/zh/option.html#title"))),a.createElement("li",null,a.createElement("p",null,a.createElement("code",null,"notMerge")," (optional, object)"),a.createElement("p",null,"\u53ef\u9009\uff0c\u662f\u5426\u4e0d\u8ddf\u4e4b\u524d\u8bbe\u7f6e\u7684 ",a.createElement("code",null,"option")," \u8fdb\u884c\u5408\u5e76\uff0c\u9ed8\u8ba4\u4e3a ",a.createElement("code",null,"false"),"\uff0c\u5373\u5408\u5e76\u3002")),a.createElement("li",null,a.createElement("p",null,a.createElement("code",null,"lazyUpdate")," (optional, object)"),a.createElement("p",null,"\u53ef\u9009\uff0c\u5728\u8bbe\u7f6e\u5b8c option \u540e\u662f\u5426\u4e0d\u7acb\u5373\u66f4\u65b0\u56fe\u8868\uff0c\u9ed8\u8ba4\u4e3a false\uff0c\u5373\u7acb\u5373\u66f4\u65b0\u3002")),a.createElement("li",null,a.createElement("p",null,a.createElement("code",null,"style")," (optional, object)"),a.createElement("p",null,"\u5305\u542becharts\u56fe\u8868\u7684div\u7684\u6837\u5f0f\uff0c\u9ed8\u8ba4\u662f","{","height: '300px'","}",".")),a.createElement("li",null,a.createElement("p",null,a.createElement("code",null,"className")," (optional, string)"),a.createElement("p",null,"\u5305\u542becharts\u56fe\u8868\u7684div\u7684\u7c7b\u540d. \u53ef\u4ee5\u6839\u636e\u9700\u8981\u81ea\u884c\u914d\u7f6e\u7c7b\u540d\uff0c\u4e0d\u540c\u7c7b\u914d\u7f6e\u4e0d\u540c\u7684css\u3002")),a.createElement("li",null,a.createElement("p",null,a.createElement("code",null,"theme")," (optional, string)"),a.createElement("p",null,"\u5e94\u7528\u7684\u4e3b\u9898\u3002\u53ef\u4ee5\u662f\u4e00\u4e2a\u4e3b\u9898\u7684\u914d\u7f6e\u5bf9\u8c61\uff0c\u4e5f\u53ef\u4ee5\u662f\u4f7f\u7528\u5df2\u7ecf\u901a\u8fc7 ",a.createElement("code",null,"echarts.registerTheme")," \u6ce8\u518c\u7684\u4e3b\u9898\u540d\u79f0\u3002"),a.createElement("p",null,"\u901a\u8fc7registerTheme\u6ce8\u518c\u4e3b\u9898\uff1a"),a.createElement(l.Z,{code:"echarts.registerTheme('my_theme', {\n  backgroundColor: '#f4cccc'\n});\n\n<ReactEcharts\n  ...\n  theme='my_theme'\n  ...\n/>",lang:"js"})),a.createElement("li",null,a.createElement("p",null,a.createElement("code",null,"onChartReady")," (optional, function)"),a.createElement("p",null,"\u5f53\u56fe\u8868\u51c6\u5907\u597d\u65f6\uff0c\u5c06\u56fe\u8868\u4f5c\u4e3a\u53c2\u6570\u4f20\u7ed9\u56de\u8c03\u51fd\u6570")),a.createElement("li",null,a.createElement("p",null,a.createElement("code",null,"loadingOption")," (optional, object)")),a.createElement("li",null,a.createElement("p",null,a.createElement("code",null,"showLoading")," (optional, bool, default: false)"),a.createElement("p",null,"\u662f\u5426\u52a0\u8f7d\u52a8\u753b\u6548\u679c")),a.createElement("li",null,a.createElement("p",null,a.createElement("code",null,"onEvents")," (optional, array(string=>function) )"),a.createElement("p",null,"\u4e3a\u56fe\u8868\u7ed1\u5b9a\u4e8b\u4ef6"),a.createElement(l.Z,{code:"let onEvents = {\n  'click': onChartClick,\n  'legendselectchanged': onChartLegendselectchanged\n}\n...\n<ReactEcharts\n  ...\n  onEvents={onEvents}\n  ...\n/>",lang:"js"}),a.createElement("p",null,"\u8be6\u89c1: ",a.createElement(r.Link,{to:"https://echarts.apache.org/zh/api.html#events"},"https://echarts.apache.org/zh/api.html#events"))),a.createElement("li",null,a.createElement("p",null,a.createElement("code",null,"opts")," (optional, object)"),a.createElement("p",null,"\u9644\u52a0\u53c2\u6570\u3002\u6709\u4e0b\u9762\u51e0\u4e2a\u53ef\u9009\u9879\uff1a"),a.createElement("blockquote",null,a.createElement("p",null,"devicePixelRatio \u8bbe\u5907\u50cf\u7d20\u6bd4\uff0c\u9ed8\u8ba4\u53d6\u6d4f\u89c8\u5668\u7684\u503c",a.createElement("code",null,"window.devicePixelRatio"),"\u3002"),a.createElement("p",null,"renderer \u6e32\u67d3\u5668\uff0c\u652f\u6301 ",a.createElement("code",null,"'canvas'")," \u6216\u8005 ",a.createElement("code",null,"'svg'"),"\u3002\u4f7f\u7528 Canvas \u6216\u8005 SVG \u6e32\u67d3\u3002"),a.createElement("p",null,"width \u53ef\u663e\u5f0f\u6307\u5b9a\u5b9e\u4f8b\u5bbd\u5ea6\uff0c\u5355\u4f4d\u4e3a\u50cf\u7d20\u3002\u5982\u679c\u4f20\u5165\u503c\u4e3a ",a.createElement("code",null,"null/undefined/'auto'"),"\uff0c\u5219\u8868\u793a\u81ea\u52a8\u53d6 dom\uff08\u5b9e\u4f8b\u5bb9\u5668\uff09\u7684\u5bbd\u5ea6\u3002"),a.createElement("p",null,"height \u53ef\u663e\u5f0f\u6307\u5b9a\u5b9e\u4f8b\u9ad8\u5ea6\uff0c\u5355\u4f4d\u4e3a\u50cf\u7d20\u3002\u5982\u679c\u4f20\u5165\u503c\u4e3a ",a.createElement("code",null,"null/undefined/'auto'"),"\uff0c\u5219\u8868\u793a\u81ea\u52a8\u53d6 dom\uff08\u5b9e\u4f8b\u5bb9\u5668\uff09\u7684\u9ad8\u5ea6\u3002")))),a.createElement("h3",{id:"\u7ec4\u4ef6api\u548cecharts-api"},a.createElement(r.AnchorLink,{to:"#\u7ec4\u4ef6api\u548cecharts-api","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u7ec4\u4ef6API\u548cECharts API"),a.createElement("p",null,"\u5bf9\u4e8e\u7ec4\u4ef6\u6765\u8bf4\uff0c\u53ea\u6709\u4e00\u4e2aAPI \u2014> ",a.createElement("code",null,"getEchartsInstance()"),"\uff0c\u7528\u6765\u83b7\u53d6Echarts\u7684\u5b9e\u4f8b\u5bf9\u8c61\u3002\u83b7\u53d6\u5230\u5bf9\u8c61\u540e\u5c31\u53ef\u4ee5\u4f7f\u7528\u4efb\u610f\u7684Echarts API\u3002"),a.createElement(l.Z,{code:"let echartsRef = useRef()\n\nuseEffect(()=>{\n  if(echartsRef.current) {\n    // echarts\u5b9e\u4f8b\n    let echartsInstance = echartsRef.current.getEchartsInstance()\n    let base64 = echartsInstance.getDataURL()\n  }\n},[echartsRef.current])\n\n<ReactEcharts\n  ...\n  ref={echartsRef}\n  ...\n/>",lang:"js"}),a.createElement("p",null,"Echarts\u7684API\u8be6\u89c1\uff1a",a.createElement(r.Link,{to:"https://echarts.apache.org/zh/api.html#echartsInstance"},"Echarts API")),a.createElement("p",null,"\u4f7f\u7528\u8fd9\u4e9bAPI\u53ef\u4ee5\u5b9e\u73b0\u4ee5\u4e0b\u529f\u80fd\uff1a"),a.createElement("ul",null,a.createElement("li",null,a.createElement("p",null,"\u7ed1\u5b9a/\u89e3\u7ed1\u4e8b\u4ef6")),a.createElement("li",null,a.createElement("p",null,"\u8bbe\u7f6e\u5e26\u6709\u52a8\u6001\u6570\u636e\u7684\u52a8\u6001\u56fe\u8868")),a.createElement("li",null,a.createElement("p",null,"\u83b7\u53d6",a.createElement("code",null,"echarts dom/dataurl/base64"),"\uff0c\u5c06\u56fe\u8868\u4fdd\u5b58\u5230png")),a.createElement("li",null,a.createElement("p",null,"\u53d1\u5e03\u56fe\u8868"))),a.createElement("h3",{id:"with-echartsjs-v5"},a.createElement(r.AnchorLink,{to:"#with-echartsjs-v5","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"With Echarts.js v5"),a.createElement(l.Z,{code:"import React from 'react';\n// import the core library.\nimport ReactEChartsCore from 'echarts-for-react/lib/core';\n// Import the echarts core module, which provides the necessary interfaces for using echarts.\nimport * as echarts from 'echarts/core';\n// Import charts, all with Chart suffix\nimport {\n  // LineChart,\n  BarChart,\n  // PieChart,\n  // ScatterChart,\n  // RadarChart,\n  // MapChart,\n  // TreeChart,\n  // TreemapChart,\n  // GraphChart,\n  // GaugeChart,\n  // FunnelChart,\n  // ParallelChart,\n  // SankeyChart,\n  // BoxplotChart,\n  // CandlestickChart,\n  // EffectScatterChart,\n  // LinesChart,\n  // HeatmapChart,\n  // PictorialBarChart,\n  // ThemeRiverChart,\n  // SunburstChart,\n  // CustomChart,\n} from 'echarts/charts';\n// import components, all suffixed with Component\nimport {\n  // GridSimpleComponent,\n  GridComponent,\n  // PolarComponent,\n  // RadarComponent,\n  // GeoComponent,\n  // SingleAxisComponent,\n  // ParallelComponent,\n  // CalendarComponent,\n  // GraphicComponent,\n  // ToolboxComponent,\n  TooltipComponent,\n  // AxisPointerComponent,\n  // BrushComponent,\n  TitleComponent,\n  // TimelineComponent,\n  // MarkPointComponent,\n  // MarkLineComponent,\n  // MarkAreaComponent,\n  // LegendComponent,\n  // LegendScrollComponent,\n  // LegendPlainComponent,\n  // DataZoomComponent,\n  // DataZoomInsideComponent,\n  // DataZoomSliderComponent,\n  // VisualMapComponent,\n  // VisualMapContinuousComponent,\n  // VisualMapPiecewiseComponent,\n  // AriaComponent,\n  // TransformComponent,\n  DatasetComponent,\n} from 'echarts/components';\n// Import renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step\nimport {\n  CanvasRenderer,\n  // SVGRenderer,\n} from 'echarts/renderers';\n\n// Register the required components\necharts.use(\n  [TitleComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer]\n);\n\n// The usage of ReactEChartsCore are same with above.\n<ReactEChartsCore\n  echarts={echarts}\n  option={this.getOption()}\n  notMerge={true}\n  lazyUpdate={true}\n  theme={\"theme_name\"}\n  onChartReady={this.onChartReadyCallback}\n  onEvents={EventsDict}\n  opts={}\n/>",lang:"js"}),a.createElement("h3",{id:"with-echartsjs-v3-or-v4"},a.createElement(r.AnchorLink,{to:"#with-echartsjs-v3-or-v4","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"With Echarts.js v3 or v4"),a.createElement(l.Z,{code:"import React from 'react';\n// import the core library.\nimport ReactEChartsCore from 'echarts-for-react/lib/core';\n\n// then import echarts modules those you have used manually.\nimport echarts from 'echarts/lib/echarts';\n// import 'echarts/lib/chart/line';\nimport 'echarts/lib/chart/bar';\n// import 'echarts/lib/chart/pie';\n// import 'echarts/lib/chart/scatter';\n// import 'echarts/lib/chart/radar';\n\n// import 'echarts/lib/chart/map';\n// import 'echarts/lib/chart/treemap';\n// import 'echarts/lib/chart/graph';\n// import 'echarts/lib/chart/gauge';\n// import 'echarts/lib/chart/funnel';\n// import 'echarts/lib/chart/parallel';\n// import 'echarts/lib/chart/sankey';\n// import 'echarts/lib/chart/boxplot';\n// import 'echarts/lib/chart/candlestick';\n// import 'echarts/lib/chart/effectScatter';\n// import 'echarts/lib/chart/lines';\n// import 'echarts/lib/chart/heatmap';\n\n// import 'echarts/lib/component/graphic';\n// import 'echarts/lib/component/grid';\n// import 'echarts/lib/component/legend';\nimport 'echarts/lib/component/tooltip';\n// import 'echarts/lib/component/polar';\n// import 'echarts/lib/component/geo';\n// import 'echarts/lib/component/parallel';\n// import 'echarts/lib/component/singleAxis';\n// import 'echarts/lib/component/brush';\n\nimport 'echarts/lib/component/title';\n\n// import 'echarts/lib/component/dataZoom';\n// import 'echarts/lib/component/visualMap';\n\n// import 'echarts/lib/component/markPoint';\n// import 'echarts/lib/component/markLine';\n// import 'echarts/lib/component/markArea';\n\n// import 'echarts/lib/component/timeline';\n// import 'echarts/lib/component/toolbox';\n\n// import 'zrender/lib/vml/vml';\n\n// The usage of ReactEChartsCore are same with above.\n<ReactEChartsCore\n  echarts={echarts}\n  option={this.getOption()}\n  notMerge={true}\n  lazyUpdate={true}\n  theme={\"theme_name\"}\n  onChartReady={this.onChartReadyCallback}\n  onEvents={EventsDict}\n  opts={}\n/>",lang:"js"})))}));t["default"]=e=>{var t=a.useContext(r.context),n=t.demos;return a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.createElement(o,{demos:n})}}}]);