import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { TextInput } from "react-native-paper";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function MapScreen({ navigation }) {
  var markers = [
    {
      latitude: 38.8825,
      longitude: -122.4324,
      title: "Foo Place",
      subtitle: "1234 Foo Drive",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <MapView
        initialRegion={{
          latitude: 24.9056,
          longitude: 67.0822,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ flex: 1 }}
      >
        <Marker
          coordinate={{ latitude: 24.9177524, longitude: 67.0996697 }}
          title={"Deneme"}
        />
      </MapView>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 14,
            textTransform: "uppercase",
            alignSelf: "center",
            marginBottom: 10,
          }}
        >
          please enter your delivery address
        </Text>
        <TextInput
          placeholder="Enter Your Location"
          style={{
            width: widthPercentageToDP("90%"),
            height: heightPercentageToDP("6%"),
            borderRadius: 10,
          }}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("ServiceScreen")}
          style={{
            width: widthPercentageToDP("90%"),
            height: heightPercentageToDP("8%"),
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "gold",
            borderRadius: 10,
            marginVertical: 10,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: heightPercentageToDP("3%"),
            }}
          >
            Search
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
