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

export default function VendorNotificationScreen() {
  const [message, setMessage] = useState([
    { message: "Hello Brother", key: "1" },
    {
      message: "Welcome to mumbai ",
      key: "2",
    },
    { message: "Hello Friend", key: "3" },
    { message: "Hello Friend", key: "4" },
  ]);

  return (
    <View style={{ flex: 1, marginBottom: 10 }}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Notifications</Text>
        <TouchableOpacity>
          <Text
            style={{
              fontWeight: "bold",
              color: "black",
              fontSize: hp("3%"),
              left: wp("12%"),
              marginBottom: hp("3%"),
            }}
          >
            Edit
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ margin: 10 }}>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: hp("2.2%"),
              fontWeight: "bold",
              color: "#000",
            }}
          >
            Earlier
          </Text>
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
                    numberOfLines={3}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 100,
                      top: 20,
                      fontSize: hp("2%"),
                      marginRight: 80,
                    }}
                  >
                    {item.message}
                  </Text>
                  <Text
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 100,
                      fontSize: hp("1.9%"),
                      fontWeight: "bold",
                      marginBottom: 10,
                    }}
                  >
                    45 mins ago
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
    justifyContent: "center",
    alignItems: "flex-end",
  },
  headerText: {
    fontSize: hp("4.7%"),
    fontWeight: "bold",
    color: "black",
    marginBottom: hp("2%"),
  },
});
