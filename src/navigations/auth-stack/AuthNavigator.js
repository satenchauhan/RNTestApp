import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BoardingScreen, LoginScreen, SignUpScreen} from '../../screens';
import {ScreenOptionStyle} from '../stack-header';
import {
  BOARDING_ROUTE_PAGE,
  LOGIN_ROUTE_PAGE,
  SINGUP_ROUTE_PAGE,
} from '../../constants';

const AuthStack = createNativeStackNavigator();

/**
 *
 * @returns
 */
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator headerMode="none" screenOptions={{headerShown: false}}>
      {/* <AuthStack.Screen name={BOARDING_ROUTE_PAGE} component={BoardingScreen} /> */}
      <AuthStack.Screen name={LOGIN_ROUTE_PAGE} component={LoginScreen} />
      <AuthStack.Screen name={SINGUP_ROUTE_PAGE} component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
