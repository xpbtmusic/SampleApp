import {AppRegistry} from 'react-native';
import LoginScreen from "./js/login/LoginScreen";
import SampleTabView from "./js/SampleTabView";
import {StackNavigator} from "react-navigation";


const appNav = StackNavigator({
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {header: null}
    },
    SampleTabView: {screen: SampleTabView,
        navigationOptions: {title:'SampleApp'}},
});

AppRegistry.registerComponent('SampleApp', () => appNav);
