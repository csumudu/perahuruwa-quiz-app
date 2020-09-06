import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import {getSelectedLanguage} from '../../../i18n';

import Icon from 'react-native-vector-icons/FontAwesome'

const HomePage = ({navigation}) => {
  const {t, i18n} = useTranslation();

  const changeLanguageHandler = () => {
    i18n
      .changeLanguage('RESET')
      .then(() => {
        navigation.navigate('LanguageSelectionPage');
      })
      .catch(console.log);
  };

  const toggle = (e) => {
    navigation.navigate('Drawer');
  };

  return (
    <View style={styles.container}>
      <Button
        style={{margin: 15}}
        title={i18n.language}
        onPress={changeLanguageHandler}
      />
      <Text>Home Page</Text>
      <Text>selected : {getSelectedLanguage()}</Text>
      <Text>{t('test.hello')}</Text>

      <Icon name="rocket" size={30} color="#900" />
      
      <Button title="Next" onPress={(e) => navigation.navigate('Categories')} />
    </View>
  );
};



export default HomePage;
