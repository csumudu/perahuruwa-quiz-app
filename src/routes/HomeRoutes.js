import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CategoryPage from '../components/pages/categoryPage';
import QuizPage from '../components/pages/quizPage.js';
import {HomePage} from '../components/pages';
import {Button} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButtonWrapper from '../components/atoms/headerButtonWrapper';
import {DrawerActions} from '@react-navigation/native';
const Stack = createStackNavigator();

const HomeRoutes = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{
          headerTransparent: true,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButtonWrapper}>
              <Item
                title="search"
                iconName="navicon"
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }
              />
            </HeaderButtons>
          ),
        }}
      />
      <Stack.Screen name="Categories" component={CategoryPage} />
      <Stack.Screen name="Quiz" component={QuizPage} />
    </Stack.Navigator>
  );
};

export default HomeRoutes;
