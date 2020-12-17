import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { TextInput } from "react-native-paper";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function MapScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }}
      >
        <Polyline
      		coordinates={[
      			{ latitude: 24.9008, longitude: 67.1681 },
            { latitude: 24.9056, longitude: 67.0822},

      			// { latitude: 37.8025259, longitude: -122.4351431 }
      		]}
      		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
      		strokeColors={[
      			'#7F0000',
      			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
      			'#B24112',
      			'#E5845C',
      			'#238C23',
      			'#7F0000'
      		]}
      		strokeWidth={6}
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
