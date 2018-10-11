import React, { Component } from 'react';
import {Dimensions, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import TopNavigator from "../../component/TopNavigator";
import {pHeight, pSize} from "../../user/util";
import Item from "../../component/Item";



export default class Five extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            oneData:
                [{
                    key: 1,
                    images: require("../img/xinkouzi/icon1.png"),
                    topText: "CM-妥妥花",
                    detailText: "周期长零审核",
                    comeUp: ""
                },
                    {
                        key: 2,
                        images: require("../img/xinkouzi/icon2.png"),
                        topText: "CM-优品钱袋",
                        detailText: "利息超低",
                        comeUp: ""
                    },
                    {
                        key: 3,
                        images: require("../img/xinkouzi/icon3.png"),
                        topText: "CM-快来借",
                        detailText: "审核10分钟",
                        comeUp: ""
                    },
                    {
                        key: 4,
                        images: require("../img/xinkouzi/icon4.png"),
                        topText: "CM-优易借",
                        detailText: "芝麻600分",
                        comeUp: ""
                    },
                    {
                        key: 5,
                        images: require("../img/xinkouzi/icon4.png"),
                        topText: "CM-优易借",
                        detailText: "芝麻600分",
                        comeUp: ""
                    },

                ],
        }
    }
    render() {
        const {oneData} = this.state;
        return (
            <View style={styles.container}>
                <TopNavigator
                    title={"低利率"}
                />
                <Image
                    source={require('../img/dililu/dililv_img.png')}
                    style={{width: width, height: pHeight(175)}}
                />
                <FlatList
                    renderItem={({item}) => {
                        return (<Item
                            images={item.images}
                            topText={item.topText}
                            detailText={item.detailText}
                        />)
                    }}
                    data={oneData}
                    keyExtractor={item => item.key.toString}
                    numColumns={1}
                    ListFooterComponent={() => {
                        return <View style={{justifyContent: "center",alignItems: "center",width:width}}>
                            <Text style={{fontSize:pSize(17),color:"grey"}}>没有更多了</Text>
                        </View>
                    }}
                />
            </View>
        );
    }
}

const {width} = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});
