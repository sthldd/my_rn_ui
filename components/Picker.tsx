import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View, Dimensions, Text, ScrollView, PixelRatio} from 'react-native';
var {width,height} = Dimensions.get('window');
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
    selectIndex:number,
    renderItem():React.ReactElement<any>,
    onChange():React.ReactElement<any>,
}


function Picker(Props: Props, State: State) {
    const scrollView  = useRef(null);
    const [dragStart,setDragStart]  = useState(true);
    const [momentumStart,setMomentumStart] = useState(true);
    const [wrapperContainer, setWrapperContainer] = useState({
        borderWidth:1,
        borderColor:'red',
        height:Props.wrapperHeight,
        backgroundColor:Props.wrapperBackgroundColor,
        overflow:'hidden',
    })

    const [highHightStyle,setHighHightStyle] = useState({
        position:'absolute',
        height:Props.itemHeight,
        width:Props.highlightWidth,
        borderTopColor:'blue',
        borderBottomColor:'blue',
        borderTopWidth:StyleSheet.hairlineWidth,
        borderBottomWidth:StyleSheet.hairlineWidth,
    })



    useEffect(()=>{
        scrollDefaultIndex()
    })

    const scrollDefaultIndex = () =>{
        setTimeout(()=>{
            scrollView.current.scrollTo({x:0,y:Props.selectIndex*Props.itemHeight,animated:true})
        })
    }

    const renderList = (item,index) => {
        if(Props.renderItem){
             return Props.renderItem(item,index)
        }
        return(
            <View style={styles.pickItem} key={index}>
                <Text>{item}</Text>
            </View>
        )
    }

    let timeOut:any
    const onScrollBeginDrag = (e)=>{
        timeOut && clearTimeout(timeOut)
    }

    const onScrollEndDrag = (e)=>{
        setDragStart(false)
        let _e = {
            nativeEvent:{
                contentOffset:{
                    y: e.nativeEvent.contentOffset.y,
                },
            },
        };
        timeOut && clearTimeout(timeOut)
        timeOut = setTimeout(()=>{
            if(!dragStart && !momentumStart){
                scrollToIndex(_e);
            }
        },10)
    }

    const scrollToIndex = (e) =>{
        let y = 0
        if(e.nativeEvent.contentOffset){
            y = e.nativeEvent.contentOffset.y
        }
        let offSetY = Math.round(y / Props.itemHeight)
        scrollView.current.scrollTo({x:0,y:offSetY*Props.itemHeight,animated:true})

        if(Props.onChange){
            let selectIndexValue = Props.list[offSetY]
            Props.onChange(selectIndexValue,offSetY)
        }
    }

    const onMomentumScrollBegin = ()=>{
        timeOut && clearTimeout(timeOut)
    }


    const onMomentumScrollEnd = (e)=>{
        setMomentumStart(false)
        if(!momentumStart && !dragStart){
            scrollToIndex(e);
        }
    }

    const paddingClass = () =>{
        let paddingClassHeight = (Props.wrapperHeight - Props.itemHeight) / 2
        let header = <View style={{height:paddingClassHeight, flex:1}}></View>;
        let footer = <View style={{height:paddingClassHeight, flex:1}}></View>;
        return {header, footer};
    }

    return (

    <View style={wrapperContainer}>
      <View style={[highHightStyle,{top:(Props.wrapperHeight - Props.itemHeight) / 2}]}></View>
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
          {
              Props.list.map((item,index)=>renderList(item,index))
          }
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
    wrapperBackgroundColor:'#fafafa',
}

const styles = StyleSheet.create({
    pickItem:{
        height:50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedItemText: {

    }
});

export default Picker

