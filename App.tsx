import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import Slide from './components/Slide'
var { width ,height} = Dimensions.get('window');


function App() {
  const [list, setList] = useState(
    [
      {
        "icon": "http://placehold.it/400x400/",
        "title": "我是书"
      },
      {
        "icon": "http://wx4.sinaimg.cn/large/0077GhfTgy1fsgmrskvyrj31kw11xqv5.jpg",
        "title": "疏忽是"
      },
      {
        "icon": "http://placehold.it/400x400/",
        "title": "漱漱空"
      },
      {
        "icon": "http://placehold.it/400x300/",
        "title": "中转站"
      },
      {
        "icon": "http://placehold.it/400x400/",
        "title": "叔叔在"
      },
      {
        "icon": "http://placehold.it/400x300/",
        "title": "季节即"
      }
    ]
  )
  const [transparent, setIsTransparent] = useState(true)



  const _onPressButton = () => {
      setIsTransparent(false)
  }
  const close = () => {
  }

  const onIndexChanged = (a:number) =>{
  }
  return (
    <View style={styles.cell}>
      <Slide
          list={list}
          duration={2000}
          showsButtons={true}
          width={width}
          height={200}
          onIndexChanged={onIndexChanged}
      >
      </Slide>
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