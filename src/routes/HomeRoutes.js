import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CategoryPage from '../components/pages/categoryPage';
import QuizPage from '../components/pages/quizPage.js';
import {HomePage} from '../components/pages';
const Stack = createStackNavigator();

const HomeRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Categories" component={CategoryPage} />
      <Stack.Screen name="Quiz" component={QuizPage} />
    </Stack.Navigator>
  );
};

export default HomeRoutes;
