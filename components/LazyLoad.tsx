import React, { useEffect, useState} from 'react';
import { StyleSheet, View, Image, Dimensions,} from 'react-native';
var {height} = Dimensions.get('window');


interface State {
    placeholderImgWidth:400,
    placeholderImgHeight:200,
    placeholder:'placeholder'
}
interface Props {
    placeholderImgWidth:number,
    placeholderImgHeight:number,
    placeholder:string,
    url:string,
    distance:number,
    imageStyle:React.CSSProperties,
}


function LazyLoad(Props: Props, State: State) {
    const [imgDistance, setImgD] = useState(0)
    const _onLayout = (e) => {
        let {y} = e.nativeEvent.layout
        setImgD(y)
    }
    return (
        <View  onLayout={_onLayout}>
         <Image source={{uri: height+ Props.distance>=imgDistance?Props.url:`http://placehold.it/${Props.placeholderImgWidth}x${Props.placeholderImgHeight}/?text=${Props.placeholder}`}} style={Props.imageStyle || styles.imageStyle}/>
        </View>
    )
}


const styles = StyleSheet.create({
    imageStyle: {
        width: 360,
        height: 260,
        resizeMode:'cover',
        borderRadius: 30,
    }
});

export default LazyLoad