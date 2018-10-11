import React,{Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    AsyncStorage,
    StyleSheet,
    Dimensions,
    StatusBar,
    TextInput,
    Image
}from 'react-native';
const {width,height} = Dimensions.get('window');
import {pSize,pHeight,pWidth} from '../user/util';
export default class SetCall extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={{uri:'http://ww1.sinaimg.cn/large/005T39qaly1fvxhzza6pjj302103hgld.jpg'}}
                       style={styles.Image}
                />
                <Text style={styles.text}>你的手机号：13594709069</Text>
                <TouchableOpacity>
                    <View style={styles.Touch}>
                        <Text style={{fontSize:pSize(25),color:'black'}}>修改手机号</Text>
                    </View>
                </TouchableOpacity>
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
   Image:{
       width:pWidth(80),
       height:pHeight(160),
       marginBottom:pHeight(10)
   },
   text:{
       marginTop:pHeight(10),
       marginBottom:pHeight(15),
       color:'black',
       fontSize:pSize(20)
   },
   Touch:{
       backgroundColor:'yellow',
       justifyContent:'center',
       alignItems:'center',
       borderRadius:10,
       width:pWidth(width-40),
       marginRight:pWidth(20),
       marginLeft:pWidth(20),
       height:pHeight(50)
   }
});