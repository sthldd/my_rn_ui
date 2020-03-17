import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView,Image} from 'react-native';
import Picker from './components/Picker'
var { width ,height} = Dimensions.get('window');

const distance = ['11','22','33','44','55','66','77','88','99','1010','1111']

function App() {
  const [transparent, setIsTransparent] = useState(true)

  const renderItem = (item,index) => {
      return (
          <View style={styles.pickItem} key={index}>
            <Text>{item}</Text>
          </View>
      )
  }

  const onChange = (selectIndexValue,selectIndex) =>{

  }
  console.log(distance,'333')
  return (
    <View style={styles.cell}>
        <Picker
            list={distance}
            wrapperHeight={200}
            itemHeight={50}
            selectIndex={1}
            renderItem={renderItem}
            onChange={onChange}
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