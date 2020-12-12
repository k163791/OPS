import "react-native-gesture-handler";
import React, { useState } from "react";
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
import Wallet from "./screens/HomeScreens/Wallet";
import Home from "./screens/HomeNavigator";
import SignUpScreen1 from "./screens/SingUpScreen1";
import SignUpScreen2 from "./screens/SignUpScreen2";
import SignUpScreen3 from "./screens/SignUpScreen3";
import SignUpScreen4 from "./screens/SignUpScreen4";
import SignUpScreen5 from "./screens/SignUpScreen5";
import VendorHome from "./screens/VendorHomeNavigator";
// import VendorHomenavigator from "./screens/VendorHomeNavigator";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRoute="FirstScreen"
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
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="SignUpScreen1" component={SignUpScreen1} />
        <Stack.Screen name="SignUpScreen2" component={SignUpScreen2} />
        <Stack.Screen name="SignUpScreen3" component={SignUpScreen3} />
        <Stack.Screen name="SignUpScreen4" component={SignUpScreen4} />
        <Stack.Screen name="SignUpScreen5" component={SignUpScreen5} />
        <Stack.Screen name="VendorHome" component={VendorHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
