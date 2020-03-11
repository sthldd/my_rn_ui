import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MasonryList from './components/a';

const COLORS = ['green', 'blue', 'red'];
const DATA = Array.from({ length: 100 }).map((_, i) => ({
  id: `item_${i}`,
  height: Math.round(Math.random() * 100 + 300),
  color: COLORS[i % COLORS.length],
}));
function Cell(props: any) {
  return (
    <View
      style={[
        styles.cell,
        { height: props.item.height, backgroundColor: props.item.color },
      ]}
    >
      <Text>{props.item.id}</Text>
    </View>
  );
}

function App() {

  const [isRefreshing, setisRefreshing] = useState(false);

  const _refreshRequest = () => {
    setisRefreshing(true)
    setTimeout(() => {
      setisRefreshing(false)
    }, 1000);
  };

  return (
    <MasonryList
      onRefresh={_refreshRequest}
      refreshing={isRefreshing}
      data={DATA}
      renderItem={({ item }) => <Cell item={item} />}
      getHeightForItem={({ item }) => item.height + 2}
      numColumns={2}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  cell: {
    margin: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App