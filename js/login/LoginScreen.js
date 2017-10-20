import React, { Component } from 'react';
import Logo from '../common/Logo';
import Form from '../common/Form';
import Wallpaper from '../common/Wallpaper';
import ButtonSubmit from '../common/ButtonSubmit';
import SignupSection from '../common/SignupSection';

export default class LoginScreen extends Component {
	render() {
		return (
			<Wallpaper>
				<Logo />
				<Form />
				<SignupSection/>
				<ButtonSubmit/>
			</Wallpaper>
		);
	}
}
