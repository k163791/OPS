import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { Feather, Ionicons, FontAwesome } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function VendorMessages({ navigation, route }) {
  const [message, setMessage] = useState([
    { message: "Hello Brother", key: "1" },
    { message: "In This Shirt", key: "2" },
  ]);

  return (
    <View style={{ flex: 1, marginBottom: 10 }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={{ marginBottom: hp("3%") }}>
          <Text
            style={{
              fontWeight: "bold",
              color: "#000",
              fontSize: hp("3%"),
            }}
          >
            Edit
          </Text>
        </TouchableOpacity>

        <Text style={styles.headerText}>Inbox</Text>
        <TouchableOpacity style={{ marginBottom: hp("3%") }}>
          <Feather name="settings" size={hp("3%")} color="black" />
        </TouchableOpacity>
      </View>

      <SafeAreaView
        style={{ flex: 1, marginVertical: 10, marginHorizontal: 10 }}
      >
        <FlatList
          data={message}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    elevation: 5,
                    backgroundColor: "#fff",
                    marginBottom: 20,
                    borderRadius: 10,
                    padding: 20,
                    alignItems: "flex-start",
                  }}
                >
                  <Image
                    source={{ uri: "https://i.redd.it/1ddlsj0xali51.jpg" }}
                    style={{ height: 70, width: 70, borderRadius: 50 }}
                  />
                  <Text
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 100,
                      top: 20,
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  >
                    {item.message}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "bold",
                      position: "absolute",
                      top: 0,
                      right: 0,
                      marginRight: 10,
                    }}
                  >
                    April 23, 2020
                  </Text>
                  <Text
                    numberOfLines={3}
                    style={{
                      fontSize: 14,
                      position: "absolute",
                      top: 40,
                      left: 100,
                      marginRight: wp("35%"),
                    }}
                  >
                    This is the message, jhasdjha ajsdhajshd jhasgdahsd
                    asghdjhasgd jashdhsd aksjdhkajshd kjashdkjashdk akjsdhk
                    asdnasjdn asldjalsk jdlkasj dlakjslksdj
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#ff0048",
    height: hp("15%"),
    width: wp("100%"),
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  headerText: {
    fontSize: hp("4.7%"),
    fontWeight: "bold",
    color: "black",
    marginBottom: hp("2%"),
  },
});
