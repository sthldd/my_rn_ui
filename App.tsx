import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView,Image} from 'react-native';
import SegmentedControl  from './components/SegmentedControl'
var { width ,height} = Dimensions.get('window');


function App() {
  const [defaultIndex, setDefaultIndex] = useState(1)


  const onChange = (selectIndexValue,selectIndex) =>{
      console.log('1111')
      setDefaultIndex(selectIndex)
  }
  return (
    <View style={styles.cell}>
        <SegmentedControl
            values={['Segment1', 'Segment2']}
            defaultIndex={defaultIndex}
            onChange={onChange}
            opacity={0.2}
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
    paddingTop:50,
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