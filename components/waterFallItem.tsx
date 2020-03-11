import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';

interface State { }
interface Props {
 numColumns: number,
 data: Array<any>,
}

const waterFallItem = (props: any,State) => {
 return (
  <TouchableOpacity style={[styles.cell, { height: props.item.height, backgroundColor: props.item.color },]}>

  </TouchableOpacity>
 )
}



const styles = StyleSheet.create({
 cell: {
  margin: 1,
  alignItems: 'center',
  justifyContent: 'center',
 },
});

export default waterFallItem