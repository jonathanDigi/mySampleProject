import React from 'react';
import { View } from 'react-native';


const CopyRightSection = (props) => (

  <View style={[Styles.containerStyle, props.style]}>
    {props.children}
  </View>
  );


const Styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: 'white',
    position: 'relative',
    width: null,
    marginBottom: 10
  }

};


export { CopyRightSection };
