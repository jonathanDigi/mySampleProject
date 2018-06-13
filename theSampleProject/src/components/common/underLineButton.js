import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const UnderLineButton = ({ onPress, children }) => (
	<TouchableOpacity
		onPress={onPress}
		style={{
		//	flex: 1,
			marginBottom: 10,

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
		paddingBottom: 1,
		fontWeight: 'normal'

	}
};

export { UnderLineButton };
