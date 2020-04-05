import React from 'react';
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Modal,
  View,
  Text,
  Image,
} from 'react-native';

interface State {
  hasChildren: true;
  transparent: false;
  animationType: 'fade';
  closeIconIsVisible: true;
}
interface Props {
  isVisible: boolean;
  onRequestClose?: () => void;
  onShow?: () => void;
  transparent?: boolean;
  animationType?: 'none' | 'fade' | 'slide';
  onDismiss: () => void;
  children: React.ReactNode;
  hasChildren?: boolean;
  modalContentStyle?: React.CSSProperties;
  // onBackdropPress?: () => void,
  closeIconIsVisible: boolean;
  closeModal: () => void;
  modalTitle?: string;
  modalContent?: string;
  showButton: boolean;
  closeButton: () => void;
  confirmButton: () => void;
}

function ModalWrapper(Props: Props, State: State) {
  return (
    <Modal
      visible={Props.isVisible}
      onRequestClose={Props.onRequestClose}
      onShow={Props.onShow}
      transparent={Props.transparent}
      animationType={Props.animationType}
      onDismiss={Props.onDismiss}>
      <View style={styles.backStyle}>
        {Props.hasChildren && Props.children ? (
          Props.children
        ) : (
          <View
            style={
              Props.modalContentStyle
                ? Props.modalContentStyle
                : styles.contentStyle
            }>
            <View style={styles.contentTop}>
              <Text style={styles.title}>{Props.modalTitle}</Text>
              {Props.closeIconIsVisible && (
                <TouchableOpacity
                  style={styles.closeImgWrapper}
                  onPress={Props.closeModal}
                  activeOpacity={1}>
                  <Image
                    source={require('../static/img/close.png')}
                    style={styles.closeImg}></Image>
                </TouchableOpacity>
              )}
            </View>
            <Text style={styles.content}>{Props.modalContent}</Text>
            {Props.showButton && (
              <View style={styles.buttonGroup}>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={Props.closeButton}
                  activeOpacity={1}>
                  <Text style={styles.cancleText}>取消</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalButton, styles.confirmButton]}
                  onPress={Props.confirmButton}
                  activeOpacity={1}>
                  <Text style={styles.confirmText}>确定</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000080',
  },
  contentStyle: {
    width: 300,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
  },
  content: {
    marginVertical: 15,
  },
  contentTop: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    position: 'relative',
  },
  closeImgWrapper: {
    position: 'absolute',
    right: 5,
    top: 0,
  },
  closeImg: {
    height: 30,
    width: 30,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    paddingVertical: 5,
    paddingHorizontal: 25,
    borderRadius: 6,
  },
  confirmButton: {
    backgroundColor: '#409eff',
  },
  confirmText: {
    color: 'white',
    fontSize: 15,
  },
  cancleText: {
    color: 'black',
    fontSize: 15,
  },
});

export default ModalWrapper;
