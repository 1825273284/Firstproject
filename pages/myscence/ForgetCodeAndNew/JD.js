import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions} from 'react-native';
import {pWidth,pHeight,pSize} from  '../../user/util'
const {width} = Dimensions.get('window');
export default class Prove extends Component{
    static navigationOptions={
        headerTitleStyle: {
            flex: 1,
            textAlign: 'center'
        },
        headerRight: (
            <View/>
        ),
    };

    constructor(props) {
        super(props);
        this.state = {
            time: 30,
            inputTexts: new Array(6),
            text: '',
            editable: true,
            textTel: this.props.navigation.state.params.text,
        }
    }

    componentDidMount() {
        this.startTime();
    }

    componentWillUnmount() {
        //如果存在this.timer，则使用clearTimeout清空
        this.timer && clearTimeout(this.timer);
    }

    startTime() {
        let that = this;
        this.timer=setInterval(function () {
            if(that.state.time === 0) {
                that.setState({
                    time:0,
                })
            }else{
                that.setState({
                    time: that.state.time - 1,
                })
            }
        }, 1000)
    }

    textLogin() {
        const {params} = this.props.navigation.state;
        console.log(this.state.text);
        if(params.type === 'new'){
            this.props.navigation.navigate('Inivate',{call: this.state.textTel});
        }else{
            this.props.navigation.navigate('SetCode',{call: this.state.textTel});
        }
    }

    renderInputs() {
        let inputs = [];
        const {inputTexts} = this.state;
        for (let i = 0; i < 6; i++) {
            let input = <View style={styles.textInput} key={i}>
                <Text>{inputTexts[i]}</Text>
            </View>;
            inputs.push(input);
        }
        return inputs;
    }

    TextAdd() {
        if(this.state.time === 0){
            return <View style={{height: 30}}/>
        }else {
            return <Text style={{marginLeft:20, marginTop: 10}}>重新发送{this.state.time}s</Text>
        }
    }

    render() {
        const {editable} = this.state; //解构

        return (
            <View style={styles.container} >
                <Text style={styles.textStyle}>发送验证码至:{this.state.textTel}</Text>
                <TouchableOpacity
                    style={styles.partOne}
                    onPress={()=> this.setState({editable:!this.state.editable})}
                >
                    <View style={styles.partOne}>
                        {
                            editable?
                                <TextInput
                                    ref={(ref)=> this._input = ref}
                                    autoFocus={true}
                                    visible={false}
                                    style={{height:1, width:1}}
                                    maxLength={6}
                                    keyboardType={'numeric'}
                                    onChangeText={(text)=> {
                                        this.setState({
                                            inputTexts: Array.from(text),
                                            text: text
                                        });
                                        text.length === 6 && this._input.blur();
                                    }}
                                    onBlur={()=> this.textLogin()}
                                /> : <View/>
                        }
                        {this.renderInputs()}
                    </View>
                </TouchableOpacity>
                {this.TextAdd()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F4F6',
    },
    textStyle: {
        paddingTop: pHeight(15),
        marginLeft: pWidth(20),
        color: 'black',
    },
    partOne: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: width,
    },
    textInput: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: pWidth(5),
        width: pWidth(50),
        height: pHeight(40),
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    }
});
