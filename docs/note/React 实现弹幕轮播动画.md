---
title: 'React 实现弹幕轮播动画'
---

# 1. 前言 

## 1.1. 氛围气泡需求

最近投入了一个需求，遇到一个需要用动画去实现的场景。

![图片](https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/danmu1.gif?download=true)

我们的产品大大管它叫氛围气泡，在很多应用（淘宝、抖音、bilibili）的直播间场景都会有类似这样营造氛围感的组件，能够让你感知到其他用户在当前直播间的行为。

这个东西看起来转瞬即逝的，但背后其实是基于一套和 push 通道相关的设计：

![图 7](https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/2022-01-17-16-31-37.png)  


前人栽树后人乘凉，所幸大佬们把 `push 消息中心` 和 `后台服务` 都建设得很完善，所以这次开发我只需要做这么一件事情：

**设置监听 push 的回调，拿到数据渲染对应组件。**

## 1.2. 开发评估

看上去好简单！让我来简单的评估一下它的开发成本：

### 1.2.1. 首先看看它像啥（是否有现有组件可以复用）

这东西一进一出的，还扑棱扑棱的闪，好似一个轮播图。在公共组件库搜罗一下，找到了一个 `Marquee（跑马灯）` 组件，它是基于 `swiper/react` 去实现的。

