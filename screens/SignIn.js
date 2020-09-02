import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
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

export default function SignIn({ navigation, route }) {
  const nextScreen = () => {
    navigation.navigate("Home", { username: route.params.username });
  };

  return (
    <View style={styles.container}>
      <View style={styles.backContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-up" size={hp("4%")} />
        </TouchableOpacity>
      </View>
      <View>
        <View>
          <Text style={styles.headerContainer}>Welcome to OPS</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <TextInput
            placeholder="Email or Username"
            placeholderTextColor="#F8C471"
            style={styles.inputStyle}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#F8C471"
            style={styles.inputStyle}
          />
          <TouchableOpacity onPress={nextScreen} style={styles.btnContainer}>
            <Text style={styles.btnText}>continue</Text>
          </TouchableOpacity>
          <Text style={{ marginVertical: 15, fontSize: hp("1.8%") }}>
            or via social networks
          </Text>
        </View>
        <View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.leftBtn}>
              <Text style={styles.socialBtnText}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightBtn}>
              <Text style={styles.socialBtnText}>Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.bottomBtn}>
        <TouchableOpacity>
          <Text style={{ color: "gold", fontWeight: "bold" }}>
            Forgot Password
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
    marginBottom: hp("10%"),
    marginTop: hp("1%"),
  },
  headerContainer: {
    fontSize: hp("3.8%"),
    fontWeight: "bold",
    marginHorizontal: wp("6%"),
    marginBottom: hp("1%"),
  },
  inputStyle: {
    width: "90%",
    backgroundColor: "#FCF3CF",
    marginBottom: hp("2%"),
    marginTop: hp("4%"),
    padding: wp("3%"),
    borderRadius: 10,
  },
  btnContainer: {
    width: wp("90%"),
    height: hp("8%"),
    elevation: 10,
    borderRadius: 10,
    backgroundColor: "gold",
    paddingVertical: hp("2%"),
    paddingHorizontal: wp("2%"),
    marginTop: hp("2%"),
  },
  btnText: {
    fontSize: hp("2.5%"),
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  leftBtn: {
    width: wp("40%"),
    height: hp("8%"),
    marginHorizontal: wp("6%"),
    backgroundColor: "#0F60EC",
    borderRadius: 10,
  },
  socialBtnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: hp("2.2%"),
    alignSelf: "center",
    paddingTop: hp("2%"),
  },
  rightBtn: {
    width: wp("40%"),
    height: hp("8%"),
    marginHorizontal: wp("1%"),
    backgroundColor: "#309AF2",
    borderRadius: 10,
  },
  bottomBtn: {
    position: "absolute",
    bottom: 0,
    right: 0,
    marginHorizontal: wp("5%"),
    marginBottom: hp("2%"),
  },
});
