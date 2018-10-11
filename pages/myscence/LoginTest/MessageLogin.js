/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import {pWidth,pHeight,pSize} from "../../user/util";
import Dimensions from 'Dimensions';
let {width,height} = Dimensions.get('window');
import FontAwesome5 from 'react-native-vector-icons/FontAwesome'

export default class AccountLogin extends Component {
    render() {
        return (
                <View style={styles.container}>
                    <View style={styles.first}>
                        <FontAwesome5
                            style={styles.imageStyle}
                            name="sort-down"
                            size={15}
                            color={'#949494'}
                        />
                        <TextInput

                            style={styles.input}
                            autoCapitalize='none'  //设置首字母不自动大写
                            placeholderTextColor={'#dddddd'} //设置占位符的颜色
                            placeholder={'输入手机号'}  //设置占位符
                            keyboardType={'numeric'}         //设置为数字键盘
                            underlineColorAndroid={'#e4ebee'}
                        />
                    </View>
                    <TouchableOpacity>
                        <View style={styles.second}>
                            <Text style={styles.text}>获取验证码</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.third}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('GetBack',{type:'forget'})}>
                            <Text style={styles.text2}>忘记密码</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={()=>this.props.navigation.navigate('GetBack',{type:'new'})}
                        >
                            <Text style={styles.text2}>新用户注册</Text>
                        </TouchableOpacity>
                    </View>
                </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    first:{
        marginLeft: width*0.1,
        width:width*0.8,
        height:height*0.15,
        backgroundColor: '#F5FCFF',
        flexDirection:'row',
        alignItems: 'center',
        marginTop: height*0.04,
    },
    imageStyle:{
        width:pWidth(12),
        marginLeft:pWidth(13),
    },
    input:{
        width:width*0.6,
        height:pHeight(50),
        fontSize:18,
        color:'black',
        padding: 1,
        marginLeft:pWidth(50),
    },
    second:{
        width:width*0.85,
        height:pHeight(50),
        backgroundColor:'#ffdc26',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:6,
    },
    text:{              //黄色方框内字的设置
        fontSize: pSize(19),
        color:'black',
    },
    third:{
        flexDirection: 'row',
        justifyContent:'space-between',
        width:width*0.88,
        height:height*0.2,
        marginTop:pHeight(10),
    },
    text2:{
        fontSize:pSize(14),
    }

});
