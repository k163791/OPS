import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Feather, Ionicons, FontAwesome } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

export default function SearchScreen({ navigation }) {
  const [message, setMessage] = useState([
    { message: "Hello Brother", key: "1" },
    { message: "Welcome to mumbai  knsdlfk", key: "2" },
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
        <FontAwesome
          name="search"
          size={24}
          color="#ff0048"
          style={{ bottom: 10 }}
        />
        <TextInput
          textAlign="center"
          style={{
            width: "70%",
            height: hp("5%"),
            backgroundColor: "#FCF3CF",
            marginLeft: 10,
            borderRadius: 10,
            bottom: 10,
          }}
          placeholder="What are you looking for?"
          underlineColorAndroid="transparent"
          placeholderTextColor="#ff0048"
        />
      </View>

      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Categories</Text>
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
                    style={{ height: 70, width: 70 }}
                  />
                  <Text
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 100,
                      top: 20,
                      fontSize: hp("2.5%"),
                      fontWeight: "bold",
                    }}
                  >
                    {item.message}
                  </Text>

                  <Text
                    numberOfLines={3}
                    style={{
                      fontSize: 10,
                      position: "absolute",
                      top: 40,
                      left: 100,
                      marginRight: wp("35%"),
                    }}
                  >
                    Build your Brand
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  headingContainer: {
    marginTop: 10,
  },
  heading: {
    textAlign: "center",
    fontSize: hp("2.5%"),
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "black",
  },
});
