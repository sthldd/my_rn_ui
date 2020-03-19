import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View, Dimensions, Text, TouchableOpacity,Image} from 'react-native';
var {width} = Dimensions.get('window');
interface State {

}
interface Props {
    thumbUrl?:string,
    nodeText?:string,
    itemText:string,
    rightIcon?:boolean,
    rightText?:string,
    onPress?:()=>void,
    extra?: React.ReactNode,
}

function Listitem(Props: Props, State: State){

    const leftRender = () =>{
        return(
            <View style={styles.itemLeftWrapper}>
                {
                    Props.thumbUrl ?(
                        <Image source={{uri:Props.thumbUrl}} style={styles.itemLeftIcon} />
                    ):null
                }
                <Text style={styles.itemTextStyle}>{Props.itemText}</Text>
                {
                    Props.nodeText?(
                        <Text
                            style={styles.nodeTextStyle}
                            numberOfLines={1}
                            ellipsizeMode='tail'
                        >{Props.nodeText}</Text>
                    ):null
                }
            </View>
        )
    }

    const rightRender = () =>{
        return(
            <View>
                {
                    Props.rightIcon ?(
                        <Image source={require('../static/img/right.png')} style={styles.rightIconStyle}/>
                    ):(
                        Props.rightText?(
                            <Text>{Props.rightText}</Text>
                        ):(
                            extra()
                        )
                    )
                }
            </View>
        )
    }

    const renderItem = () =>{
        return (
            <TouchableOpacity style={styles.listItemStyle} onPress={Props.onPress}>
                <View style={styles.itemWrapper}>
                    {leftRender()}
                    {rightRender()}
                </View>
            </TouchableOpacity>
        )
    }

    const extra = () => {
        let extraDom;
        if (Props.extra) {
            extraDom = (
                <View>
                    <Text >
                        {Props.extra}
                    </Text>
                </View>
            );
            if (React.isValidElement(Props.extra)) {
                const extraChildren = (Props.extra.props as any).children;
                if (Array.isArray(extraChildren)) {
                     const tempExtraDom: any[] = [];
                    extraChildren.forEach((el, index) => {
                        if (typeof el === 'string') {
                            tempExtraDom.push(
                                <Text
                                    key={`${index}-children`}
                                >
                                    {el}
                                </Text>,
                            );
                        } else {
                            tempExtraDom.push(el);
                        }
                    });
                    extraDom = (
                        <View >{tempExtraDom}</View>
                    );
                } else {
                    extraDom = Props.extra;
                }
            }
        }
        return extraDom
    }

    return (
        <View style={styles.wapperContainer}>
            {renderItem()}
        </View>
    )
}
Listitem.defaultProps = {
    rightIcon:false
}

const styles = StyleSheet.create({
    wapperContainer:{
        paddingVertical:5,
        paddingHorizontal:10,
    },
    listItemStyle:{
        borderBottomWidth: 1,
        borderBottomColor:'rgb(221, 221, 221)',
        paddingVertical:10,
    },
    itemWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    itemLeftWrapper:{
      flexDirection:'row',
      alignItems:'center',
    },
    itemLeftIcon:{
        height:30,
        width:30,
        marginRight:8,
    },
    itemTextStyle:{
        fontWeight:'bold',
    },
    nodeTextStyle:{
        color:'rgb(136, 136, 136)',
        fontSize:12,
        marginLeft:5,
        maxWidth:width / 1.9,
    },
    rightIconStyle:{
        height:30,
        width:30,
    }
});

export default Listitem

