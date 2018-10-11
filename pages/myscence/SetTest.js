import React,{Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    AsyncStorage,
    StyleSheet,
    Dimensions,
    StatusBar
}from 'react-native';
const {width,height} = Dimensions.get('window');
import {pSize,pHeight,pWidth} from '../user/util';
import ImagePicker from "react-native-image-picker";
import Icon from 'react-native-vector-icons/AntDesign'
export default class SetTest extends Component{
    constructor(props){
        super(props);
        this.state={
            Image:null,
            name:null,
            num:1,
        }
    }
    componentDidMount(){
        this.load();
    }
    ImagePickerTest=()=>{
        let options={
            title:'上传头像',
            takePhotoButtonTitle:'拍照',
            cancelButtonTitle:'取消',
            chooseFromLibraryButtonTitle:'选择相册',
            quality:0.75,
            aspectX:2,
            aspectY:1,
            allowsEditing:true,
            storageOptions:{
                skipBackup:true
            }
        };
        ImagePicker.showImagePicker(options,(response)=>{
            if(response.didCancel){
                return null;
            }else if(response.error){
                alert("出现错误"+ response.error)
            }else{
                let source = response.uri;
                this.save(source);
                this.load();
            }
        })
    };
    save(url){
       AsyncStorage.setItem("UserImage",url,(error)=>{
           if(!error){
              alert('保存成功');
           }
       })
    }
   load = async()=>{
        try{
            const img = await  AsyncStorage.getItem('UserImage');
            const name = await AsyncStorage.getItem('UserName');
            this.setState({Image:img,name:name})
        }catch (e) {
            alert('error');
        }
   };
    render(){
        const {params} = this.props.navigation.state;
        return(
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    barStyle={'dark-content'}
                    backgroundColor={'white'}
                />
                <TouchableOpacity
                    onPress={this.ImagePickerTest.bind(this)}
                >
                 <View style={styles.One}>
                     <Text>头像</Text>
                     <View style={styles.OneTwo}>
                         {
                             this.state.Image === null ?
                                 <Image
                                     source={{uri:'http://ww1.sinaimg.cn/large/005T39qagy1fvwbh5z8ujj31hc0u0kjl.jpg'}}
                                     style={styles.Image}
                                 />
                                 :<Image source={{uri:this.state.Image}} style={styles.Image}/>
                         }
                         <Icon name={'right'} size={20} color={'black'} style={styles.IconStyle}/>
                     </View>
                 </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('SetName')}>
                    <View style={[styles.One,{height:50}]}>
                        <Text>昵称</Text>
                        <View style={styles.OneTwo}>
                            {
                                this.state.name === null ?
                                    <Text style={styles.text}>blue sky</Text>
                                    : <Text style={styles.text}>{this.state.name}</Text>
                            }
                            <Icon name={'right'} size={20} color={'black'} style={styles.IconStyle}/>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('SetCall')}>
                    <View style={[styles.One,{height:50}]}>
                        <Text>手机号</Text>
                        <View style={styles.OneTwo}>
                            <Text style={styles.text}>13594709069</Text>
                            <Icon name={'right'} size={20} color={'black'} style={styles.IconStyle}/>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('SetCode')}>
                    <View style={[styles.One,{height:50}]}>
                        <Text>修改密码</Text>
                        <Icon name={'right'} size={20} color={'black'} style={styles.IconStyle}/>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
const  styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:5,
        backgroundColor:'white'
    },
    One:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        height:pHeight(100),
        width:pWidth(width),
        borderBottomWidth:0.3,
        marginRight:pWidth(50),
        marginLeft:pWidth(5)
    },
    OneTwo:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    },
    Image:{
        width:pWidth(80),
        height:pHeight(80),
        borderRadius:40,
        marginRight:pWidth(5)
    },
    text:{
        color:'black',
        marginRight:pWidth(5)
    },
    IconStyle:{
        marginRight:pWidth(10)
    }
});
