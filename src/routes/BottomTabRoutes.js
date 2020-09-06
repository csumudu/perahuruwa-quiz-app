import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeRoutes from './HomeRoutes';
import MyProfilePage from '../components/pages/myProfilePage';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const BottomTabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user-circle-o' : 'user-circle';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeRoutes} />
      <Tab.Screen name="Profile" component={MyProfilePage} />
    </Tab.Navigator>
  );
};

export default BottomTabRoutes;
