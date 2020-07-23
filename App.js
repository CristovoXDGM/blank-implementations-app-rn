import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Modal, TextInput, Keyboard, Alert, AsyncStorage } from 'react-native';
import Entrar from './src/Entrar';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function App() {

  const [input, setInput] = useState(" ");
  const [nome, setNome] = useState(" ")


  async function getData() {
    await AsyncStorage.getItem('nome').then((value) => {
      setNome(value);

    });


  }
  async function save() {
    await AsyncStorage.setItem('nome', nome);
  }
  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {

    save();

  }, [nome])




  const gravarNome = () => {
    setNome(input);

    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>


      <View style={styles.viewInput}>
        <TextInput
          underlineColorAndroid="transparent"
          style={styles.input}
          value={input}
          onChangeText={(text) => setInput(text)}
        ></TextInput>

        <TouchableOpacity onPress={gravarNome}>
          <Text style={styles.botao}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles
        .nomeText} >{nome}</Text>




      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: "50%",
    height: 40,
    borderColor: "#000",
    padding: 10,
    borderWidth: 1
  },
  botao: {

    padding: 10,
    height: 40,
    fontSize: 15,
    color: "#fff",
    backgroundColor: "#000",
    marginLeft: 5
  },
  viewInput: {
    flexDirection: "row",
    alignItems: "center"
  },
  nomeText: {
    margin: 20,
    fontSize: 50
  }
});
