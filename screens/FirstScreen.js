import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { getAppLoadingLifecycleEmitter } from "expo/build/launch/AppLoading";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Video } from "expo-av";

export default function FirstScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <View>
          <Video
            source={require("../assets/background.mp4")}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={{ width: wp("100%"), height: hp("70%") }}
          />
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: 10,
            elevation: 10,
            height: hp("30%"),
            width: wp("40%"),
            position: "absolute",
            top: hp("60%"),
            left: wp("8%"),
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("MapScreen")}>
            <Image
              source={{ uri: "https://i.redd.it/lwduoatqpvjz.jpg" }}
              style={{
                height: hp("20%"),
                width: wp("40%"),
                marginBottom: 10,
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
              }}
            />

            <Text
              style={{
                alignSelf: "center",
                fontWeight: "bold",
                fontSize: hp("2.5%"),
                textAlign: "center",
              }}
            >
              Find a Service
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: 10,
            elevation: 10,
            height: hp("30%"),
            width: wp("40%"),
            position: "absolute",
            top: hp("60%"),
            left: wp("55%"),
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Intro")}>
            <Image
              source={{ uri: "https://i.redd.it/8rr9o5hakpg51.jpg" }}
              style={{
                height: hp("20%"),
                width: wp("40%"),
                marginBottom: 10,
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
              }}
            />

            <Text
              style={{
                alignSelf: "center",
                fontWeight: "bold",
                fontSize: hp("2.5%"),
                textAlign: "center",
              }}
            >
              Become a Vendor
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signInContainer}>
          <View style={styles.signInCard}>
            <TouchableOpacity onPress={() => navigation.navigate("MapScreen")}>
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

              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "bold",
                  fontSize: hp("2.5%"),
                  textAlign: "center",
                }}
              >
                Find a Service
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.signInCard}>
            <TouchableOpacity>
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

              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "bold",
                  fontSize: hp("2.5%"),
                  textAlign: "center",
                }}
              >
                Become a Vendor
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.bottomBtnLeft}>
        <TouchableOpacity>
          <Text
            style={styles.bottomBtnText}
            onPress={() => navigation.navigate("SignIn")}
          >Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomBtnRight}>
        <TouchableOpacity>
          <Text style={styles.bottomBtnText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: "70%",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginHorizontal: 10,
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
    top: hp("70%"),
  },
  bottomBtnLeft: {
    position: "absolute",
    bottom: 0,
    left: 0,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  bottomBtnRight: {
    position: "absolute",
    bottom: 0,
    right: 0,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  bottomBtnText: {
    fontSize: hp("2.5%"),
    color: "#ff0048",
    fontWeight: "bold",
  },
});
