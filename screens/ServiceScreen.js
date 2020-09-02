import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

export default function ServiceScreen({ navigation }) {
  const user = "Client";

  return (
    <View style={styles.container}>
      <View style={styles.backContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-up" size={hp("4%")} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginHorizontal: 30,

          marginVertical: 20,
        }}
      >
        <Text
          style={{ fontSize: hp("2.2%"), fontWeight: "bold", marginBottom: 10 }}
        >
          Choose the Printing Service that most fits your need
        </Text>
        <Text style={{ fontSize: hp("2.2%") }}>Select at least one</Text>
      </View>

      <ScrollView
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <TouchableOpacity>
          <View style={styles.cardStyle}>
            <Ionicons name="ios-card" size={hp("12%")} color="#ff0048" />

            <Text style={{ fontSize: hp("2%") }}>Wedding Cards</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.cardStyle}>
            <Ionicons name="ios-card" size={hp("12%")} color="#ff0048" />

            <Text style={{ fontSize: hp("2%") }}>Banners</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.cardStyle}>
            <Ionicons name="ios-card" size={hp("12%")} color="#ff0048" />

            <Text style={{ fontSize: hp("2%") }}>Wedding Cards</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.cardStyle}>
            <Ionicons name="ios-card" size={hp("12%")} color="#ff0048" />

            <Text style={{ fontSize: hp("2%") }}>Wedding Cards</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.cardStyle}>
            <Ionicons name="ios-card" size={hp("12%")} color="#ff0048" />

            <Text style={{ fontSize: hp("2%") }}>Wedding Cards</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.cardStyle}>
            <Ionicons name="ios-card" size={hp("12%")} color="#ff0048" />

            <Text style={{ fontSize: hp("2%") }}>Wedding Cards</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.cardStyle}>
            <Ionicons name="ios-card" size={hp("12%")} color="#ff0048" />

            <Text style={{ fontSize: hp("2%") }}>Wedding Cards</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <View
        style={{ height: hp("10%"), alignItems: "center", marginVertical: 10 }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Join", { username: "Client" })}
          style={{
            width: wp("90%"),
            height: hp("8%"),
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "gold",
            borderRadius: 10,
          }}
        >
          <Text
            style={{ color: "#fff", fontSize: hp("3%"), fontWeight: "bold" }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  backContainer: {
    alignItems: "center",
    marginBottom: hp("1%"),
    marginTop: hp("1%"),
  },
  cardStyle: {
    elevation: 10,
    height: hp("20%"),
    width: wp("40%"),
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
