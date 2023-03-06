import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {LOGIN_ROUTE_PAGE} from '../../constants';
import CustomButton from '../buttons/CustomButton';
import NavigateButton from '../buttons/NavigateButton';
import {AppIcon} from '../icons';
import {InputField} from '../input';
import {styles} from '../styles';

const SignupForm = () => {
  const [data, setData] = React.useState({
    fullname: '',
    email: '',
    password: '',
    confirmPasswprd: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  // const {colors} = useTheme();
  const labelStyle = [styles.text_footer, {color: 'blue'}];

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.text_header}>Sign Up</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <InputField
          label="Fullname"
          placeholder="Enter Your Fullname"
          placeholderColor="#666666"
          data={data}
          Icon={{
            type: 'fontisto',
            name: 'email',
            color: 'blue',
            size: 30,
          }}
          textInputConfig={{
            onChangeText: text => setData({data: {fulname: text}}),
            onEndEditing: console.log('editing'),
            value: data.fullname,
          }}
        />
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
        <InputField
          label="Confirm Password"
          placeholder="Re-enter Your Password"
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
            value: data.confirmPasswprd,
          }}
        />

        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password must be 8 characters long.
            </Text>
          </Animatable.View>
        )}

        <View style={styles.button}>
          <CustomButton
            title={'Sign Up'}
            onPress={() => console.log('button')}
          />
          <View style={styles.signUp}>
            <Text style={{fontSize: 14}}>Already have an account ? </Text>
            <NavigateButton
              screen={LOGIN_ROUTE_PAGE}
              ButtonName={'Login !'}
              ButtonIcon={null}
              style={null}
            />
          </View>
        </View>
      </Animatable.View>
    </>
  );
};

export default SignupForm;
