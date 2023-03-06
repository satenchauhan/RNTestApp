import React from 'react';
import {StyleSheet, Platform} from 'react-native';
import {GlobalStyles} from '../../constants';

export const inputFieldStyles = StyleSheet.create({
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    padding: 7,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 0 : 12,
    paddingLeft: 10,
    color: '#05375a',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
});
