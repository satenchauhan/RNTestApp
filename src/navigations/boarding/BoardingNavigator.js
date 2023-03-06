import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, LoginScreen, BoradingScreen} from '../../screens';
import {ScreenOptionStyle} from '../stack-header';

// Page Routes
export const BOARDING_PAGE_ROUTE = 'OnBoardingPage';
export const LOGIN_PAGE_ROUTE = 'LoginPage';
const BoardStack = createNativeStackNavigator();

/**
 *
 * @returns
 */
export default function BoardingNavigator() {
  return (
    <BoardStack.Navigator
      headerMode="none"
      initialRouteName={BoradingScreen}
      screenOptions={ScreenOptionStyle}>
      <BoardStack.Screen
        name={BOARDING_PAGE_ROUTE}
        component={BoradingScreen}
      />
    </BoardStack.Navigator>
  );
}
