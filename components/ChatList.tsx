import React from 'react'
import { Component } from 'react'
import {
    ScrollView,
    Platform
} from 'react-native'
import ChatItem from './chat_item'

interface State {}
interface Props {}

interface Item {
    img: Object,
    name: string,
    time: string,
    conetnt: string
}

const DATAS: Item[] = [
    {
        img: require('../assets/1.jpeg'),
        name: '高春',
        time: '10:43',
        conetnt: '你好啊,你好啊'
    },
    {
        img: require('../assets/2.jpeg'),
        name: '小花',
        time: '10:44',
        conetnt: '你好坏,你好啊'
    },
    {
        img: require('../assets/3.jpeg'),
        name: '小明',
        time: '12:43',
        conetnt: '你好傻,fdf,你好啊'
    },
    {
        img: require('../assets/1.jpeg'),
        name: '小李',
        time: '11:43',
        conetnt: '你好萌'
    },
    {
        img: require('../assets/2.jpeg'),
        name: '小清',
        time: '09:43',
        conetnt: '你好2'
    },
    {
        img: require('../assets/2.jpeg'),
        name: '小清',
        time: '09:43',
        conetnt: '你好2'
    },
    {
        img: require('../assets/2.jpeg'),
        name: '小清',
        time: '09:43',
        conetnt: '你好2'
    },
    {
        img: require('../assets/2.jpeg'),
        name: '小清',
        time: '09:43',
        conetnt: '你好2'
    },
    {
        img: require('../assets/2.jpeg'),
        name: '小清',
        time: '09:43',
        conetnt: '你好2'
    },
    {
        img: require('../assets/2.jpeg'),
        name: '小清',
        time: '09:43',
        conetnt: '你好2'
    },
    {
        img: require('../assets/2.jpeg'),
        name: '小清',
        time: '09:43',
        conetnt: '你好2'
    },
    {
        img: require('../assets/2.jpeg'),
        name: '小清',
        time: '09:43',
        conetnt: '你好2你好2你好2你好2'
    },
]

class ChatList extends Component<Props, State> {
    constructor (props: Props) {
        super(props);
    }
    render () {
        return (
            <ScrollView style={{marginTop: Platform.OS === 'ios' ? 24 : 0}}>
                { DATAS.map((item, index) => {
                    return <ChatItem item={item} key={index} />
                }) }
            </ScrollView>
        )
    }
}

export default ChatList