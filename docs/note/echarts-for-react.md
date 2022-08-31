---
title: 'echarts-for-react'
---

## echarts-for-react

[https://www.npmjs.com/package/echarts-for-react](https://www.npmjs.com/package/echarts-for-react)

### 参数简介:

- `option` (required, object)

  这个是核心，是必须的，包含echarts图表的配置项和数据，如标题title、图例legend、提示框tooltip、x轴xAxis、y轴yAxis、series等
  详见 [https://echarts.apache.org/zh/option.html#title](https://echarts.apache.org/zh/option.html#title)
  

- `notMerge` (optional, object)

  可选，是否不跟之前设置的 `option` 进行合并，默认为 `false`，即合并。

- `lazyUpdate` (optional, object)

  可选，在设置完 option 后是否不立即更新图表，默认为 false，即立即更新。

- `style` (optional, object)

  包含echarts图表的div的样式，默认是{height: '300px'}.

- `className` (optional, string)

  包含echarts图表的div的类名. 可以根据需要自行配置类名，不同类配置不同的css。

- `theme` (optional, string)

  应用的主题。可以是一个主题的配置对象，也可以是使用已经通过 `echarts.registerTheme` 注册的主题名称。

  通过registerTheme注册主题：

  ```js

  echarts.registerTheme('my_theme', {
    backgroundColor: '#f4cccc'
  });

  <ReactEcharts
    ...
    theme='my_theme'
    ...
  />
  ```

- `onChartReady` (optional, function)

  当图表准备好时，将图表作为参数传给回调函数

- `loadingOption` (optional, object)

- `showLoading` (optional, bool, default: false)

  是否加载动画效果

- `onEvents` (optional, array(string=>function) )

  为图表绑定事件

  ```js
  let onEvents = {
    'click': onChartClick,
    'legendselectchanged': onChartLegendselectchanged
  }
  ...
  <ReactEcharts
    ...
    onEvents={onEvents}
    ...
  />
  ```

  详见: [https://echarts.apache.org/zh/api.html#events](https://echarts.apache.org/zh/api.html#events)

- `opts` (optional, object)

  附加参数。有下面几个可选项：

  > devicePixelRatio
  > 设备像素比，默认取浏览器的值`window.devicePixelRatio`。
  > 
  > renderer
  > 渲染器，支持 `'canvas'` 或者 `'svg'`。使用 Canvas 或者 SVG 渲染。
  > 
  > width
  > 可显式指定实例宽度，单位为像素。如果传入值为 `null/undefined/'auto'`，则表示自动取 dom（实例容器）的宽度。
  > 
  > height
  > 可显式指定实例高度，单位为像素。如果传入值为 `null/undefined/'auto'`，则表示自动取 dom（实例容器）的高度。

### 组件API和ECharts API

对于组件来说，只有一个API —> `getEchartsInstance()`，用来获取Echarts的实例对象。获取到对象后就可以使用任意的Echarts API。

```js
let echartsRef = useRef()

useEffect(()=>{
  if(echartsRef.current) {
    // echarts实例
    let echartsInstance = echartsRef.current.getEchartsInstance()
    let base64 = echartsInstance.getDataURL()
  }
},[echartsRef.current])

<ReactEcharts
  ...
  ref={echartsRef}
  ...
/>
```
Echarts的API详见：[Echarts API](https://echarts.apache.org/zh/api.html#echartsInstance)

使用这些API可以实现以下功能：

- 绑定/解绑事件

- 设置带有动态数据的动态图表

- 获取`echarts dom/dataurl/base64`，将图表保存到png

- 发布图表

### With Echarts.js v5

```js
import React from 'react';
// import the core library.
import ReactEChartsCore from 'echarts-for-react/lib/core';
// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from 'echarts/core';
// Import charts, all with Chart suffix
import {
  // LineChart,
  BarChart,
  // PieChart,
  // ScatterChart,
  // RadarChart,
  // MapChart,
  // TreeChart,
  // TreemapChart,
  // GraphChart,
  // GaugeChart,
  // FunnelChart,
  // ParallelChart,
  // SankeyChart,
  // BoxplotChart,
  // CandlestickChart,
  // EffectScatterChart,
  // LinesChart,
  // HeatmapChart,
  // PictorialBarChart,
  // ThemeRiverChart,
  // SunburstChart,
  // CustomChart,
} from 'echarts/charts';
// import components, all suffixed with Component
import {
  // GridSimpleComponent,
  GridComponent,
  // PolarComponent,
  // RadarComponent,
  // GeoComponent,
  // SingleAxisComponent,
  // ParallelComponent,
  // CalendarComponent,
  // GraphicComponent,
  // ToolboxComponent,
  TooltipComponent,
  // AxisPointerComponent,
  // BrushComponent,
  TitleComponent,
  // TimelineComponent,
  // MarkPointComponent,
  // MarkLineComponent,
  // MarkAreaComponent,
  // LegendComponent,
  // LegendScrollComponent,
  // LegendPlainComponent,
  // DataZoomComponent,
  // DataZoomInsideComponent,
  // DataZoomSliderComponent,
  // VisualMapComponent,
  // VisualMapContinuousComponent,
  // VisualMapPiecewiseComponent,
  // AriaComponent,
  // TransformComponent,
  DatasetComponent,
} from 'echarts/components';
// Import renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step
import {
  CanvasRenderer,
  // SVGRenderer,
} from 'echarts/renderers';

// Register the required components
echarts.use(
  [TitleComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer]
);

// The usage of ReactEChartsCore are same with above.
<ReactEChartsCore
  echarts={echarts}
  option={this.getOption()}
  notMerge={true}
  lazyUpdate={true}
  theme={"theme_name"}
  onChartReady={this.onChartReadyCallback}
  onEvents={EventsDict}
  opts={}
/>
```

### With Echarts.js v3 or v4

```js
import React from 'react';
// import the core library.
import ReactEChartsCore from 'echarts-for-react/lib/core';

// then import echarts modules those you have used manually.
import echarts from 'echarts/lib/echarts';
// import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
// import 'echarts/lib/chart/pie';
// import 'echarts/lib/chart/scatter';
// import 'echarts/lib/chart/radar';

// import 'echarts/lib/chart/map';
// import 'echarts/lib/chart/treemap';
// import 'echarts/lib/chart/graph';
// import 'echarts/lib/chart/gauge';
// import 'echarts/lib/chart/funnel';
// import 'echarts/lib/chart/parallel';
// import 'echarts/lib/chart/sankey';
// import 'echarts/lib/chart/boxplot';
// import 'echarts/lib/chart/candlestick';
// import 'echarts/lib/chart/effectScatter';
// import 'echarts/lib/chart/lines';
// import 'echarts/lib/chart/heatmap';

// import 'echarts/lib/component/graphic';
// import 'echarts/lib/component/grid';
// import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';
// import 'echarts/lib/component/polar';
// import 'echarts/lib/component/geo';
// import 'echarts/lib/component/parallel';
// import 'echarts/lib/component/singleAxis';
// import 'echarts/lib/component/brush';

import 'echarts/lib/component/title';

// import 'echarts/lib/component/dataZoom';
// import 'echarts/lib/component/visualMap';

// import 'echarts/lib/component/markPoint';
// import 'echarts/lib/component/markLine';
// import 'echarts/lib/component/markArea';

// import 'echarts/lib/component/timeline';
// import 'echarts/lib/component/toolbox';

// import 'zrender/lib/vml/vml';

// The usage of ReactEChartsCore are same with above.
<ReactEChartsCore
  echarts={echarts}
  option={this.getOption()}
  notMerge={true}
  lazyUpdate={true}
  theme={"theme_name"}
  onChartReady={this.onChartReadyCallback}
  onEvents={EventsDict}
  opts={}
/>
```
