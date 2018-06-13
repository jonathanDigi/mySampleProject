import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { emailChanged, passwordChanged, logInUser } from '../actions';
import { Card, Input, CardSection, Button, Spinner, BackButton, UnderLineButton } from './common';

class LoginPage extends Component {
	state = { submitButtonPressed: 'false' };
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}
	onButtonPress() {
		const { email, password } = this.props;
		this.setState({ submitButtonPressed: 'true' });
		if (this.props.email === '' || this.props.password === '') {
			console.log('nothing has been entered');
		} else {
			this.props.logInUser({ email, password });
		}
	}
	renderEmailError() {
		if (this.props.email === '' && this.state.submitButtonPressed === 'true') {
			return (
				<View style={{ backgroundColor: 'white', marginTop: 20 }}>
					<Text style={Styles.errorTextStyle}>{'You must provide a email'}</Text>
				</View>
			);
		}
	}

	renderPasswordError() {
		if (this.props.password === '' && this.state.submitButtonPressed === 'true') {
			return (
				<View style={{ backgroundColor: 'white', marginTop: 20 }}>
					<Text style={Styles.errorTextStyle}>{'You must provide a password'}</Text>
				</View>
			);
		}
	}
	renderError() {
		if (this.props.error) {
			return (
				<View style={{ backgroundColor: 'white' }}>
					<Text style={Styles.errorTextStyle}>{this.props.error}</Text>
				</View>
			);
		}
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="large" />;
		}
		return <Button onPress={this.onButtonPress.bind(this)}>Submit</Button>;
	}
	render() {
		return (
			<View style={{ flex: 1 }}>
				<Card>
					<CardSection
						style={{
							flex: 0.7,
							alignItems: 'center',
							justifyContent: 'center',
							flexDirection: 'column',
							paddingTop: 20
						}}
					>
						<CardSection>
							<BackButton onPress={() => Actions.LoginOrSignUp()}> Back </BackButton>
						</CardSection>
						<View>
							<Text style={Styles.blueTextStyle}> Login </Text>
						</View>
					</CardSection>
					<KeyboardAvoidingView style={{ flex: 2 }} behavior="padding">
						<CardSection
							style={{
								flex: 1,
								alignItems: 'center',
								justifyContent: 'center',
								flexDirection: 'column'
							}}
						>
							<Input
								placeholder="Email"
								onChangeText={this.onEmailChange.bind(this)}
								value={this.props.email}
							/>
							{this.renderEmailError()}
							<Input
								secureTextEntry
								placeholder="Password"
								secureTextEntry
								onChangeText={this.onPasswordChange.bind(this)}
								value={this.props.password}
							/>
							{this.renderPasswordError()}
						</CardSection>
						{this.renderError()}
						<CardSection
							style={{
								marginTop: 10,
								alignItems: 'center',
								justifyContent: 'center',
								flexDirection: 'column'
							}}
						>
							<Button onPress={this.onButtonPress.bind(this)}>SUBMIT</Button>;
							<UnderLineButton onPress={() => Actions.ForgotPage()}>
								Forgot Password
							</UnderLineButton>;
						</CardSection>
					</KeyboardAvoidingView>
				</Card>
			</View>
		);
	}
}

const Styles = {
	textStyle: {
		fontSize: 28,
		color: 'black',
		fontStyle: ('bold', 'normal')
	},
	blueTextStyle: {
		fontSize: 33,
		color: '#1ABAEF',
		fontStyle: ('bold', 'normal'),
		letterSpacing: 2
	},
	CopyrightStyle: {
		fontSize: 11,
		color: '#1ABAEF',
		fontStyle: ('bold', 'normal'),
		flexDirection: 'row'
	},
	securePackagesStyle: {
		fontSize: 20,
		color: '#1ABAEF',
		fontStyle: 'normal',
		flexDirection: 'row'
	},
	errorTextStyle: {
		fontSize: 22,
		color: 'red',
		alignSelf: 'center'
	}
};

const MapSateToProps = state => ({
	email: state.auth.email,
	password: state.auth.password,
	error: state.auth.error
});

export default connect(MapSateToProps, { emailChanged, passwordChanged, logInUser })(LoginPage);
