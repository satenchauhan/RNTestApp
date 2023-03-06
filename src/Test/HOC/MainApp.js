import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Add from './Add';
import HOC from './HOC';
import Remove from './Remove';

const MainApp = ({count, data}) => {
  // console.log(data.name);
  return (
    <View style={styles.container}>
      <Text style={[styles.txt, {fontSize: 20}]}>
        MainApp for Higher Order Component
      </Text>
      <Text style={styles.txt}>This is {data.name}</Text>
      <Text style={styles.txt}>I am from {data.city}</Text>
      <Text style={styles.txt}>I work as a {data.role}</Text>
      <Text style={styles.txt}>I am working for {data.company}</Text>
      <View style={styles.box}>
        <Text style={styles.countTxt}>{count}</Text>
      </View>
      <View style={styles.button}>
        <Add name="Add Component" />
        <Remove name="Remove Component" />
      </View>
    </View>
  );
};

export default HOC(MainApp);

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
