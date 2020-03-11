import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Slide from './components/Slide'



function App() {
  const [list, setList] = useState(
    [
      {
        "icon": "http://wx4.sinaimg.cn/large/0077GhfTgy1fsgmrskvyrj31kw11xqv5.jpg",
        "title": "我是书"
      },
      {
        "icon": "http://wx4.sinaimg.cn/large/0077GhfTgy1fsgmrskvyrj31kw11xqv5.jpg",
        "title": "疏忽是"
      },
      {
        "icon": "http://wx4.sinaimg.cn/large/0077GhfTgy1fsgmrskvyrj31kw11xqv5.jpg",
        "title": "漱漱空"
      },
      {
        "icon": "http://wx4.sinaimg.cn/large/0077GhfTgy1fsgmrskvyrj31kw11xqv5.jpg",
        "title": "中转站"
      },
      {
        "icon": "http://wx4.sinaimg.cn/large/0077GhfTgy1fsgmrskvyrj31kw11xqv5.jpg",
        "title": "叔叔在"
      },
      {
        "icon": "http://wx4.sinaimg.cn/large/0077GhfTgy1fsgmrskvyrj31kw11xqv5.jpg",
        "title": "季节即"
      }
    ]
  )
  const [transparent, setIsTransparent] = useState(true)


  const _onPressButton = () => {
    console.log('我按下了button')
  }
  const close = () => {
    console.log('我他妈的要close了')
  }

  return (
    <View style={styles.cell}>
      <Slide list={list} >
      </Slide>
      <View style={styles.buttonGroup}>
        <TouchableOpacity onPress={_onPressButton} style={styles.btn}>
          <Text style={{ color: 'white' }}> 上一页</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={close} style={[styles.btn, styles.bottom]}>
          <Text style={{ color: 'white' }}> 下一页</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
    position: 'absolute',
    top:300
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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