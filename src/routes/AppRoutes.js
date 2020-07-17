import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LanguageSelectionPage, HomePage, languageSelectionPageOptions } from '../components/pages';

const Stack = createStackNavigator();

const AppRoutes = () => {
    return (
        <Stack.Navigator initialRouteName="LanguageSelectionPage">
            <Stack.Screen name="LanguageSelectionPage" component={LanguageSelectionPage} options={languageSelectionPageOptions} />
            <Stack.Screen name="HomePage" component={HomePage} />
        </Stack.Navigator>
    )
}

export default AppRoutes