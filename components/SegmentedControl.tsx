import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
var {width} = Dimensions.get('window');
interface State {}
interface Props {
  values: Array<string>;
  defaultIndex?: number;
  onChange: (value: string, index: number) => void;
  disabledIndex?: number;
  opacity?: number;
  selectBackgroundColor?: string;
  selectTextColor?: string;
}

function SegmentedControl(Props: Props, State: State) {
  const [selectIndex, setSelectIndex] = useState(-1);

  const changIndex = (item: string, index: number) => {
    setSelectIndex(index);
    Props.onChange(item, index);
  };

  const renderItem = (item: string, index: number) => {
    return (
      <TouchableOpacity
        key={index}
        style={[
          {
            width: width / Props.values.length,
            backgroundColor:
              index === Props.defaultIndex
                ? Props.selectBackgroundColor
                : 'white',
            borderColor:
              index === Props.disabledIndex ? 'rgba(16, 142, 233,.5)' : '',
          },
          styles.touchableItem,
        ]}
        onPress={() => changIndex(item, index)}
        activeOpacity={Props.opacity}
        disabled={index === Props.disabledIndex ? true : false}>
        <Text
          style={{
            color:
              index === Props.defaultIndex
                ? Props.selectTextColor
                : 'rgb(16, 142, 233)',
            opacity: index === Props.disabledIndex ? 0.5 : null,
          }}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.wapperContainer}>
      {Props.values.map((item, index) => renderItem(item, index))}
    </View>
  );
}
SegmentedControl.defaultProps = {
  defaultIndex: 0,
  opacity: 0.2,
  selectBackgroundColor: 'rgb(16, 142, 233)',
  selectTextColor: 'white',
};

const styles = StyleSheet.create({
  wapperContainer: {
    flexDirection: 'row',
    width,
    justifyContent: 'space-between',
  },
  touchableItem: {
    alignItems: 'center',
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: 'rgb(16, 142, 233)',
  },
});

export default SegmentedControl;
