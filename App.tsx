import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView,Image} from 'react-native';
import Picker from './components/Picker'
var { width ,height} = Dimensions.get('window');

const distance = ['你你','好好','嘛嘛','我我','爱爱','你你','嘛嘛','的的','皮皮','下下','的的']

function App() {
  const [transparent, setIsTransparent] = useState(true)
  const [a, setDistance] = useState()

  const onChange = (e):void => {

  }

  console.log(distance,'333')
  return (
    <View style={styles.cell}>
        <Picker
            list={distance}
            wrapperHeight={150}
            itemHeight={50}
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