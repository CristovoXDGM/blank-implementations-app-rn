import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';




export default function App() {

  const [larguraAnimada, setLarguraAnimada] = useState(new Animated.Value(150));
  const alturaAnim = useRef(new Animated.Value(50)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;


  const carregarGrafico = () => {


    Animated.sequence(
      [

        Animated.timing(opacityAnim, {
          toValue: 100,
          duration: 2500
        }),
        Animated.timing(alturaAnim, {
          toValue: 500,
          duration: 2500
        }),
      ]
    ).start()

  }


  useEffect(() => {



  }, [])


  return (
    <View style={styles.container}>

      <View style={{
        backgroundColor: "#4169e1",
        height: 80,
        width: '100%',
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: 'row'
      }}>

        <TouchableOpacity onPress={carregarGrafico} >
          <Text style={{ fontSize: 25, color: "#fff" }}>
            Gerar Gráfico
            </Text>
        </TouchableOpacity>

      </View>



      <View style={{ flex: 1, flexDirection: "column", justifyContent: "flex-end", alignItems: "center" }}>
        <Text>Vendas</Text>
        <Animated.View style={{ height: alturaAnim, opacity: opacityAnim, width: 150, backgroundColor: "#4169e1", justifyContent: "center" }}>
          <Text
            style={{
              fontSize: 22,
              color: "#fff",
              textAlign: "center"
            }} >
            R$150,00
          </Text>
        </Animated.View>
      </View>



      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  }
});
