import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, Image, Animated} from 'react-native';
var { width ,height} = Dimensions.get('window');
import Listitem from './components/Listitem'
let a = 0
function App() {
  const [defaultIndex, setDefaultIndex] = useState(1)
  const [value,setValue] = useState(0)
  useEffect(()=>{

  })
  const _onPressButton = () =>{
    setValue(a++)
  }
  const onChange = () =>{
    console.log('你惦记了我')
  }
  return (
    <View style={styles.cell}>
      <Listitem
        thumbUrl={'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png'}
        nodeText={'你好我是你爹你好我是你爹你好我是你爹你好我是你爹你好我是你爹你好我是你爹你好我是你爹'}
        itemText={'系统设置'}
        onPress={onChange}
        extra={
          <Image
              source={{
                uri:
                    'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
              }}
              style={{ width: 29, height: 29 }}
          />
        }
      />
      <Listitem
          thumbUrl={'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png'}
          nodeText={'你好我是你爹你好我是你爹你好我是你爹你好我是你爹你好我是你爹你好我是你爹你好我是你爹'}
          itemText={'系统设置'}
          onPress={onChange}
          extra={
            <Image
                source={{
                  uri:
                      'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
                }}
                style={{ width: 29, height: 29 }}
            />
          }
      />
      {/*<View style={styles.buttonGroup}>*/}
      {/*  <TouchableOpacity onPress={_onPressButton} style={styles.btn}>*/}
      {/*    <Text style={{ color: 'white' }}> 上一页</Text>*/}
      {/*  </TouchableOpacity>*/}
      {/*  <TouchableOpacity onPress={_onPressButton} style={[styles.btn, styles.bottom]}>*/}
      {/*    <Text style={{ color: 'white' }}> 下一页</Text>*/}
      {/*  </TouchableOpacity>*/}
      {/*</View>*/}
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
    paddingTop:10,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
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
  },
  pickItem:{
    height:50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App