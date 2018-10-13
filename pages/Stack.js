import React,{Component} from 'react';
import {
    View
} from 'react-native';
import TabTest from './TabTest';
import Mine from './myscence/Mine';
import SetTest from './myscence/SetTest';
import SetName from './myscence/SetName';
import {createStackNavigator} from 'react-navigation';
import MyReward from "./MyReward";
import SetCall from "./myscence/SetCall";
import SetCode from "./myscence/SetCode";
import WeiXin from "./myscence/WeiXin";
import HelpOne from "./myscence/HelpOne";
import HelpTwo from "./myscence/HelpTwo";
import SecondTest from "./src/secondPages/SecondTest";
import ReSend from "./src/secondPages/ReSend";
import Login from "./myscence/LoginTest/Login";
import GetBack from "./myscence/ForgetCodeAndNew/GetBack";
import JD from "./myscence/ForgetCodeAndNew/JD";
import Inivate from "./myscence/ForgetCodeAndNew/Inivate";
import RegisterScene from "./myscence/ForgetCodeAndNew/RegisterScene";
import VerifyCode from "./component/VerifyCode";

const Stack = createStackNavigator({
   TabTest:{
       screen:TabTest,
       navigationOptions:{
           header:null
       }
   },
    Mine:{
       screen:Mine,
        navigationOptions:{
           headerTitle:'关于我们',
            headerTitleStyle:{
                flex: 1,
                textAlign:'center'
            },
            headerRight:React.createElement(View, null, null),
        }
    },
    MyReward:{
       screen:MyReward,
        navigationOptions:{
           headerTitle:'我的奖励',
            headerTitleStyle:{
                flex: 1,
                textAlign:'center'
            },
            headerRight:React.createElement(View, null, null),
        }
    },
    SetTest:{
       screen:SetTest,
    },
    SetName:{
        screen:SetName,
        navigationOptions:{
           header:null
        }
    },
    Second:{
       screen:SecondTest,
        navigationOptions:{
            header:null
        },
    },
    SetCall:{
        screen:SetCall,
        navigationOptions:{
            headerTitle:'手机号',
            headerTitleStyle:{
                flex: 1,
                textAlign:'center'
            },
            headerRight:React.createElement(View, null, null),
        },
    },
    SetCode:{
        screen:SetCode,
        navigationOptions:{
            headerTitle:'修改密码',
            headerTitleStyle:{
                flex: 1,
                textAlign:'center'
            },
            headerRight:React.createElement(View, null, null),
        }
    },
    WeiXin:{
       screen:WeiXin,
        navigationOptions:{
            headerTitle:'微信公众号',
            headerTitleStyle:{
                flex: 1,
                textAlign:'center'
          },
            headerRight:React.createElement(View, null, null),
        }
    },
    HelpOne:{
       screen:HelpOne,
        navigationOptions:{
            headerTitle:'帮助',
            headerTitleStyle:{
                flex: 1,
                textAlign:'center'
            },
            headerRight:React.createElement(View, null, null),
        }
    },
    HelpTwo:{
       screen:HelpTwo,
    },
    ReSend:{
        screen:ReSend,
        navigationOptions:{
            headerTitle:"意见反馈",
            headerTitleStyle:{
                flex: 1,
                textAlign:'center'
            },
            headerRight:React.createElement(View, null, null),
        }
    },
    Login:{
        screen:Login,
    },
    GetBack:{
       screen:GetBack,
        navigationOptions:{
            headerTitle:"找回密码",
            headerTitleStyle:{
                flex: 1,
                textAlign:'center'
            },
            headerRight:React.createElement(View, null, null),
        }
    },
    JD:{
        screen:JD,
        navigationOptions:{
            headerTitle:"输入验证码",
            headerTitleStyle:{
                flex: 1,
                textAlign:'center'
            },
            headerRight:React.createElement(View, null, null),
        }
    },
    Inivate:{
        screen:Inivate,
        navigationOptions:{
            headerTitle:"输入邀请码",
            headerTitleStyle:{
                flex: 1,
                textAlign:'center'
            },
            headerRight:React.createElement(View, null, null),
        }
    },
    RegisterScene:{
       screen:RegisterScene,
        navigationOptions:{
            headerTitle:"注册",
            headerTitleStyle:{
                flex: 1,
                textAlign:'center'
            },
            headerRight:React.createElement(View, null, null),
        }
    },


});
export default Stack;