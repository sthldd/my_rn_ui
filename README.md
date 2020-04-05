## my_rm_ui
#### Installation
```$ npm install react-native-animatable --save```
#### SegmentedControl 分段器
 ```
 <SegmentedControl values={['Segment1', 'Segment2']} onChange={onChange}/>
```
![856A88E85E2BC8D634344C4D1EC400AC.png](https://upload-images.jianshu.io/upload_images/6300784-b36b098977f8ee2e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
| 属性                  |                                    说明                                     | 类型      |      默认值       |
| --------------------- | :-------------------------------------------------------------------------: | :-------- | :---------------: |
| values                |                             选项数组,值是字符串                             | Array     |        []         |
| defaultIndex          |                            选中项在数组中的索引                             | Number    |         0         |
| onChange              | 回调函数, 其中e.nativeEvent.item是选中的值, e.nativeEvent.index是选中项索引 | (e): void |   function(){}    |
| disabledIndex         |                                禁用某个选项                                 | Number    |       null        |
| opacity               |                                   透明度                                    | number    |        0.2        |
| selectBackgroundColor |                               选中的背景颜色                                | String    | rgb(16, 142, 233) |
| selectTextColor       |                               选中的文字颜色                                | String    |       white       |
#### LazyLoad 图片懒加载
 ```
const [distance, setDistance] = useState(0);

const _onLayout = (e) => {
  let {y} = e.nativeEvent.layout;
  setDistance(y);
};

<ScrollView onScroll={_onScroll}>
  <LazyLoad
    source={{
      uri:'',
    }}
    distance={distance}
  />
</ScrollView>
 ``` 
| 属性        |           说明           | 类型   | 默认值 |
| ----------- | :----------------------: | :----- | :----: |
| imageStyle  |         图片样式         | Object |   {}   |
| source      |         图片Url          | String |        |
| distance    | 外层scrollView滚动的距离 | Number |        |
| loadingText |       懒加载的文字       | String | 加载中 |
#### Listitem 列表
 ```
 <Listitem itemText="这是备注" description="系统设置" rightIcon={true} />
 <Listitem
  thumbUrl="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586108207971&di=ecdba3af687f6fa4530c40a7e1be5219&imgtype=0&src=http%3A%2F%2Fd.lanrentuku.com%2Fdown%2Fpng%2F1406%2F40xiaodongwu%2Ffrog.png"
  itemText="这是备注"
  descriptionStyle={styles.descriptionStyle}
  description="系统设置"
  rightIcon={true}
 />
 <Listitem
  itemText="这是备注"
  description="系统设置"
  extra={<Text>111</Text>}
 />
 ```
![817330CBD22923C6064A33FD59CE2CFB.png](https://upload-images.jianshu.io/upload_images/6300784-9798cf33e2cbc922.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
| 属性             |        说明        | 类型      |    默认值    |
| ---------------- | :----------------: | :-------- | :----------: |
| thumbUrl         | listItem左边的图标 | String    |      ''      |
| itemText         | listItem左边的文字 | String    |      ''      |
| description      |    备注提示文字    | String    |      ''      |
| descriptionStyle |   备注提示style    | Object    |      {}      |
| rightIcon        |      右边图标      | Boolean   |    false     |
| rightText        |      右边文字      | String    |      ''      |
| onPress          |  listItem点击事件  | (e): void | function(){} |
| extra            | 扩展的element节点  | ReactNode |              |