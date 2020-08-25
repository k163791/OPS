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
          <Ionicons name="ios-arrow-up" size={30} style={{ left: 10 }} />
          <Text style={{ textAlign: "center" }}>Go Back</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center" }}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#F8C471"
          style={{
            width: "90%",

            backgroundColor: "#FCF3CF",
            marginBottom: 20,
            padding: 10,
            borderRadius: 10,
          }}
        />
        <TextInput
          placeholder="Username"
          placeholderTextColor="#F8C471"
          style={{
            width: "90%",

            backgroundColor: "#FCF3CF",
            marginBottom: 20,
            padding: 10,
            borderRadius: 10,
          }}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#F8C471"
          secureTextEntry={true}
          style={{
            width: "90%",

            backgroundColor: "#FCF3CF",
            marginBottom: 20,
            padding: 10,
            borderRadius: 10,
          }}
        />
        <Text style={{ fontSize: 12, marginBottom: 30 }}>
          Combine upper and lowercase letters and numbers
        </Text>
        <TouchableOpacity
          style={{
            width: 300,
            height: 50,
            elevation: 10,
            borderRadius: 10,
            backgroundColor: "gold",
            paddingVertical: 10,
            paddingHorizontal: 12,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: "#fff",
              fontWeight: "bold",
              alignSelf: "center",
              textTransform: "uppercase",
            }}
          >
            continue
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          margin: 30,
        }}
      >
        <Text>By joining you agree to OPS's</Text>
        <TouchableOpacity>
          <Text style={{ color: "lightblue" }}> Terms of Service</Text>
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
