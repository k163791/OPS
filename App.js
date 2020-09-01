import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// Importing Screens
import Intro from "./screens/Intro";
import Join from "./screens/Join";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import FirstScreen from "./screens/FirstScreen";
import MapScreen from "./screens/MapScreen";
import ServiceScreen from "./screens/ServiceScreen";

import Home from "./screens/HomeNavigator";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRoute="FristScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="ServiceScreen" component={ServiceScreen} />
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Join" component={Join} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
