import React, { useState, useEffect } from "react";
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
import axios from "axios";
import { APP_URL } from "../constant_vars";

export default function SearchScreen({ navigation, route }) {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    console.log('route: ', route.params)

      axios.get(APP_URL + "product", {
        headers: { 'Authorization': `Bearer ${route.params.token}`}
      }).then(res => {
        console.log('Response: ', res.data)
        setMessage(res.data.result)
      }).catch(err => {
        alert(err);
      })

  }, [])

  return (
    <View style={{ flex: 1, marginBottom: 10 }}>
      <View style={styles.headerContainer}>
        <FontAwesome
          name="search"
          size={24}
          color="#ff0048"
          style={{ bottom: hp("2.2%") }}
        />
        <TextInput
          textAlign="center"
          style={{
            width: "80%",
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
        <Text style={styles.heading}>Products</Text>
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
                    source={{ uri: item.img[0] }}
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
                    {item.title}
                  </Text>

                  <Text
                    numberOfLines={3}
                    style={{
                      fontSize: 14,
                      position: "absolute",
                      top: 50,
                      left: 100,
                      marginRight: wp("35%"),
                    }}
                  >
                    Item Price - {item.price}
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
    height: hp("15%"),
    width: wp("100%"),
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
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
