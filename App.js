import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react';
import { StyleSheet } from 'react-native';
import Home from './src/Pages/Home';
import Sobre from "./src/Pages/Sobre";
import Contato from "./src/Pages/Contato";
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function App() {

  const icons = {
    Home: {
      name: 'ios-home'
    },
    Sobre: {
      name: "ios-people"
    },
    Contato: {
      name: "ios-call"
    }
  }


  return (

    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({


          tabBarIcon: ({ color, size }) => {

            const { name } = icons[route.name];
            return <Ionicons name={name} color={color} size={size} />
          }
        })}
        tabBarOptions={{
          style: {
            backgroundColor: "#121212",

          },
          activeTintColor: "#ffff"
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Sobre" component={Sobre} />
        <Tab.Screen name="Contato" component={Contato} />
      </Tab.Navigator>
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
