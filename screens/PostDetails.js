import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function PostDetails() {
  const image = {
    uri:
      "https://images.pexels.com/photos/227417/pexels-photo-227417.jpeg?auto-compress&cs=tinysrgb&dpr=2&h=650&w=940",
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ImageBackground
        source={image}
        style={styles.image}
        imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
      >
        <Text style={styles.Tagline}>Discover Switzerland</Text>
        <Text style={styles.Placename}>
          Explore the scenic beautfy of switzerland
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            position: "absolute",
            left: 20,
            top: 40,
            backgroundColor: "#ff6200",
            padding: 10,
            borderRadius: 40,
          }}
        >
          <Feather name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            position: "absolute",
            right: 20,
            top: 40,
            backgroundColor: "#ff6200",
            padding: 10,
            borderRadius: 40,
          }}
        >
          <Feather name="heart" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.bookBtn}>
          <Text style={styles.bookText}>Book Now</Text>
        </TouchableOpacity>
      </ImageBackground>

      <ScrollView style={{ backgroundColor: "white" }}>
        <Text
          style={{
            padding: 14,
            marginTop: 20,
            fontSize: 22,
            fontWeight: "bold",
          }}
        >
          About the place
        </Text>
        <Text
          style={{
            paddingHorizontal: 14,
            fontSize: 14,
            fontWeight: "normal",
            opacity: 0.3,
            justifyContent: "flex-start",
            textAlign: "justify",
            lineHeight: 26,
          }}
        >
          Switzerland is a mountainous central european country, home to
          numerous lakes, villages and the high peeks of the Alps. Its cities
          contain medieval quarters
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 380,
    justifyContent: "flex-end",
  },
  Tagline: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8,
    paddingHorizontal: 14,
  },
  Placename: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 14,
    marginBottom: 30,
  },
  bookBtn: {
    position: "absolute",
    right: 12,
    top: 350,
    backgroundColor: "#ff6200",
    padding: 16,
    borderRadius: 40,
  },
  bookText: {
    color: "white",
    fontSize: 13,
  },
});
