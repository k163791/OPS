import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const [gallery, setgallery] = useState([
    {
      image: {
        uri:
          "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      title: "Switzerland",
      key: "1",
    },
    {
      image: {
        uri:
          "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      title: "New Zeland",
      key: "2",
    },
    {
      image: {
        uri:
          "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      title: "Rome",
      key: "3",
    },
    {
      image: {
        uri:
          "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      title: "Tahiti",
      key: "4",
    },
  ]);

  return (
    <View>
      <View
        style={{
          backgroundColor: "#F7DC6F",
          height: 100,
          width: "100%",
          borderBottomRightRadius: 40,
          borderBottomLeftRadius: 40,
        }}
      >
        <Text
          style={{
            position: "absolute",
            bottom: 0,
            fontSize: 25,
            fontWeight: "bold",
            color: "black",
            alignSelf: "center",
            marginBottom: 10,
          }}
        >
          OPS
        </Text>
        <View>
          <Feather
            name="menu"
            size={24}
            color="#E74C3C"
            style={{ position: "absolute", top: 60, left: 20 }}
          />
          <Ionicons
            name="ios-wallet"
            size={24}
            color="#E74C3C"
            style={{ position: "absolute", top: 60, right: 30 }}
          />
        </View>
      </View>

      <ScrollView>
        <View
          style={{
            padding: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            Popular Services
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "#ff6200" }}>
            View All
          </Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            data={gallery}
            renderItem={({ item }) => {
              return (
                <View style={{ paddingVertical: 20, paddingLeft: 16 }}>
                  <TouchableOpacity>
                    <Image
                      source={item.image}
                      style={{
                        width: 150,
                        marginRight: 8,
                        height: 250,
                        borderRadius: 10,
                      }}
                    />
                    <View style={styles.imageOverlay}></View>
                    <Feather
                      name="map-pin"
                      size={16}
                      color="white"
                      stye={styles.imageIcon}
                    />
                    <Text style={styles.imageText}>{item.title}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  DarkOverlay: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    height: 270,
    backgroundColor: "#000",
    opacity: 0.2,
    borderBottomRightRadius: 65,
  },
  userGreet: {
    fontSize: 38,
    fontWeight: "bold",
    color: "white",
  },
  userText: {
    fontSize: 16,
    fontWeight: "normal",
    color: "white",
  },
  searchContainer: {
    paddingTop: 100,
    paddingLeft: 16,
  },
  searchBox: {
    marginTop: 16,
    backgroundColor: "#fff",
    paddingLeft: 24,
    padding: 12,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    width: "90%",
  },
  imageOverlay: {
    width: 150,
    height: 250,
    marginRight: 8,
    borderRadius: 10,
    position: "absolute",
    backgroundColor: "#000",
    opacity: 0.2,
  },
  imageIcon: {
    position: "absolute",
    marginTop: 4,
    left: 10,
    bottom: 10,
  },
  imageText: {
    position: "absolute",
    color: "white",
    marginTop: 4,
    fontSize: 14,
    left: 30,
    bottom: 20,
  },
});
