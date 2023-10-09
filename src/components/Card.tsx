import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Button from './Button';
import {theme} from '@utils';

// Local files

type Props = {
  title: string;
  description: string;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

const Card = ({title, description, onClose, onEdit, onDelete}: Props) => {
  return (
    <View className="h-[300px] w-full bg-white rounded-lg p-4">
      <View>
        <View className="flex flex-row justify-between items-center mb-4">
          <Text className="text-black text-base">{title}</Text>
          <Button type="Icon" icon="close" onIconPress={onClose} />
        </View>
        <ScrollView>
          <Text className="font-normal text-black">{description}</Text>
        </ScrollView>
      </View>
      <View className="flex flex-row absolute bottom-4 left-4 right-4">
        <Button
          type="ButtonIcon"
          icon="edit"
          title="Edit"
          buttonStyle={{flex: 1}}
          onIconPress={onEdit}
        />
        <View className="mx-1" />
        <Button
          type="ButtonIcon"
          icon="delete"
          title="Delete"
          buttonStyle={{flex: 1, backgroundColor: theme.color.secondary}}
          onIconPress={onDelete}
        />
      </View>
    </View>
  );
};

export default Card;
