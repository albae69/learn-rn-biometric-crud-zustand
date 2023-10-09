import React from 'react';
import {View, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// Local files
import {RootStackParamList} from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
