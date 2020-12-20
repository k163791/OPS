import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { TextInput } from "react-native-paper";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Permissions from 'expo-permissions';
import * as Location from "expo-location";

export default function MapScreen({ navigation, route }) {

  const [ location, setLocation ] = useState({
    coords: {
      latitude: 24.9056,
      longitude: 67.0822,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  })

  const [ dynamic, setDynamic ] = useState(0.0456798)

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      console.log("location: ", loc.coords);
      setLocation(loc);

      console.log('random: ',Math.random());
      setDynamic(Math.random() - 0.7)
    })();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ flex: 1 }}
      >
        <Marker
          coordinate={{ latitude: location.coords.latitude, longitude: location.coords.longitude }}
          title={"Rider"}
        />

        <Marker
          coordinate={{ latitude: location.coords.latitude + dynamic, longitude: location.coords.longitude }}
          pinColor="gold"
        />


      </MapView>
      <View style={{ alignItems: "center", marginVertical: 10 }}>

        <TouchableOpacity
          style={{
            width: widthPercentageToDP("90%"),
            height: heightPercentageToDP("8%"),
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0275d8",
            borderRadius: 10,
            marginVertical: 10,
          }}
          onPress={ () => navigation.goBack() }
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: heightPercentageToDP("3%"),
            }}
          >
            MARK DELIVERED
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
