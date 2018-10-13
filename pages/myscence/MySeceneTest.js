import React, { Component } from 'react';
import {
    View,AsyncStorage,DeviceEventEmitter
}from 'react-native';
import MyScene1 from './MyScene';
import MyScene2 from './MyScene2';
export default class MySceneTest extends Component{
    constructor(props) {
        super(props);
        this.call = '默认值';
        this.state = {
            Login:"not",
            call:'默认值'
        };
    }
    componentWillMount(){
        AsyncStorage.getItem('UserLogin',(error,result)=>{
            if(result === 'is'){
                this.setState({Login:'is'})
            }
        });
        // AsyncStorage.getItem('Call',(error,result)=>{
        //      // this.setState({
        //      //     call:result
        //      // })
        //     this.call=result;
        // });
        this.listener = DeviceEventEmitter.addListener("Login",(e)=>{
            this.setState({Login:e.login,call:e.call})
        })
    }
    componentWillUnmount() {
        // 移除监听
        this.listener.remove();
    }
    OnPress(){
        AsyncStorage.setItem('UserLogin',"not");
        AsyncStorage.setItem('Call'," ");
        this.setState({
            Login:"not"
        });
    }
    render(){

        // AsyncStorage.getItem('Call',(error,result)=>{
        //     // this.setState({
        //     //     call:result
        //     // })
        //     this.setState({
        //         call:result
        //     });
        // });
        if(this.state.Login === "not"){
            return(
                <View style={{flex:1}}>
                    <MyScene1 {...this.props}/>
                </View>
            );
        }else{
            return(
                    <MyScene2  OnPress={()=>this.OnPress()} call={this.state.call} {...this.props}/>
            );
        }
    }
}