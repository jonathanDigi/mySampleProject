import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({ onPress, children }) =>
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
     color: 'white',
     fontSize: 20,
     paddingTop: 10,
     paddingBottom: 10,
     letterSpacing: 1
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#1ABAEF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#1ABAEF',
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 100
  }
};

export { Button };
