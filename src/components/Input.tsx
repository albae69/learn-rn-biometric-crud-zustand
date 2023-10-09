import React from 'react';
import {View, Text, TextInput, TextInputProps} from 'react-native';

interface Props extends TextInputProps {
  label: string;
  errorMessage: string;
}

const Input = ({label, errorMessage, ...props}: Partial<Props>) => {
  return (
    <View className="w-full mb-4">
      <Text className="text-sm font-normal mb-2 text-black">
        {label || 'Label'}
      </Text>
      <TextInput
        className={`border border-gray-300 rounded-lg h-[40px] px-2 shadow-lg bg-white focus:border-primary ${
          errorMessage && 'border-red-600'
        }`}
        {...props}
      />
      {errorMessage && (
        <Text className="mt-0.5 text-xs  text-red-600">{errorMessage}</Text>
      )}
    </View>
  );
};

export default Input;
