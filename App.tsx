import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView,Image} from 'react-native';
import LazyLoad from './components/LazyLoad'
var { width ,height} = Dimensions.get('window');
const DATA = Array.from({ length: 200 }).map((_, i) => ({
    id: `item_${i}`,
    url:'https://apod.nasa.gov/apod/image/2003/MoonriseShadowDLopez_1024.jpg',
}));


function App() {
  const [transparent, setIsTransparent] = useState(true)
  const [distance, setDistance] = useState(0)
    const [list, setList] = useState(
        [
            {
                "url": "https://apod.nasa.gov/apod/image/2003/MoonriseShadowDLopez_1024.jpg",
                "title": "我是书"
            },
            {
                "url": "http://wx4.sinaimg.cn/large/0077GhfTgy1fsgmrskvyrj31kw11xqv5.jpg",
                "title": "疏忽是"
            },
            {
                "url": "https://apod.nasa.gov/apod/image/2003/MoonriseShadowDLopez_1024.jpg",
                "title": "漱漱空"
            },
            {
                "url": "http://placehold.it/400x300/",
                "title": "中转站"
            },
            {
                "url": "https://apod.nasa.gov/apod/image/2003/MoonriseShadowDLopez_1024.jpg",
                "title": "叔叔在"
            },
            {
                "url": "http://placehold.it/400x300/",
                "title": "季节即"
            }
        ]
    )
  const _onScroll = (e):void => {
        let {y} = e.nativeEvent.contentOffset;
        setDistance(y)
  }

  return (
    <View style={styles.cell}>
        <ScrollView onScroll = {_onScroll}>
            {
                list.map((item,index)=>{
                   return(
                       <LazyLoad
                            source = {{uri: item.url}}
                            key={index}
                            distance={distance}
                            placeholderImgWidth={400}
                            placeholderImgHeight={200}
                            imageStyle={styles.imageStyle}
                       />
                   )
               })
            }
        </ScrollView>
      {/*<View style={styles.buttonGroup}>*/}
      {/*  <TouchableOpacity onPress={_onPressButton} style={styles.btn}>*/}
      {/*    <Text style={{ color: 'white' }}> 上一页</Text>*/}
      {/*  </TouchableOpacity>*/}
      {/*  <TouchableOpacity onPress={close} style={[styles.btn, styles.bottom]}>*/}
      {/*    <Text style={{ color: 'white' }}> 下一页</Text>*/}
      {/*  </TouchableOpacity>*/}
      {/*</View>*/}
    </View>
  )
}



const styles = StyleSheet.create({
  buttonGroup: {
    // flexDirection: 'row',
    // position: 'absolute',
    // top:300
  },
imageStyle: {
    width: 360,
    height: 260,
    resizeMode:'cover',
    borderRadius: 30,
},
  cell: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  a: {
    width: 300,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  btn: {
    width: 100,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    marginLeft: 15
  }
});

export default App