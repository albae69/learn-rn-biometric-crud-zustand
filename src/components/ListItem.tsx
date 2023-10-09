import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

// Local files
import {Note} from '@models/Note';

interface Prop extends Note {
  onPress: () => void;
}

const ListItem = ({
  title = 'title',
  description = 'description',
  onPress,
}: Prop) => {
  return (
    <TouchableOpacity
      className="mb-5 border-b border-gray-300"
      onPress={onPress}>
      <Text className="text-base font-bold text-black">{title}</Text>
      <Text className="text-sm font-light mb-2 text-black">
        {description.length > 100
          ? `${description.slice(0, 100)}...`
          : description}
      </Text>
    </TouchableOpacity>
  );
};

export default ListItem;
