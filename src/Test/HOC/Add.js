import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import HOC from './HOC';

const Add = ({count, addNum, name}) => {
  const callAdd = () => {
    addNum();
  };
  return (
    <View>
      <Button title={name} color={'green'} onPress={callAdd} />
      {/* <Text>{count}</Text> */}
    </View>
  );
};

export default HOC(Add);

const styles = StyleSheet.create({});
