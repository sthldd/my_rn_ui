import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView,Image} from 'react-native';
var { width ,height} = Dimensions.get('window');
import NoticeBar from './components/NoticeBar'

function App() {
  const [defaultIndex, setDefaultIndex] = useState(1)
  useEffect(()=>{

  })

  const onChange = () =>{
    console.log('你惦记了我')
  }
  return (
    <View style={styles.cell}>
      <NoticeBar
          mode='close'
          onPress={onChange}
      />
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
    paddingTop:150,
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