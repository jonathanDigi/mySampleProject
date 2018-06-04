import React from 'react';
import { View } from 'react-native';


const CardSection = (props) => (

  <View style={[Styles.containerStyle, props.style]}>
    {props.children}
  </View>
  );


const Styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: 'white',
    position: 'relative',
    width: null
  }

};


export { CardSection };
