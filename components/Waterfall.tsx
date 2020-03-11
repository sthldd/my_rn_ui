import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import waterFallItem from './waterFallItem'
import waterFallColumns from './waterFallColumns'

interface State {

}
interface Props {
 numColumns: number,
 data: Array<any>,
 isRefresh: boolean
}



function Waterfall(Props: Props, State: State) {

 return (
  <View>
   <Text>1111</Text>
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

export default Waterfall