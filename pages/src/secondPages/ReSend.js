import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    TextInput,
    StatusBar,
    Alert
} from 'react-native';
const {width,height} = Dimensions.get('window');
import {pWidth,pHeight,pSize} from '../../user/util';
export default class ReSend extends Component {
    constructor(props){
        super(props);
        this.state={
            textOne:null,
            textTwo:null
        }
    }
    Touch(){
        let one = this.state.textOne;
        let two = this.state.textTwo;
        if(one === null){
            Alert.alert(
                '提示',
                '请输入反馈信息',
                [
                    {text:'确定',style:'cancel'}
                ],
            );
        }
        if(two === null){
            Alert.alert(
                '提示',
                '请输入你的邮箱',
                [
                    {text:'确定',style:'cancel'}
                ],
            );
        }
        if(two&&one){
            Alert.alert(
                '提示',
                '反馈成功',
                [
                    {text:'确定',style:'cancel'}
                ],
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
                <View style={styles.textInput}>
                    <TextInput
                        style={styles.textInputOne}
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => this.setState({textOne:text})}
                        placeholder={'请输入遇到的问题或建议...'}
                    />
                </View>
                <View style={styles.textInputTwo}>
                    <Text style={styles.textTwo}>QQ邮箱:      </Text>
                    <TextInput
                        style={styles.textInputTwoOne}
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => this.setState({textTwo:text})}
                        placeholder={'请填写您的邮箱便于我们联系你'}
                    />
                </View>
                <TouchableOpacity onPress={this.Touch.bind(this)}>
                    <View style={styles.ViewOne}>
                        <Text style={styles.textThree}>提交</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    One:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        height:pHeight(50),
        width:pWidth(400),
        flexDirection:'row',
    },
    textOne:{
        fontSize:pSize(19),
        color:'black',
        fontWeight: 'bold',
    },
    image1:{
        justifyContent:'flex-start',
    },
    textInputOne:{
        backgroundColor:'white',
        height:pHeight(160),
        width:pWidth(400),
        marginTop:pHeight(2),
        marginBottom:pHeight(5)
    },
    textInputOneOne:{
        height:pHeight(160),
        width:pWidth(400),
    },
    textInputTwo:{
        backgroundColor:'white',
        height:pHeight(40),
        flexDirection:'row',
        marginTop:pHeight(5),
        marginBottom:pHeight(10),
        alignItems:'center'
    },
    textInputTwoOne:{
        height:pHeight(40),
        width:pWidth(400),
        alignItems:'center'
    },
    textTwo:{
        fontSize:pSize(18),
        justifyContent:'center',
        alignItems:'center'
    },
    ViewOne:{
        backgroundColor:'yellow',
        height:pHeight(40),
        width:pWidth(width-40),
        justifyContent:'center',
        alignItems:'center',
        marginTop:pHeight(6),
        marginRight:pWidth(20),
        marginLeft:pWidth(20)
    },
    textThree:{
        fontSize:pSize(18),
        fontWeight: 'bold'
    }
});