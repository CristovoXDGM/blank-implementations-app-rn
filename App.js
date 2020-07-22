import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import Entrar from './src/Entrar';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);

  const entrar = () => {
    setModalVisible(true)
  }
  const sair = (visible) => {
    setModalVisible(visible);
  }

  return (
    <View style={styles.container}>

      <Button title="Entrar" onPress={entrar} />

      <Modal transparent={true} animationType={"slide"} visible={modalVisible}  >
        <View style={{ margin: 15, flex: 1, alignItems: 'center', justifyContent: "center" }}>
          <Entrar fechar={() => sair(false)} />

        </View>

      </Modal>

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
});
