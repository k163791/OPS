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
import {
  Feather,
  Ionicons,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
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
        <Text style={styles.headerText}>Manage Sales</Text>
        <TouchableOpacity
          style={{
            marginBottom: hp("3%"),
            fontWeight: "bold",
            color: "#ff0048",
            fontSize: hp("3%"),
            left: wp("12%"),
            marginBottom: hp("3%"),
          }}
        >
          <FontAwesome name="question-circle" size={hp("4%")} color="black" />
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
                    This is the message
                  </Text>
                  <View
                    style={{
                      position: "absolute",
                      top: 80,
                      left: 100,
                      marginRight: wp("35%"),
                      borderWidth: 1,
                      borderColor: "gold",
                      borderRadius: 8,
                      width: wp("30%"),
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ alignSelf: "center" }}>Pending</Text>
                  </View>

                  <View
                    style={{
                      position: "absolute",
                      top: 80,
                      left: wp("75%"),
                      marginRight: wp("35%"),
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        alignSelf: "center",
                        fontSize: hp("1.9%"),
                        fontWeight: "bold",
                      }}
                    >
                      Rs. 200
                    </Text>
                  </View>
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
    fontSize: hp("3.7%"),
    fontWeight: "bold",
    color: "black",
    marginBottom: hp("2%"),
  },
});
