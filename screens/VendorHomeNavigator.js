import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import VendorHome from "./HomeScreens/VendorHome";
import VendorMessages from "./HomeScreens/VendorMessages";
import VendorSales from "./HomeScreens/VendorSales";
import VendorNotifications from "./HomeScreens/VendorNotifications";
import VendorAccount from "./HomeScreens/VendorAccount";

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function VendorHomenavigator({ navigation, route }) {
  const checkName = () => {
    if (route.params.username === "Client") return true;
    else return false;
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Settings") {
            iconName = "gear";
          } else if (route.name === "Account") {
            iconName = "user";
          } else if (route.name === "Messages") {
            iconName = "send";
          } else if (route.name === "Manage Sales") {
            iconName = "sellsy";
          } else if (route.name === "Notifications") {
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
      <Tab.Screen name="Home" component={VendorHome} />
      <Tab.Screen name="Messages" component={VendorMessages} />
      <Tab.Screen name="Manage Sales" component={VendorSales} />
      <Tab.Screen name="Notifications" component={VendorNotifications} />
      <Tab.Screen name="Account" component={VendorAccount} />
    </Tab.Navigator>
  );
}
