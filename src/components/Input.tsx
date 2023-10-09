import React from 'react';
import {View, Text, TextInput, TextInputProps} from 'react-native';

interface Props extends TextInputProps {}

const Input = ({...props}: Props) => {
  return (
    <View>
      <Text>Label</Text>
      <TextInput {...props} />
    </View>
  );
};

export default Input;
