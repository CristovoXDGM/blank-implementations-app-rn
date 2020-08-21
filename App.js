import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import { StyleSheet } from 'react-native';
import Home from './src/Pages/Home';
import Sobre from "./src/Pages/Sobre";
import Contato from "./src/Pages/Contato";

const Stack = createStackNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Contato" component={Contato} />
      </Stack.Navigator>
    </NavigationContainer>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",

  },

});
