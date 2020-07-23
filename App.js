import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { api } from './src/services/api';
import { FlatList } from 'react-native-gesture-handler';
import Filmes from './src/Filmes';


export default function App() {
  const [loading, setLoading] = useState(true);
  const [filmes, setFilmes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get('r-api/?api=filmes');
      setFilmes(result.data);
      setLoading(false);
    }
    fetchData();

    console.log(filmes);
  }, [])

  if (loading) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }} >
        <ActivityIndicator color="#09af" size={40} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <FlatList
          data={filmes}
          keyExtractor={item => item.id.toString()}
          renderItem={(item) => <Filmes prop={item} />} />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
