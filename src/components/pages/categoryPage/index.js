import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';

const CategoryPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Categories</Text>
      <Button title="Next" onPress={(e) => navigation.navigate('Quiz')} />
    </View>
  );
};

export default CategoryPage;
