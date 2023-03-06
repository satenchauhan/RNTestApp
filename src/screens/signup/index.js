import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import {SignupForm, TopStatusBar} from '../../components';

const height = Dimensions.get('screen').height;
const SignUpScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <TopStatusBar bgColor="rgba(16, 176, 176, 1)" />
      <ScrollView containerStyle={{flex: 1}} style={{marginTop: 50}}>
        <View style={styles.container}>
          <SignupForm />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

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
