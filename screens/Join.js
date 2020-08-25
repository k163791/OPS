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
      <View
        style={{
          alignItems: "center",
          marginBottom: 10,
          marginTop: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-up" size={30} style={{ left: 10 }} />
          <Text style={{ textAlign: "center" }}>Go Back</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 10,
          padding: 20,
          marginBottom: 30,
          marginHorizontal: 20,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Join OPS
        </Text>
        <Text>
          Create an account and discover thousands of relevant printing
          services, connect with printing freelancers, and check out easily on
          OPS digital printing trusted platform.
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: 300,
            height: 50,
            elevation: 10,
            borderRadius: 10,
            backgroundColor: "#0F60EC",
            paddingVertical: 10,
            paddingHorizontal: 12,
            marginBottom: 20,
          }}
        >
          <FontAwesome name="facebook-f" size={24} color="white" />
          <Text
            style={{
              fontSize: 14,
              color: "#fff",
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            Connect with Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: 300,
            height: 50,
            elevation: 10,
            borderRadius: 10,
            backgroundColor: "#309AF2",
            paddingVertical: 10,
            paddingHorizontal: 12,
            marginBottom: 20,
          }}
        >
          <FontAwesome name="google" size={24} color="white" />
          <Text
            style={{
              fontSize: 14,
              color: "#fff",
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            Connect with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={goToSignUp}
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: 300,
            height: 50,
            elevation: 10,
            borderRadius: 10,
            backgroundColor: "gold",
            paddingVertical: 10,
            paddingHorizontal: 12,
            marginBottom: 20,
          }}
        >
          <MaterialCommunityIcons name="email" size={24} color="white" />
          <Text
            style={{
              fontSize: 14,
              color: "#fff",
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            Connect with Email
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          marginBottom: 20,
          marginHorizontal: 10,
        }}
      >
        <TouchableOpacity onPress={goToSignIn}>
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "#F03F97" }}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          marginBottom: 20,
          marginHorizontal: 10,
        }}
      >
        <TouchableOpacity onPress={goToHome}>
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "#F03F97" }}>
            Skip
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
});
