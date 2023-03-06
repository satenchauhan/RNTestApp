import React from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

function IconButton({icon, size, color, onPress}) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <View>
        <Ionicon name={icon} size={30} color={color} />
      </View>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.75,
  },
});
