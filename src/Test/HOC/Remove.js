import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import HOC from './HOC';

const Remove = ({count, removeNum, name}) => {
  return (
    <View>
      <Button title={name} color={'red'} onPress={removeNum} />
      {/* <Text>{count}</Text> */}
    </View>
  );
};

export default HOC(Remove);

const styles = StyleSheet.create({});
