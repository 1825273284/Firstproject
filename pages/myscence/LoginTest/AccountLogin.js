/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Picker,
    AsyncStorage,
    DeviceEventEmitter, Alert
} from 'react-native';

import {pWidth,pHeight,pSize} from "../../user/util";
import Dimensions from 'Dimensions';
let {width,height} = Dimensions.get('window');
import FontAwesome5 from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo';

export default class MessageLogin extends Component {
    constructor(props){
        super(props);
        this.state={
            call:' ',
            code:' ',
            GetCode:'',
            GetCall:''
        }
    }
    Login=async()=>{
        // AsyncStorage.getItem('UserCode',(error,result)=>{
        //     if(!error)
        //         this.setState({GetCode:result});
        // });
        let call = this.state.call;
        if(call){
            if(this.state.code){
                await storage.load({
                    key: call,
                    // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
                    autoSync: true,

                    // syncInBackground(默认为true)意味着如果数据过期，
                    // 在调用sync方法的同时先返回已经过期的数据。
                    // 设置为false的话，则等待sync方法提供的最新数据(当然会需要更多时间)。
                    syncInBackground: true,

                    // 你还可以给sync方法传递额外的参数
                    syncParams: {
                        extraFetchOptions: {
                            // 各种参数
                        },
                        someFlag: true,
                    },
                }).then(ret => {
                    // 如果找到数据，则在then方法中返回
                    // 注意：这是异步返回的结果（不了解异步请自行搜索学习）
                    // 你只能在then这个方法内继续处理ret数据
                    // 而不能在then以外处理
                    // 也没有办法“变成”同步返回
                    // 你也可以使用“看似”同步的async/await语法
                    this.setState({
                        GetCode:ret.code,
                    })
                }).catch(err => {
                    //如果没有找到数据且没有sync方法，
                    //或者有其他异常，则在catch中返回
                    console.warn(err.message);
                    switch (err.name) {
                        case 'NotFoundError':
                            // TODO;
                            break;
                        case 'ExpiredError':
                            break;
                    }
                });
                alert("1."+this.state.GetCode+"2."+this.state.code);
                if(this.state.GetCode === this.state.code){
                    AsyncStorage.setItem("UserLogin","is");
                    AsyncStorage.setItem("Call",call);
                    console.log(call);
                    DeviceEventEmitter.emit("Login",{call:call,login:'is'});
                    this.props.navigation.navigate('TabTest');
                }else{
                    Alert.alert(
                        '提示',
                        '密码不正确',
                        [
                            {text:'确定',style:'cancel'}
                        ],
                        { cancelable: false }
                    );
                }
            }else{
                Alert.alert(
                    '提示',
                    '请输入密码',
                    [
                        {text:'确定',style:'cancel'}
                    ],
                    { cancelable: false }
                );
            }
        }else{
            Alert.alert(
                '提示',
                '请输入手机号',
                [
                    {text:'确定',style:'cancel'}
                ],
                { cancelable: false }
            );
        }

    };
    render() {
        return (
                <View style={styles.container}>
                    <View style={styles.one}>
                        <View style={styles.first}>
                            <FontAwesome5
                                style={styles.imageStyle}
                                name="sort-down"
                                size={15}
                                color={'#949494'}
                            />
                            <TextInput
                                //ref="textInput"  //设置描述
                                style={styles.input}
                                autoCapitalize='none'  //设置首字母不自动大写
                                placeholderTextColor={'#dddddd'} //设置占位符的颜色
                                placeholder={'输入手机号'}  //设置占位符
                                // onBlur={this._reset.bind(this)}
                                // onFocus={this._onFocus.bind(this, 'textInput')}
                                keyboardType={'numeric'}         //设置为数字键盘
                                underlineColorAndroid={'#e4ebee'}
                                onChangeText={(call)=>this.setState({call:call})}
                            />
                        </View>
                        <View style={styles.first2}>
                            <Text style={styles.text3}>密码</Text>
                            <TextInput
                                //ref="textInput2"  //设置描述
                                style={styles.input2}
                                autoCapitalize='none'  //设置首字母不自动大写
                                placeholderTextColor={'#dddddd'} //设置占位符的颜色
                                placeholder={'输入密码'}  //设置占位符
                                // onBlur={this._reset.bind(this)}
                                // onFocus={this._onFocus.bind(this, 'textInput2')}
                                keyboardType={'numeric'}         //设置为数字键盘
                                underlineColorAndroid={'#e4ebee'}
                                secureTextEntry={true} //设置密码框
                                onChangeText={(code)=>this.setState({code:code})}
                            />
                        </View>
                    </View>

                    <TouchableOpacity onPress={this.Login.bind(this)}>
                        <View style={styles.second}>
                            <Text style={styles.text}>登录</Text>
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
    one:{
        height:height*0.25,
        marginTop: pHeight(100),
    },
    first:{
        marginLeft: width*0.1,
        width:width*0.8,
        height:height*0.12,
        flexDirection:'row',
        alignItems: 'center',
        marginTop: height*0.008,
    },
    first2:{
        marginLeft: width*0.1,
        width:width*0.8,
        height:height*0.08,
        flexDirection:'row',
        alignItems: 'center',
        marginBottom: pHeight(30),
    },
    imageStyle:{
        width:pWidth(12),
        marginLeft:pWidth(13),
    },
    input:{
        width:width*0.6,
        height:pHeight(60),
        fontSize:18,
        color:'black',
        padding: 1,
        marginLeft:pWidth(50),
    },
    input2:{                //密码的输入框
        width:width*0.58,
        height:pHeight(60),
        fontSize:18,
        color:'black',
        padding: 1,
        marginLeft:pWidth(55),
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
    },
    text3:{
        fontSize:pSize(10),
    }


});




