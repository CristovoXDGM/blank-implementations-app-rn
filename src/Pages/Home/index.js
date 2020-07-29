import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const navigation = useNavigation();

    function irPara() {
        navigation.navigate('Sobre', { nome: "cristovao", email: "teste@teste.com" })
    }



    return (
        <View style={styles.container}>
            <Text>dsdasda</Text>

            <Button title="ir para sobre" onPress={() => irPara()} />
            <StatusBar style="auto" />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",

    },

});
