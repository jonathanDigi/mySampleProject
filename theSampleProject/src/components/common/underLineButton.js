import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const UnderLineButton = ({ onPress, children }) => (
	<TouchableOpacity onPress={onPress} style={{ flex: 1 }}>
		<Text style={Styles.textStyle}> {children} </Text>
	</TouchableOpacity>
);

const Styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#1ABAEF',
		fontSize: 20,
		paddingTop: 10,
		paddingBottom: 10,
    borderBottomWidth: 2
	}
};

export { UnderLineButton };
