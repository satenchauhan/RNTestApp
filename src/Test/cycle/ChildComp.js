import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ChildComp = () => {
  useEffect(() => {
    console.log('child component loaded');
    return () => {
      console.log('child component unmounted'); // if component removed or hide that it will call return callback method
    };
  }, []);
  return (
    <View style={styles.box}>
      <Text style={{fontSize: 20, color: 'white'}}>ChildComp</Text>
    </View>
  );
};

export default ChildComp;

const styles = StyleSheet.create({
  box: {
    flex: 0.4,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
  },
});
