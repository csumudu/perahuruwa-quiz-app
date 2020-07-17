import React, { useEffect } from 'react';
import {
  StyleSheet,
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
      <AppRoutes />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
