import React,{Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet
}from 'react-native';
const {width,height} = Dimensions.get('window');
import Swiper from 'react-native-swiper';
import {pWidth,pHeight,pSize} from './user/util';
export default class EarnTest extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={'#ffdc26'}
                />
                <View style={styles.One}>
                    <Text style={styles.textOne}>赚钱</Text>
                </View>
                <ScrollView>
                    <Image source={{uri:'http://ww1.sinaimg.cn/large/005T39qagy1fvo3o5d6bvj31hc0xcdty.jpg'}}
                           style={styles.ImgOne}
                    />
                    <View style={styles.viewOne}>
                        <Text style={styles.viewOneOne}>米米快报</Text>
                        <Text style={styles.viewOneTwo}>恭喜</Text>
                        <Swiper
                            horizontal={false}
                            autoplay={true}
                            height={pHeight(25)}
                            width={pWidth(200)}
                            autoplayTimeout={2}
                            showsPagination={false}
                        >
                            <Text style={styles.viewOneThree}>1111111111111 </Text>
                            <Text style={styles.viewOneThree}>hello,world!</Text>
                        </Swiper>
                    </View>
                    <View style={styles.viewTwo}>
                        <Text style={styles.textInviteOne}>邀请好友，注册米米贷赢京东、天猫购物卡</Text>
                        <View style={styles.viewInvite}>
                            <Text style={styles.textInviteOne}>最高一次可获得</Text>
                            <Text style={[styles.textInviteOne,{color:'red'}]}>66元</Text>
                        </View>
                        <Image source={{uri:'http://ww1.sinaimg.cn/large/005T39qagy1fvo52m2w5ij30et08cgmb.jpg'}}
                               style={styles.ImgTwo}
                        />
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('MyReward')}>
                            <Text style={styles.textInviteTwo}>点击查看奖励规则 > </Text>
                        </TouchableOpacity>
                        <Text style={styles.textPart}>立即注册->邀请好友->领奖啦</Text>
                        <Text style={styles.textFriend}>------------马上邀请好友得奖励---------------</Text>
                        <View style={styles.share}>
                            <TouchableOpacity onPress={()=>{}}>
                            <View style={styles.shareItem}>
                                <Image style={styles.ImgThree} source={{uri:'http://ww1.sinaimg.cn/large/005T39qagy1fvo6tibqcxj30e80e8wes.jpg'}}/>
                                <Text>微信</Text>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{}}>
                                <View style={styles.shareItem}>
                                    <Image style={styles.ImgThree} source={{uri:'http://ww1.sinaimg.cn/large/005T39qagy1fvo6sxaq6hj30m80got8v.jpg'}}/>
                                    <Text>朋友圈</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{}}>
                                <View style={styles.shareItem}>
                                    <Image style={styles.ImgThree} source={{uri:'http://ww1.sinaimg.cn/large/005T39qagy1fvo6sdxa4nj307107atbl.jpg'}}/>
                                    <Text>QQ</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{}}>
                                <View style={styles.shareItem}>
                                    <Image style={styles.ImgThree} source={{uri:'http://ww1.sinaimg.cn/large/005T39qagy1fvo6rleighj306o06e3yd.jpg'}}/>
                                    <Text>QQ空间</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
   container:{
       flex:1
   },
   One:{
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'#ffdc26',
       height:pHeight(40),
       width:pWidth(width)
   },
   textOne:{
       fontSize:pSize(25),
       color:'black',
   },
    ImgOne:{
       width:pWidth(width+10),
       height:pHeight(160),
    },
    viewOne:{
       backgroundColor:'white',
       marginLeft:pWidth(5),
       marginRight:pWidth(5),
       height:pHeight(25),
       flexDirection:'row',
       marginTop:pHeight(5),
       marginBottom:pHeight(10)
    },
    viewOneOne:{
       fontSize:pSize(15),
        marginRight:pWidth(7)
    },
    viewOneTwo:{
       color:'red',
       fontSize:pSize(13)
    },
    viewOneThree:{

    },
    viewTwo:{
        backgroundColor:'white',
        marginLeft:pWidth(5),
        marginRight:pWidth(5),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    textInviteOne:{
       fontSize:pSize(17),
        color:'black',
       marginTop:pHeight(2),
       marginBottom:pHeight(2),
    },
    viewInvite:{
       flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    ImgTwo:{
       width:pWidth(150),
       height:pHeight(130),
       marginTop:pHeight(10),
       marginBottom:pHeight(20),
    },
    textInviteTwo:{
       color:'orange',
        fontSize:pSize(17),
        marginBottom:pHeight(15)
    },
    textPart:{
       fontSize:pSize(17),
       color:'black',
       marginBottom:pHeight(13),

    },
    textFriend:{
       color:'gray',
       fontSize:pSize(15)
    },
    share:{
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       marginTop:pHeight(10),
        width:pWidth(width-40)
    },
    shareItem:{
       justifyContent:'center',
       alignItems:'center',
    },
    ImgThree:{
       borderRadius:25,
       width:pWidth(50),
       height:pHeight(50),
       borderColor:'green'
    }

});