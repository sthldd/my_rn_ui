import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ScrollView,
  RefreshControl,
  VirtualizedList,
  findNodeHandle,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';

type Props = {};
type State = {};

const { width, height } = Dimensions.get('window')

function App() {
  const [imgList, setImgList] = useState([{ id: 1 }, { id: 2 }])

  const _renderItem = ({ item }) => (
    <TouchableOpacity onPress={_onPressButton} style={[styles.imgContent, item.id % 2 === 0 ? styles.even : styles.odd]} activeOpacity={1}>
      <View style={styles.imgBottom}>
        <Image
          style={styles.button}
          source={require('./static/img/aa.jpg')}
        />
        <View style={styles.imgBottoma}>
          <Text style={[styles.leftText, styles.bottomText]}>
            00:19
          </Text>
          <Text style={[styles.rightText, styles.bottomText]}>
            50
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const _onPressButton = () => {
    console.log('你点你爹干啥')
  }
  return (
    <View>
      <View style={styles.header}>
      </View>
      <ScrollView >
        <FlatList
          style={styles.flatListStyle}
          numColumns={2}
          data={[{ key: 'a', id: 1 }, { key: 'b', id: 2 }, { key: 'c', id: 3 }, { key: 'd', id: 4 }, { key: 'c', id: 5 }, { key: 'd', id: 6 }]}
          renderItem={_renderItem}
          contentContainerStyle={styles.flatFlex}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    borderRadius: 0.5,
    height: 50,
    borderStyle: 'solid',
    marginBottom: 10
  },
  content: {
    flex: 1,
  },
  button: {
    borderRadius: 10,
    height: 300,
    width: width * 0.495,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContent: {
    marginBottom: 15,
  },
  flatListStyle: {
    flexDirection: 'row',
  },
  flatFlex: {
    flex: 1,
    alignItems: 'center',
  },
  even: {
    marginLeft: width * 0.005
  },
  odd: {
    marginRight: width * 0.005
  },
  imgBottom: {
    position: 'relative',
  },
  imgBottoma: {
    position: 'absolute',
    width: width * 0.495,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(178,178,178,0.5)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  bottomText: {
    color: 'white',
    alignItems: 'center'
  }
});

export default App
