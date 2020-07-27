import { StatusBar } from 'expo-status-bar';
import React, { useRef, useEffect, useState, useMemo } from 'react';
import { StyleSheet, View, Animated, Dimensions, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default function App() {

  const [nome, setNome] = useState('');
  const [input, setInput] = useState('');
  const refInput = useRef(null);

  const handleSettarNome = () => {
    setNome(input)
  }




  const letrasNome = useMemo(() => {
    return nome.length
  }, [nome]);

  const newName = () => {

  }
  return (
    <View style={styles.container}>

      <TextInput
        value={input}
        onChangeText={(t) => setInput(t)}
        placeholder="Digite seu nome" style={styles.input}
        ref={refInput}
      />

      <TouchableOpacity
        onPress={handleSettarNome}
        style={{
          width: Dimensions.get('screen').width,
          height: 80, justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#aaa"
        }}>
        <Text style={{ color: "#fff" }} >Atualizar nome</Text>
      </TouchableOpacity>

      <Text style={{ fontWeight: 'bold', fontSize: 34 }} >{nome}</Text>
      <Text style={{ fontWeight: 'bold', fontSize: 34 }} > Tem {letrasNome} letras</Text>

      <TouchableOpacity onPress={newName} style={styles.btnNovoNome} >
        <Text>Novo nome</Text>
      </TouchableOpacity>

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
  input: {
    marginTop: 50,
    width: Dimensions.get('screen').width,
    height: 50,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#000"

  },
  btnNovoNome: {
    height: 50,
    backgroundColor: "#0fa5",
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get('screen').width
  }
});
