import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';

interface State { }
interface Props {
 numColumns: number,
 data: Array<any>,
}


function waterFallColumns(props: any, State) {
 const [data, setData] = useState(props.data)

 const renderItem = () => {
  return (
   
  )
 }
 return (
  <View>
   <FlatList
    style={{ flex: 1 }}
    data={data}
    keyExtractor={props.keyExtractor}
    renderItem={renderItem.bind(this)}
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

export default waterFallColumns