import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, Image, ActivityIndicator} from 'react-native';
var { width ,height} = Dimensions.get('window');
import Toast from "./components/Toast";


function App() {
  const childRef = useRef()
  useEffect(()=>{
  })
  const _onPressButton = () =>{
    console.log('button')
  }
  const onChange = () =>{
   Toast.showInfo('报名成功啦',{duration:2000})
  }

  return (
    <View style={styles.cell} >
      <View style={styles.buttonGroup}>
        <TouchableOpacity onPress={onChange} style={styles.btn}>
          <Text style={{ color: 'white' }}> 上一页</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_onPressButton} style={[styles.btn, styles.bottom]}>
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