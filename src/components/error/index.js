import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {GlobalStyles} from '../../constants';
import {Colors} from '../../theme';

function ErrorMessage({message}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occurred ?</Text>
      <Text style={styles.text}>{message}</Text>
      {/* <Button title="Okay" onPress={onConfirm} /> */}
    </View>
  );
}

export default ErrorMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: Colors.green,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.danger,
  },
});
