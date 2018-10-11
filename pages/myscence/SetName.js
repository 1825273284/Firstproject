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
    Alert
}from 'react-native';
const {width,height} = Dimensions.get('window');
import {pSize,pHeight,pWidth} from '../user/util';
import IconOne from 'react-native-vector-icons/Ionicons';
export default class SetName extends Component{
    static defaultProps={
        backgroundColor:'white',
    };
    constructor(props){
        super(props);
        this.state={
            text:null,
        }
    }
    Save(){
        let text = this.state.text;
        const {params} = this.props.navigation.state;
        if(this.state.text===null){
            Alert.alert(
                '提示',
                '请输入昵称',
                [
                    {text:'确定',style:'cancel'}
                ],
              { cancelable: false }
            );
        }else {
           AsyncStorage.setItem('UserName',text);
            Alert.alert(
                '提示',
                '修改成功',
                [
                    {text:'确定',style:'cancel'}
                ],
                { cancelable: false }
            );
        }

    }
    render(){
        return(
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    barStyle={'dark-content'}
                    backgroundColor={'white'}
                />
                <View style={[styles.One,{backgroundColor:this.props.backgroundColor}]}>
                    <TouchableOpacity
                        onPress={()=>{ this.props.navigation.navigate('SetTest')}}
                    >
                        <IconOne name={'md-arrow-back'} size={30} color={'black'}/>
                    </TouchableOpacity>
                    <Text style={{fontSize:pSize(20),color:'black'}}>修改昵称</Text>
                    <TouchableOpacity
                        onPress={this.Save.bind(this)}
                    >
                    <Text style={{fontSize:pSize(20)}}>完成</Text>
                    </TouchableOpacity>
                </View>
                <TextInput
                    placeholder={"请输入昵称"}
                    style={styles.TextInput}
                    onChangeText={(text)=>this.setState({
                        text:text
                    })}
                />
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
       height:pHeight(50),
       justifyContent:'space-between',
       alignItems:'center',
       backgroundColor:'white',
       width:pWidth(width),
       paddingRight:pWidth(7),
       paddingLeft:pWidth(8)
   },
    TextInput:{
       backgroundColor:'white',
       height:pHeight(50),
       marginTop:pHeight(10)
    }
});