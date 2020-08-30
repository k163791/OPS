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

export default function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          marginBottom: 50,
          marginTop: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-up" size={hp("4%")} />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center" }}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#F8C471"
          style={styles.inputStyle}
        />
        <TextInput
          placeholder="Username"
          placeholderTextColor="#F8C471"
          style={styles.inputStyle}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#F8C471"
          secureTextEntry={true}
          style={styles.inputStyle}
        />
        <Text style={{ fontSize: hp("1.8%"), marginBottom: 30 }}>
          Combine upper and lowercase letters and numbers
        </Text>
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.btnText}>continue</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.termsOfService}>
        <Text style={{ fontSize: hp("2.2%") }}>
          By joining you agree to OPS's
        </Text>
        <TouchableOpacity>
          <Text style={{ color: "lightblue", fontSize: hp("2.2%") }}>
            {" "}
            Terms of Service
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
  inputStyle: {
    width: "90%",
    backgroundColor: "#FCF3CF",
    marginBottom: hp("3%"),
    padding: wp("1%") + hp("1%"),
    borderRadius: 10,
  },
  btnContainer: {
    width: wp("90%"),
    height: hp("8%"),
    elevation: 10,
    borderRadius: 10,
    backgroundColor: "gold",
    paddingVertical: hp("2%"),
    paddingHorizontal: wp("1%"),
  },
  btnText: {
    fontSize: hp("2.6%"),
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  termsOfService: {
    flexDirection: "row",
    margin: hp("2%") + wp("8.5%"),
  },
});
