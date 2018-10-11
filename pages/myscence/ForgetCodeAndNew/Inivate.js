/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,

} from 'react-native';

import {pWidth,pHeight,pSize} from "../../user/util";
import Dimensions from 'Dimensions';
let {width,height} = Dimensions.get('window');

export default class Inivate extends Component {
    render() {
        const {params} = this.props.navigation.state;
        return (

            <View style={styles.container}>
                    <View style={styles.inputStyle}>
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid={'transparent'}
                            placeholderTextColor={'#dddddd'}
                            placeholder={'输入邀请码'}
                            keyboardType={'numeric'}
                        />
                    </View>
                <View style={styles.txt}>
                <Text style={styles.text2}>在好友分享链接找到他的邀请码</Text>
                </View>
                <View style={styles.touch}>
                <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('RegisterScene',{call:params.call})}
                >
                    <View style={styles.second}>
                        <Text style={styles.text}>跳过</Text>
                    </View>
                </TouchableOpacity>
                 <TouchableOpacity>
                    <View style={styles.second}>
                        <Text style={styles.text}>确认</Text>
                    </View>
                </TouchableOpacity>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e4ebee',
    },
    input:{
        width:width,
        height:height*0.08,
    },
    inputStyle:{
        width:width,
        height:height*0.08,
        marginTop: height*0.1,
        backgroundColor: 'white',
    },
    second:{
        width:width*0.4,
        height:pHeight(50),
        backgroundColor:'#ffdc26',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:6,
        marginBottom: height*0.55
    },
    text:{              //黄色方框内字的设置
        fontSize: pSize(19),
        color:'black',
    },
    text2:{
        fontSize:pSize(17),

    },
    txt:{
        marginRight: pWidth(120),
        marginTop: pHeight(10)
    },
    touch:{
        width:width,
        height:pHeight(50),
        flexDirection: 'row',
        justifyContent:'space-around',
        marginTop: pHeight(40)
    }
});

