import { Dimensions } from 'react-native';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar,TextInput,Image,TouchableOpacity,FlatList } from 'react-native';
import {pWidth,pHeight,pSize} from '../user/util';
import SwiperTOP from './Swiper.js';
import MarqueeLabelVertical from 'react-native-lahk-marquee-label-vertical';
let {width}=Dimensions.get('window');
export default class Index extends Component < Props > {

  foot(){
    return <Text style={styles.foot}>没有更多数据了</Text>
  }
  render() {
        
        let data = [];
        for (var i = 0; i < 5; i++) {
            data.push({key: i, title: 'CM-花赢宝',content:'线上自动审核',way:'自审',type:'借贷',other:'极简'});
        }

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={ '#ffe059' } />
         <View style={styles.TopView}>
          <TextInput placeholderTextColor='gray' placeholder={ '搜索' } style={ styles.TextInput } />
          <TouchableOpacity>
          <Image style={ styles.icon } resizeMode='contain' source={ require('../icon/new.png') } />
          </TouchableOpacity>
        </View>
         {/*这是轮播*/}
        <SwiperTOP/>
         {/*这是第一组*/}
        <View style={styles.mid}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Second',{name:'One'})}>
          <View style={styles.button}>
          <Image style={ styles.butt } resizeMode='contain' source={ require('../icon/Rukou.png') } />
          <Text>新入口</Text>
          </View>
          </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Second',{name:'Two'})}>
          <View style={styles.button}>
          <Image style={ styles.butt } resizeMode='contain' source={ require('../icon/heihuzhuanqu.png') } />
              <Text>黑户专区</Text>
          </View>
          </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Second',{name:'Three'})}>
          <View style={styles.button}>
          <Image style={ styles.butt } resizeMode='contain' source={ require('../icon/changzhouqi.png') } />
          <Text>长周期</Text>
          </View>
          </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Second',{name:'Four'})}>
          <View style={styles.button}>
          <Image style={ styles.butt } resizeMode='contain' source={ require('../icon/gaiedu.png') } />
          <Text>高额度</Text>
          </View>
          </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Second',{name:'Five'})}>
          <View style={styles.button}>
          <Image style={ styles.butt } resizeMode='contain' source={ require('../icon/dililv.png') } />
          <Text>低利率</Text>
          </View>
          </TouchableOpacity>
        </View>
    {/*最底部的LIST*/}
      <View style={styles.List}>
    <FlatList
                        renderItem={this._renderItem}
                         keyExtractor={(item, index) => index.toString()}
                        ListHeaderComponent={this._header}
                        showsVerticalScrollIndicator = {false} 
                        initialNumToRender={2}
                        ListFooterComponent={this.foot()}
                        data={data}/>

      </View>
      </View>
    );
  }
  _header = () => {
    return (
      <View style={styles.midtwo}>
      <View style={styles.cellup}>
       <View style={styles.font}>
       <Text style={styles.mimi}>米米快报</Text>
       <Text style={styles.gongxi}>恭喜</Text>
       </View>
       <View style={styles.report}>
       <View style={styles.labelv}>
    <MarqueeLabelVertical
    duration={8000}
    text={'hammer在“化赢宝”上成功借到5000元'}
    textStyle={{ fontSize: 13, color: 'black',width:pWidth(500)}}

    />
    </View>
       <Image style={ styles.mButt }  source={ require('../icon/JT.png') } />
       </View>
      </View>
     {/*红包*/}
      <View style={styles.celldown}>
       <TouchableOpacity>
        <Image style={ styles.Red } resizeMode='contain'  source={ require('../icon/Redbag.png') } />
       </TouchableOpacity>
       </View>
      </View>
    )
  };
  _renderItem = (item) => {
    return (
      <TouchableOpacity>
      <View style={styles.ItemView} key={item.item.key}>
        <Image style={ styles.Itembutt }  source={ require('../icon/Ying.png') } />
         <View style={styles.fItem}>
         <Text style={styles.fItemup}>{item.item.title}</Text>
         <Text style={styles.fItemdown}>{item.item.content}</Text>
         </View>
         <View style={styles.sItem}>
         <View style={styles.Itemgray}><Text style={styles.Itemgrayfont}>{item.item.way}</Text></View>
         <View style={styles.Itemgray}><Text style={styles.Itemgrayfont}>{item.item.type}</Text></View>
         <View style={styles.ItemRa}><Text style={styles.ItemRafont}>{item.item.other}</Text></View>
         </View>
         <Image style={ styles.mButt }  source={ require('../icon/JT.png') } />
        </View>
      </TouchableOpacity>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
      alignItems:'center'
  },
    foot:{
      fontSize:pSize(15),
      marginTop:pHeight(20),
      marginBottom:pHeight(30),
      marginLeft:pWidth(10)
    },
  TopView: {
    flexDirection: 'row',
    height: pHeight(45),
    width: width,
    backgroundColor: '#ffe059',
    justifyContent: 'center',

  },
  TextInput: {
    width: pWidth(320),
    backgroundColor: '#fff',
    height: pHeight(38),
    justifyContent: 'center',
  },
  icon: {
    marginTop: pHeight(5),
    width: pWidth(30),
    height: pHeight(30),
    marginLeft: pWidth(10),
  },
  butt: {
    width: pWidth(40),
    height: pHeight(40),
  },
  mid: {
    marginTop: pHeight(10),
    flexDirection: 'row',
    height: pHeight(95),
    width: width * 0.95,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  midtwo: {
    height: pHeight(130),
    width: width * 0.95,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
  },
  cellup: {
    marginTop: pHeight(3),
    flexDirection: 'row',
    height: pHeight(30),
    width: width * 0.95,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#f3f4f6',
    flex: 2,
  },
  font: {
    flex: 4,
    flexDirection: 'row',
  },
  mimi: {
    color: 'black',
    fontSize: pSize(15),
    marginLeft: pWidth(10),
  },
  gongxi: {
    fontSize: pSize(14),
    marginLeft: pWidth(10),
    color: 'red',
  },
  report: {
    flex: 8,
    flexDirection: 'row',
    alignItems:  'center',
  },
  labelv: {
    marginLeft:-pWidth(18),
    marginTop: -pHeight(22),
    height: pHeight(10),
    width: pWidth(250),

  },
  mButt: {
    height: pHeight(15),
    width: pHeight(15),
  },
  celldown: {
    marginTop: pHeight(3),
    flexDirection: 'row',
    height: pHeight(30),
    width: width * 0.95,
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 8,
  },
  Red: {
    width: width * 0.85,
  },
  List:{
    marginTop: pHeight(10),
    height: pHeight(300),
    width: width,
    alignItems:  'center' ,
  },
  ItemView: {
    marginTop: pHeight(10),
    flexDirection: 'row',
    height: pHeight(85),
    width: width * 0.95,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
  },
  Itembutt:{
    width: pWidth(50),
    height: pHeight(50),
  },

  fItem:{},
  sItem:{
    marginBottom: pHeight(15),
    flexDirection: 'row' ,
  },
  Itemgray:{
    width: pWidth(40),
    height: pHeight(20),
    backgroundColor: '#f0f2f4',
    borderRadius: 4,
    alignItems: 'center' ,
    justifyContent: 'center',
    marginRight: pWidth(5),
  },
  ItemRa:{
    marginLeft: pWidth(10),
    width: pWidth(50),
    height: pHeight(20),
    borderWidth: 1.5,
    borderColor: '#f37443',
    borderRadius: 10,
    alignItems: 'center' ,
    justifyContent: 'center',
  },
  fItemup:{
    color: 'black',
    fontSize: pSize(17),
  },
  fItemdown:{
        color: '#7e7e7e',
    fontSize: pSize(14),
  },
  Itemgrayfont:{
            color: '#7e7e7e',
    fontSize: pSize(14),
  },
  ItemRafont:{
                color: '#f36b36',
    fontSize: pSize(14),
  },
});