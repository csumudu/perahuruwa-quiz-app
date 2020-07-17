import React from 'react'
import { View, Text, Button } from 'react-native'
import styles from "./styles";

const languageSelectionPage = ({ navigation }) => {
    console.log("innnnnnnnnnn")
    return (
        <View style={styles.container}>
            <Text>Language Selection Page</Text>
            <Button title="Next" onPress={e => navigation.navigate('HomePage')} />
        </View>
    )
}

export const languageSelectionPageOptions = {
    headerShown: false
}

export default languageSelectionPage