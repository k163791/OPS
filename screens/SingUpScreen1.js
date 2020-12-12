import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar, Picker } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SingUpScreen1({ navigation, route }) {

  const [selectedValue, setSelectedValue] = useState("personal")

  return (
    <View style={styles.container}>
      <View style={{ height: heightPercentageToDP("30%") }}></View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 20,
        }}
      >
        <Text
          style={{ fontSize: heightPercentageToDP("2.5%"), fontWeight: "bold" }}
        >
          Store Type
        </Text>
        <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Personal" value="personal" />
          <Picker.Item label="Business" value="business" />
      </Picker>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUpScreen2", { vendor: route.params.vendor })}
          style={{
            height: heightPercentageToDP("8%"),
            width: widthPercentageToDP("40%"),
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
              fontSize: heightPercentageToDP("3%"),
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
        <Text
          style={{ fontSize: heightPercentageToDP("7%"), color: "#ff0048" }}
        >
          .
        </Text>
        <Text
          style={{
            fontSize: heightPercentageToDP("7%"),
            color: "#ff0048",
            opacity: 0.2,
          }}
        >
          ....
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
});
