import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';
import { DrawerActions } from '@react-navigation/native';

const QuizPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Quiz Page</Text>
      <Button title="toggle" onPress={e=>navigation.dispatch(DrawerActions.toggleDrawer())} />
    </View>
  );
};

export default QuizPage;
