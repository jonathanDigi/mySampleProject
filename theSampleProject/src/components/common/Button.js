import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => (
	<TouchableOpacity onPress={onPress} style={Styles.buttonStyle}>
		<Text style={Styles.textStyle}>{children}</Text>
	</TouchableOpacity>
);

const Styles = {
	textStyle: {
		color: 'white',
		fontSize: 20,
		textAlign: 'center',
		letterSpacing: 1
	},
	buttonStyle: {
		flex: 3.5,
		alignSelf: 'stretch',
		backgroundColor: '#1ABAEF',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#1ABAEF',
		marginLeft: 16,
		marginRight: 16,
		marginBottom: 5,
		justifyContent: 'center',
		alignItems: 'center'
	}
};

export { Button };
