/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Button, Text, View} from "react-native";
const App = () => {
  return (
    <View style={styles.container}>

    <Text style = {styles.welcome}>
      Hello!
      </Text>
    </View>
  );

 
}
 let styles ={
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFCCCC'
  },
    welcome : {
      fontSize: 20,
      textAlign: 'center',
      margin: 10 
    }
  }

export default App;
