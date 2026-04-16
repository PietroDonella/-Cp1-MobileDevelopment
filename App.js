import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cadastro from "./src/screens/Cadastro";
import Perfil from "./src/screens/Perfil";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cadastro">
        <Stack.Screen 
          name="Cadastro" 
          component={Cadastro} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Perfil" 
          component={Perfil} 
          options={{ title: 'Meu Perfil' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}