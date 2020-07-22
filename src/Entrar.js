import React from 'react';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

function Entrar({ fechar }) {

    return (
        <View style={{
            justifyContent:
                "center", alignItems: "center",
            backgroundColor: "#DDD", width: '100%',
            height: 400,
            borderRadius: 15,
            paddingTop: 15
        }} >
            <Text>Seja bem-vindo</Text>
            <Button title="sair" onPress={fechar} />
        </View>
    );
}

export default Entrar;