import React, { Component } from 'react';
import {
    View,AsyncStorage,DeviceEventEmitter
}from 'react-native';
import MyScene1 from './MyScene';
import MyScene2 from './MyScene2';
export default class MySceneTest extends Component{
    constructor(props) {
        super(props);
        this.state = {
            Login:"not"
        };
    }
    componentDidMount(){
        AsyncStorage.getItem('UserLogin',(error,result)=>{
            if(result === 'is'){
                this.setState({Login:'is'})
            }
        });
        this.listener = DeviceEventEmitter.addListener("Login",(e)=>{
            this.setState({Login:e})
        })
    }
    componentWillUnmount() {
        // 移除监听
        this.listener.remove();
    }
    OnPress(){
        AsyncStorage.setItem('UserLogin',"not");
        this.setState({
            Login:"not"
        });
    }
    render(){
        if(this.state.Login === "not"){
            return(
                <View style={{flex:1}}>
                    <MyScene1 {...this.props}/>
                </View>
            );
        }else{
            alert("登录成功");
            return(
                <View style={{flex:1}}>
                    <MyScene2  OnPress={()=>this.OnPress()} {...this.props}/>
                </View>
            );
        }
    }
}