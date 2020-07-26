import { StatusBar } from 'expo-status-bar';
import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';

export default function App() {

  const larAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(larAnim, {
      toValue: 100,
      duration: 4000
    }).start()
  }, []);

  let porcentafeInter = larAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%']
  })

  return (
    <View style={styles.container}>

      <Animated.View style={{ backgroundColor: "#4169E1", width: porcentafeInter, height: 25 }}>

      </Animated.View>

      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",

  }
});
