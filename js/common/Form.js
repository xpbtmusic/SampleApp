import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	KeyboardAvoidingView,
	View,
	TouchableOpacity,
	Image,
} from 'react-native';

import UserInput from '../common/UserInput';
import ButtonSubmit from '../common/ButtonSubmit';
import SignupSection from '../common/SignupSection';

import usernameImg from './img/username.png';
import passwordImg from './img/password.png';
import eyeImg  from './img/eye_black.png';

export default class Form extends Component {
	constructor(props) {
    super(props);
    this.state = {
			showPass: true,
			press: false,
		};
		this.showPass = this.showPass.bind(this);
	}

	showPass() {
  this.state.press === false ? this.setState({ showPass: false, press: true }) :this.setState({ showPass: true, press: false });
  }

	render() {
		return (
			<KeyboardAvoidingView behavior='padding'
				style={styles.container}>
				<UserInput source={usernameImg}
					placeholder='Username'
					autoCapitalize={'none'}
					returnKeyType={'done'}
					autoCorrect={false} />
				<UserInput source={passwordImg}
					secureTextEntry={this.state.showPass}
					placeholder='Password'
					returnKeyType={'done'}
					autoCapitalize={'none'}
					autoCorrect={false} />
					<TouchableOpacity
						activeOpacity={0.7}
						style={styles.btnEye}
						onPress={this.showPass}
					>
						<Image source={eyeImg} style={styles.iconEye} />
					</TouchableOpacity>
			</KeyboardAvoidingView>
		);
	}
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	btnEye: {
    position: 'absolute',
    top: 60,
    right: 28,
  },
  iconEye: {
		alignItems:'center',

	  alignSelf:'center',
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
});
