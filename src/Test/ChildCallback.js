import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';

const ChildCallback = ({getColor}) => {
  const [activeColor, setActiveColor] = React.useState('');
  const handleChange = event => {
    const value = event.nativeEvent.text;
    setActiveColor(value);
    getColor(value);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Pass data from child to parent Component</Text>
      <TextInput
        placeholder="Enter Color"
        style={{width: '100%', marginTop: 20}}
        onChange={handleChange}
      />
    </View>
  );
};

export default ChildCallback;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  txt: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
  },
});
