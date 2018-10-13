/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    StatusBar
} from 'react-native';


import Message from './MessageLogin';
import Account from './AccountLogin';
import ScrollableTabView,{DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';
import ETabBar from './ETabBar'
import {pWidth,pHeight,pSize} from "../../user/util";
import Dimensions from 'Dimensions';

let {width,height} = Dimensions.get('window');

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            tabNames:['账号登录','短信登录'],
        }
    }
    render() {
        let tabNames = this.state.tabNames;
        let tabIconNames=this.state.tabIconNames;

        return (
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    barStyle={'dark-content'}
                    backgroundColor={'white'}
                />
                <View style={styles.img}>
                    <Image
                        style={styles.imageStyle3}
                        source={require('../../img/message.png')}
                    />
                </View>

                <View style={styles.jump}>
                    <ScrollableTabView
                        initialPage={1}
                        renderTabBar={()=><ETabBar tabNames={tabNames}/>}
                        // tabBarPosition="bottom"
                        locked={true}
                    >
                        <Account tabLabel="account" {...this.props}/>
                        <Message tabLabel="message" {...this.props}/>
                    </ScrollableTabView>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    img:{                       //悬浮窗口中的图片
        width:height*0.12,
        height:height*0.12,
        borderRadius:height*0.06,  //设置圆边框，值为半径
        backgroundColor:'#ffdc26',
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: pHeight(30),
    },
    imageStyle3:{
        width:height*0.09,
        height:height*0.09,
    },
    jump:{
        width:width*0.95,
        height:height*0.48,
        backgroundColor:'#F5FCFF',
        marginTop: pHeight(20),
    },
    itemLayout:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    tabStyle:{
        flexDirection: 'row',
        justifyContent:'space-around',
        width:width*0.95,
        height:height*0.06,
    },
    textStyle:{
        color:'black',
        fontSize:pSize(17),
    },
});


