import {Text, View, Button, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import Counter from './Counter';
import UseEffectTest from './UseEffectTest';

class CycleMethods extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  /*  componentDidMount() {
    console.log('componentDidMount : when component render first time');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount : Component removed');
  }

  increment() {
    this.setState({count: this.state.count + 1});
  } */
  render() {
    const {count} = this.state;
    return (
      <View style={styles.container}>
        <Text style={[styles.txt, {fontSize: 20, marginBottom: 20}]}>
          CycleMethods
        </Text>

        {/* <Text style={styles.text}>{count}</Text> */}
        {/* <Button
          title="Increment"
          color="blue"
          onPress={this.increment.bind(this)}
        /> */}
        <View style={{flex: 1, marginTop: 40}}>
          {/* <Counter num={count} /> */}
          <UseEffectTest />
        </View>
      </View>
    );
  }
}

export default CycleMethods;

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
