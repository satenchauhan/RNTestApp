import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {AppIcon} from '../icons';
import {inputFieldStyles} from './styles';
import {inputStyles} from './inputStyles';

export const Input = ({label, invalid, style, textInputConfig}) => {
  const inputStyles = [inputStyles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(inputStyles.inputContainer);
  }

  if (invalid) {
    inputStyles.push(inputStyles.invalidInput);
  }

  return (
    <View style={[inputStyles.inputContainer, style]}>
      <Text style={[inputStyles.label, invalid && inputStyles.invalidLabel]}>
        {label}
      </Text>
      <TextInput
        style={inputStyles}
        selectionColor={'black'}
        {...textInputConfig}
      />
    </View>
  );
};

const labelStyle = [inputFieldStyles.text_footer, {color: 'blue'}];
const pass = ['Password', 'Confirm Password'];
export const InputField = props => {
  const {label, placeholder, placeholderColor, Icon, data, textInputConfig} =
    props;

  return (
    <View style={{marginTop: 10}}>
      <Text style={labelStyle}>{label}</Text>
      <View style={inputFieldStyles.inputBox}>
        {Icon ? (
          <AppIcon
            type={Icon.type}
            name={Icon.name}
            color={Icon.color}
            size={Icon.size}
          />
        ) : null}
        <TextInput
          style={[inputFieldStyles.textInput]}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          selectionColor={'black'}
          {...textInputConfig}
        />
        {data.check_textInputChange ? (
          <Animatable.View animation="bounceIn">
            <AppIcon
              type="feather"
              name="check-circle"
              color="green"
              size={20}
            />
          </Animatable.View>
        ) : null}
        {label === pass[0] || label === pass[1] ? (
          <TouchableOpacity onPress={() => console.log('clicked')}>
            {data.secureTextEntry ? (
              <AppIcon type="feather" name="eye-off" color="grey" size={25} />
            ) : (
              <AppIcon type="feather" name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

/* 
placeholder="Your Email Address"
          placeholderTextColor="#666666"
          autoCapitalize="none"
          onChangeText={() => console.log('onChange')}
          onEndEditing={() => console.log('onEditing')}
*/
