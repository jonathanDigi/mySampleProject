import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, logInUser } from '../actions';
import { Card, Input, CardSection, Button, Spinner } from './common';

class LoginPage extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}
	onButtonPress() {
		const { email, password } = this.props;

		this.props.logInUser({ email, password });
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
			<KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
				<Card>
					<CardSection
						style={{
							flex: 0.5,
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						<View>
							<Text style={Styles.blueTextStyle}> Login </Text>
						</View>
					</CardSection>

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

						<Input
							secureTextEntry
							placeholder="Password"
							secureTextEntry
							onChangeText={this.onPasswordChange.bind(this)}
							value={this.props.password}
						/>
					</CardSection>

					{this.renderError()}
					<CardSection
						style={{
							marginTop: 10,
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						<Button onPress={this.onButtonPress.bind(this)}>SUBMIT</Button>;
					</CardSection>
				</Card>
			</KeyboardAvoidingView>
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
