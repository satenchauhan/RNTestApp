import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class Counter extends Component {
  constructor() {
    super();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps----->', prevProps.num);
    console.log('this.props.num----->', this.props.num);
    if (prevProps.num !== this.props.num) {
      console.log('Component : update');
    }
  }

  render() {
    const {num} = this.props;
    return (
      <View style={{flex: 0.4, alignItems: 'center'}}>
        <Text>Counter Component</Text>
        <Text style={styles.text}>{num}</Text>
      </View>
    );
  }
}

export default Counter;

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
});
