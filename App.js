/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 * @flow strict-local
 *
 */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {AddRemove, CycleMethods, FetchAPI, MainApp, Parent} from './src/Test';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <AddRemove /> */}
      {/* <Parent /> */}
      {/* <MainApp /> */}
      {/* <CycleMethods /> */}
      <FetchAPI />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    margin: 2,
    backgroundColor: 'grean',
  },
});
