import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const LSButton = ({ onPress, children, style, textStyle, onPressIn }) => (
	<TouchableOpacity
		onPressIn={onPressIn}
		onPress={onPress}
		style={[Styles.buttonStyle, children.style, style]}
	>
		<Text style={[Styles.textStyle, textStyle]}>{children}</Text>
	</TouchableOpacity>
);

const Styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#1ABAEF',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	},
	buttonStyle: {
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#1ABAEF',
		marginLeft: 30,
		marginRight: 30,
		height: 40,
		marginBottom: 20
	},
	oppositeButtonStyle: {
		alignSelf: 'stretch',
		backgroundColor: '#1ABAEF',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#fff',
		marginLeft: 30,
		marginRight: 30,
		height: 40,
		marginBottom: 20
	},
	oppositeTextStyle: {
		alignSelf: 'center',
		color: '#1ABAEF',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	}
};

export { LSButton };
