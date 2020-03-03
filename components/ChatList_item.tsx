import React from 'react'
import { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'

interface Item {
    img: any,
    name: string,
    time: string,
    conetnt: string
}
interface State {}
interface Props {
    item: Item
}

class ChatItem extends Component<Props, State> {
    render () {
        const { item } = this.props
        return (
            <View>
                <View style={styles.container}>
                    <Image source={item.img} style={styles.headerImg} />
                    <View style={styles.contentView}>
                        <View style={styles.topView}>
                            <Text style={styles.titleText}>{item.name}</Text>
                            <Text style={styles.timeText}>{item.time}</Text>
                        </View>
                        <Text style={styles.contentText}>{item.conetnt}</Text>
                    </View>
                </View>
                <View style={styles.spliteLine} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 15,
        flexDirection: 'row'
    },
    headerImg: {
        height: 80,
        width: 80
    },
    titleText: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        flex: 1
    },
    contentView: {
        flex: 1,
        paddingLeft: 10
    },
    topView: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 3
    },
    timeText: {
        fontSize: 14,
        color: '#b2b2b2'
    },
    contentText: {
        paddingBottom: 3,
        color: '#b2b2b2',
        fontSize: 16
    },
    spliteLine: {
        borderTopWidth: 0.5,
        borderTopColor: '#b2b2b2'
    }
})

export default ChatItem