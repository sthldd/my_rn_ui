import React, { useEffect, useState,useRef } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions,TextProps } from 'react-native';
var TimerMixin = require('react-timer-mixin');
var { width ,height} = Dimensions.get('window');
interface State {
 currentPage: 0,
 duration:1000,
 showsButtons:false,
 disableNextButton:false,
 disablePrevButton:false,
}
interface Props {
 list: Array<any>,
 currentPage: number,
 duration:number,
 showsButtons:boolean,
 renderButtons: () => void,
 disableNextButton?:boolean,
 disablePrevButton?:boolean,
 buttonText?: React.CSSProperties,
 width:number,
 height:number,
 onIndexChanged: (e:number) => void,
}



function Slide(Props: Props, State: State) {
 const scrollView  = useRef(null);
 const duration = 1000
 var time:number
 const [currentPage, setCurrentPage] = useState(0)
 const [mixins, setMixins] = useState([TimerMixin][0])

 useEffect(() => {
  return Props.onIndexChanged(currentPage)
 },[currentPage])

 const startTime = ():void => {
  let listLength = Props.list.length
  time =  mixins.setInterval(() => {
    let value = 0
   //console.log('222')
    if((currentPage+1)>=listLength){
     value = 0
    }else{
     value = currentPage+1
    }
    //console.log('333',value)
   setCurrentPage(value)
    //console.log('44',currentPage)
   scrollView.current.scrollTo({x:value*Props.width,y:0,animated:true})
  }, Props.duration)
 }

 const renderImg = () => {
  let nodeArr = []
  for (let i = 0; i < Props.list.length; i++) {
   nodeArr.push(
       <View style={styles.imgContainer}>
        <Image key={i} source={{ uri: Props.list[i].iconStyleicon }} style={{width:Props.width, height: Props.height,}} />
       </View>

   )
  }
  return nodeArr
 }

 const renderPageCircle = () => {
  var indicatorArr = [];
  for (var i = 0; i < Props.list.length; i++) {
   indicatorArr.push(
     <View
         style={[
          {
           backgroundColor: i === currentPage?'#007aff':'rgba(0,0,0,.2)',
           width: 8,
           height: 8,
           borderRadius: 4,
           marginLeft: 3,
           marginRight: 3,
           marginTop: 3,
           marginBottom: 3
          },
         ]}
     />
   );
  }
  return indicatorArr;
 }

 const onScrollBeginDrag = () =>{
  mixins.clearInterval(time)
 }

 const onAnimationEnd = (e) => {
  var offSetX = e.nativeEvent.contentOffset.x;
  console.log(offSetX, 'offSetX', width, 'width', Math.ceil(offSetX / width))
  var index = Math.ceil(offSetX / Props.width)
  setCurrentPage(index)
 }

 const renderButtons = ()=>{
  return(
      <View
          pointerEvents="box-none"
          style={[
           styles.buttonWrapper,
           {
            width:Props.width,
            height:Props.height,
           },
          ]}
      >
       {renderPrevButton()}
       {renderNextButton()}
      </View>
  )
 }

 const renderNextButton = () => {
  return (
      <TouchableOpacity
          onPress={nextButton}
          disabled={Props.disableNextButton}
      >
       <View>
        <Text style={Props.buttonText?Props.buttonText:styles.buttonText}>›</Text>
       </View>
      </TouchableOpacity>
  )
 }

 const renderPrevButton = () => {
  return (
      <TouchableOpacity
          onPress={prevButton}
          disabled={Props.disablePrevButton}
      >
       <View><Text style={Props.buttonText?Props.buttonText:styles.buttonText}>‹</Text></View>
      </TouchableOpacity>
  )
 }

 const prevButton = () =>{
  let index = 0
  if((currentPage - 1)<0){
   index = Props.list.length - 1
  }else{
   index = currentPage - 1
  }
  setCurrentPage(index)
  scrollView.current.scrollTo({x:index*Props.width,y:0,animated:true})
 }

 const nextButton = () =>{
  let index = 0
  if((currentPage + 1)>=Props.list.length){
   index = 0
  }else{
   index = currentPage + 1
  }
  setCurrentPage(index)
  scrollView.current.scrollTo({x:index*Props.width,y:0,animated:true})
 }

 return (
  <View style={styles.container}>
   <ScrollView
    contentContainerStyle={styles.contentContainer}
    ref={scrollView}
    horizontal={true}
    pagingEnabled={true}
    showsHorizontalScrollIndicator={false}
    onMomentumScrollEnd={onAnimationEnd}
    onMomentumScrollBegin={onScrollBeginDrag}
   >
    {renderImg()}
   </ScrollView>
   <View style={styles.pageViewStyle}>
    {renderPageCircle()}
    {/*<Text style={{ marginLeft: 15, color: 'red', fontSize: 18 }}>{currentPage}</Text>*/}
   </View>
   {Props.showsButtons && renderButtons()}
  </View>
 )
}



const styles = StyleSheet.create({
 container:{
  position: 'relative',
 },
 pageViewStyle: {
  position: 'absolute',
  bottom: 10,
  left: 0,
  right: 0,
  flexDirection: 'row',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent'
 },
 buttonWrapper:{
  backgroundColor: 'transparent',
  flexDirection: 'row',
  position: 'absolute',
  top: 0,
  left: 0,
  flex: 1,
  paddingHorizontal: 10,
  paddingVertical: 10,
  justifyContent: 'space-between',
  alignItems: 'center',
 },
 buttonText:{
  fontSize: 80,
  color: '#007aff'
 }
});

export default Slide