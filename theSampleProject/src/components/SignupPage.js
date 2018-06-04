import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Card, Input, CardSection, LSButton } from './common';
import { DIGILOCKLOGO } from './Images';

class SignupPage extends Component {
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
					<Input label="Email:" placeholder="email@yahoo.com" />
				</CardSection>

				<CardSection>
					<Input secureTextEntry label="Password:" placeholder="password" />
				</CardSection>

				<CardSection style={{ marginTop: 175 }}>
					<LSButton> Create</LSButton>
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
	}
};

export default SignupPage;
