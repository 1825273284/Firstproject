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
    Alert, DeviceEventEmitter
} from 'react-native';
const {width,height} = Dimensions.get('window');
import {pSize,pHeight,pWidth} from '../user/util';
export default class SetCode extends Component{
    constructor(props){
        super(props);
        this.state={
            codeOne:null,
            codeTwo:null,
       }
    }
    Save(){
        let One = this.state.codeOne;
        let Two = this.state.codeTwo;
        if(!One || !Two){
            Alert.alert(
                '提示',
                '请输入密码',
                [
                    {text:'确定',style:'cancel'}
                ],
            );

        }else{
            if(Two===One){
                const {params} = this.props.navigation.state;
                storage.save({
                    key: params.call,  // 注意:请不要在key中使用_下划线符号!
                    data:{
                        name:params.name,
                        code:Two,
                        image:params.image,
                        call:params.call,
                    },
                    // 如果不指定过期时间，则会使用defaultExpires参数
                    // 如果设为null，则永不过期
                    expires:null
                });
                Alert.alert(
                    '提示',
                    '修改成功',
                    [
                        {text:'确定',style:'cancel'}
                    ],
                );
                DeviceEventEmitter.emit("update","1");
                if(params.choice === "First"){
                    this.props.navigation.navigate("Login");
                }else{
                    this.props.navigation.navigate("SetTest");
                }

            }else{
                Alert.alert(
                    '提示',
                    '两次密码输入不一致',
                    [
                        {text:'确定',style:'cancel'}
                    ],
                );
            }
        }
    }
   render(){
        return(
            <View style={styles.container}>
                <View style={styles.One}>
                    <Text style={{color:'black',marginLeft:pWidth(5),fontSize:pSize(18)}}>新密码</Text>
                    <TextInput
                        placeholder={'输入新密码'}
                        onChangeText={(text)=>this.setState({
                            codeOne:text,
                        })}
                        keyboardType={'decimal-pad'}
                        secureTextEntry={true}
                        style={styles.TextInput}
                    />
                </View>
                <View style={styles.Two}>
                    <Text style={{color:'black',marginLeft:pWidth(5),fontSize:pSize(18)}}>确认密码</Text>
                    <TextInput
                        placeholder={"再次输入密码"}
                        onChangeText={(text)=>this.setState({
                            codeTwo:text
                        })}
                        keyboardType={'decimal-pad'}
                        style={styles.TextInput}
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity onPress={this.Save.bind(this)}>
                    <View style={styles.Touch}>
                        <Text style={{fontSize:pSize(25),color:'black'}}>完成</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
   }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    One:{
        flexDirection:'row',
        marginRight:pWidth(5),
        paddingLeft:pWidth(5),
        width:pWidth(width),
        alignItems:'center',
        height:pHeight(50),
        marginBottom:pHeight(2),
        backgroundColor:'white',
        marginTop:pHeight(20)
    },
    Two:{
        flexDirection:'row',
        marginRight:pWidth(5),
        paddingLeft:pWidth(5),
        width:pWidth(width),
        alignItems:'center',
        height:pHeight(50),
        marginBottom:pHeight(70),
        backgroundColor:'white',
    },
    TextInput:{
        height:pHeight(50),
        width:pWidth(width-80)
    },
    Touch:{
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        width:pWidth(width-60),
        marginRight:pWidth(30),
        marginLeft:pWidth(30),
        height:pHeight(50)
    }
});