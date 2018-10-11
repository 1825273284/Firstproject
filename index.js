/** @format */

import {AppRegistry,YellowBox,AsyncStorage} from 'react-native';
import {name as appName} from './app.json';
import Stack from "./pages/Stack";
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import Storage from 'react-native-storage';
import VerifyCode from "./pages/component/VerifyCode";
let storage = new Storage({
    size:2000,
    storageBackend:AsyncStorage,
    defaultExpires:null,
    enableCache:true,
    sync:null
});
global.storage =storage;
AppRegistry.registerComponent(appName, () => Stack);