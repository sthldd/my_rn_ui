import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
var TimerMixin = require('react-timer-mixin');
var { width } = Dimensions.get('window');
//var width = Dimensions.get('window').width - 100;
interface State {
 currentPage: 0
}
interface Props {
 list: Array<any>,
 currentPage: number
}



function Slide(Props: Props, State: State) {
 const mixins = [TimerMixin]
 const scrollView = React.createRef();
 const duration = 1000
 const [currentPage, setCurrentPage] = useState(0)
 const [a, setA] = useState([0, 1, 2, 3, 4, 5])

 useEffect(() => {
  startTime()
 }, [])

 const startTime = () => {
  console.log(scrollView.current,'1111') 
  let listLength = Props.list.length
  mixins[0].setTimeout(() => {
    let value = 0
    if((currentPage+1)>listLength){
     value = 0
    }else{
     value = currentPage+1
    }
   setCurrentPage(value)
   //scrollView.current.scrollResponderScrollTo({x:value*width,y:0,animated:true})
  }, 2000)
 }

 const renderImg = () => {
  let nodeArr = []
  for (let i = 0; i < Props.list.length; i++) {
   nodeArr.push(
    <Image key={i} source={{ uri: Props.list[i].icon }} style={styles.img} />
   )
  }
  return nodeArr
 }

 const renderPageCircle = () => {
  var indicatorArr = [];
  for (var i = 0; i < Props.list.length; i++) {
   indicatorArr.push(
    <Text key={i} style={[{ fontSize: 25 }, i === currentPage ? { color: 'orange' } : { color: '#fff' }]}>&bull;</Text>
   );
  }
  return indicatorArr;
 }


 const onAnimationEnd = (e) => {
  var offSetX = e.nativeEvent.contentOffset.x;
  console.log(offSetX, 'offSetX', width, 'width', Math.ceil(offSetX / width))
  var index = Math.ceil(offSetX / width)
  setCurrentPage(index)
 }
 return (
  <View>
   <ScrollView
    contentContainerStyle={styles.contentContainer}
    ref={scrollView}
    horizontal={true}
    pagingEnabled={true}
    showsHorizontalScrollIndicator={false}
    onMomentumScrollEnd={onAnimationEnd}
   >
    {renderImg()}
   </ScrollView>
   <View style={styles.pageViewStyle}>
    {renderPageCircle()}
    <Text style={{ marginLeft: 15, color: 'red', fontSize: 18 }}>{currentPage}</Text>
   </View>
  </View>
 )
}



const styles = StyleSheet.create({
 img: {
  width,
  height: 200,
 },
 contentContainer: {
  borderColor:'red',
  borderWidth:1,
 },
 pageViewStyle: {
  width,
  height: 25,
  backgroundColor: 'rgba(0,0,0,0.2)',
  position: 'absolute',
  top: 200,
  flexDirection: 'row',
  alignItems: 'center'
 }
});

export default Slide