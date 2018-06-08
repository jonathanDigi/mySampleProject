import React from 'react';
import { View, TextInput } from 'react-native';

const Input = ({ value, onChangeText, placeholder, secureTextEntry }) => {
	const { inputStyle, containerStyle } = styles;

	return (
		<View style={(containerStyle, { justifyContent: 'center', alignItems: 'center', flex: 1 })}>
			<TextInput
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				autoCorrect={false}
				style={inputStyle}
				onChangeText={onChangeText}
				value={value}
			/>
		</View>
	);
};

const styles = {
	inputStyle: {
		color: '#000',
		fontSize: 18,
		lineHeight: 25,
		height: 35,
		width: 300,
		borderBottomColor: '#E5E5E5',
		borderBottomWidth: 2,


	},

	containerStyle: {
		flexDirection: 'row',
		alignItems: 'center'
	}
};

export { Input };
