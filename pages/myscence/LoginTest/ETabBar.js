/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,

} from 'react-native';

import {pWidth,pHeight,pSize} from "../../user/util";
import Dimensions from 'Dimensions';
let {width,height} = Dimensions.get('window');
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ETabBar extends Component {
    static  propTypes={

        goToPage:PropTypes.func,  //跳转到Tab的方法
        activeTab:PropTypes.number,  //选中的下标
        tabs:PropTypes.array,  //tabs的集合   items 的数组


        //接下来扩展自定义的属性
        tabIconNames:PropTypes.array,  //文字的名字
        tabName:PropTypes.array,     //保存图片的名称

    };

    render() {
        return (
            <View style={styles.tabStyle}>
                {/*返回一个一个的Item*/}
                {this.props.tabs.map((tab,i)=>this.renderItem(tab,i))}
            </View>
        );
    }

    renderItem(tab,i){
        //判断i是不是当前选中的
        const color=this.props.activeTab === i ? "#ffdc26":"#e4ebee";
        return(
            <TouchableOpacity
                onPress={()=>this.props.goToPage(i)}
                key={i}
                style={styles.tab}
            >
                <View style={{width:width*0.3, justifyContent: 'center', alignItems: 'center',
                    height:height*0.05, borderBottomWidth: 2,marginLeft:pWidth(35),
                    borderBottomColor:color
                }}>
                    {/*文字*/}
                    <Text style={styles.textStyle}>{this.props.tabNames[i]}</Text>
                </View>
            </TouchableOpacity>
        )

    }
}

const styles = StyleSheet.create({
    tabStyle:{
        flexDirection: 'row',
        width:width*0.95,
        height:height*0.06,
    },
    tab:{
        flex:1
    },
    textStyle:{
        color:'black',
        fontSize:pSize(17),
    },


});


