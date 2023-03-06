import React from 'react';
import {StatusBar} from 'react-native';

export const TopStatusBar = ({bgColor}) => {
  return (
    <StatusBar
      translucent
      backgroundColor={bgColor == undefined ? 'transparent' : bgColor}
      barStyle="light-content"
    />
  );
};
