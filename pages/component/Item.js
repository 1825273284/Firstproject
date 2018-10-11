import React, { Component } from 'react';
import {StyleSheet, Text, View, Image,Dimensions} from 'react-native';
import {pHeight,pWidth,pSize} from "../user/util";

export default class Item extends Component{
    render() {
        const {topText,detailText,images} = this.props;
        return (
            <View style={styles.container}>
                <Image
                    source={images}
                    style={{height:pHeight(45),width:pWidth(45),marginLeft: 10}}
                />
                <View style={styles.textContainer}>
                    <Text style={{color:"black",fontSize:pSize(20)}}>
                        {topText}
                    </Text>
                    <Text style={{color:"#95999d",fontSize:pSize(15),marginTop: 5}}>
                        {detailText}
                    </Text>
                </View>
                <Image
                    source={require('../src/img/come.png')}
                    style={{height:pHeight(20),width:pWidth(20),tintColor: "#95999d"}}
                />
            </View>
        );
    }
};
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        width: width,
        height: width/6.1,
        marginTop:pHeight(10),
        flexDirection: "row",
        backgroundColor:"white",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    textContainer:{
        width: pWidth(310),
        height:width/6.1,
        justifyContent: "center",
        marginLeft: 5
    }
});