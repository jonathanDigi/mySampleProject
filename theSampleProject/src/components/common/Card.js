import React from 'react';
import { View } from 'react-native';


const Card = (props) => (
    <View style={styles.containerStyle}>
      {props.children}
     </View>
  );


const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'white',
    borderBottomWidth: 0,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
  
    width: null,
    backgroundColor: 'white',
    flex: 1

  }
};

export { Card };
