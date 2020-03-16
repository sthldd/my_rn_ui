import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View, Dimensions, Text, ScrollView, PixelRatio} from 'react-native';
var {width,height} = Dimensions.get('window');
console.log(typeof width,'333')
interface State {

}
interface Props {
    list:Array<any>,
    wrapperHeight:number,
    itemHeight:number,
    wrapperBackgroundColor?:string,
    highlightColor?:string,
    highlightWidth?:number,
    hairlineWidth?:number,
}


function Picker(Props: Props, State: State) {
    const scrollView  = useRef(null);
    const [wrapperContainer, setWrapperContainer] = useState({
        borderWidth:1,
        borderColor:'red',
        height:Props.wrapperHeight,
        backgroundColor:Props.wrapperBackgroundColor ||'#fafafa',
        overflow:'hidden',
    })

    const [highHightStyle,setHighHightStyle] = useState({
        position:'absolute',
        top:(Props.wrapperHeight - Props.itemHeight) / 2,
        height:Props.itemHeight,
        width:Props.highlightWidth,
        borderTopColor:'blue',
        borderBottomColor:'blue',
        borderTopWidth:StyleSheet.hairlineWidth,
        borderBottomWidth:StyleSheet.hairlineWidth,
    })
    useEffect(()=>{

    },[])

    const renderList = () => {
        return Props.list.map((item,index)=>{
                return(
                    <View style={styles.pickItem} key={index}>
                        <Text>{item}</Text>
                    </View>
                )
            })
    }

    let timeOut:any
    const onScrollBeginDrag = (e)=>{
        //console.log('onScrollBeginDrag')
        timeOut && clearTimeout(timeOut)
        timeOut = setTimeout(()=>{
            scrollToIndex(e.nativeEvent.contentOffset.y);
        },10)
    }

    const onScrollEndDrag = (e)=>{
        scrollToIndex(e)
    }

    const scrollToIndex = (e) =>{
        let offSetY = Math.round(e / Props.itemHeight)
        scrollView.current.scrollTo({x:0,y:offSetY*Props.itemHeight,animated:true})
    }

    const onMomentumScrollBegin = ()=>{
        //console.log('onMomentumScrollBegin')
    }


    const onMomentumScrollEnd = ()=>{
        //console.log('onMomentumScrollEnd')
    }

    const paddingClass = () =>{
        let paddingClassHeight = (Props.wrapperHeight - Props.itemHeight) / 2
        let header = <View style={{height:paddingClassHeight, flex:1}}></View>;
        let footer = <View style={{height:paddingClassHeight, flex:1}}></View>;
        return {header, footer};
    }

    return (

    <View style={wrapperContainer}>
      <View style={highHightStyle}></View>
      <ScrollView
          style={styles.scrollView}
          ref={scrollView}
          bounces={false}
          showsVerticalScrollIndicator={false}
          onMomentumScrollBegin={onMomentumScrollBegin}
          onMomentumScrollEnd={onMomentumScrollEnd}
          onScrollBeginDrag={onScrollBeginDrag}
          onScrollEndDrag={onScrollEndDrag}
          horizontal={false}
          >
          {paddingClass().header}
          {renderList()}
          {paddingClass().footer}
      </ScrollView>
    </View>
    )
}
Picker.defaultProps = {
    borderTopColor:'blue',
    borderBottomColor:'blue',
    borderTopWidth:1,
    borderBottomWidth:1,
    highlightWidth:width,
}

const styles = StyleSheet.create({
    indicator: {

    },

    scrollView: {

    },
    pickItem:{
        height:50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedItemText: {

    }
});

export default Picker

