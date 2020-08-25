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

export default function SignIn({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          marginBottom: 100,
          marginTop: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-up" size={30} />
          <Text style={{ textAlign: "center", right: 15 }}>Go Back</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              marginHorizontal: 20,
              marginBottom: 20,
            }}
          >
            Welcome to OPS
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <TextInput
            placeholder="Email or Username"
            placeholderTextColor="#F8C471"
            style={{
              width: "90%",

              backgroundColor: "#FCF3CF",
              marginBottom: 20,
              marginTop: 20,
              padding: 10,
              borderRadius: 10,
            }}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#F8C471"
            style={{
              width: "90%",

              backgroundColor: "#FCF3CF",
              marginBottom: 20,
              marginTop: 20,
              padding: 10,
              borderRadius: 10,
            }}
          />
          <TouchableOpacity
            style={{
              width: "90%",
              height: 50,
              elevation: 10,
              borderRadius: 10,
              backgroundColor: "gold",
              paddingVertical: 10,
              paddingHorizontal: 12,
              marginTop: 10,
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
          <Text style={{ marginVertical: 15, fontSize: 10 }}>
            or via social networks
          </Text>
        </View>
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
