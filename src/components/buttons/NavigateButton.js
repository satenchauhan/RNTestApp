import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AppIcon} from '../icons';

function NavigateButton({screen, ButtonName, ButtonIcon, style}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(screen)}>
      {ButtonIcon === null ? (
        <Text style={[style === null ? styles.textSign : style]}>
          {ButtonName}
        </Text>
      ) : (
        <AppIcon
          type={ButtonIcon.type}
          name={ButtonIcon.name}
          color={ButtonIcon.color}
          size={ButtonIcon.size}
        />
      )}
    </TouchableOpacity>
  );
}

export default NavigateButton;

const styles = StyleSheet.create({
  signUp: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 15,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#009387',
  },
});
