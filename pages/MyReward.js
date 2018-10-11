import React,{Component} from 'react';
import {
    Text,
    Image,
    View,
    Dimensions,
    StyleSheet,
    FlatList,
    StatusBar
}from 'react-native';
import {pSize,pHeight,pWidth} from './user/util';
import Data from '../Data/data1';
const {width,height} = Dimensions.get('window');
export default class MyReward extends Component{
    constructor(props){
        super(props);
    }
    ItemSeparator=()=>{
        return <View style={styles.itemSeparator}/>
    };
    Header=()=> {
       return <Text style={styles.header}>积分兑换</Text>
    };
    RenderItem=(item)=>{
        return(
            <View style={styles.renderItem}>
                <Image source={{uri:item.item.img}} style={styles.Img}/>
                <View style={styles.renderOne}>
                    <Text style={styles.Meneny}>{item.item.text}</Text>
                    <Text style={styles.goal}>{item.item.goal}</Text>
                </View>
            </View>
        );
    };
    _keyExtractor = (item, index) => index.toString();
    render(){
        return(
            <View styles={styles.container}>
                <StatusBar
                    animated={true}
                    barStyle={'dark-content'}
                    backgroundColor={'white'}
                />
                <View style={styles.One}/>
                <View style={styles.Two}>
                    <View style={styles.MarginStyle}>
                        <View style={{flex:1,backgroundColor:'#ffdc26'}}/>
                        <View style={{flex:3}}/>
                    </View>
                    <View style={styles.TwoTwo}>
                        <Text style={styles.textOne}>奖励规则</Text>
                        <Text style={styles.textTwo}>1.参与方式</Text>
                        <Text>通过“一呼百应 邀请有奖”活动邀请好友</Text>
                        <Text style={styles.textTwo}>2.奖励规则</Text>
                        <Text>你的一个好友注册时填写了你的专属邀请码，你将获得1个积分。累计积分满10分则可以兑换与积分等价值的奖励金。
                        （暂定为一个积分 = 1元钱，最终解释权归官方所有）。
                        </Text>
                        <Text style={styles.textTwo}>3.奖励结果查询入口</Text>
                        <Text>"我的->我的奖励->奖励明细"查看奖励结果</Text>
                    </View>
                    <View style={styles.MarginStyle}>
                        <View style={{flex:1,backgroundColor:'#ffdc26'}}/>
                        <View style={{flex:3}}/>
                    </View>
                </View>
                <FlatList
                    style={styles.FlatStyle}
                    ListHeaderComponent={this.Header.bind(this)}
                    data={Data}
                    renderItem={this.RenderItem.bind(this)}
                    ItemSeparatorComponent={this.ItemSeparator}
                    ListFooterComponent={this.foot}
                    keyExtractor={this._keyExtractor}
                />
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
       backgroundColor:'#ffdc26',
       height:pHeight(40)
   },
   Two:{
       width:pWidth(width),
       height:pHeight(220),
       flexDirection:'row'
   },
   MarginStyle:{
       width:pWidth(20),
   },
    TwoTwo:{
       backgroundColor:'white',
        paddingLeft:pWidth(10),
        paddingTop:pHeight(10),
        width:pWidth(width-40),
    },
    textOne:{
       fontSize:pSize(20),
       color:'black'
    },
    textTwo:{
       fontSize:pSize(15),
        color:'black'
    },
    FlatStyle:{
       marginTop:pHeight(20),
       paddingLeft:pWidth(10),
       marginLeft:pWidth(20),
       marginRight:pWidth(20),
       backgroundColor:'white'
    },
    itemSeparator:{
       height:pHeight(1.5),
       backgroundColor:'gray',
    },
    header:{
       color:'black',
       marginBottom:pHeight(10),
        fontSize:pSize(20),
        marginLeft:pWidth(15),
        marginTop:pHeight(5)
    },
    renderItem:{
        flexDirection:'row',
        marginLeft:pWidth(10),
        marginRight:pWidth(10),
        backgroundColor:'white',
        marginBottom:pHeight(10),
        marginTop:pHeight(10)
    },
    Img:{
       width:pWidth(130),
       height:pHeight(80)
    },
    renderOne:{
       paddingLeft:pWidth(10),
    },
    Meneny:{
       color:'black',
       fontSize:pSize(17)
    },
    goal:{
       color:'red',
       marginTop:pHeight(10)
    }
});
