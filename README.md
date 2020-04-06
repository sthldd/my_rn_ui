## my_rm_ui

#### Installation

`$ npm install my_rn_ui --save`

#### SegmentedControl 分段器

```
<SegmentedControl values={['Segment1', 'Segment2']} onChange={onChange}/>
```

![856A88E85E2BC8D634344C4D1EC400AC.png](https://upload-images.jianshu.io/upload_images/6300784-b36b098977f8ee2e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
| 属性 | 说明 | 类型 | 默认值 |
| --------------------- | :-------------------------------------------------------------------------: | :-------: | :---------------: |
| values | 选项数组,值是字符串 | Array | [] |
| defaultIndex | 选中项在数组中的索引 | Number | 0 |
| onChange | 回调函数, 其中 e.nativeEvent.item 是选中的值, e.nativeEvent.index 是选中项索引 | (e): void | function(){} |
| disabledIndex | 禁用某个选项 | Number | null |
| opacity | 透明度 | number | 0.2 |
| selectBackgroundColor | 选中的背景颜色 | String | rgb(16, 142, 233) |
| selectTextColor | 选中的文字颜色 | String | white |

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

| 属性        |            说明            |  类型  | 默认值 |
| ----------- | :------------------------: | :----: | :----: |
| imageStyle  |          图片样式          | Object |   {}   |
| source      |          图片 Url          | String |        |
| distance    | 外层 scrollView 滚动的距离 | Number |        |
| loadingText |        懒加载的文字        | String | 加载中 |

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
| 属性 | 说明 | 类型 | 默认值 |
| ---------------- | :----------------: | :-------: | :----------: |
| thumbUrl | listItem 左边的图标 | String | '' |
| itemText | listItem 左边的文字 | String | '' |
| description | 备注提示文字 | String | '' |
| descriptionStyle | 备注提示 style | Object | {} |
| rightIcon | 右边图标 | Boolean | false |
| rightText | 右边文字 | String | '' |
| onPress | listItem 点击事件 | (e): void | function(){} |
| extra | 扩展的 element 节点 | ReactNode | |

#### NoticeBar 通告栏

```
<NoticeBar content="警告 出现错误" onPress={onClick} />
<NoticeBar content="警告 出现错误" mode="close" />
<NoticeBar content="警告 出现错误" mode="link" />
<NoticeBar
 content="警告 出现错误"
 action={<Text style={{color: 'gray'}}>不在提示</Text>}
/>
```

![FB6089121599FD4A4792E9E152BB8721.png](https://upload-images.jianshu.io/upload_images/6300784-e5a2517364a7b86c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
| 属性 | 说明 | 类型 | 默认值 |
| -------------- | :----------------------------: | :----------: | :-------------------: |
| mode | 提示类型，可选 close,link | String | '' |
| noticeLeftIcon | 在开始位置设置图标 | ReactNode | `<Image source={} />` |
| onPress | 点击关闭或者操作区域的回调函数 | (): void | |
| action | 用于替换操作 icon 的文案 | ReactElement | |
| content | 提示内容 | String | '' |

#### Picker 选择器

```
<Picker
 list={distance}
 wrapperHeight={150}
 itemHeight={50}
 onChange={onClick}
/>
```

![D2A6995753064AF5A6B40909E315F267.png](https://upload-images.jianshu.io/upload_images/6300784-e5c330e089f4da28.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

| 属性                   |                    说明                     | 类型     | 默认值 |
| ---------------------- | :-----------------------------------------: | :------- | :----: |
| list                   |                  渲染的值                   | Array    |        |
| wrapperHeight          |               包裹容器的高度                | number   |  150   |
| itemHeight             |                 item 的高度                 | number   |   50   |
| wrapperBackgroundColor |             包裹容器的背景颜色              | String   | white  |
| hairlineWidth          |                  线的宽度                   | number   |   1    |
| selectIndex            |               默认选择的下标                | number   |   0    |
| onChange               | 滚动的回调函数`value当前值` `index当前下标` | (): void |        |

#### Slide 轮播

```
<Slide
 list={lisr}
 onIndexChanged={onChange}
 currentPage={2}
/>
```

![08446CEDA10BE96F3014340B7C4CB735.png](https://github.com/sthldd/my_rn_ui/blob/master/static/componentImage/08446CEDA10BE96F3014340B7C4CB735.png)

| 属性              |        说明         |     类型     |     默认值     |
| ----------------- | :-----------------: | :----------: | :------------: |
| list              |      渲染的值       |    Array     |                |
| currentPage       |  默认的显示的下标   |    number    |       0        |
| showsButtons      |   是否展示 button   |   boolean    |      true      |
| renderButtons     |    自定义 button    | ReactElement |                |
| disableNextButton | 是否禁用下个 button |   boolean    |     false      |
| disablePrevButton | 是否禁用上个 button |   boolean    |     false      |
| buttonText        |  button 的内容文字  | ReactElement |                |
| width             |     轮播的宽度      |    number    | 手机屏幕的宽度 |
| height            |     轮播的高度      |    number    |      200       |
| onIndexChanged    | 轮播滚动的回调函数  |  (e): void   |                |

#### Toast 提示

```
const onToastShow = () => {
 Toast.showInfo('没有状态', {duration: 5000, position: 100});
 Toast.showSuccess('成功状态', {duration: 5000, position: 150});
 Toast.showError('错误状态', {duration: 5000, position: 150});
 Toast.showFail('Fail状态', {duration: 5000, position: 150});
};

<TouchableOpacity style={styles.btn} onPress={onToastShow}>
 <Text>按钮</Text>
</TouchableOpacity>
```

| 属性            |           说明           |  类型  | 默认值 |
| --------------- | :----------------------: | :----: | :----: |
| content         | 自动关闭的延时，单位毫秒 | number |        |
| duration        |     默认的显示的下标     | number |   0    |
| position        |           定位           | number |        |
| backgroundColor |      toast 背景颜色      | string |  #000  |
| textColor       |         字体颜色         | string | white  |

#### Modal 弹窗

```
<Modal
 isVisible={distance}
 closeIconIsVisible={true}
 closeModal={onChange}
 onRequestClose={onRequestClose}
 modalTitle="你好你好"
 modalContent="我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容"
 onDismiss={dissmiss}
/>
```

| 属性               |           说明           |          类型           | 默认值 |
| ------------------ | :----------------------: | :---------------------: | :----: |
| isVisible          |   控制 modal 是否显示    |         boolean         | false  |
| onRequestClose     |   安卓返回键的回调函数   |        (e): void        |        |
| onShow             |  modal 打开前的回调函数  |        (e): void        |        |
| transparent        |         是否透明         |         boolean         | false  |
| animationType      |     modal 出现的方式     | 'none'，'fade'，'slide' |  fade  |
| onDismiss          |      modal 关闭回调      |        (e): void        |        |
| children           |     modal 内容自定义     |      ReactElement       |        |
| hasChildren        |    是否有自定义子元素    |         boolean         |  true  |
| modalContentStyle  |      modal 弹窗样式      |         boolean         |  true  |
| closeIconIsVisible | 右上角关闭 icon 是否显示 |        (e): void        |        |
| closeModal         |      modal 关闭回调      |        (e): void        |        |
| modalTitle         |         弹窗标题         |         string          |        |
| modalContent       |         弹窗内容         |         string          |        |
| showButton         |     是否显示 button      |         boolean         | false  |
| closeButton        |    右上角按钮回调函数    |        (e): void        |        |
| confirmButton      |     确定按钮回调函数     |        (e): void        |        |

#### Popover 气泡

```
<Popover
 isVisible={distance}
 popoverContent={<Text style={{color: 'white'}}>我是popover内容</Text>}
 buttonContent={<Text>我是button</Text>}
/>
```

![32B37FC23CA53B62D8433B9026F13132.png](https://upload-images.jianshu.io/upload_images/6300784-8bb2a533f924d533.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
| 属性 | 说明 | 类型 | 默认值 |
| -------------- | :-----------: | :----------: | :----: |
| isVisible | 是否显示 | boolean | false |
| popoverContent | toast 背景颜色 | ReactElement | #000 |
| buttonContent | 字体颜色 | ReactElement | white |
