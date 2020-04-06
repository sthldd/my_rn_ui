import React, {useEffect} from 'react';
import {Image, Text, View, Modal, StyleSheet, Dimensions} from 'react-native';

interface Props {
  showSuccess?: boolean;
  showFail?: boolean;
  showError?: boolean;
  message: string;
  destroy: () => void;
  showInfo?: boolean;
  duration?: number;
  position?: number;
  backgroundColor?: string;
  textColor?: string;
}
function ToastContainer(Props: Props) {
  console.log(Props);
  useEffect(() => {
    setTimeout(() => {
      Props.destroy();
    }, Props.duration);
  });
  return (
    <Modal animationType={'fade'} transparent visible>
      <View style={[styles.defaultStyle, {top: Props.position}]}>
        <View
          style={[
            styles.containerStyle,
            {backgroundColor: Props.backgroundColor},
          ]}>
          {Props.showSuccess ? (
            <Image
              style={styles.imageStyle}
              source={require('../static/img/success.png')}
            />
          ) : Props.showFail ? (
            <Image
              style={styles.imageStyle}
              source={require('../static/img/network.png')}
            />
          ) : (
            Props.showError && (
              <Image
                style={styles.imageStyle}
                source={require('../static/img/error.png')}
              />
            )
          )}
          {Props.showInfo && (
            <Text style={[styles.textStyle, {color: Props.textColor}]}>
              {Props.message}
            </Text>
          )}
        </View>
      </View>
    </Modal>
  );
}
ToastContainer.defaultProps = {
  duration: 2000,
  position: 100,
  backgroundColor: '#000',
  textColor: '#fff',
};

export default ToastContainer;
let styles = StyleSheet.create({
  defaultStyle: {
    position: 'relative',
    alignItems: 'center',
    flex: 1,
  },
  containerStyle: {
    backgroundColor: '#000',
    opacity: 0.8,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    padding: 10,
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  imageStyle: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    height: 30,
    width: 30,
  },
});
