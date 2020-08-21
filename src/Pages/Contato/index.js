import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';

export default function Contato() {


    const { navigate, setOptions, dispatch } = useNavigation();

    function irPara() {
        //StackActions is mostly used when you want to go back to the home component, dispaching the others components in the pile
        dispatch(StackActions.popToTop);
    }

    return (
        <View>
            <Text>Sobrecontato</Text>
            <Button title="Voltar Para Home!" onPress={irPara} />

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