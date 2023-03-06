import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

function CustomButton({title, onPress}) {
  return (
    <TouchableOpacity style={[styles.signup]} onPress={onPress}>
      <View style={styles.signup}>
        <Text style={styles.textSign}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    marginTop: 30,
  },
  signup: {
    width: '100%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'rgba(16, 176, 176, 1)',
  },
  signWith: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 45,
    borderRadius: 10,
    borderColor: '#009387',
    borderWidth: 1,
    marginTop: 15,
  },
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
    color: '#fff',
  },
  SocialIcon: {
    height: 50,
    width: 40,
    resizeMode: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
});
