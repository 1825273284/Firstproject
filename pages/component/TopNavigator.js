import React, {Component} from 'react';
import {
    StyleSheet, Image, Text, View,TouchableOpacity,StatusBar
} from 'react-native';
import {pHeight, pSize, pWidth} from "../user/util";
import {withNavigation} from 'react-navigation'

class TopNavigator extends Component<Props> {
    render() {
        const {title,navigation} = this.props;
        return (
            <View style={styles.outSizeContainer}>
                <StatusBar
                    animated={true}
                    barStyle={'dark-content'}
                    backgroundColor={'white'}
                />
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack(0)}
                    >
                    <Image
                        source={require('../src/img/back.png')}
                        style={styles.backImg}
                    />
                    </TouchableOpacity>
                    <View style={{width: pWidth(200),marginLeft: pWidth(50),alignItems: "center"}}>
                        <Text style={{fontSize: pSize(23)}}>{title}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    outSizeContainer:{
      height: pHeight(50),
        justifyContent: "center",
        backgroundColor: "white"
    },
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: 'white',
        alignItems: "center",

    },
    backImg: {
        width: pWidth(35),
        height: pHeight(35),
        marginLeft: pWidth(10)
    }
});
export default withNavigation(TopNavigator);