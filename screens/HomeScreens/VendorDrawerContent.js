import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Switch,
  LinearGradient,
} from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Drawer } from "react-native-paper";
import { FontAwesome, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { Avatar, Badge } from "react-native-elements";
import { TouchableHighlight } from "react-native-gesture-handler";
import axios from "axios";

export default function DrawerContent({ navigation, route, ...props }) {


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#E7AAB8",

        backfaceVisibility: "hidden",
      }}
    >
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={{ alignItems: "center", marginTop: 10 }}>
            <Avatar
              rounded
              source={{ uri: "https://i.redd.it/8rr9o5hakpg51.jpg" }}
              size={100}
            />
          </View>
        </View>

        <Drawer.Section>
          <DrawerItem
            icon={({ color, size }) => (
              <FontAwesome5 name="dolly-flatbed" size={24} color="black" />
            )}
            label="Orders"
            labelStyle={{ fontSize: 20, fontWeight: "bold" }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <FontAwesome name="star" size={24} color="black" />
            )}
            label="Products"
            labelStyle={{ fontSize: 20, fontWeight: "bold" }}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
});
