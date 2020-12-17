import React, { useEffect } from 'react';
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import RiderScreen from "./HomeScreens/RiderHomeScreen"

const Tab = createBottomTabNavigator();

export default function RiderHomeNavigator({ navigation, route }) {

  return(
    <Tab.Navigator
      value={route.params.rider}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Settings") {
            iconName = "gear";
          } else if (route.name === "Account") {
            iconName = "user";
          } else if (route.name === "Request") {
            iconName = "send";
          } else if (route.name === "Search") {
            iconName = "search";
          } else if (route.name === "Notification") {
            iconName = "bell";
          }

          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#ff0048",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={RiderScreen} initialParams={route.params.rider}/>
    </Tab.Navigator>
  )
}
