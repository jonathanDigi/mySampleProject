import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const BackButton = ({ onPress, children }) => (
	<TouchableOpacity onPress={onPress} style={{ flex: 1 }}>
		<Text style={Styles.textStyle}> {children} </Text>
	</TouchableOpacity>
);

const Styles = {
	textStyle: {
		alignSelf: 'flex-start',
		color: '#1ABAEF',
		fontSize: 20,

		paddingTop: 8,
		paddingBottom: 10
	}
};

export { BackButton };
