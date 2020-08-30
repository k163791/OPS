import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Join({ navigation }) {
  const goToSignIn = () => {
    navigation.navigate("SignIn");
  };

  const goToSignUp = () => {
    navigation.navigate("SignUp");
  };

  const goToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.backContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-up" size={hp("4%")} />
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.headerContainer}>Join OPS</Text>
        <Text style={styles.normalText}>
          Create an account and discover thousands of relevant printing
          services, connect with printing freelancers, and check out easily on
          OPS digital printing trusted platform.
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.btnContainerFB}>
          <FontAwesome name="facebook-f" size={hp("3%")} color="white" />
          <Text style={styles.btnText}>Connect with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnContainerGoogle}>
          <FontAwesome name="google" size={hp("3%")} color="white" />
          <Text style={styles.btnText}>Connect with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToSignUp} style={styles.btnContainerEmail}>
          <MaterialCommunityIcons name="email" size={hp("3%")} color="white" />
          <Text style={styles.btnText}>Connect with Email</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomBtnLeft}>
        <TouchableOpacity onPress={goToSignIn}>
          <Text style={styles.bottomBtnText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomBtnRight}>
        <TouchableOpacity onPress={goToHome}>
          <Text style={styles.bottomBtnText}>Skip</Text>
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
  textContainer: {
    marginTop: hp("5%"),
    padding: hp("2%") + wp("2%"),
    marginBottom: hp("3%"),
    marginHorizontal: wp("6%"),
  },
  headerContainer: {
    fontSize: hp("3.8%"),
    fontWeight: "bold",
    marginBottom: hp("1%"),
  },
  normalText: {
    fontSize: hp("2.2%"),
  },
  btnContainerFB: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: wp("80%"),
    height: 50,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: "#0F60EC",
    paddingVertical: hp("2%"),
    paddingHorizontal: 12,
    marginBottom: hp("3%"),
  },
  btnContainerEmail: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: wp("80%"),
    height: 50,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: "gold",
    paddingVertical: hp("2%"),
    paddingHorizontal: 12,
    marginBottom: hp("3%"),
  },
  btnContainerGoogle: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: wp("80%"),
    height: 50,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: "#0FA5F0",
    paddingVertical: hp("2%"),
    paddingHorizontal: 12,
    marginBottom: hp("3%"),
  },
  btnText: {
    fontSize: hp("2.5%"),
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
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
    fontSize: hp("2.7%"),
    fontWeight: "bold",
    color: "#F03F97",
  },
});
