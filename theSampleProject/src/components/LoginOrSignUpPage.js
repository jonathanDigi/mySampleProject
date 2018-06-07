import React from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, Image } from 'react-native';
import { CardSection, Card, LSButton } from './common';
import { DIGILOCKLOGO } from './Images';

const LoginOrSignUpPage = () => (
	<Card>
		<CardSection style={{ marginTop: 50 }}>
			<View>
				<Image style={{ width: 300, height: 55 }} source={DIGILOCKLOGO} />
			</View>
		</CardSection>

		<CardSection>
			<View>
				<Text style={Styles.blueTextStyle}> Package Locker </Text>
			</View>
		</CardSection>
		<CardSection>
			<View>
				<Text style={Styles.securePackagesStyle}> Simply Secure your Packages </Text>
			</View>
		</CardSection>
		<CardSection style={{ marginTop: 70, flexDirection: 'column' }}>
			<LSButton onPress={() => Actions.LoginPage()} style={Styles.textStyle}>
				Login
			</LSButton>
		</CardSection>
		<CardSection style={{ marginTop: 20, flexDirection: 'column' }}>
			<LSButton onPress={() => Actions.SignupPage()}> Signup </LSButton>
		</CardSection>
	</Card>
);

const Styles = {
	textStyle: {
		fontSize: 33,
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
	}
};

export default LoginOrSignUpPage;
