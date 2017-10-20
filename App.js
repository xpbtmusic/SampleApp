/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
    AppRegistry
} from 'react-native';
import LoginScreen from "./js/login/LoginScreen";
import SampleTabView from "./js/SampleTabView";
import {StackNavigator} from "react-navigation";


export const appNav = StackNavigator({
    LoginScreen: { screen: LoginScreen,
        navigationOptions:{}},
    SampleTabView: { screen: SampleTabView },
});

//AppRegistry.registerComponent('appNavConfig', () => appNav);
