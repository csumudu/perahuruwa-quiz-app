import React, { useEffect, Suspense } from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <NavigationContainer >
      <Suspense fallback={<View><Text>Loading...</Text></View>}>
        <AppRoutes />
      </Suspense>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
