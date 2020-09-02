import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Switch,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Feather, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { Badge } from "react-native-elements";
import { Video } from "expo-av";

export default function AccountScreen({ navigation }) {
  return (
    <View style={{ flex: 1, marginBottom: 10 }}>
      <View>
        <Video
          source={require("../../assets/background.mp4")}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: wp("100%"), height: hp("30%") }}
        />
        <Image
          source={{ uri: "https://i.redd.it/1ddlsj0xali51.jpg" }}
          style={{
            height: 70,
            width: 70,
            borderRadius: 50,
            position: "absolute",
            top: 70,
            left: 20,
          }}
        />
        <Badge
          status="success"
          containerStyle={{
            position: "absolute",
            top: 120,
            right: 190,
            left: 0,
          }}
        />
        <Text
          style={{
            position: "absolute",
            top: 70,
            left: 100,
            fontWeight: "bold",
            fontSize: 24,
          }}
        >
          Bruce Wayne
        </Text>
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            top: 100,
            left: 100,
          }}
        >
          <Text style={{ fontSize: 14 }}>Personal Balance</Text>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>: $0</Text>
        </View>
        <TouchableOpacity>
          <Feather
            name="settings"
            size={24}
            color="black"
            style={{
              left: wp("86%"),
              color: "#ff0048",
              bottom: hp("20%"),
            }}
          />
        </TouchableOpacity>

        <View
          style={{
            elevation: 10,
            backgroundColor: "#fff",
            shadowColor: "#eee",
            width: "90%",
            height: 50,
            borderRadius: 10,
            alignSelf: "center",
            bottom: hp("7%"),
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <FontAwesome5 name="warehouse" size={20} color="gray" />
          <Text>Vendor Dashboard</Text>
          <Switch value={true} />
        </View>
      </View>
      {/* <View style={styles.headerContent}>
        <Image
          source={{ uri: "https://i.redd.it/1ddlsj0xali51.jpg" }}
          style={{
            height: 70,
            width: 70,
            borderRadius: 50,
            position: "absolute",
            top: 70,
            left: 20,
          }}
        />
        <Badge
          status="success"
          containerStyle={{
            position: "absolute",
            top: 120,
            right: 190,
            left: 0,
          }}
        />
        <Text
          style={{
            position: "absolute",
            top: 70,
            left: 100,
            fontWeight: "bold",
            fontSize: 24,
          }}
        >
          Bruce Wayne
        </Text>

        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            top: 100,
            left: 100,
          }}
        >
          <Text style={{ fontSize: 14 }}>Personal Balance</Text>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>: $0</Text>
        </View>
        <TouchableOpacity>
          <Feather
            name="settings"
            size={24}
            color="black"
            style={{
              top: hp("8%"),
              left: wp("86%"),
              color: "#ff0048",
            }}
          />
        </TouchableOpacity>

        <View
          style={{
            elevation: 10,
            backgroundColor: "#fff",
            shadowColor: "#eee",
            width: "90%",
            height: 50,
            borderRadius: 10,
            alignSelf: "center",
            top: 170,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <FontAwesome5 name="warehouse" size={20} color="gray" />
          <Text>Vendor Dashboard</Text>
          <Switch value={true} />
        </View> */}
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContent: {
    width: "100%",
    height: 200,
    backgroundColor: "#F7DC6F",
  },
});
