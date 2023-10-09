import React from 'react';
import {View, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// Local files
import {RootStackParamList} from '@navigation/types';
import {Input} from '@components';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const AddNewNote = ({}: Props) => {
  return (
    <View className="flex flex-1 bg-white p-4">
      <Text className="text-2xl text-black font-semibold mb-4">
        Add New Notes
      </Text>
      <View className="mb-4" />
      <Input />
    </View>
  );
};

export default AddNewNote;