`swiper` 大家都熟，一个功能非常强大且开箱即用的组件，目前已经迭代到了 v7 版本。它也支持在现代前端框架下的使用，例如说支持 [React](https://mp.weixin.qq.com/s/LS2vOlaGfZ4bbqn2JLxAOg)。

在 React 中，我们可以给它初始化一堆幻灯片，让它可以滑动：

### 1.2.2. swiper 实践

#### 基础示例

```js
import SwiperCore, { Autoplay } from"swiper";
import { Swiper, SwiperSlide } from"swiper/react";

// Import Swiper styles
import"swiper/css";
import"swiper/css/navigation";
import"swiper/css/pagination";
import"swiper/css/scrollbar";
import"./styles.css";

// install Swiper modules
SwiperCore.use([Autoplay]);

const renderBubble = (bubble) => {
  const { name, wording, btnText } = bubble;
  return (
    <SwiperSlide>
      <p className="live-bubble">
        <span className="live-bubble-username">{name}</span>
        <span className="live-bubble-wording">{wording}</span>
        <span className="live-bubble-action">{btnText}</span>
      </p>
    </SwiperSlide>
  );
};

export default () => {
  const dataList = [
    { name: "李*", wording: "咨询了课程", btnText: "去咨询" },
    { name: "黄*", wording: "领取了优惠券", btnText: "去领取" },
    { name: "高*", wording: "分享了直播间给好友", btnText: "去分享" },
    { name: "刘*", wording: "领取了直播间资料", btnText: "去领取" },
    { name: "朱*", wording: "购买了直播间课程《xxx》", btnText: "去领取" }
  ];

  return (
    <div style={{ background: "#000" }}>
      <Swiper
        slidesPerView={1}
        direction="horizontal"
        onSlideChange={() => console.log("slide change")}
        autoplay
      >
        {dataList.map((item) => renderBubble(item))}
      </Swiper>
    </div>
  );
};
```

设置了 autoplay，可以自动播放，效果如下：

![图片](https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/danmu2.gif?download=true)

#### 细节改造 

你可能发现了，上面的示例跟想要实现的效果还差很远，我们需要的效果是：

- 轮播方向：从左至右
- 进入效果：从左到右一边移入，一边渐现
- 退出效果：原地不动，渐隐

![图片](https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/danmu3.gif?download=true)

接下来让我们逐个击破，改造一下 swiper。

#### 轮播方向修改

autoplay 除了支持自动播放，还可以设置自动播放的方向。比如说，当 `direction` 为 `horizontal` 的时候，每个滑块默认是向左退出和进入的，即从右至左轮播。如果想要变成相反方向，可以这样设置：

```js
autoplay={{
    delay: 3000,
    reverseDirection: true
}}
```

#### 进入效果和退出效果

关于 swiper 切换效果的定制，官方也提供了一些切换效果相关的 api：[effect](https://mp.weixin.qq.com/s/LS2vOlaGfZ4bbqn2JLxAOg)。

其中比较符合我们要求的应该是 `creativeEffect`，创造性的切换效果。我们目前想要定制一套渐隐退出和滑动渐现进入的效果。

我们再设置一下 swiper 的参数：

```js
<Swiper
  slidesPerView={1}
  direction="horizontal"
  onSlideChange={() =>console.log("slide change")}
  autoplay={{
    delay: 3000,
    reverseDirection: true
  }}
  loop
  speed={3000}
  effect={"creative"}
  creativeEffect={{
    prev: {
      opacity: 0,
      translate: ['-300%', 0, 0]
    },
    next: {
      opacity: 0
    }
  }}
>
```

prev 和 next 的具体参数类型可以参考 [swiper creativeEffect](https://mp.weixin.qq.com/s/LS2vOlaGfZ4bbqn2JLxAOg)，比如说上面示例中 `creativeEffect` 的意思是：

- 进入动画的起始状态（prev）：

- - translate：[’-300%‘, 0, 0]，表示一开始在 x 轴的 -300% swiper 宽度的位置上
  - opacity：0，表示一开始透明不可见

- 退出动画的结束状态（next）：

- - opacity：0，表示结束时透明不可见

经过我们的改造，最终效果如下：

![图片](https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/danmu4.gif?download=true)

#### 局限性 

上面的效果其实并没有完全满足我们的要求，我们可以观察到 swiper 的幻灯片进入和退出有这样的特点：**会有某一段时间，上一张幻灯片和下一张幻灯片会同时存在于可视区域**。

这个会导致我们的滑动渐现进入效果不能完美实现，只能通过调整起始位置到尽可能远，来拟合我们想要的效果。像上面其实就设置了 -300%，才达到了比较理想的效果。与之相对的，也带来了另一个问题：**透明度变化太快了，进入可视区域时幻灯片的 opacity 已经接近 1 了**。

这下可把我整不会了，没想到 swiper 还有这样的局限性。但幻灯片切换效果不佳并不是最主要的，更重要的还是氛围气泡业务逻辑的实现，我们看看结合 push 命令，动态更新幻灯片数量的情况下，swiper 在 react 中的状态管理会变得多不堪。

#### 另一个问题 —— 基于 swiper 动态更新氛围气泡

在实际业务使用中，其实还遇到了优先级展示的问题，氛围气泡的位置一共有三个组件在轮流展示：

- 打开直播间，先展示一段 5s 的**课程公告**
- 公告消失后，如果有氛围气泡数据，就展示**氛围气泡**
- 如果没有氛围气泡，就展示兜底的**引导进群组件**

如果我们需要动态插入氛围气泡的话，就会有两种情况：

- 氛围气泡组件未初始化时：通过组件 state 去缓存氛围气泡数组
- 氛围气泡组件初始化后：通过 swiper 实例，调用 swiper.appendSlide/prependSlide 方法去插入氛围气泡幻灯片

比如说以下的业务代码：

```js
// 氛围气泡推送监听
onAtmosphereBubble((data) => {
  // 未展示前，缓存气泡到状态中
  if (this.state.chatBoxTopIndex === 0) {
    this.setState((prev) => ({
      bubbleList: [
        data,
        ...prev.bubbleList,
      ],
    }));
  } elseif (this.state.chatBoxTopIndex === 1) {
    // 展示中，通过 swiper 实例插入幻灯片
    this.addBubble(data);
  } else {
    // 即将展示，向状态中插入幻灯片
    this.setState((prev) => ({
      bubbleList: [
        data,
        ...prev.bubbleList,
      ],
    }));
    this.nextChatBoxTop(1);
  }
});

const addBubble = (data) => {
    this.swiper?.prependSlide('<div class="swiper-slide">new Slide</div>');
};
```

从这里就能看出来，在 react 中，如果需要动态更新幻灯片的场景，使用 swiper 相当不合适。原因是 swiper 是通过示例方法去更新 UI，而 react 是通过 数据（状态）去更新 UI 的，两者不太兼容。

除此之外，实践中也发现了很多其他的问题，比如说：

- 通过 swiper.appendSlide/prependSlide 方法去插入新的幻灯片，只能传入 HTML 字符串，不能传入 React 组件。也就是说，新的幻灯片需要手动绑定事件，且不具备 React 的生命周期 hook。
- swiper 的幻灯片数据由组件 state 和 swiper 实例共同控制，会出现两者数据不同步的情况，不易理解和管理。

## 1.3. 别的方案？

总的来说，swiper 在这个需求里表现得不是很好，使用它反而会让代码变得复杂。既然没有现有的组件可以复用，我们可以怎么另辟蹊径呢？接下来就来到本文的正题了，我们来通过一个神奇的 React 动画库来实现我们的需求。

# 2. react-transition-group

`react-transition-group` 是 React 官方实现的，用于操作过渡效果的组件库。它可以在组件安装和卸载时，增加过渡效果。一共提供了 4 个 api，上手成本极低。

我们首先从单个组件切换的场景入手，比如说现在希望为一个组件增加进入和退出的动画，就可以使用 Transition 或者 CSSTransition。

## 2.1. Transition 组件

Transition 组件是一个自由度比较高的组件，CSSTransition 也是基于它扩展的。它通过 in 参数跟踪组件的进入和退出（或者说显隐），并由开发者自定义动画样式。

话不多说，我们直接上代码。下面设计了一个按钮点击来控制组件进入退出的示例：

- index.js

```js
import React, { useState } from"react";
import { Transition } from"react-transition-group";

import"./styles.css";

const duration = 500;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

exportdefaultfunction App() {
  const [inProp, setInProp] = useState(false);
  return (
    <div>
      <Transition in={inProp} timeout={duration}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
          >
            I'm a fade Transition!
          </div>
        )}
      </Transition>
      <button onClick={() => setInProp((prev) => !prev)}>Click to Enter</button>
    </div>
  );
}
```

效果如下：

![图片](https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/danmu5.gif?download=true)

Transition 包含了以下参数：

- in：控制组件显示的布尔值，触发进入或退出状态
- timeout：动画的持续时间，单位为毫秒，可以一次设置所有状态的动画时间，也可以单独设置每个状态的动画时间。这个时间主要是结合 SwitchTransition api 使用的，需要和 css 中的动画时间保持一致。

```js
timeout={500}

// or

timeout={{
 appear: 500,
 enter: 300,
 exit: 500,
}}
```

- children 函数：提供了一个 state 参数的 children 函数，用于渲染我们的组件。其中 state 包括了以下状态：

- - `'entering'`
  - `'entered'`
  - `'exiting'`
  - `'exited'`

- 开始动画的三个钩子，均接收一个回调函数 `Function(node: HtmlElement, isAppearing: bool) -> void` ，回调函数接收 2 个参数，第一个参数为当前元素的 dom 节点，第二个参数表示当前动画是否为元素初次挂载时发生

- - onEnter：在动画状态变为 entering 之前调用
  - onEntering：在动画状态变为 entering 之后调用
  - onEntered：在动画状态变为 entered 之后调用

- 离开动画的三个钩子，均接收一个回调函数 `Function(node: HtmlElement) -> void` ，回调函数仅接收当前元素的 dom 节点

- - onExit：在动画状态变为 exiting 之前调用
  - onExiting：在动画状态变为 exiting 之后调用
  - onExited：在动画状态变为 exited 之后调用

- ......

## 2.2. CSSTransition 组件

通过上面 Transition 的例子，我们也看到了，组件当前的 class 是由 children 函数中的 state 参数来决定的，写法上不够 auto。CSSTransition 组件解决了这一问题，它继承了 Transition 组件，并简化了 className 的声明。

同理，我们上一段代码看看区别，依然是刚才的例子：

- index.js

```js
import React, { useState } from"react";
import { CSSTransition } from"react-transition-group";

import"./styles.scss";

const duration = 300;

exportdefaultfunction App() {
  const [inProp, setInProp] = useState(false);
  return (
    <div>
      <CSSTransition in={inProp} timeout={duration} classNames="my-fade">
        <p className="my-fade">I'm a fade Transition!</p>
      </CSSTransition>
      <button onClick={() => setInProp((prev) => !prev)}>Click to Enter</button>
    </div>
  );
}
```

- style.scss

```scss
.my-fade {
  opacity: 0;
  &-enter { opacity: 0 }
  &-enter-active {
    opacity: 1;
    transition: opacity 300ms;
  }
  &-enter-done {
    opacity: 1;
  }
  &-exit { opacity: 1 }
  &-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }
  &-exit-done {
    opacity: 0;
  }
};
```

效果依然是：

![图片](https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/danmu6.gif?download=true)

CSSTransition 会根据 in 参数的变化，为组件添加不同的 class。例如，当 in 变为 true，会先后为组件添加 {classNames}-enter、{classNames}-enter-active、{classNames}-enter-done 的 class，形成入场的动画效果；当 in 变为 false，则会为组件添加 {classNames}-exit、{classNames}-exit-active、{classNames}-exit-done 的 class，形成退场的动画效果。

CSSTransition 默认有三个阶段 —— 消失（appear）、进入（enter）、离开（exit）。并且每个阶段都先后添加三个类名，以 enter 为例，分别是：

- enter 表示开始动画的初始阶段
- enter-active 表示开始动画的激活阶段
- enter-done 表示开始动画的结束阶段，也是样式的持久化展示阶段

CSSTransition 的参数跟 Transition 差别不大，需要注意的是 `classNames` 这个参数。为了与 React 中的 className 进行区别，`classNames` 这个参数在 `className` 的基础上在末尾加了个 `s`。

一般来说，这个参数将作为动画过渡的一系列类名（-enter、-enter-active、-enter-done、......）的前缀。

```js
classNames="my-fade"

// my-fade-enter
// my-fade-enter-active
// my-fade-enter-done
// ......
```

但也支持对每个类名单独定义：

```js
classNames={{
 appear: 'my-appear',
 appearActive: 'my-active-appear',
 appearDone: 'my-done-appear',
 enter: 'my-enter',
 enterActive: 'my-active-enter',
 enterDone: 'my-done-enter',
 exit: 'my-exit',
 exitActive: 'my-active-exit',
 exitDone: 'my-done-exit',
}}
```

## 2.3. SwitchTransition

SwitchTransition 用于包裹 Transition 或 CSSTransition 组件，并修改它们内部组件的过渡模式。它拥有一个 `mode` 参数，可以实现两种效果：

- `out-in` ：当前元素先转出，然后当完成时，新元素转入。
- `in-out` ：新元素首先转入，然后当完成时，当前元素转出。

默认： `'out-in'`

同样上代码来看看效果：

- index.js

```js
import React, { useState } from"react";
import { CSSTransition, SwitchTransition } from"react-transition-group";
import { Button, Form } from"react-bootstrap";

import"./styles.scss";

const modes = ["out-in", "in-out"];

exportdefaultfunction App() {
  const [mode, setMode] = useState("out-in");
  const [state, setState] = useState(true);
  return (
    <div>
      <div className="label">Mode:</div>
      <div className="modes">
        {modes.map((m) => (
          <Form.Check
            key={m}
            custom
            inline
            label={m}
            id={`mode=msContentScript${m}`}
            type="radio"
            name="mode"
            checked={mode === m}
            value={m}
            onChange={(event) => {
              setMode(event.target.value);
            }}
          />
        ))}
      </div>
      <div className="main">
        <SwitchTransition mode={mode}>
          <CSSTransition
            key={state}
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            classNames="fade"
          >
            <div className="button-container">
              <Button onClick={() => setState((state) => !state)}>
                {state ? "Hello, world!" : "Goodbye, world!"}
              </Button>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
}
```

- style.scss

```scss
body {
  padding: 2rem;
  font-family: sans-serif;
  text-align: center;
}

.label {
  margin-bottom: 0.5rem;
}

.modes {
  margin-bottom: 1rem;
}

.button-container {
  margin-bottom: 0.5rem;
}

.fade {
  &-enter .btn {
    opacity: 0;
    transform: translateX(-100%);
  }
  &-enter-active .btn {
    opacity: 1;
    transform: translateX(0%);
  }
  &-exit .btn {
    opacity: 1;
    transform: translateX(0%);
  }
  &-exit-active .btn {
    opacity: 0;
    transform: translateX(100%);
  }
  &-enter-active .btn,
  &-exit-active .btn {
    transition: opacity 500ms, transform 500ms;
  }
}
```

效果如下：

![图片](https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/danmu7.gif?download=true)

从这里可以看出和 swiper 的区别，swiper 类似于 `in-out` 的效果，而我们希望实现的氛围气泡是 `out-in` 的效果。

## 2.4. TransitionGroup

顾名思义，`TransitionGroup` 是用来管理多个 Transition/CSSTransition 的。当需要管理多个 Transition，即需要实现不同的动画效果时，适合使用它。

```js
<TransitionGroup>
  {list.map(({ id }) => (
    <CSSTransition
      key={id}
      timeout={300}
      classNames="my"
    >
      <MyComponent key={id}/>
    </CSSTransition>
  ))}
</TransitionGroup>
```

# 3. 用 react-transition-group 实现氛围气泡

了解了 `react-transition-group` 之后，我们很容易联想到，可以用 CSSTransition + SwitchTransition（out-in mode） 实现我们的需求。

但在实现之前，还需要定义一下我们的数据结构。

## 3.1. 数据结构

气泡是随着用户的交互，从客户端触发上报给到后台，再由后台反馈到其他客户端的。由于上文提到氛围气泡不是常驻的，会去展示其他的组件，所以当后台反馈了新的气泡数据，会存在三种情况：

- 正在展示氛围气泡：将气泡数据插入到展示顺序的尾部。
- 正在展示不可中断的组件（课程公告）：将气泡数据缓存起来。
- 正在展示可中断的组件（兜底组件）：将气泡数据缓存起来，并立即展示氛围气泡。

显然是一个 `队列`，我们可以维护一个气泡的 JSX 元素数组，用一个 index 来决定当前展示的气泡来实现切换渲染，并将不断到来的气泡数据插入到数组的尾部。

这样的好处在于，相比 swiper/react 通过状态和实例来维护气泡的方式，我们统一使用状态来维护气泡数据更加符合数据驱动视图的思想。

## 3.2. 队列实现

我们将气泡列表的展示顺序（index）放到 props 中维护，使之变成受控的。并在队列中维护一个定时器，定时触发 props 中的 nextBubble 方法去更新 index。如下：

```js
import React, { useEffect, useCallback } from"react";
import { CSSTransition, SwitchTransition } from"react-transition-group";
import"./index.css";

const AtmosphereBubbleSequence = ({
  bubbleList,
  index,
  setCurIndex,
  nextBubble,
  next,
  resetList
}) => {
  const bubbleListLength = bubbleList.length;
  let curIndex = 0;

  if (index > -1 && index < bubbleListLength) {
    curIndex = index;
  } else {
    curIndex = bubbleListLength - 1;
    setCurIndex(curIndex);
  }

  useEffect(() => {
    // 定时触发
    const interval = setInterval(() => {
      nextBubble();
    }, 3000);
    return() => {
      clearInterval(interval);
    };
  }, []);

  const onExited = useCallback(
    (node) => {
      if (+node.dataset.bubbleKey === bubbleListLength - 1) {
        // 切换到兜底组件
        next();
        // 清空气泡列表
        resetList();
      }
    },
    [bubbleListLength, next, resetList]
  );

  return (
    <SwitchTransition>
      <CSSTransition
        key={bubbleList[index]?.type?.name + index || Math.random()}
        timeout={{
          enter: 300,
          exit: 300
        }}
        classNames="atmosphere-bubble-cnt"
        unmountOnExit
        onExited={onExited}
      >
        <div data-bubble-key={index} className="atmosphere-bubble-cnt">
          {bubbleList[index]}
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default AtmosphereBubbleSequence;
```

值得注意的是，需要在 onExited 回调中去判断气泡列表是否已经展示完毕，调用销毁气泡序列组件的方法，并清空气泡数据列表，去展示其他的组件。

同时，我们设置气泡的样式如下：

```scss
.atmosphere-bubble-cnt {
  padding: 016px;
}

.atmosphere-bubble-cnt-enter {
  opacity: 0;
  transform: translate3d(-60px, 0, 0);
}

.atmosphere-bubble-cnt-enter-active {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition: opacity 300ms, transform 300ms;
}

.atmosphere-bubble-cnt-exit {
  opacity: 1;
}

.atmosphere-bubble-cnt-exit-active {
  opacity: 0;
  transition: opacity 300ms;
}
```

## 3.3. 效果模拟

为了试验效果，我们在外部设置一段 mock 逻辑，来模拟不断塞入气泡数据的情况：

```js
import React, { useEffect, useState } from"react";
import Bubble from"./Bubble";
import AtmosphereBubbleSequence from"./Sequence";
import"./styles.css";

exportdefaultfunction App() {
  const [index, setIndex] = useState(0);

  const [bubbleDataList, setBubbleDataList] = useState([
    { nick: "李*", content: "咨询了课程", eventMsg: "去咨询" },
    { nick: "黄*", content: "领取了优惠券", eventMsg: "去领取" },
    { nick: "高*", content: "分享了直播间给好友", eventMsg: "去分享" },
    { nick: "刘*", content: "领取了直播间资料", eventMsg: "去领取" },
    { nick: "朱*", content: "购买了直播间课程《xxx》", eventMsg: "去领取" }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBubbleDataList((prev) => [
        ...prev,
        { nick: "朱*", content: "购买了直播间课程《xxx》", eventMsg: "去领取" }
      ]);
    }, 3000);
    return() => {
      clearInterval(interval);
    };
  }, []);

  if (!bubbleDataList.length) {
    returnnull;
  }

  const nextBubble = (newIndex) => {
    setIndex((prevIndex) => {
      returntypeof newIndex === "undefined" ? prevIndex + 1 : newIndex;
    });
  };

  return (
    <div
      style={{
        background: "#000",
        height: "56px",
        display: "flex",
        alignItems: "center"
      }}
    >
      <AtmosphereBubbleSequence
        bubbleList={bubbleDataList.map((data) => (
          <Bubble data={data} />
        ))}
        index={index}
        setCurIndex={setIndex}
        nextBubble={nextBubble}
      />
    </div>
  );
}
```

接着来看看效果：

![图片](https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/danmu8.gif?download=true)

很好，已经实现我们想要的效果了！

# 4. 总结

在本文我们接触到了 swiper 和 react-transition-group 的使用，并分别用它们实现了氛围气泡需求。

## 4.1. 动画效果层面的对比

- react-transition-group 更加灵活，针对组件过渡的动画效果有更广泛的应用场景。
- swiper 作为轮播效果组件，它受限于前后幻灯片同时存在的这一问题，在氛围气泡需求中表现不是很好。

## 4.2. 状态管理层面的对比

虽然 swiper 有这样的局限性，但这一问题并不是不能解决的，还是有 hack 技巧的。比如说，可以先把 swiper-container 先渐隐，再触发幻灯片切换，并在中途增加动画类实现渐现。只是说这段 js 逻辑不太优雅而已：

```js
componentDidMount() {
  const { next, setBubbleList } = this.props;
  const swiperIns = this.swiper;
  const interval = setInterval(() => {
    swiperIns.$wrapperEl?.addClass('swiperFadeOut');
    delay(300)
      .then(() => {
        if (swiperIns.activeIndex === 0) {
          clearInterval(interval);
          next(2);
          setBubbleList();
          thrownewError('退出动画');
        }
        // 设置上一个滑块为透明隐藏
        (swiperIns.slides[swiperIns.activeIndex] as HTMLElement).style.opacity = '0';
        swiperIns.slidePrev(500);
        return delay(300);
      })
      .then(() => {
        swiperIns.$wrapperEl.addClass('swiperFadeIn');
        return delay(200);
      })
      .then(() => {
        swiperIns.$wrapperEl.removeClass('swiperFadeOut');
        swiperIns.$wrapperEl.removeClass('swiperFadeIn');
      })
      .catch((error) => {
        if (error.message === '退出动画') {
          console.log('已退出');
        }
      });
  }, 2000);
}
```

由此也可以发现，在状态管理方面：

- react-transition-group 可以让我们大胆地设计数据结构，来管理组件的过渡状态。
- swiper 相对不太适合 react 的状态管理，在需要动态增删幻灯片的场景，它依赖于实例方法，不易做到数据同步。

## 4.3. 方案选择

面对类似氛围气泡的需求，如何选择 swiper 和 react-transition-group 这两类实现方案？

其收实只要观察，数据列表的长度是静态的，还是会动态改变的。

- 静态：使用幻灯片组件，如 swiper
- 动态：使用 react 生态的组件，如 react-transition-group
