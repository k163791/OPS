import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

export default function Wallet() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            color: "white",
            paddingTop: heightPercentageToDP("5%"),
            fontSize: heightPercentageToDP("2.2%%"),
          }}
        >
          Available Balance
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              color: "white",
              fontSize: heightPercentageToDP("2.2%%"),
              fontWeight: "bold",
            }}
          >
            PKR
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: heightPercentageToDP("7%"),
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            0
          </Text>
        </View>
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              elevation: 10,
              borderRadius: 30,
              width: widthPercentageToDP("40%"),
              height: heightPercentageToDP("6%"),
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ fontWeight: "bold", fontSize: 14, color: "darkblue" }}
            >
              Activate My Wallet
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
        <View>
          <Text style={{ color: "darkblue", fontWeight: "bold", fontSize: 20 }}>
            All Transaction
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <FontAwesome name="paypal" size={50} color="#ff0048" />
          <FontAwesome name="credit-card" size={50} color="gold" />
          <FontAwesome name="money" size={50} color="black" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    height: "25%",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#12DBF7",
  },
});
