import React, { useState, useEffect } from "react";
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
  Image,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import * as ImagePicker from 'expo-image-picker';

export default function SignUpScreen2({ navigation, route }) {

  const [profileImage, setProfileImage] = useState(null)
  const [ shopName, setShopName ] = useState("");
  const [ phoneNumber, setPhoneNumber ] = useState("");
  const [ selectedValue, setSelectedValue ] = useState("pakistan");
  const [ delivery, setDelivery ] = useState(false)
  const [ takeaway, setTakeaway ] = useState(false)
  const [ selectedCity, setSelectedCity] = useState("karachi")
  const [ postalCode, setPostalCode ] = useState("");

  const onSelectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log('result: ',result);

    if (!result.cancelled) {
      setProfileImage(result.uri);
    }
  }


  const Submit = () => {
    try {
      // console.log(route.params.vendor);
      let vendor = route.params.vendor;
      vendor.shopName = shopName;
      vendor.phoneNumber = phoneNumber;
      vendor.country = selectedValue;
      vendor.city = selectedCity;
      vendor.delivery = delivery;
      vendor.takeaway = takeaway;
      vendor.postalCode = postalCode;
      vendor.profileImage = profileImage;

      // console.log('Vendor: ', vendor);
      navigation.navigate("SignUpScreen3", { vendor: vendor })

    } catch (e) {
      throw e;
    }

  }


  return (
    <View style={styles.container}>
      <View style={styles.backContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-up" size={hp("4%")} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginVertical: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            height: hp("10%"),
            width: wp("20%"),
            borderRadius: 50,
            elevation: 10,
            backgroundColor: "#D5DCDD",
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: "space-evenly",
              alignItems: "center",
            }}

            onPress={onSelectImage}
          >

          {
            profileImage !== null ?
            (
                <Image source={{ uri: profileImage }}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 50,
                }} />
            ):
            (
              <View>
                <FontAwesome name="user" size={40} color="#ff0048" />
                <Text
                  style={{
                    fontSize: hp("1.2%"),
                    position: "absolute",
                    bottom: hp("1%"),
                  }}
                >
                  Add Photo
                </Text>
              </View>
            )
          }


          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{ marginHorizontal: 20, marginBottom: 10 }}>
        <View style={styles.itemContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.headingStyle}>Shop Name</Text>
            <Text style={styles.star}>*</Text>
          </View>
          <TextInput
            textAlign="center"
            style={styles.inputStyle}
            placeholder="Enter your shop's name"
            value={shopName}
            onChangeText={ shopName => setShopName(shopName) }
          />
        </View>

        <View style={styles.itemContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.headingStyle}>Phone Number</Text>
            <Text style={styles.star}>*</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <TextInput
              textAlign="center"
              value="+92"
              style={{
                width: wp("18%"),
                height: hp("6%"),
                backgroundColor: "#eee",
                marginRight: 10,
                borderRadius: 10,
              }}
              readonly
            />
            <TextInput
              textAlign="center"
              placeholder="3323696481"
              keyboardType="numeric"
              maxLength={10}
              style={{
                width: wp("37%"),
                height: hp("6%"),
                backgroundColor: "#eee",
                borderRadius: 10,
              }}
              value={phoneNumber}
              onChangeText={phoneNumber => setPhoneNumber(phoneNumber) }
            />
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.headingStyle}>Country</Text>
            <Text style={styles.star}>*</Text>
          </View>
          <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 50 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Pakistan" value="pakistan" />
            <Picker.Item label="Afghanistan" value="afghanistan" />
        </Picker>

        </View>

        <View style={styles.itemContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.headingStyle}>City</Text>
            <Text style={styles.star}>*</Text>
          </View>

          <Picker
            style={{
              height: 50,
              width: 50,
            }}
            selectedValue={selectedCity}
            onValueChange={(itemValue, itemIndex) => setSelectedCity(itemValue)}
          >
            <Picker.Item label="Karachi" value="karachi" />
            <Picker.Item label="Lahore" value="lahore" />
          </Picker>
        </View>

        <View style={styles.itemContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.headingStyle}>Postal Code</Text>
            <Text style={styles.star}>*</Text>
          </View>
          <TextInput
            textAlign="center"
            style={styles.inputStyle}
            placeholder="Postal/Zip Code`"
            value={postalCode}
            onChangeText={postalCode => setPostalCode(postalCode) }
              keyboardType="numeric"
          />
        </View>

        <View style={styles.itemContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.headingStyle}>Delivery</Text>
            <Text style={styles.star}>*</Text>
          </View>
          <CheckBox
            style={{ color: "#ff0048" }}
            value={delivery}
            onValueChange={setDelivery}
            />
        </View>

        <View style={styles.itemContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.headingStyle}>Take Away</Text>
            <Text style={styles.star}>*</Text>
          </View>
          <CheckBox
            style={{ color: "#ff0048" }}
            value={takeaway}
            onValueChange={setTakeaway}
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
          // onPress={() => navigation.navigate("SignUpScreen3")}
          onPress={Submit}
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
          .
        </Text>
        <Text style={{ fontSize: hp("7%"), color: "#ff0048" }}>.</Text>
        <Text
          style={{
            fontSize: hp("7%"),
            color: "#ff0048",
            opacity: 0.2,
          }}
        >
          ...
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
    height: hp("6%"),
    borderRadius: 10,
    width: wp("60%"),
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
