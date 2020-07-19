import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';
import i18next, {
  languages,
  changeLanguage,
  getSelectedLanguage,
} from '../../../i18n';
import {useTranslation} from 'react-i18next';

const languageSelectionPage = ({navigation}) => {
  const {i18n} = useTranslation();

  const onLanguageSelect = (code) => {
    changeLanguage(code, () => {
      console.log('change success');
      navigation.navigate('HomePage');
    });
  };

  return (
    <View style={styles.container}>
      <Text>Language Selection Page</Text>
      <Text>Selected Lang : {i18n.language}</Text>
      {languages.map((ln, k) => (
        <View key={k} style={{margin: 10}}>
          <Button
            style={{margin: 15}}
            title={ln.name}
            onPress={(e) => onLanguageSelect(ln.code)}
          />
        </View>
      ))}
    </View>
  );
};

export const languageSelectionPageOptions = {
  headerShown: false,
};

export default languageSelectionPage;
