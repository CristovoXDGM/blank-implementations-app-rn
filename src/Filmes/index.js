import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// import { Container } from './styles';

function Filmes({ prop }) {
    console.log(prop.item.nome);

    return (
        <View>
            <View style={styles.card}>
                <Text style={styles.titulo}>{prop.item.nome}</Text>
                <Image
                    source={{ uri: prop.item.foto }}
                    style={styles.capa}
                />
                <View style={styles.areaBotao}>
                    <TouchableOpacity style={styles.botao} onPress={() => alert(prop.item.nome)} >
                        <Text style={styles.botaoTexto} >LEIA MAIS</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    card: {
        shadowColor: "#000",
        backgroundColor: "#fff",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        margin: 15,
        shadowRadius: 5,
        borderRadius: 5,
        elevation: 3,
        zIndex: 1,
    },
    titulo: {
        fontSize: 18,
        padding: 15,

    },
    capa: {
        height: 250,
        width: Dimensions.get('window').width / 1.1
    },
    botao: {
        width: 100,
        backgroundColor: "#09a6ff",
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    botaoTexto: {
        textAlign: "center",
        color: "#fff"
    },
    areaBotao: {
        alignItems: "flex-end",
        marginTop: -40,
        zIndex: 9
    }
});

export default Filmes;