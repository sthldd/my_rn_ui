import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {
    Image,
    Text,
    View,
    Modal,
    StyleSheet,
    Dimensions,
} from 'react-native'
const {height} = Dimensions.get('window');

interface Props {
    showSuccess: boolean,
    showFail: boolean,
    showLoading: boolean,
    showWarn:boolean,
    message:string,
    destroy:()=>void
}
function ToastContainer(Props){
    useEffect(()=>{
        setTimeout(() => {
            Props.destroy();
        }, 2000);
    })
    return (
        <Modal
            animationType={'fade'}
            transparent
            visible
        >
            <View style = {Props.showSuccess || Props.showFail || Props.showLoading || Props.showWarn ? styles.defaultStyle:styles.containerTextStyle}>
                <View style = {styles.containerStyle}>
                    {   Props.showSuccess ? <Image  style = {styles.imageStyle} source={require('../static/img/error.png')} /> :
                        Props.showFail ? <Image style = {styles.imageStyle} source={require('../static/img/error.png')} /> :
                        Props.showLoading ? <Image style = {styles.imageStyle} source={require('../static/img/error.png')} /> :
                        Props.showWarn ? <Image style = {styles.imageStyle} source={require('../static/img/error.png')} /> :null
                    }
                    {
                        Props.showInfo ? <Text style = {styles.textStyle}>{Props.message}</Text> : null
                    }
                </View>
            </View>
        </Modal>
    );
}

export default ToastContainer
let styles = StyleSheet.create({
    defaultStyle: {
        marginTop:height * 0.25,
        alignItems: 'center',
        flex:1
    },
    containerStyle: {
        backgroundColor: '#000',
        opacity: 0.8,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerTextStyle: {

        marginBottom:50,
        alignItems: 'center',
        justifyContent:'flex-end',
        flex:1
    },
    shadowStyle: {
        shadowColor: '#000',
        shadowOffset: {
            width: 4,
            height: 4
        },
        shadowOpacity: 0.8,
        shadowRadius: 6,
        elevation: 10
    },
    textStyle: {
        padding:10,
        fontSize: 16,
        color: '#fff',
        textAlign: 'center'
    },
    imageStyle: {
        marginTop:10,
        marginLeft:20,
        marginRight:20
    }
});