/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {

    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    ScrollView,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import {pWidth,pHeight,pSize} from "../user/util";
let {width,height} = Dimensions.get('window');
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default class edit extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar                             //设置状态栏背景颜色
                    backgroundColor={'#ffdc26'}
                />

                <View style={styles.first}>
                    <Text style={styles.textStyle}>我的</Text>
                </View>
                    <View style={styles.second}>
                        <View style={styles.one}>

                        </View>
                        <View style={styles.two}>
                            <View style={styles.left}>
                                <View style={styles.img}>
                                    <Image
                                        style={styles.imageStyle3}
                                        source={require('../img/money.png')}
                                    />
                                </View>
                            </View>
                            <View style={styles.right}>
                                <Text style={styles.text2}>
                                    极简借贷 轻松解决燃眉之急
                                </Text>
                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
                                <View style={styles.textStyle2}>
                                    <Text style={styles.text3}>登录/注册</Text>
                                </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>


                    <View style={styles.three}>

                        <TouchableOpacity>
                            <View style={styles.textStyle3}>
                                <EvilIcons
                                    style={styles.imageStyle4}
                                    name="envelope"
                                    size={27}
                                />
                                <Text style={styles.text4}>我的邀请</Text>
                                <Entypo
                                    style={styles.imageStyle}
                                    name="chevron-thin-right"
                                    size={15}
                                    color={'#949494'}
                                />
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity>
                            <View style={styles.textStyle3}>
                                <Entypo
                                    style={styles.imageStyle4}
                                    name="text-document"
                                    size={27}
                                />
                                <Text style={styles.text4}>我的邀请码</Text>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity>
                            <View style={styles.textStyle3}>
                                <SimpleLineIcons
                                    style={styles.imageStyle4}
                                    name="present"
                                    size={27}
                                />
                                <Text style={styles.text4}>我的奖励</Text>
                                <Entypo
                                    style={styles.imageStyle}
                                    name="chevron-thin-right"
                                    size={15}
                                    color={'#949494'}
                                />
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity>
                            <View style={styles.textStyle4}>
                                <FontAwesome
                                    style={styles.imageStyle4}
                                    name="question-circle-o"
                                    size={27}
                                />
                                <Text style={styles.text4}>常见帮助</Text>
                                <Entypo
                                    style={styles.imageStyle}
                                    name="chevron-thin-right"
                                    size={15}
                                    color={'#949494'}
                                />
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity>
                            <View style={styles.textStyle3}>
                                <MaterialCommunityIcons
                                    style={styles.imageStyle4}
                                    name="wechat"
                                    size={27}
                                />
                                <Text style={styles.text4}>微信公众号</Text>
                                <Text style={styles.text5}>米米信</Text>
                                <Entypo
                                    style={styles.imageStyle}
                                    name="chevron-thin-right"
                                    size={15}
                                    color={'#949494'}
                                />
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity>
                            <View style={styles.textStyle3}>
                                <FontAwesome
                                    style={styles.imageStyle4}
                                    name="arrow-circle-o-up"
                                    size={27}
                                />
                                <Text style={styles.text4}>版本更新</Text>
                                <Entypo
                                    style={styles.imageStyle}
                                    name="chevron-thin-right"
                                    size={15}
                                    color={'#949494'}
                                />
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity>
                            <View style={styles.textStyle3}>
                                <MaterialCommunityIcons
                                    style={styles.imageStyle4}
                                    name="message-text-outline"
                                    size={27}
                                />
                                <Text style={styles.text4}>给我留言</Text>
                                <Entypo
                                    style={styles.imageStyle}
                                    name="chevron-thin-right"
                                    size={15}
                                    color={'#949494'}
                                />
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity>
                            <View style={styles.textStyle3}>
                                <EvilIcons
                                    style={styles.imageStyle4}
                                    name="exclamation"
                                    size={27}
                                />
                                <Text style={styles.text4}>关于我们</Text>
                                <Entypo
                                    style={styles.imageStyle}
                                    name="chevron-thin-right"
                                    size={15}
                                    color={'#949494'}
                                />
                            </View>
                        </TouchableOpacity>

                    </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    first:{                             //我的所在View
        backgroundColor: '#ffdc26',
        height:height*0.06,
        width:width,
    },
    one:{                            //第二部分的黄色区域
        width:width,
        height:height*0.06,
        backgroundColor:'#ffdc26',
    },
    textStyle:{                //我的
        textAlign:'center',
        fontSize:pSize(22),
        marginTop: pHeight(7),
        color:'black',
    },
    second:{                    //第二部分
        height:height*0.2,
        backgroundColor:'#F5FCFF',
        alignItems: 'center',
    },
    two:{                       //悬浮窗口
        width:width*0.95,
        height:height*0.18,
        backgroundColor:'#F5FCFF',
        borderColor:'#949494',
        borderBottomWidth:0.5,
        borderWidth:0.5,
        borderRadius:0.5,
        elevation: 2.5,  //产生立体效果
        flexDirection: 'row',
        marginTop:-pHeight(40),
    },
    img:{                       //悬浮窗口中的图片
        width:height*0.12,
        height:height*0.12,
        borderRadius:height*0.06,  //设置圆边框，值为半径
        backgroundColor:'#ffdc26',
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    left:{                          //悬浮窗口左半部分
        justifyContent: 'center',
        width:width*0.25,
        backgroundColor:'#F5FCFF',
    },
    right:{                         //悬浮窗口右半部分
        backgroundColor:'#F5FCFF',
        width:width*0.75,

    },
    //悬浮窗口右半部分上方
    add:{                         //悬浮窗口中的用户名和手机号
        flexDirection:'row',
        marginTop:pHeight(33),
        marginLeft:pWidth(18),
    },
    text2:{
        textAlign:'center',
        fontSize: pSize(16),
        color:'gray',
        marginTop:pHeight(30),
        marginRight: pWidth(39),
    },
    textStyle2:{
        backgroundColor: '#ffdc26',
        height:height*0.06,
        justifyContent: 'center',
        alignItems: 'center',
        width:width*0.45,
        borderRadius:width*25,
        marginLeft:pWidth(40),
        marginTop:pHeight(10),
    },


    text3:{
        textAlign: 'center',
        color:'black',
        fontSize:pSize(17),
    },
    three:{                           //界面第三部分
        backgroundColor:'#f9f9f9',
        width:width,
        height:height*0.6,
        marginTop:pHeight(20),
    },
    textStyle3:{                      //每一栏View
        height:pHeight(44),
        width:width,
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'white',
        marginBottom: 3,
    },
    textStyle4:{
        height:pHeight(44),
        width:width,
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'white',
        marginBottom:10,
    },
    text4:{
        fontSize:pSize(17),
        color:'gray',
        paddingLeft: pWidth(45),
    },
    text5:{                          //米米信
        fontSize:pSize(17),
        color:'gray',
    },
    imageStyle:{          //向右箭头
        width:pWidth(12),
        //marginLeft:width*0.64,
        position: 'absolute',
        right:pWidth(10),
    },

    imageStyle3:{
        width:height*0.09,
        height:height*0.09,
    },
    imageStyle4:{         //每行第一个图片
        marginLeft: 5,
        position:'absolute',
    },

});


