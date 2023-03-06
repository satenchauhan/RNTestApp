import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FetchAPI = () => {
  const [data, setData] = React.useState([]);
  const url = 'https://randomuser.me/api';

  const userData = async () => {
    fetch(url)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(data => {
        const users = data.results;
        setData(users);
      })
      .catch(error => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    userData();
  }, []);
  return (
    <View>
      <Text>FetchAPI</Text>
      {data.map((item, x) => (
        <View key={x}>
          <Text>{item.gender}</Text>
          <Text>{item.email}</Text>
          <Text>{item.phone}</Text>
          <Text>{item.cell}</Text>
        </View>
      ))}
    </View>
  );
};

export default FetchAPI;

const styles = StyleSheet.create({});
