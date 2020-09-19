import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function Home() {

    const { navigate } = useNavigation();

    return (
        <View style={styles.container}>
            <Text>
                Contato
            </Text>
            <Button title="Ir para contatos" onPress={() => {
                navigate('Contato')
            }} />
        </View>
    );
}

const styles = StyleSheet
    .create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: "center",
            justifyContent: "center"
        },

    });