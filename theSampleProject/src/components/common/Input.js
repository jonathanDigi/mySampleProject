import React from 'react';
import { Hoshi } from 'react-native-textinput-effects';
import { View } from 'react-native';

const Input = ({ value, onChangeText, placeholder, secureTextEntry }) => {
	const { inputStyle, containerStyle } = styles;
	return (
		<View style={(containerStyle, { justifyContent: 'center', alignItems: 'center', flex: 1 })}>
			<Hoshi
				autoFocus
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				style={inputStyle}
				onChangeText={onChangeText}
				autoCorrect={false}
				value={value}
				// this is applied as active border and label color
				borderColor={'#1ABAEF'}
				// this is applied as passive border and label color
				backgroundColor={'#fff'}
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
		//borderBottomColor: '#E5E5E5',
	//	borderBottomWidth: 2
	},

	containerStyle: {
		flexDirection: 'row',
		alignItems: 'center'
	}
};

export { Input };
