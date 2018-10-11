import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    ScrollView,
    FlatList,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import {pHeight,pWidth,pSize} from '../user/util';
import Data from '../../Data/data2';
import Icon from 'react-native-vector-icons/AntDesign';
const {width,height} = Dimensions.get('window');
export default class HelpOne extends Component{
    _keyExtractor = (item, index) => index.toString();
    render(){
        return(
            <ScrollView style={styles.container}>
                <StatusBar
                    animated={true}
                    barStyle={'dark-content'}
                    backgroundColor={'white'}
                />
                <View>
                    <Text style={styles.text}>常见问题</Text>
                    <FlatList
                        renderItem={this.RenderItem.bind(this)}
                        data={Data}
                        keyExtractor={this._keyExtractor}
                    />
                </View>
            </ScrollView>
        );
    }
    RenderItem(item){
        return(
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('HelpTwo',{question:item.item.question,answer:item.item.answer})}>
            <View style={styles.renderItem}>
                <Text style={{fontSize:pSize(20)}}>{item.item.question}</Text>
                <Icon name={'right'} size={20}/>
            </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
   container:{
       flex:1
   },
    text:{
      fontSize:pSize(25),
      marginTop:pHeight(15),
      marginBottom:pHeight(15),
      marginLeft:pWidth(10)
    },
   renderItem:{
       justifyContent:'space-between',
       width:pWidth(width),
       height:pHeight(40),
       flexDirection:'row',
       alignItems:'center',
       marginBottom:pHeight(2),
       backgroundColor:"white"
   }
});