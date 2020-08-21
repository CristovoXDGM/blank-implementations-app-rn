import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {

    const { navigate, } = useNavigation();

    function irPara(Page) {
        console.log('teste');
        navigate(Page, { nome: "Teste", title: "Testando" });
    }



    return (
        <SafeAreaView style={styles.container}>
            <Text>dsdasda</Text>

            <Button title="ir para sobre" onPress={() => irPara("Sobre")} />
            <View style={{ height: 20 }} ></View>
            <Button title="ir para Contato" onPress={() => irPara('Contato')} />
            <StatusBar style="auto" />
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#fff',
        alignItems: "center",

    },

});
