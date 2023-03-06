/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 * @flow strict-local
 *
 */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ChildCallback from './ChildCallback';

// Parent component
const Parent = () => {
  const [UIColor, setUIColor] = React.useState(null);

  // callback function
  const getColor = color => {
    setUIColor(color);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.txt}></Text>
      <ChildCallback getColor={getColor} />
    </View>
  );
};

export default Parent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    margin: 2,
    backgroundColor: 'grean',
  },
  txt: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
  },
});
