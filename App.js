import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { api } from './src/services/api';
import { FlatList } from 'react-native-gesture-handler';
import Filmes from './src/Filmes';


export default function App() {
  const responsedata = [];
  const [filmes, setFilmes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get('r-api/?api=filmes');
      setFilmes(result.data);
    }
    fetchData();

    console.log(filmes);
  }, [])

  return (
    <View style={styles.container}>
      <FlatList data={filmes} keyExtractor={item => item.id.toString()} renderItem={(item) => <Filmes prop={item} />} />
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
  }
});
