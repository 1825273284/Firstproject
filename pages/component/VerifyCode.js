import React, {Component} from 'react';
import {View, Keyboard, TouchableWithoutFeedback, TextInput, StyleSheet, Text} from 'react-native'
import {pHeight, pSize, pWidth} from "../user/util";

export default class VerifyCode extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numArray: [],
        }
    }

    changeText = async (input) => {
        const {nai} = this.props;
        let text = input;
        let numArray = [];
        switch (input.length) {
            case 1:
                for (let i = 0; i < 1; i++) {
                    numArray[i] = text.substr(i, 1);
                }
                break;
            case 2:
                for (let i = 0; i < 2; i++) {
                    numArray[i] = text.substr(i, 1);
                }
                break;
            case 3:
                for (let i = 0; i < 3; i++) {
                    numArray[i] = text.substr(i, 1);
                }
                break;
            case 4:
                for (let i = 0; i < 4; i++) {
                    numArray[i] = text.substr(i, 1);
                }
                break;
            case 5:
                for (let i = 0; i < 5; i++) {
                    numArray[i] = text.substr(i, 1);
                }
                break;
            case 6:
                for (let i = 0; i < 6; i++) {
                    numArray[i] = text.substr(i, 1);
                }
                await this.setState({
                    numArray: numArray
                });
                this.props.navigation.navigate();
                break;
            default:
        }
        console.log(input);
        console.log(numArray);
        await this.setState({
            numArray: numArray
        });
        numArray.length = 0;
    };


    render() {
        const {numArray} = this.state;
        return <View style={styles.container1}>
            <TextInput
                style={styles.textInput}
                maxLength={7}
                keyboardType={"numeric"}
                caretHidden={true}
                onChangeText={(text) => this.changeText(text)}
                onSubmitEditing={Keyboard.dismiss}
            />
            <View style={{justifyContent: "space-between", flexDirection: "row", width: pWidth(340)}}>
                <View style={styles.line}/>
                <View style={styles.line}/>
                <View style={styles.line}/>
                <View style={styles.line}/>
                <View style={styles.line}/>
                <View style={styles.line}/>
            </View>
            <View style={styles.showTextView}>
                <Text style={styles.showText}>{numArray[0]}</Text>
                <Text style={styles.showText}>{numArray[1]}</Text>
                <Text style={styles.showText}>{numArray[2]}</Text>
                <Text style={styles.showText}>{numArray[3]}</Text>
                <Text style={styles.showText}>{numArray[4]}</Text>
                <Text style={styles.showText}>{numArray[5]}</Text>
            </View>
        </View>;

    }

};
const styles = StyleSheet.create({
    container1: {
        width: pWidth(340),
        height: pHeight(60),
        backgroundColor: '#F5FCFF',
    },
    textInput: {
        width: pWidth(340),
        height: pHeight(40),
        fontSize: pSize(20),
        color: "white",
        marginLeft: pWidth(19)
    },
    line: {
        width: pWidth(45),
        height: pHeight(2),
        marginLeft: pWidth(5),
        backgroundColor: "#88898b"
    },
    showText: {
        fontSize: pSize(20),
        marginRight: pWidth(47),
        color: "#88898b"
    },
    showTextView: {
        flexDirection: "row",
        marginLeft: pWidth(20),
        marginTop: pHeight(15),
        width: pWidth(340),
        position: "absolute",
        zIndex: 2
    }
});
