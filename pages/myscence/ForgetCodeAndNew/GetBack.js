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
    TouchableOpacity, Alert,

} from 'react-native';

import {pWidth,pHeight,pSize} from "../../user/util";
import Dimensions from 'Dimensions';
let {width,height} = Dimensions.get('window');

export default class GetBack extends Component {

    constructor(props){
        super(props);
        this.state={
            text:''
        }
    }
    Jump(){
        let num=this.state.text;
        let {params} = this.props.navigation.state;
        let type = params.type;
        if(!num){
            Alert.alert(
                '提示',
                '请输入手机号码',
                [
                    {text:'确定',style:'cancel'}
                ],
            );
        }else{
            this.props.navigation.navigate('JD',{text:num,type:type})
        }
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputStyle}>
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid={'transparent'}
                        placeholderTextColor={'#dddddd'} //设置占位符的颜色
                        placeholder={'手机号'}  //设置占位符
                        keyboardType={'numeric'}         //设置为数字键盘
                        onChangeText={(text)=>this.setState({text:text})}
                    />
                </View>
                <View style={styles.touch}>
                    <TouchableOpacity
                        onPress={this.Jump.bind(this)}
                    >
                        <View style={styles.second}>
                            <Text style={styles.text}>获取验证码</Text>
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
        marginLeft: pWidth(40),
    },
    inputStyle:{
        width:width,
        height:height*0.08,
        marginTop: height*0.1,
        backgroundColor: 'white',
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
    touch:{
        width:width,
        height:pHeight(50),
        justifyContent:'center',
        alignItems:'center',
        marginTop: pHeight(40),
    }
});

