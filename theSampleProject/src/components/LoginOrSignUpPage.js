import React from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text } from 'react-native';
import { CardSection, Card, LSButton } from './common';


const LoginOrSignUpPage = () => (
	<Card>
		<CardSection style={{ paddingTop: 30, flex: 1 }}>
			<View
				style={{

					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<Text style={Styles.blueTextStyle}> Package </Text>
				<Text style={Styles.blueTextStyle}> Locker </Text>
			</View>
		</CardSection>
		<CardSection style={{ flex: 0.25 }}>
			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
				<Text style={Styles.securePackagesStyle}> Simply Secure your</Text>
				<Text style={Styles.securePackagesStyle}> packages </Text>
			</View>
		</CardSection>
		<CardSection
			style={{
				flex: 1.5,
				flexDirection: 'column'
			}}
		>
			<LSButton onPress={() => Actions.LoginPage()} >
				Login
			</LSButton>
			<LSButton onPress={() => Actions.SignupPage()} >
				Signup
			</LSButton>
		</CardSection>
	</Card>
);

const Styles = {

	blueTextStyle: {
		fontSize: 50,
		color: '#1ABAEF',
		fontStyle: ('bold', 'normal'),
		fontWeight: 'bold',
		letterSpacing: 12,
		margin: 2
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
		flexDirection: 'column',
		letterSpacing: 6
	}
};

export default LoginOrSignUpPage;
