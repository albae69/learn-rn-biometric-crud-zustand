import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';

// Local files
import Navigation from '@navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="default" />
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;
