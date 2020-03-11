import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Waterfall from './components/Waterfall'

const COLORS = ['green', 'blue', 'red'];
const DATA = Array.from({ length: 12 }).map((_, i) => ({
 id: `item_${i}`,
 height: Math.round(Math.random() * 100 + 300),
 color: COLORS[i % COLORS.length],
}));

function App() {


 return (
  <View>
   <Waterfall
    numColumns={2}
    data={DATA}
    isRefresh={false}
   />
  </View>
 )
}



const styles = StyleSheet.create({
 cell: {
  margin: 1,
  alignItems: 'center',
  justifyContent: 'center',
 },
});

export default App