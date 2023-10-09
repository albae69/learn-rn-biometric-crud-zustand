import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Local files
import {RootStackParamList} from './types';
import {Splash, Home, AddNewNote} from '@screens';

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddNewNote" component={AddNewNote} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
