import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const UnderLineButton = ({ onPress, children }) => (
	<TouchableOpacity
		onPress={onPress}
		style={{
			flex: 1.5,
			marginBottom: 1,
			marginTop: 15,
			justifyContent: 'flex-end',
			borderBottomColor: '#1ABAEF',
			borderBottomWidth: 1
		}}
	>
		<Text style={Styles.textStyle}> {children} </Text>
	</TouchableOpacity>
);

const Styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#1ABAEF',
		fontSize: 20,
		paddingTop: 5,
		paddingBottom: 22,
		fontWeight: 'normal'

	}
};

export { UnderLineButton };
