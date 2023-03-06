import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const UseCallBackApp = () => {
  // console.log(data.name);
  return (
    <View style={styles.container}>
      <Text style={[styles.txt, {fontSize: 20}]}>useCallBack Hook</Text>
    </View>
  );
};

export default UseCallBackApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  txt: {
    // textAlign: 'center',
    fontSize: 15,
    marginTop: 10,
    color: 'black',
  },
  countTxt: {
    textAlign: 'center',
    fontSize: 25,
    color: 'blue',
  },
  box: {
    marginTop: 40,
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'red',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});
