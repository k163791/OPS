import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import HomeScreen from "./HomeScreens/HomeScreen";
import SearchScreen from "./HomeScreens/SearchScreen";
import NotificationScreen from "./HomeScreens/NotificationScreen";
import MessagesScreen from "./HomeScreens/MessagesScreen";
import AccountScreen from "./HomeScreens/AccountScreen";
import VendorHome from "./HomeScreens/VendorHome";

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Homenavigator({ navigation, route }) {
  const checkName = () => {
    if (route.params.username === "Client") return true;
    else return false;
  };

  return (
    <Tab.Navigator
      value={route.params.user}
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
      <Tab.Screen name="Home" component={HomeScreen} initialParams={route.params.user}/>
      <Tab.Screen name="Request" component={MessagesScreen} initialParams={route.params.user} />
      <Tab.Screen name="Search" component={SearchScreen} initialParams={route.params.user} />
      <Tab.Screen name="Notification" component={NotificationScreen} initialParams={route.params.user}/>
      <Tab.Screen name={"Account"} component={AccountScreen} />
    </Tab.Navigator>
  );
}
