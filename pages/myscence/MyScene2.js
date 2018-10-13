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
    AsyncStorage,
    DeviceEventEmitter
} from 'react-native';
import {pWidth,pHeight,pSize} from "../user/util";
let {width,height} = Dimensions.get('window');
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default class edit extends Component {
    constructor(props){
        super(props);
        this.state={
            image:'',
            name:null,
            call:null,
            code:null
         };
    }
    componentDidMount(){
        this.GetSome();
        this.listen=DeviceEventEmitter.addListener('update',(e)=>{
            if(e==="1"){
                this.GetSome();
            }
        })
    }
    componentWillUnmount() {
        this.listen.remove();
    }
    async GetSome(){
        await AsyncStorage.getItem("Call",(error,result)=>{
            this.setState({
                call:result
            })
        });
        await storage.load({
            key: this.state.call,
            // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
            autoSync: true,

            // syncInBackground(默认为true)意味着如果数据过期，
            // 在调用sync方法的同时先返回已经过期的数据。
            // 设置为false的话，则等待sync方法提供的最新数据(当然会需要更多时间)。
            syncInBackground: true,

            // 你还可以给sync方法传递额外的参数
            syncParams: {
                extraFetchOptions: {
                    // 各种参数
                },
                someFlag: true,
            },
        }).then(ret => {
            // 如果找到数据，则在then方法中返回
            // 注意：这是异步返回的结果（不了解异步请自行搜索学习）
            // 你只能在then这个方法内继续处理ret数据
            // 而不能在then以外处理
            // 也没有办法“变成”同步返回
            // 你也可以使用“看似”同步的async/await语法

            this.setState({
                call:ret.call,
                name:ret.name,
                code:ret.code,
                image:ret.image
            });
        }).catch(err => {
            //如果没有找到数据且没有sync方法，
            //或者有其他异常，则在catch中返回
            console.warn(err.message);
            switch (err.name) {
                case 'NotFoundError':
                    // TODO;
                    break;
                case 'ExpiredError':
                    break;
            }
        });
    }
    render() {

        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={'#ffdc26'}
                />

                <View style={styles.first}>
                    <Text style={styles.textStyle}>我的</Text>
                    <TouchableOpacity style={styles.button}
                                      onPress={()=>{
                                          this.props.navigation.navigate('SetTest',{call:this.state.call,name:this.state.name,code:this.state.code});
                                      }}
                    >
                        <Text style={styles.textStyle5}>设置</Text>
                    </TouchableOpacity>

                </View>
                <ScrollView>
                    <View style={styles.second}>
                        <View style={styles.one}>

                        </View>
                        <View style={styles.two}>
                            <View style={styles.left}>
                                    {
                                        this.state.image ?
                                            <Image style={styles.img} source={{uri:this.state.image}}/>
                                            :
                                            <Image style={styles.img} source={{uri:'http://ww1.sinaimg.cn/large/005T39qaly1fw6o70q8pej303c03cwef.jpg'}}/>

                                    }
                            </View>
                            <View style={styles.right}>
                                <View style={styles.add}>
                                    <Text style={styles.textStyle2}>{this.state.name}</Text>
                                    <Text style={styles.textStyle6}>{this.state.call}</Text>
                                </View>
                                <Text style={styles.text2}>
                                    极简借贷 轻松解决燃眉之急
                                </Text>
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
                                <Text style={styles.text6}>744309</Text>
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
                                <Text style={styles.text6}>0元</Text>
                                <Entypo
                                    style={styles.imageStyle}
                                    name="chevron-thin-right"
                                    size={15}
                                    color={'#949494'}
                                />
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('HelpOne')}>
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


                        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('WeiXin')}>
                            <View style={styles.textStyle3}>
                                <MaterialCommunityIcons
                                    style={styles.imageStyle4}
                                    name="wechat"
                                    size={27}
                                />
                                <Text style={styles.text4}>微信公众号</Text>
                                <Text style={styles.text6}>米米信</Text>
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


                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('ReSend')}>
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


                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Mine')}>
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
                    <View style={styles.four}>
                        <TouchableOpacity onPress={this.props.OnPress}>
                            <View style={styles.exit}>
                                <Text style={styles.ExitText}>完全退出</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    button:{                //设置按钮的样式
        width:pWidth(45),
        height:pHeight(25),
        marginTop:-pHeight(25),
        marginLeft: width*0.85,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
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
    textStyle5:{                //设置
        fontSize:pSize(18),
        textAlign:'right',
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
    textStyle2:{                 //用户名
        fontSize:pSize(18),
        color:'black',
        fontWeight:'bold',     //字体加粗
    },
    textStyle6:{                //第二串数字
        fontSize:pSize(18),
        marginLeft:pWidth(45),
        color:'black',
    },
    text2:{                     //下方的文字
        fontSize: pSize(16),
        color:'gray',
        marginTop:pHeight(12),
        marginLeft: pWidth(18),

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
    text6:{             //我的邀请码后的数字以及我的奖励后的数字
        fontSize:pSize(18),
        position: 'absolute',
        left:pWidth(315),
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
    four:{      //第四部分
        backgroundColor:'#f9f9f9',
        height:height*0.08,
        width:width,
        alignItems: 'center',
    },
    exit:{          //完全退出的边框
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#ffdc26',
        height:pHeight(44),
        width:width*0.95,
    },
    ExitText:{      //完全退出的文字
        color:'black',
        fontSize:pSize(20),
    },

});


