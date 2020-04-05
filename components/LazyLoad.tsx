import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  InteractionManager,
} from 'react-native';
var {width, height} = Dimensions.get('window');

interface State {
  loaded: false;
}
interface Props {
  distance: number;
  imageStyle?: React.CSSProperties;
  source: any;
  loadingText: string;
}

function LazyLoad(Props: Props, State: State) {
  const [imgDistance, setImgD] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [imgHeight, setImgHeight] = useState(0);
  const [loadingText, setLoadingText] = useState('加载中');
  const _onLayout = (e) => {
    let {y} = e.nativeEvent.layout;
    setImgD(y);
  };

  useEffect(() => {
    fetchImg();
  }, [loaded]);

  const loadText = (text: string) => {
    return (
      <View style={styles.loadContainer} onLayout={_onLayout}>
        <Text style={styles.loadText}>{text}</Text>
      </View>
    );
  };

  const fetchImg = () => {
    if (height + Props.distance >= imgDistance) {
      InteractionManager.runAfterInteractions(() => {
        const {source} = Props;
        if (source.uri) {
          Image.getSize(
            source.uri,
            (w, h) => {
              setImgHeight((h / w) * width);
              setLoaded(true);
            },
            (err) => {
              setLoadingText('加载出错');
              setLoaded(true);
            },
          );
        }
      });
    }
  };

  return loaded ? (
    <View onLayout={_onLayout}>
      <Image
        source={Props.source}
        resizeMode={'contain'}
        style={Props.imageStyle || styles.imageStyle}
      />
    </View>
  ) : (
    loadText(Props.loadingText || loadingText)
  );
}
LazyLoad.defaultProps = {
  loadingText: '',
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 360,
    height: 260,
    resizeMode: 'cover',
    borderRadius: 30,
  },
  loadContainer: {
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    marginVertical: 10,
  },
  loadText: {
    fontSize: 20,
    color: '#ccc',
  },
});

export default LazyLoad;
