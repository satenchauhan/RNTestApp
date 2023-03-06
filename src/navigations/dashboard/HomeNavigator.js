import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HOME_ROUTE_PAGE} from '../../constants';
import {ScreenOptionStyle} from '../stack-header';
import {HomeScreen} from '../../screens';

const HomeStack = createNativeStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator screenOptions={ScreenOptionStyle}>
      <HomeStack.Screen name={HOME_ROUTE_PAGE} component={HomeScreen} />
      {/* <HomeStack.Screen name={} component={} /> */}
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;

const styles = StyleSheet.create({});
