import React, {useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Modal,
  findNodeHandle,
  UIManager,
} from 'react-native';
var {width, height} = Dimensions.get('window');
interface Props {
  isVisible: boolean;
  popoverContent: JSX.Element;
  buttonContent: JSX.Element;
}

console.log();
function Popover(Props: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const [singleDown, setSingleDown] = useState(false);
  const [toggleContent, setToggleContent] = useState(false);
  const [modalViewHeight, setModalViewHeight] = useState(0);
  const [popoverComponentXY, setPopoverComponentXY] = useState<any>([]);
  const [popoverComponentWH, setPopoverComponentWH] = useState<any>([]);
  const [popoverH, setPopoverH] = useState<any>(0);
  const [popoverTop, setPopoverTop] = useState<any>(0);

  const [buttonContentXY, setButtonContentXY] = useState<any>([]);
  const wrapperRef = useRef<any>();
  const modalRef = useRef<any>();
  const open = async () => {
    setToggleContent(true);
    setIsVisible(true);
    let popoverComponentXY = await getElementWeightAndHeight(
      wrapperRef.current,
    );
    let buttonContentXY = await getElementWeightAndHeight(modalRef.current);

    //设置popover的xy和宽高
    setPopoverComponentWH([popoverComponentXY[2], popoverComponentXY[3]]);
    setPopoverComponentXY([popoverComponentXY[0], popoverComponentXY[1]]);

    //设置button的xy和宽高
    setButtonContentXY([buttonContentXY[0], buttonContentXY[1]]);
    setPopoverComponentWH([buttonContentXY[2], buttonContentXY[3]]);
    if (popoverComponentXY[1] - modalViewHeight < height / 2 - 50) {
      setSingleDown(true);
    } else {
      setSingleDown(false);
    }
    setPopoverTop(
      singleDown
        ? popoverComponentXY[1]
        : popoverComponentXY[1] - popoverH - modalViewHeight,
    );
  };

  const getElementWeightAndHeight = (element: object) => {
    const handle = findNodeHandle(element);
    return new Promise((resolve, reject) => {
      UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
        resolve([pageX, pageY, width, height]);
      });
    });
  };

  const close = () => {
    setToggleContent(false);
    if (!toggleContent) {
      return;
    }
    setIsVisible(false);
  };
  const onLayout = (e) => {
    setModalViewHeight(e.nativeEvent.layout.height);
  };

  const getButtonContentHeight = (e) => {
    setPopoverH(e.nativeEvent.layout.height);
  };
  const renderPopoverContent = () => {
    return <View style={styles.modalContent}>{Props.popoverContent}</View>;
  };

  return (
    <TouchableOpacity ref={wrapperRef} onPress={open} activeOpacity={1}>
      {!toggleContent && <View>{Props.buttonContent}</View>}
      <Modal visible={isVisible} animationType="none" transparent>
        <TouchableOpacity
          activeOpacity={1}
          ref={modalRef}
          onPress={close}
          style={[styles.modalContentWrapper]}>
          {toggleContent && (
            <View
              style={{
                position: 'relative',
                top: popoverComponentXY[1],
                left: popoverComponentXY[0],
              }}
              onLayout={(event) => getButtonContentHeight(event)}>
              {Props.buttonContent}
            </View>
          )}
          <View
            onLayout={(event) => onLayout(event)}
            style={{
              position: 'relative',
              top: popoverTop,
              left: popoverComponentXY[0] < 20 ? 20 : popoverComponentXY[0],
            }}>
            {singleDown && (
              <View
                style={[
                  styles.modalContentSingle,
                  styles.modalContentTopSingle,
                ]}
              />
            )}
            {renderPopoverContent()}
            {!singleDown && (
              <View
                style={[
                  styles.modalContentSingle,
                  styles.modalContentBottomSingle,
                  {},
                ]}
              />
            )}
          </View>
        </TouchableOpacity>
      </Modal>
    </TouchableOpacity>
  );
}

Popover.defaultProps = {};

const styles = StyleSheet.create({
  modalContentWrapper: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  modalContent: {
    backgroundColor: '#000',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  modalContentSingle: {
    width: 10,
    height: 10,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 10,
    borderLeftWidth: 10,
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    marginLeft: 20,
  },
  modalContentTopSingle: {
    borderBottomColor: '#000',
    borderTopWidth: 0,
    borderBottomWidth: 10,
    marginTop: 1,
  },
  modalContentBottomSingle: {
    borderTopColor: '#000',
    borderTopWidth: 10,
    borderBottomWidth: 0,
  },
});

export default Popover;
