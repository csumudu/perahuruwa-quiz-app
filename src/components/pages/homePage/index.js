import React from 'react'
import { View, Text, Button } from 'react-native'
import styles from "./styles";

const HomePage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Home Page</Text>
            <Button title="Next" onPress={e=>navigation.navigate('LanguageSelectionPage')} />
        </View>
    )
}

export default HomePage