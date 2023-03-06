import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import {LoginForm, TopStatusBar} from '../../components';

const height = Dimensions.get('screen').height;
// console.log(height);
const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <TopStatusBar bgColor="rgba(16, 176, 176, 1)" />
      <ScrollView containerStyle={{flex: 1}} style={{marginTop: 50}}>
        <View style={styles.container}>
          <LoginForm />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(16, 176, 176, 1)',
    width: '100%',
    height: height,
  },
});
