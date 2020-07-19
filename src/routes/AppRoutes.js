import React, {Suspense} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  LanguageSelectionPage,
  languageSelectionPageOptions,
} from '../components/pages';
import {useTranslation} from 'react-i18next';
import DrawerRoutes, {HomeOptions} from './DrawerRoutes';
import {Button, Text} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import BottomTabRoutes from './BottomTabRoutes';

const Stack = createStackNavigator();

const AppRoutes = () => {
  const {i18n} = useTranslation();
  return (
    <Stack.Navigator initialRouteName="LanguageSelectionPage">
      {!i18n.language ||
        (i18n.language === 'RESET' && (
          <Stack.Screen
            name="LanguageSelectionPage"
            component={LanguageSelectionPage}
            options={languageSelectionPageOptions}
          />
        ))}
      <Stack.Screen
        name="Tabs"
        component={DrawerRoutes}
        options={{ headerShown: false,}}
  /*       options={(props) => ({
          headerTitle: (props) => <Text {...props}>TEST</Text>,
          headerRight: () => (
            <Button
              onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
              title="Info"
            />
          ),
        })} */
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
