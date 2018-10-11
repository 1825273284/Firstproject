import React, {Component} from 'react';
import {View, Image} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation';
import {pHeight, pWidth, pSize} from '../../user/util'
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";


const SecondTabStack = createBottomTabNavigator({
    One: {
        screen: One,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: "新口子",
            tabBarIcon: ({tintColor, focused}) => {
                return (<Image
                    source={focused ? require('../img/ativeXinkouzi.png') : require('../img/xinkouzi.png')}
                    style={{height: pHeight(30), width: pWidth(30)}}
                />)
            },
        }),
    },
    Two: {
        screen: Two,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: "黑户专区",
            tabBarIcon: ({tintColor, focused}) => {
                return (<Image
                    source={focused ? require('../img/heihuzhuanqu/activeHeihu.png') : require('../img/heihuzhuanqu/heihu.png')}
                    style={{height: pHeight(32), width: pWidth(32)}}
                />)
            },
        }),
    },
    Three: {
        screen: Three,
        navigationOptions: {
            tabBarLabel: "长周期",
            tabBarIcon: ({tintColor, focused}) => {
                return (<Image
                    source={focused ? require('../img/changzhouqi/activeChangzh.png') : require('../img/changzhouqi/changzhouqi.png')}
                    style={{height: pHeight(30), width: pWidth(30)}}
                />)
            },
        }
    },
    Four: {
        screen: Four,
        navigationOptions: {
            tabBarLabel: "高额度",
            tabBarIcon: ({tintColor, focused}) => {
                return (<Image
                    source={focused ? require('../img/gaoedu/activeGaoedu.png') : require('../img/gaoedu/gaoedu.png')}
                    style={{height: pHeight(30), width: pWidth(30)}}
                />)
            },
        }
    },
    Five: {
        screen: Five,
        navigationOptions: {
            tabBarLabel: "低利率",
            tabBarIcon: ({tintColor, focused}) => {
                return (<Image
                    source={focused ? require('../img/dililu/activeDililv.png') : require('../img/dililu/dililv.png')}
                    style={{height: pHeight(30), width: pWidth(30)}}
                />)
            },
        }
    }
}, {
    initialRouteName:{},
    tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: "#95999d"
    },

});


export default SecondTabStack;

