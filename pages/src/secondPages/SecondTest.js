import React, { Component } from 'react';

import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    Image,
    TouchableHighlight,
    Dimensions,
    AsyncStorage,
    ImageBackground,
    StatusBar
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import {pHeight, pSize, pWidth} from "../../user/util";
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Five from './Five';
const {width,height} = Dimensions.get('window');
export default class SecondTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'One',
        };
    }
    componentDidMount(){
        const {params} = this.props.navigation.state;
        this.setState({
            selectedTab:params.name
        })
    }
    render(){
        return(
            <View style={styles.container} >
                <TabNavigator tabBarStyle={styles.tab}>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'One'}
                        title="新口子"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderSelectedIcon={() => <Image   source={ require('../img/ativeXinkouzi.png')} style={styles.icon}/> }
                        renderIcon={() => <Image style={styles.icon} source={require('../img/xinkouzi.png')} />}
                        onPress={() => this.setState({ selectedTab: 'One' })}>
                        <One {...this.props}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Two'}
                        title="黑户专区"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderSelectedIcon={() => <Image  source={ require('../img/heihuzhuanqu/activeHeihu.png')} style={styles.icon}/> }
                        renderIcon={() => <Image style={styles.icon} source={require('../img/heihuzhuanqu/heihu.png')} />}
                        onPress={() => this.setState({ selectedTab: 'Two' })}>
                        <Two {...this.props}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Three'}
                        title="长周期"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderSelectedIcon={() => <Image  source={require('../img/changzhouqi/activeChangzh.png')} style={styles.icon}/> }
                        renderIcon={() => <Image style={styles.icon} source={require('../img/changzhouqi/changzhouqi.png')} />}
                        onPress={() => this.setState({ selectedTab: 'Three' })}>
                        <Three {...this.props}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Four'}
                        title="高额度"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderSelectedIcon={() => <Image  source={require('../img/gaoedu/activeGaoedu.png')} style={styles.icon}/> }
                        renderIcon={() => <Image style={styles.icon} source={require('../img/gaoedu/gaoedu.png')} />}
                        onPress={() => this.setState({ selectedTab: 'Four' })}>
                        <Four {...this.props}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Five'}
                        title="低利率"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderSelectedIcon={() => <Image  source={require('../img/dililu/activeDililv.png')} style={styles.icon}/> }
                        renderIcon={() => <Image style={styles.icon} source={require('../img/dililu/dililv.png')} />}
                        onPress={() => this.setState({ selectedTab: 'Five' })}>
                        <Five {...this.props}/>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: pWidth(width)
    },
    tab: {
        height: pHeight(50),
        backgroundColor: '#ffffff',
        alignItems: 'center'
    },
    tabText: {
        marginTop: pHeight(1),
        color: 'gray',
        fontSize: pSize(10)
    },
    selectedTabText: {
        marginTop: pHeight(1),
        color: 'black',
        fontSize: pSize(10)
    },
    icon: {
        width: pWidth(25),
        height: pHeight(25),
        resizeMode: 'stretch',
        marginTop: pHeight(5)
    },
});