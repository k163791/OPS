import React from "react";
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
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Avatar, Badge } from "react-native-elements";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function DrawerContent(props) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F7DC6F",
      }}
    >
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={{ alignItems: "center", marginTop: 10 }}>
            <Avatar
              rounded
              source={{ uri: "https://i.redd.it/lwduoatqpvjz.jpg" }}
              size={100}
            />
          </View>
        </View>
        <Drawer.Section>
          <TouchableHighlight>
            <View
              style={{
                flexDirection: "row",
                paddingVertical: 12,
                paddingHorizontal: 16,
              }}
            >
              <Switch value={true} />
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Dark Theme
              </Text>
            </View>
          </TouchableHighlight>
        </Drawer.Section>
        <Drawer.Section>
          <DrawerItem
            icon={({ color, size }) => (
              <FontAwesome name="question-circle" size={24} color="black" />
            )}
            label="Help & Support"
            labelStyle={{ fontSize: 20, fontWeight: "bold" }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Ionicons name="ios-bed" size={24} color="black" />
            )}
            label="About Us"
            labelStyle={{ fontSize: 20, fontWeight: "bold" }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <FontAwesome name="share" size={24} color="black" />
            )}
            label="Share Application"
            labelStyle={{ fontSize: 20, fontWeight: "bold" }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <FontAwesome name="gear" size={24} color="black" />
            )}
            label="Settings"
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
