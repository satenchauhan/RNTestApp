import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {SINGUP_ROUTE_PAGE} from '../../constants';
import CustomButton from '../buttons/CustomButton';
import NavigateButton from '../buttons/NavigateButton';
import {AppIcon} from '../icons';
import {InputField} from '../input';
import {styles} from '../styles';

const LoginForm = () => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  const labelStyle = [styles.text_footer, {color: 'blue'}];

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.text_header}>Login</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={[styles.footer]}>
        <InputField
          label="Email"
          placeholder="Your Email Address"
          placeholderColor="#666666"
          data={data}
          Icon={{
            type: 'fontisto',
            name: 'email',
            color: 'blue',
            size: 30,
          }}
          textInputConfig={{
            onChangeText: console.log('hello'),
            onEndEditing: console.log('editing'),
            value: data.email,
          }}
        />
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Username must be 4 characters long.
            </Text>
          </Animatable.View>
        )}
        <InputField
          label="Password"
          placeholder="Enter Your Password"
          placeholderColor="#666666"
          data={data}
          Icon={{
            type: 'feather',
            name: 'lock',
            color: 'blue',
            size: 30,
          }}
          textInputConfig={{
            onChangeText: console.log('hello'),
            onEndEditing: console.log('editing'),
            value: data.password,
          }}
        />

        <NavigateButton
          screen={'forgotScreen'}
          ButtonName={'Forgot password?'}
          ButtonIcon={null}
          style={{color: '#009387', marginTop: 15}}
        />
        <View style={styles.button}>
          <CustomButton onPress={() => console.log('Login')} title={'Login'} />
          <View style={styles.signUp}>
            <Text style={{fontSize: 14}}>Do not have an account ? </Text>
            <NavigateButton
              screen={SINGUP_ROUTE_PAGE}
              ButtonName={'Sign Up !'}
              ButtonIcon={null}
              style={null}
            />
          </View>
        </View>
      </Animatable.View>
    </>
  );
};

export default LoginForm;
