import React,{Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    AsyncStorage,
    StyleSheet,
    Dimensions,
    StatusBar
}from 'react-native';
const {width,height} = Dimensions.get('window');
import {pSize,pHeight,pWidth} from '../user/util';
export default class WeiXin extends Component{
     render(){
         return(
             <View style={styles.container}>
                 <StatusBar
                     animated={true}
                     barStyle={'dark-content'}
                     backgroundColor={'white'}
                 />
                 <View style={styles.ViewStyle}>
                     <Image
                         source={require('../img/WeiXin.jpg')}
                         style={styles.Image}
                     />
                     <View style={styles.Two}>
                         <Image source={require('../img/mimi.png')}
                                style={styles.ImageTwo}
                         />
                         <View>
                             <Text style={{fontSize:12}}>米米信</Text>
                             <Text style={{fontSize:12}}>专业解决贷款申请、个人征信问题与您的资金问题。</Text>
                         </View>
                     </View>
                 </View>
             </View>
         );
     }
}
const styles = StyleSheet.create({
   container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
   },
   ViewStyle:{
       borderColor:'gray',
       borderWidth:1,
       justifyContent:'center',
       alignItems:'center',
       width:pWidth(width-35),
   },
   Image:{
       width:pWidth(width-40),
       height:pHeight(width-40)
   },
   ImageTwo:{
       width:pWidth(40),
       height:pHeight(40),
       borderRadius:20
   },
    Two:{
       flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:pWidth(width-40),
        height:pHeight(60),
        backgroundColor:'#999999'
    }
});