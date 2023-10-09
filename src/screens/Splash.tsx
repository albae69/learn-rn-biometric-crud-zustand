import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, Text, Alert} from 'react-native';

// Local files
import {RootStackParamList} from '../navigation/types';
import {biometrics} from '@utils';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const Splash = ({navigation}: Props) => {
  const {checkAvailSensor, triggerBiometrics} = biometrics;

  useEffect(() => {
    checkAvailSensor()
      .then(() => {
        triggerBiometrics().then(success => {
          if (success) {
            // TODO: navigate to home screen
            navigation.replace('Home');
          } else {
            Alert.alert('Message', 'Something wrong!');
          }
        });
      })
      .catch(error => {
        console.log('error while check available sensor', error);
        Alert.alert('Message', 'No Sensor Detected!');
      });
  }, []);

  return (
    <View className="flex flex-1 justify-center items-center bg-primary">
      <Text className="text-white text-xl">Secure Notes App</Text>
    </View>
  );
};

export default Splash;
