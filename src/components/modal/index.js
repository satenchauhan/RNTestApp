import {StyleSheet, Text, View, Modal} from 'react-native';
import React from 'react';

const AppModal = ({getState, setState, style, children}) => {
  return (
    <View style={{flex: 1}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={getState}
        onRequestClose={() => {
          setState(!getState);
        }}>
        <View style={[Styles.centeredView, style]}>{children}</View>
      </Modal>
    </View>
  );
};

export default AppModal;

const Styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
