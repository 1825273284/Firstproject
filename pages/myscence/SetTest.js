import React,{Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    AsyncStorage,
    StyleSheet,
    Dimensions,
    StatusBar,
    DeviceEventEmitter
}from 'react-native';
const {width,height} = Dimensions.get('window');
import {pSize,pHeight,pWidth} from '../user/util';
import ImagePicker from "react-native-image-picker";
import Icon from 'react-native-vector-icons/AntDesign'
export default class SetTest extends Component{
    static navigationOptions={
        headerTitle:'设置',
        headerTitleStyle:{
            flex: 1,
            textAlign:'center'
        },
        headerRight:React.createElement(View, null, null),
    };
    constructor(props){
        super(props);
        this.state={
            image:null,
            name:null,
            call:null,
        }
    }
    componentDidMount(){
        this.load();
        this.listener = DeviceEventEmitter.addListener('update',(e)=>{
            if(e==="1"){
                this.load();
            }
        })
    }
    componentWillUnmount(){
       this.listener.remove();
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
    async save(url){
        const {params} = this.props.navigation.state;
        await storage.save({
            key: params.call,  // 注意:请不要在key中使用_下划线符号!
            data:{
                name:params.name,
                code:params.code,
                image:url,
                call:params.call,
            },
            // 如果不指定过期时间，则会使用defaultExpires参数
            // 如果设为null，则永不过期
            expires:null
        });
    }
   load = async()=>{
       const {params} = this.props.navigation.state;
       await storage.load({
           key: params.call,
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
               code:ret.code,
               call:ret.call,
               name:ret.name,
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
   };
    render(){
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
                             this.state.image === null ?
                                 <Image
                                     source={{uri:'http://ww1.sinaimg.cn/large/005T39qagy1fvwbh5z8ujj31hc0u0kjl.jpg'}}
                                     style={styles.Image}
                                 />
                                 :<Image source={{uri:this.state.image}} style={styles.Image}/>
                         }
                         <Icon name={'right'} size={20} color={'black'} style={styles.IconStyle}/>
                     </View>
                 </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('SetName',{call:this.state.call,code:this.state.code,image:this.state.image})}>
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
                            <Text style={styles.text}>{this.state.call}</Text>
                            <Icon name={'right'} size={20} color={'black'} style={styles.IconStyle}/>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('SetCode',{call:this.state.call,name:this.state.name,image:this.state.image,choice:'Second'})}>
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
