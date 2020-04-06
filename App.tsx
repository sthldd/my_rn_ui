import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
var {width, height} = Dimensions.get('window');
import {Popover} from './main.js';
function App() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.cell}>
      <View style={{marginTop: 50, marginLeft: 50}}>
        <Text>11111</Text>
        <Popover
          isVisible={visible}
          popoverContent={<Text style={{color: 'white'}}>我是popover内容</Text>}
          buttonContent={<Text>我是button</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
    position: 'absolute',
    top: 100,
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
    marginLeft: 15,
  },
  pickItem: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vlue: {
    color: 'red',
    marginLeft: 5,
  },
  text: {
    height: 60,
    width: 160,
    backgroundColor: 'black',
    color: 'red',
  },
});

export default App;
