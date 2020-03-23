import React, { useEffect, useState,useRef } from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Dimensions,Modal,TouchableWithoutFeedback,findNodeHandle,UIManager } from 'react-native';
var { width ,height} = Dimensions.get('window');
import * as Animatable from 'react-native-animatable';
interface State {

}
interface Props {
    overlay:JSX.Element,
    isVisible:boolean,
    popoverContent:JSX.Element,
    buttonContent:JSX.Element,
}

console.log()
function  Popover(Props: Props, State: State) {
    const [isVisible,setIsVisible] = useState(false)
    const [singleDown,setSingleDown] = useState(false)
    const [toggleContent,setToggleContent] = useState(false)
    const [modalViewHeight,setModalViewHeight] = useState(0)
    const [popoverComponentXY,setPopoverComponentXY] = useState<any>([])
    const [popoverComponentWH,setPopoverComponentWH] = useState<any>([])
    const [buttonContentXY,setButtonContentXY] = useState<any>([])
    const [buttonContentWH,setButtonContentWH] = useState<any>([])
    const [bottomVal,setBottomVal] = useState<any>(0)
    const wrapperRef = useRef<any>()
    const modalRef = useRef<any>()
    const view = useRef<any>()
    const open = async () =>{
        setToggleContent(true)
        setIsVisible(true)
        let popoverComponentXY = await getElementWeightAndHeight(wrapperRef.current)
        let buttonContentXY = await getElementWeightAndHeight(modalRef.current)
        let views = await getElementWeightAndHeight(view.current)

        //设置popover的xy和宽高
        setPopoverComponentWH([popoverComponentXY[2],popoverComponentXY[3]])
        setPopoverComponentXY(popoverComponentXY)

        //设置button的xy和宽高
        setButtonContentXY(buttonContentXY)
        setPopoverComponentWH([buttonContentXY[2],buttonContentXY[3]])
        if((popoverComponentXY[1] - modalViewHeight) < height / 2  ){
            console.log('pop在下面')
            setSingleDown(true)
        }
    }

    const getElementWeightAndHeight = (element:object) =>{
        const handle = findNodeHandle(element)
        return new Promise((resolve, reject)=>{
            UIManager.measure(handle,(x, y, width, height, pageX, pageY)=>{
                // console.log('open开始--------------');
                // console.log('距离屏幕的绝对位置x:', pageX);
                // console.log('距离屏幕的绝对位置y:', pageY);
                // console.log('自己的宽度:', width);
                // console.log('自己的高度:', height);
                // console.log('open结束--------------');
                resolve([pageX,pageY,width,height])
            })

        })
    }


    const onClose = () =>{

    }
    const onOpen = () =>{

    }

    const close = () =>{
        setToggleContent(false)
        if(!toggleContent){
            return
        }
        setIsVisible(false)
    }
    const onLayout = (e) =>{
        setModalViewHeight(e.nativeEvent.layout.height)
    }

    const renderPopoverContent = () =>{
        return(
            <View  style={styles.modalContent}>
                {Props.popoverContent}
            </View>
        )
    }

    return(
        <TouchableOpacity
            ref={wrapperRef}
            onPress={open}
            activeOpacity={1}
        >
            {
                !toggleContent?(
                    <View >
                        {Props.buttonContent}
                    </View>
                ):null
            }

                <Modal
                    visible={isVisible}
                    animationType="none"
                    transparent
                    onDismiss={onClose}
                    onRequestClose={onClose}
                >
                    <TouchableOpacity   activeOpacity={1} ref={modalRef} onPress={close} style={[
                        styles.modalContentWrapper,
                    ]}>
                        {
                            toggleContent?(
                                <View style={{position:'relative',top:popoverComponentXY[1]}}>
                                    {Props.buttonContent}
                                </View>
                            ):null
                        }
                        <View
                            ref={view}
                            onLayout = {(event)=>onLayout(event)}
                            style={{
                            position:'relative',
                            top:popoverComponentXY[1],
                            left:20,
                        }}>
                            {
                                !singleDown?null:(
                                    <View  style={[styles.modalContentSingle,styles.modalContentTopSingle]} />

                                )
                            }
                            {renderPopoverContent()}
                            {
                                singleDown?null:(
                                    <View  style={[styles.modalContentSingle,styles.modalContentBottomSingle,{
                                    }]} />
                                )
                            }
                        </View>
                    </TouchableOpacity>
                </Modal>
        </TouchableOpacity>

    )
}

Popover.defaultProps = {

}

const styles = StyleSheet.create({
    modalContentWrapper:{
        flex: 1,
        backgroundColor: '#00000080',
    },
    modalContent:{
        backgroundColor:'#000',
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:8,
        alignSelf:'flex-start',
    },
    modalContentSingle:{
        width: 10,
        height: 10,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 10,
        borderLeftWidth: 10,
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
        marginLeft:20,
    },
    modalContentTopSingle:{
        borderBottomColor: '#000',
        borderTopWidth: 0,
        borderBottomWidth: 10,
        marginTop: 1,
    },
    modalContentBottomSingle:{
        borderTopColor: '#000',
        borderTopWidth: 10,
        borderBottomWidth: 0,
    }
});

export default Popover