import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import {Modal} from './components';
var {width, height} = Dimensions.get('window');

function App() {
  const [distance, setDistance] = useState(0);
  const childRef = useRef();
  useEffect(() => {});
  const _onPressButton = () => {
    console.log('button');
  };
  const onChange = () => {};

  const _onScroll = (e) => {
    let {y} = e.nativeEvent.contentOffset;
    setDistance(y);
  };

  return (
    <View style={styles.cell}>
      <ScrollView onScroll={_onScroll}>
        <Modal />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
    position: 'absolute',
    top: 100,
  },
  cell: {},
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
