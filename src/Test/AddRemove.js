import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const AddRemove = () => {
  const [data, setData] = React.useState([
    {
      name: 'Aman Kumar',
      amount: 220,
    },
    {
      name: 'Raman Kumar',
      amount: 210,
    },
  ]);

  const addColumn = () => {
    let temp = [...data];
    temp.push({name: '', amount: 0});
    setData(temp);
  };

  const addName = (val, i) => {
    let temp = [...data];
    temp[i].name = val;
    setData(temp);
  };

  const addAmount = (val, i) => {
    let temp = [...data];
    temp[i].amount = val;
    setData(temp);
  };

  const totalAmount = () => {
    let total = 0;
    let sum = data.reduce((sum, value) => {
      return parseInt(sum) + parseInt(value.amount);
    }, 0);
    return sum;
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.txt}>Name</Text>
        <Text style={styles.txt}>Amount</Text>
      </View>
      {data.map((item, i) => (
        <View
          key={i}
          style={[
            styles.input,
            i >= 0 ? {borderTopWidth: 0} : {borderTopWidth: 2},
          ]}>
          <TextInput
            // style={{}}
            name="name"
            placeholder="Name"
            onChangeText={val => addName(val, i)}
            value={item.name}
          />
          <TextInput
            style={{width: 60}}
            name="amount"
            placeholder={'Amount'}
            keyboardType="numeric"
            maxLength={6}
            onChangeText={val => addAmount(val, i)}
            value={`${item.amount}`}
          />
        </View>
      ))}
      <View style={styles.addButton}>
        <TouchableOpacity style={styles.touch} onPress={addColumn}>
          <Text style={[styles.th, {color: '#ffffff'}]}>Add +</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.total}>
        <Text style={styles.txt}>
          Total amount = <Text style={styles.toTxt}>{totalAmount()}</Text>{' '}
        </Text>
      </View>
    </ScrollView>
  );
};

export default AddRemove;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderWidth: 2,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 2,
  },
  txt: {
    fontSize: 25,
    fontWeight: '500',
  },
  th: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  addButton: {
    alignSelf: 'center',
    marginTop: 20,
  },
  touch: {
    backgroundColor: 'green',
    width: 120,
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  total: {
    marginTop: 30,
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    width: '100%',
    borderWidth: 2,
  },
  toTxt: {
    color: 'green',
    marginHorizontal: 10,
  },
});
