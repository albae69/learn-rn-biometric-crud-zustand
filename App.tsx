import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';

// Local files
import Navigation from '@navigation';
import {storage} from '@utils';

const App = () => {
  console.log('storage keys', storage.getAllKeys());

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="default" />
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;
