import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const LoginSignUpButton = ({ onPress, children }) =>
  (
    <TouchableOpacity onPress={onPress} style={Styles.buttonStyle} >
      <Text style={Styles.textStyle}>
       {children}
      </Text>
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
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#1ABAEF',
    marginLeft: 30,
    marginRight: 30,
    paddingTop: 1,
    paddingBottom: 10
  }
};

export { LoginSignUpButton };
