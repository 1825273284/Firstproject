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
    Image,
    TextInput,
    DeviceEventEmitter,
    TouchableOpacity, AsyncStorage, Alert
} from 'react-native';
import {pHeight, pSize, pWidth} from "../../user/util";
import Dimensions from 'Dimensions';
let {width,height} = Dimensions.get('window');

export default class RegisterScene extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            num1:'',
            num2:'',
        }
    }
    Jump(){
        const {params} = this.props.navigation.state;
        let name=this.state.name;
        let num1=this.state.num1;
        let num2=this.state.num2;
        if(name === ''){
            Alert.alert('提示', '请输入昵称', [{text:'确定',style:'cancel'}],);
        }else if(!num1 || !num2){
            Alert.alert('提示', '请输入密码', [{text:'确定',style:'cancel'}],);
        }else if(num1 !== num2){
            Alert.alert('提示', '两次密码不一致', [{text:'确定',style:'cancel'}],);
        }else{
            AsyncStorage.setItem('UserCall',params.call);
            AsyncStorage.setItem('UserName',name);
            AsyncStorage.setItem('UserCode',num1);
            DeviceEventEmitter.emit("user",{call:params.call,name:name});
            this.props.navigation.navigate('Login');
        }
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.img}>
                    <Image
                        style={styles.imageStyle3}
                        source={require('../../img/money.png')}
                    />
                </View>
                <View style={styles.inputStyle}>
                    <TextInput
                        ref="username"  //设置描述
                        style={styles.input}
                        underlineColorAndroid={'transparent'}
                        placeholderTextColor={'#4a4946'} //设置占位符的颜色
                        placeholder={'昵称'}  //设置占位符
                        onChangeText={(name)=>this.setState({name:name})}
                    />
                </View>
                <View style={styles.inputStyle}>
                    <TextInput
                        ref="username"  //设置描述
                        style={styles.input}
                        underlineColorAndroid={'transparent'}
                        placeholderTextColor={'#4a4946'} //设置占位符的颜色
                        placeholder={'密码'}  //设置占位符
                        keyboardType={'numeric'}         //设置为数字键盘
                        onChangeText={(num1)=>this.setState({num1:num1})}
                    />
                </View>
                <View style={styles.inputStyle}>
                    <TextInput
                        ref="username"  //设置描述
                        style={styles.input}
                        underlineColorAndroid={'transparent'}
                        placeholderTextColor={'#4a4946'} //设置占位符的颜色
                        placeholder={'确认密码'}  //设置占位符
                        keyboardType={'numeric'}         //设置为数字键盘
                        onChangeText={(num2)=>this.setState({num2:num2})}
                    />
                </View>
                <TouchableOpacity
                    onPress={this.Jump.bind(this)}
                >
                    <View style={styles.second}>
                        <Text style={styles.text}>完成</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.three}>
                    <Text style={styles.text2}>点击完成，表示你已同意</Text>
                    <TouchableOpacity>
                    <Text style={styles.text3}>《米米信用户协议》</Text>
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
    img:{                       //悬浮窗口中的图片
        width:height*0.12,
        height:height*0.12,
        borderRadius:height*0.06,  //设置圆边框，值为半径
        backgroundColor:'#ffdc26',
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
       marginTop: -pHeight(80),
        marginBottom: pHeight(70),
    },
    imageStyle3:{
        width:height*0.09,
        height:height*0.09,
    },
    input:{
        width:width,
        height:height*0.08,

    },
    inputStyle:{
        width:width,
        height:height*0.08,
        backgroundColor: 'white',
        marginBottom: pHeight(3),
    },
    second:{
        width:width*0.85,
        height:pHeight(50),
        backgroundColor:'#ffdc26',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:6,
        marginTop: pHeight(30),
    },
    text:{              //黄色方框内字的设置
        fontSize: pSize(19),
        color:'black',
    },
    three:{
        flexDirection: 'row',
        width:width*0.85,
        marginTop:pHeight(6),
        justifyContent:'center',
    },
    text2:{
      fontSize: pSize(16),
      color:'#4a4946',
        marginLeft: pWidth(3),
    },
    text3:{
        fontSize: pSize(16),
        color:'#1f61e8',
    }
});


