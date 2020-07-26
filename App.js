import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Animated } from 'react-native';




export default function App() {

  const [larguraAnimada, setLarguraAnimada] = useState(new Animated.Value(150));
  const larAnimada = useRef(new Animated.Value(150)).current;


  useEffect(() => {

    Animated.loop(
      Animated.sequence([
        Animated.timing(
          larAnimada, {
          toValue: 200,
          duration: 200
        }
        ),
        Animated.timing(
          larAnimada, {
          toValue: 200,
          duration: 150
        }
        )
      ])
    ).start();

  }, [])


  return (
    <View style={styles.container}>

      <Animated.View style={{ height: 50, width: larAnimada, backgroundColor: "#4169e1", justifyContent: "center" }}>
        <Text
          style={{
            fontSize: 22,
            color: "#fff",
            textAlign: "center"
          }} >
          Carregando...
          </Text>
      </Animated.View>

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
