import React,{Component} from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    StatusBar
}from 'react-native';
import {pHeight,pWidth,pSize} from '../user/util';
export default class Mine extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    barStyle={'dark-content'}
                    backgroundColor={'white'}
                />
                    <View style={styles.One}>
                    <Image source={{uri:'http://ww1.sinaimg.cn/large/005T39qagy1fvj95i8actj30e80e8q57.jpg'}}
                           style={styles.Image}
                    />
                    <Text style={styles.textOne}>极简借贷  轻松解决燃眉之急</Text>
                    <Text style={styles.textTwo}>Version 1.0</Text>
                </View>
                <View style={styles.Two}>
                     <Text style={styles.TwoOne}>版权所有</Text>
                     <Text style={styles.TwoTwo}>Copyright @ 2017-2018 MML Rights Reserved</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
   container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center'
   },
   One:{
       justifyContent:'center',
       alignItems:'center',
       position:'absolute',
       top:pHeight(100)
   },
   Image:{
       borderRadius:10,
       width:pWidth(80),
       height:pHeight(80),
       marginTop:pHeight(20)
   },
    textOne:{
       fontSize:pSize(25),
        marginTop:pHeight(20)
    },
    textTwo:{
        marginTop:pHeight(20),
        fontSize:pSize(15)
    },
    Two:{
       position:'absolute',
        bottom:pHeight(10),
        justifyContent:'center',
        alignItems:'center'
    },
    TwoOne:{
       fontSize:pSize(15)
    },
    TwoTwo:{
        fontSize:pSize(15)
    }
});