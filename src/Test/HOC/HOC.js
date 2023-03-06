import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

//Higher Order Component
const HOC = Component => {
  function HOC(props) {
    const [count, setCount] = useState(0);

    const addNum = () => {
      setCount(prev => prev + 1);
    };

    const removeNum = () => {
      setCount(prev => prev - 1);
    };
    //data object to pass to incoming component
    const dataObject = {
      name: 'Saten Pratap Chauhan',
      city: 'Kanpur, UP',
      role: 'Mobile App Developer',
      company: 'Kastech Software Solutions',
    };

    return (
      <>
        <Component
          data={dataObject}
          count={count}
          addNum={addNum}
          removeNum={removeNum}
          {...props}
        />
      </>
    );
  }
  return HOC;
};

export default HOC;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
