import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Picker,
  CheckBox,
  ScrollView,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function SignUpScreen4({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.backContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-up" size={hp("4%")} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{ marginHorizontal: 20, marginBottom: 10, marginVertical: 20 }}
      >
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 30,
              marginBottom: 50,
            }}
          >
            Description & FAQ
          </Text>
        </View>
        <View>
          <TextInput
            textAlignVertical={"top"}
            underlineColorAndroid="transparent"
            placeholder="Type something"
            placeholderTextColor="grey"
            multiline={true}
            numberOfLines={10}
            style={styles.inputStyle}
          />
        </View>
      </ScrollView>

      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUpScreen5")}
          style={{
            height: hp("8%"),
            width: wp("40%"),
            elevation: 10,
            borderRadius: 10,
            backgroundColor: "#ff0048",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: hp("3%"),
              textAlign: "center",
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: hp("7%"), color: "#ff0048", opacity: 0.2 }}>
          ...
        </Text>
        <Text style={{ fontSize: hp("7%"), color: "#ff0048" }}>.</Text>
        <Text
          style={{
            fontSize: hp("7%"),
            color: "#ff0048",
            opacity: 0.2,
          }}
        >
          .
        </Text>
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
  inputStyle: {
    backgroundColor: "#eee",
    borderRadius: 10,
    borderColor: "black",
    height: hp("30%"),
  },
  star: { fontWeight: "bold", color: "#ff0048" },
  headingStyle: { fontWeight: "bold", fontSize: hp("2.2%") },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
});
