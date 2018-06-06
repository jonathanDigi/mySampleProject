import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, createAndLogInUser } from '../actions';
import { Card, Input, CardSection, Button, Spinner } from './common';
import { DIGILOCKLOGO } from './Images';

class SignupPage extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}
	onButtonPress() {
		const { email, password } = this.props;
		this.props.createAndLogInUser({ email, password });
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
		return <Button onPress={this.onButtonPress.bind(this)}>Create</Button>;
	}
	render() {
		return (
			<Card>
				<CardSection style={{ marginTop: 50 }}>
					<View>
						<Image style={{ width: 300, height: 55 }} source={DIGILOCKLOGO} />
					</View>
				</CardSection>
				<CardSection>
					<View>
						<Text style={Styles.blueTextStyle}> Signup </Text>
					</View>
				</CardSection>
				<CardSection>
					<Input
						label="Email:"
						placeholder="email@yahoo.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</CardSection>

				<CardSection>
					<Input
						secureTextEntry
						label="Password:"
						placeholder="password"
						secureTextEntry
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
					/>
				</CardSection>
				{this.renderError()}
				<CardSection style={{ marginTop: 175 }}>
					<Button onPress={this.onButtonPress.bind(this)}>Create</Button>;
				</CardSection>
			</Card>
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
		fontStyle: ('bold', 'normal')
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

export default connect(MapSateToProps, { emailChanged, passwordChanged, createAndLogInUser })(
	SignupPage
);
