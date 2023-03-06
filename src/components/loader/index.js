import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {GlobalStyles} from '../../constants';

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
