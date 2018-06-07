import React from 'react';
import { Text, View } from 'react-native';

const Copyright = () => (
	<View>
		<View
			style={{
				position: 'absolute',
				bottom: 5,
				left: 0,
				right: 0,
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<Text style={Styles.CopyrightStyle}>©Copyright 2018 Digilock by Security People Inc. </Text>
		</View>
	</View>
);

const Styles = {
	CopyrightStyle: {
		fontSize: 11,
		color: '#1ABAEF',
		fontStyle: ('bold', 'normal'),
		flexDirection: 'row'
	}
};

export { Copyright };
