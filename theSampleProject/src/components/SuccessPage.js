import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Card } from './common';
import { DIGILOCKLOGO } from './Images';

class SuccessPage extends Component {
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
						<Text style={Styles.greenTextStyle}>SUCCESSFULLY LOGGED IN!!!</Text>
						<Text style={Styles.greenTextStyle}>
							Welcome {this.props.email} 
						</Text>
					</View>
				</CardSection>
			</Card>
		);
	}
}

const Styles = {
	textStyle: {
		fontSize: 33,
		color: 'black',
		fontStyle: ('bold', 'normal')
	},
	greenTextStyle: {
		fontSize: 33,
		color: '#00FF7F',
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

const MapSateToProps = state => ({
	email: state.auth.email
});

export default connect(MapSateToProps, null)(SuccessPage);
