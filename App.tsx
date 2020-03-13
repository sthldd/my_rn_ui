import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView,Image} from 'react-native';
import LazyLoad from './components/LazyLoad'
var { width ,height} = Dimensions.get('window');
const DATA = Array.from({ length: 500 }).map((_, i) => ({
    id: `item_${i}`,
    url:'http://wx4.sinaimg.cn/large/0077GhfTgy1fsgmrskvyrj31kw11xqv5.jpg',
}));


function App() {
  const [transparent, setIsTransparent] = useState(true)
  const [distance, setDistance] = useState(0)

  useEffect(()=>{
      fetch()
  },[])

  const _onPressButton = () => {
      setIsTransparent(false)
  }
  const _onScroll = (e):void => {
        let {y} = e.nativeEvent.contentOffset;
        setDistance(y)
  }

  const fetch = () =>{
      let url = 'http://placehold.it/700x200/?text=placeholder'
      Image.getSize(url, (w, h) => {
         console.log(w,h)
      }, (err) => {
          // 获取图片宽高或者下载图片失败
          console.log(err,'错误')
      })
  }

  return (
    <View style={styles.cell}>
        <ScrollView onScroll = {_onScroll}>
            {
                DATA.map((item,index)=>{
                    return(
                        <LazyLoad
                             url={item.url}
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