import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    Image,
    TouchableHighlight,
    Dimensions,
    AsyncStorage,
    ImageBackground,
    StatusBar
} from 'react-native';
import Swiper from 'react-native-swiper';
const {width,height} = Dimensions.get('window');
import {pHeight,pWidth,pSize} from './user/util';
import MySceneTest from "./myscence/MySeceneTest";
import EarnTest from "./EarnTest";
import Index from './component/index';
export default class TabTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab:'One',
            welcome:true,
            isFirst:false,
        };
    }
    componentDidMount(){
        this.openApp();
    }
    componentWillUnmount(){
        this.timer&&clearTimeout(this.timer)
    }
    openApp(){
        AsyncStorage.getItem('isFirst',(error,result)=>{
            if (result === 'false') {
                console.log('不是第一次打开');
                this.timer = setTimeout(()=>{
                    this.setState({
                        welcome:false
                    })
                },2000);
            }else{
                console.log('第一次打开');
                AsyncStorage.setItem('isFirst','false',(error)=>{
                    if (error) {
                        alert(error);
                    }
                });
                this.setState({
                    isFirst:true,
                    welcome:false,
                })
            }
        });
    }
    render() {
        if(this.state.isFirst === true){
            return(
                <Swiper
                    loop={false}
                    dot={<View style={styles.dot}/>}
                    activeDot={<View style={styles.activeDot}/>}
                    autoplay={false}
                >
                    <Image source={{uri:'http://ww1.sinaimg.cn/large/005T39qagy1fvn2skuaduj31o02yodjm.jpg'}} style={styles.ImgSwiper}/>
                    <Image source={{uri:'http://ww1.sinaimg.cn/large/005T39qagy1fvn2tefe9aj30dw0oewgg.jpg'}}  style={styles.ImgSwiper}/>
                    <ImageBackground source={{uri:'http://ww1.sinaimg.cn/large/005T39qagy1fvn2ux5rmij30f00qo0v4.jpg'}}  style={styles.ImgSwiper}>
                        <TouchableHighlight style={styles.Touch}
                                            onPress={()=>this.setState({
                                                isFirst:false,
                                            })}
                        >
                            <Text style={styles.text}>立即体验</Text>
                        </TouchableHighlight>
                    </ImageBackground>
                </Swiper>
            );
        }else{
            if(!this.state.welcome){
                return (
                    <View style={styles.container} >
                        <TabNavigator tabBarStyle={styles.tab}>
                            <TabNavigator.Item
                                selected={this.state.selectedTab === 'One'}
                                title="首页"
                                titleStyle={styles.tabText}
                                selectedTitleStyle={styles.selectedTabText}
                                renderIcon={() => <Image source={{uri:'http://ww1.sinaimg.cn/large/005T39qagy1fvi595x04xj301s01sq2q.jpg'}} style={styles.icon}/> }
                                renderSelectedIcon={() => <Image style={styles.icon} source={{uri:'http://ww1.sinaimg.cn/large/005T39qagy1fvi595x04xj301s01sq2q.jpg'}} />}
                                onPress={() => this.setState({ selectedTab: 'One' })}>
                               <Index {...this.props}/>
                            </TabNavigator.Item>
                            <TabNavigator.Item
                                selected={this.state.selectedTab === 'Two'}
                                title="订单"
                                titleStyle={styles.tabText}
                                selectedTitleStyle={styles.selectedTabText}
                                renderIcon={() => <Image source={{uri:'http://ww1.sinaimg.cn/large/005T39qagy1fvi5bn0arcj301c01c0n1.jpg'}} style={styles.icon}/> }
                                renderSelectedIcon={() => <Image style={styles.icon} source={{uri:'http://ww1.sinaimg.cn/large/005T39qagy1fvi5bn0arcj301c01c0n1.jpg'}} />}
                                onPress={() => this.setState({ selectedTab: 'Two' })}>
                               <EarnTest {...this.props}/>
                            </TabNavigator.Item>
                            <TabNavigator.Item
                                selected={this.state.selectedTab === 'Three'}
                                title="产品"
                                titleStyle={styles.tabText}
                                selectedTitleStyle={styles.selectedTabText}
                                renderIcon={() => <Image source={{uri:'http://ww1.sinaimg.cn/large/005T39qagy1fvi5dsykmmj301c01ca9t.jpg'}} style={styles.icon}/> }
                                renderSelectedIcon={() => <Image style={styles.icon} source={{uri:'http://ww1.sinaimg.cn/large/005T39qagy1fvi5dsykmmj301c01ca9t.jpg'}} />}
                                onPress={() => this.setState({ selectedTab: 'Three' })}>
                                <MySceneTest {...this.props}/>
                            </TabNavigator.Item>
                        </TabNavigator>
                    </View>
                );
            }else{
                return <Image source={{uri:'http://ww1.sinaimg.cn/large/005T39qagy1fvm7eiwfrfj30xc1h0wlk.jpg'}}
                              style={styles.Img}
                />
            }

        }

    }


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:pWidth(width)
    },
    tab: {
        height: pHeight(50),
        backgroundColor: '#ffffff',
        alignItems: 'center'
    },
    tabText: {
        marginTop: pHeight(1),
        color: 'gray',
        fontSize: pSize(10)
    },
    selectedTabText: {
        marginTop: pHeight(1),
        color: 'black',
        fontSize: pSize(10)
    },
    icon: {
        width: pWidth(25),
        height: pHeight(25),
        resizeMode: 'stretch',
        marginTop: pHeight(5)
    },
    Img:{
        width:pWidth(width+10),
        height:pHeight(height+20),
        flex:1
    },
    dot:{
        backgroundColor:'gray',
        width:pWidth(12),
        height:pHeight(12),
        borderRadius:6,
        marginLeft:pWidth(3),
    },
    activeDot:{
        backgroundColor:'yellow',
        height:pHeight(12),
        width:pWidth(20),
        borderRadius:6,
        marginLeft:pWidth(3)
    },
    ImgSwiper:{
        width:pWidth(width+10),
        height:pHeight(height+20),
        justifyContent:'center',
        alignItems:'center'
    },
    Touch:{
        height:pHeight(50),
        width:pWidth(200),
        position:'absolute',
        bottom:pHeight(95),
        borderRadius:10,
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:20,
        color:'black'
    }
});
