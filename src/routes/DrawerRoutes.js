import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {HomePage, LanguageSelectionPage} from '../components/pages';
import {Button, View, Text} from 'react-native';
import HomeRoutes from './HomeRoutes';
import {useTranslation} from 'react-i18next';
import BottomTabRoutes from './BottomTabRoutes';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const {t, i18n} = useTranslation();

  const changeLanguageHandler = () => {
    i18n
      .changeLanguage('RESET')
      .then(() => {
          props.navigation.navigate('LanguageSelectionPage');
          props.navigation.toggleDrawer();
      })
      .catch(console.log);
  };
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
      <DrawerItem label="Change Language" onPress={changeLanguageHandler} />
    </DrawerContentScrollView>
  );
}

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={BottomTabRoutes} />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
