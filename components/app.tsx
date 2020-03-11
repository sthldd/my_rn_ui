import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MyModal from './components/Modal'

const COLORS = ['green', 'blue', 'red'];
const DATA = Array.from({ length: 12 }).map((_, i) => ({
  id: `item_${i}`,
  height: Math.round(Math.random() * 100 + 300),
  color: COLORS[i % COLORS.length],
}));

function App() {

  const [isVisible, setIsVisible] = useState(false)
  const [transparent, setIsTransparent] = useState(true)
  const _onPressButton = () => {
    console.log('我按下了button')
    setIsVisible(true)
  }
  const close = () => {
    console.log('我他妈的要close了')
    setIsVisible(false)
  }

  const showModal = () => {
    console.log('打开了modal')
  }
  const onDismiss = () => {
    console.log('modal关闭回调')
  }
  const _onCloseButton = () => {
    setIsVisible(false)
  }
  const confirmButton = () => {
    console.log('确定按钮')
    setIsVisible(false)
  }

  return (
    <View style={styles.cell}>
      <MyModal
        isVisible={isVisible}
        onRequestClose={close}
        onShow={showModal}
        transparent={transparent}
        animationType="fade"
        onDismiss={onDismiss}
        hasChildren={false}
        modalContentStyle={styles.a}
        closeModal={_onCloseButton}
        closeIconIsVisible={true}
        modalTitle={'标题哦'}
        modalContent={'定封装的视图在被触摸操作激活时以多少不透明度显示定封装的视图在被触摸操作激活时以多少不透明度显示定封装的视图在被触摸操作激活时以多少不透明度显示'}
        showButton={true}
        closeButton={_onCloseButton}
        confirmButton={confirmButton}
      >
      </MyModal>
      <TouchableOpacity onPress={_onPressButton} style={styles.btn}>
        <Text style={{ color: 'white' }}> 你妈的逼</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={_onCloseButton} style={[styles.btn, styles.bottom]}>
        <Text style={{ color: 'white' }}> 关闭</Text>
      </TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create({
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  a: {
    width: 300,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  btn: {
    width: 200,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    marginTop: 15
  }
});

export default App