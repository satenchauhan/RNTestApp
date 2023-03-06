import React, {useState} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import ChildComp from './ChildComp';

const UseEffectTest = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  const [hide, setHideStatus] = useState(false);
  const increment = () => {
    setCount(count + 1);
  };
  const addNum = () => {
    setNum(prev => prev + 1);
  };
  const showHide = () => {
    setHideStatus(hide === false);
  };

  //component didmount
  //component didupdate
  React.useEffect(() => {
    console.log('count : ', count);
  }, [count]); // by passing state in array dependency, it will update on this state
  // if array dependency is empy, it will not call on update, only first time on page load

  React.useEffect(() => {
    console.log('add num :', num);
  }, [num]);

  return (
    <View style={{flex: 0.4, alignItems: 'center'}}>
      <Text>Counter Component</Text>
      <Text style={styles.text}>{'counter 1 : ' + count}</Text>
      <Text style={styles.text}>{'counter 2 : ' + num}</Text>
      <View style={styles.button}>
        <Button title="Counter 1" color="blue" onPress={increment.bind(this)} />
        <Button title="Counter 2" color="green" onPress={addNum.bind(this)} />
      </View>
      <Button title="Show/Hide" color="gray" onPress={showHide} />
      <View style={{marginTop: 15}}>{hide && <ChildComp />}</View>
    </View>
  );
};

export default UseEffectTest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  txt: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 10,
    color: 'black',
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    marginVertical: 20,
    color: 'black',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});
