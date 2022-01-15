---
nav:
  title: note
  order: 50
title: '基于react-masonry-component组件实现瀑布流'
---

```js
import React, { useState } from 'react'
import Masonry from 'react-masonry-component';
import styles from './style.less'

const dataArr = [
  {
    title:'标题1很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F2c.zol-img.com.cn%2Fproduct%2F124_500x2000%2F748%2FceZOdKgDAFsq2.jpg&refer=http%3A%2F%2F2c.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623487903&t=022a27de80ce7d234d674684f99829f1'
  },
  {
    title:'标题',
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201410%2F20%2F20141020162058_UrMNe.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623487903&t=f5352408c5e42c54aa0be89e39af85c6'
  },
  {
    title:'标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ftg%2F004%2F531%2F381%2F4339f96900344574a0c8ca272a7b8f27.jpg&refer=http%3A%2F%2Fyouimg1.c-ctrip.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623487903&t=a6b4c3ebb8c08beb3a4d702764050d0a'
  },
  {
    title:'标题',
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201410%2F04%2F20141004172507_J8Mty.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623487903&t=82be1424ddd82b5d854edfab9180a69f'
  },
  {
    title:'标题',
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201207%2F22%2F20120722075151_s88n2.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623487903&t=2e274388687d8652f9873ca75d747627'
  },
]
export default function index() {
  const [data, setData] = useState(dataArr)

  const fetchMore = () => {
    setData((preData:any)=>{
      return [...preData,...dataArr]
    })
  }

  let lstItem = (item:any, index:any)=> {
    return (
      <div key={index} className={styles.wrap}>
        <p className={styles.title}>{`${item.title}-${index+1}`}</p>
        <div className={styles.img}>
          <img src={item.imgUrl} alt=""/>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.main}>
      <Masonry
        //  className={'my-gallery-class'} // default ''
         elementType={'div'} // default 'div'
         options={{transitionDuration: 5, transitionProperty: 'width'}} // default {}
         disableImagesLoaded={false} // default false
         updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
      >
        {data.map(lstItem)}
      </Masonry>
      <div className={styles.fetchMore} onClick={fetchMore}>加载更多</div>
    </div>
  )
}
```

```css
.main {
  width: 100vw;
  min-height: 100vh;
  background-color: #dedede;
  padding: 0 10px;
  box-sizing: border-box;
  .wrap {
    width: 46%;
    background-color: #fff;
    margin: 2%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 1%;
    .title {
      margin: 5px 0;
      word-wrap:break-word;
    }
    .img {
      width: 100%;
      img {
        border: 1px solid #ccc;
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
    }
  }
  .fetchMore {
    width: 100px;
    text-align: center;
    padding: 10px;
    background-color: #fff;
    border-radius: 6px;
    margin: 10px auto;
  }
}
```
