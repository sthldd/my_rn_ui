import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
var {width} = Dimensions.get('window');
interface State {}
interface Props {
  mode?: 'link' | 'close';
  onPress?: () => void;
  action?: JSX.Element;
  content: string;
  noticeLeftIcon?: JSX.Element;
}

function NoticeBar(Props: Props, State: State) {
  const [imgList, setImgList] = useState([
    require('../static/img/closable.png'),
    require('../static/img/link.png'),
  ]);
  const [isVisible, setIsVisible] = useState(true);

  const closeNotice = () => {
    setIsVisible(false);
  };

  const rightIcon = () => {
    console.log(Props.mode, 'Props.mode');
    return Props.mode === 'close' ? (
      <TouchableOpacity onPress={closeNotice}>
        <Image source={imgList[0]} style={styles.closeIcon} />
      </TouchableOpacity>
    ) : Props.mode === 'link' ? (
      <Image source={imgList[1]} style={styles.closeIcon} />
    ) : (
      ''
    );
  };

  const noticeText = () => {
    return (
      <Text
        style={styles.noticeTextStyle}
        numberOfLines={1}
        ellipsizeMode="tail"
        onPress={Props.onPress}>
        {Props.content}
      </Text>
    );
  };

  return isVisible ? (
    <View style={styles.wapperContainer}>
      {Props.noticeLeftIcon || (
        <Image
          source={require('../static/img/notice.png')}
          style={styles.noticeIcon}
        />
      )}
      {noticeText()}
      {Props.action || rightIcon() || null}
    </View>
  ) : null;
}
NoticeBar.defaultProps = {
  content: '',
  mode: undefined,
};

const styles = StyleSheet.create({
  wapperContainer: {
    backgroundColor: 'rgb(255, 250, 218)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 5,
    marginTop: 15,
  },
  noticeIcon: {
    width: 30,
    height: 30,
  },
  noticeTextStyle: {
    color: 'rgb(244, 51, 60)',
    flexGrow: 1,
    marginLeft: 5,
    fontWeight: 'bold',
    width: 150,
  },
  closeIcon: {
    width: 30,
    height: 30,
  },
});

export default NoticeBar;
