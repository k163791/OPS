import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { getAppLoadingLifecycleEmitter } from "expo/build/launch/AppLoading";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function FirstScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <View style={styles.signInContainer}>
          <View style={styles.signInCard}>
            <Image
              source={{ uri: "https://i.redd.it/lwduoatqpvjz.jpg" }}
              style={{
                height: hp("22%"),
                width: wp("40%"),
                marginBottom: 10,
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
              }}
            />
            <TouchableOpacity onPress={() => navigation.navigate("MapScreen")}>
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "bold",
                  fontSize: hp("2.5%"),
                }}
              >
                Find a Service
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.signInCard}>
            <Image
              source={{ uri: "https://i.redd.it/lwduoatqpvjz.jpg" }}
              style={{
                height: hp("22%"),
                width: wp("40%"),
                marginBottom: 10,
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
              }}
            />
            <TouchableOpacity>
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "bold",
                  fontSize: hp("2.5%"),
                }}
              >
                Become a Vendor
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity>
          <Text style={styles.btnText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.btnText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: hp("70%"),
    backgroundColor: "gold",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    top: hp("25%"),
  },
  signInContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btnText: {
    fontWeight: "bold",
    fontSize: hp("3%"),
    color: "#ff0048",
  },
  signInCard: {
    width: wp("40%"),
    height: hp("30%"),
    borderRadius: 10,
    elevation: 10,
    backgroundColor: "#fff",
    top: hp("60%"),
  },
});
