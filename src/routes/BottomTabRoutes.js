import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeRoutes from './HomeRoutes';
import MyProfilePage from '../components/pages/myProfilePage';

const Tab = createBottomTabNavigator();

const BottomTabRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeRoutes} />
      <Tab.Screen name="Profile" component={MyProfilePage} />
    </Tab.Navigator>
  );
};

export default BottomTabRoutes;
