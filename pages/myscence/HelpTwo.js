import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    ScrollView,
    FlatList,
    Dimensions
}from 'react-native';
import {pHeight,pWidth,pSize} from '../user/util';
const {width,height} = Dimensions.get('window');
export default class HelpTwo extends Component{
    static navigationOptions = ({navigation}) => ({
        title:`${navigation.state.params.question}`,
        headerTitleStyle:{
            flex: 1,
            textAlign:'center'
        },
        headerRight:React.createElement(View, null, null),
    });
    render(){
        const {params} = this.props.navigation.state;
        return(
                <View style={styles.container}>
                    <View style={styles.one}>
                        <Text style={{fontSize:pSize(22),color:'black',borderBottomColor:'black',borderBottomWidth:pHeight(1)}}>{params.question}</Text>
                        <Text style={{fontSize:18}}>{params.answer}</Text>
                    </View>
                </View>
            );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    one:{
        width:pWidth(width-40),
        marginLeft:pWidth(20),
        marginRight:pWidth(20),
    }
});
