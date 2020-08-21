import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Sobre({ route }) {

    const { navigate, setOptions } = useNavigation();

    setOptions({
        title: `Sobre ${route.params?.title}`
    });

    function irPara() {
        navigate('Home')
    }


    return (
        <View>
            <Text>Sobre</Text>
            <Button title="ir para Home" onPress={() => irPara()} />
            <Text>{route.params?.nome}</Text>
            <Text>{route.params?.email}</Text>
        </View>
    );
}
const styles = StyleSheet
    .create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: "center",

        },

    });