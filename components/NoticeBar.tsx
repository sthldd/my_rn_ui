import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View, Dimensions, Text, TouchableOpacity,Image,Animated} from 'react-native';
var {width} = Dimensions.get('window');
interface State {

}
interface Props {
    mode?:'link' | 'close' | undefined,
    onPress:() => void,
    action:JSX.Element,
    content:string
}

function NoticeBar(Props: Props, State: State) {
    const [imgList,setImgList] = useState(
        [require('../static/img/closable.png'),require('../static/img/link.png')]
    )
    const [isVisible,setIsVisible] = useState(true)

    const closeNotice = () =>{
        setIsVisible(false)
    }

    const rightIcon = () =>{
        return(
            Props.mode === 'close'?(
                <TouchableOpacity onPress={closeNotice}>
                    <Image source={imgList[0]} style={styles.closeIcon}/>
                </TouchableOpacity>
                ):(
                <Image source={imgList[1]} style={styles.closeIcon}/>
            )
        )
    }

    const noticeText = () =>{
        return (
            <Text style={styles.noticeTextStyle}
                  numberOfLines={1}
                  ellipsizeMode='tail'
                  onPress={Props.onPress}
            >{Props.content}</Text>
        )
    }

    return (
        isVisible?(
            <View style={styles.wapperContainer}>
                <Image source={require('../static/img/notice.png')} style={styles.noticeIcon}/>
                {noticeText()}
                {
                    Props.mode ?(
                        Props.mode !== '' && rightIcon()
                    ):(
                        Props.action ?(
                            Props.action
                        ):null
                    )

                }
            </View>
        ):null
    )
}
NoticeBar.defaultProps = {
    content:''
}

const styles = StyleSheet.create({
    wapperContainer:{
        backgroundColor:'rgb(255, 250, 218)',
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:8,
        paddingHorizontal:5
    },
    noticeIcon:{
        width:30,
        height:30
    },
    noticeTextStyle:{
      color:'rgb(244, 51, 60)',
      flexGrow:1,
      marginLeft:5,
      fontWeight:'bold',
      width:150,
    },
    closeIcon:{
        width:30,
        height:30,
    }
});

export default NoticeBar

