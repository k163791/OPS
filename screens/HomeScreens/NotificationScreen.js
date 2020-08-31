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

export default function NotificationScreen() {
  const [message, setMessage] = useState([
    { message: "Hello Brother", key: "1" },
    {
      message:
        "Welcome to mumbai  knsdlfk asldkjasld jasdj asjd lajsdljaslkdj laksjd ",
      key: "2",
    },
    { message: "Hello Friend", key: "3" },
    { message: "Hello Friend", key: "4" },
    { message: "Hello Friend", key: "5" },
    { message: "Hello Friend", key: "6" },
    { message: "Hello Friend", key: "7" },
    { message: "Hello Friend", key: "8" },
    { message: "Hello Friend", key: "9" },
  ]);

  return (
    <View style={{ flex: 1, marginBottom: 10 }}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Notifications</Text>
        <Text
          style={{
            position: "absolute",
            top: 60,
            right: 20,
            fontWeight: "bold",
            color: "#ff0048",
          }}
        >
          Edit
        </Text>
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
    backgroundColor: "#F7DC6F",
    height: hp("18%"),
    width: wp("100%"),
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  headerText: {
    textAlign: "center",
    top: 50,
    fontSize: hp("4.7%"),
    fontWeight: "bold",
    color: "black",
    marginBottom: hp("2%"),
  },
});
