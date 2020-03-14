import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View, Image, Dimensions, Text, InteractionManager, ScrollView} from 'react-native';
var {width,height} = Dimensions.get('window');

interface State {

}
interface Props {
    list:Array<string>,
}


function Picker(Props: Props, State: State) {
    const scrollView  = useRef(null);
    const [imgDistance, setImgD] = useState(0)

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
    const onScrollBeginDrag = ()=>{
        console.log('onScrollBeginDrag')
    }

    const onScrollEndDrag = ()=>{
        console.log('onScrollEndDrag')
    }

    const onMomentumScrollBegin = ()=>{
        console.log('onMomentumScrollBegin')
    }


    const onMomentumScrollEnd = ()=>{
        console.log('onMomentumScrollEnd')
    }
    return (
        <View style={styles.container}>
            <View style={styles.scrollViewWrapper}>
                <ScrollView
                    style={styles.scrollView}
                    ref={scrollView}
                    horizontal={false}
                    pagingEnabled={true}
                    showsVerticalScrollIndicator={true}
                    onMomentumScrollBegin={onMomentumScrollBegin}
                    onMomentumScrollEnd={onMomentumScrollEnd}
                    onScrollBeginDrag={onScrollBeginDrag}
                    onScrollEndDrag={onScrollEndDrag}
                >
                  {renderList()}
                </ScrollView>
            </View>
        </View>
    )
}
Picker.defaultProps = {

}

const styles = StyleSheet.create({
    container:{

    },
    scrollViewWrapper:{

    },
    scrollView:{
        borderColor:'black',
        borderWidth:1,
        marginTop: 100,
        height:200,
    },
    contentContainer:{
        flex:1,
    },
    pickWrapper:{
        borderColor:'black',
        borderBottomWidth:1,
        borderTopWidth:1,
        justifyContent:'center',
        alignItems:'center',
        width:200,
        paddingHorizontal:15,
        paddingVertical:10,
    },
    pickItem:{
        height:50,
        paddingVertical: 12,
        textAlign:'center',
        lineHeight:25,
        textAlignVertical:'center',
    }
});

export default Picker

