import React, { useEffect, useState,useRef } from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Dimensions,Modal } from 'react-native';
var { width ,height} = Dimensions.get('window');

interface State {

}
interface Props {
    overlay:JSX.Element,
    isVisible:boolean
}


function  Popover(Props: Props, State: State) {

    const close = () =>{
        console.log('关闭了')
    }
    return(
        <Modal
            visible={Props.isVisible}
            animationType="slide"
            transparent={true}
        >
            <TouchableOpacity style={styles.modalContentWrapper} onPress={close}>
                <Text style={{ color: 'white' }}> 下一页</Text>
            </TouchableOpacity>
        </Modal>
    )
}

Popover.defaultProps = {

}

const styles = StyleSheet.create({
    modalContentWrapper:{
        borderWidth:2,
        borderColor:'red',
        backgroundColor: '#00000080',
    }
});

export default Popover