import React, { useEffect, useState} from 'react';
import { StyleSheet, View, Image, Dimensions,Text} from 'react-native';
var {height} = Dimensions.get('window');

interface State {
    loaded:false
}
interface Props {
    placeholderImgWidth:number,
    placeholderImgHeight:number,
    placeholder?:string,
    url:string,
    distance:number,
    imageStyle:React.CSSProperties,
}


function LazyLoad(Props: Props, State: State) {
    const [imgDistance, setImgD] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const _onLayout = (e) => {
        let {y} = e.nativeEvent.layout
        setImgD(y)
    }

    useEffect(()=>{

    },[loaded])

    const loadText = (text:string) => {
        return(
            <View
                style = {styles.loadContainer}
                onLayout = {_onLayout}
            >
            <Text style = {styles.loadText}>{text}</Text>
            </View>
        )
    }

    const fetchImg = ()=>{
        fetch('https://www.fastmock.site/mock/c33f3eadd13fb8e065ecb81c43e1c573/list/image')
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                // 网络请求失败，处理错误信息
            });
    }

    return (
        (height+ Props.distance>=imgDistance)&&!loaded?(
            fetchImg()
        ):(
            loaded?(
                <View  onLayout={_onLayout}>
                    <Image source={{uri:Props.url}} style={Props.imageStyle || styles.imageStyle}/>
                </View>
            ):(
                loadText('加载中')
            )
        )
    )
}
LazyLoad.defaultProps = {
    placeholderImgWidth:400,
    placeholderImgHeight:200,
    placeholder:'placeholder'
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 360,
        height: 260,
        resizeMode:'cover',
        borderRadius: 30,
    },
    loadContainer: {
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        marginVertical: 10
    },
    // 加载样式
    loadText: {
        fontSize: 20,
        color: '#ccc'
    }
});

export default LazyLoad

    // `http://placehold.it/${Props.placeholderImgWidth}x${Props.placeholderImgHeight}/?text=${Props.placeholder}`