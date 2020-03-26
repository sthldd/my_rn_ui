import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, Image, ActivityIndicator } from 'react-native';
var { width, height } = Dimensions.get('window');

function App() {
  const childRef = useRef()
  useEffect(() => {
  })
  const _onPressButton = () => {
    console.log('button')
  }
  const onChange = () => {

  }
  return (
    <View style={styles.cell} >
      <View style={styles.buttonGroup}>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
    position: 'absolute',
    top: 300
  },
  cell: {

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
  pickItem: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    height: 60,
    width: 160,
    backgroundColor: 'black',
    color: 'red'
  }
});

export default App