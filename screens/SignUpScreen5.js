import React, { useState } from "react";
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
import { Ionicons, FontAwesome, Feather } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

export default function SignUpScreen5({ navigation, route }) {

  const [ gallery, setGallery ] = useState([])

  const [ disabled1, setDisabled1] = useState(false)
  const [ disabled2, setDisabled2] = useState(false)
  const [ disabled3, setDisabled3] = useState(false)

  const [image1, setImage1] = useState(null)
  const [image2, setImage2] = useState(null)
  const [image3, setImage3] = useState(null)


  const Submit = () => {
    try {
      console.log(gallery);
      let vendor = route.params.vendor;
      if(gallery.length) {
        vendor.gallery = gallery;
      }


    } catch(e) {
      throw e;
    }
  }

  const onSelectImage = async (key) => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });


      if (!result.cancelled) {
        // setProfileImage(result.uri);
        let temp = gallery;
        temp.push(result.uri)
        setGallery(temp)
        if(key === 1) {
          setDisabled1(true)
          setImage1(result.uri)
        } else if(key === 2) {
          setDisabled2(true)
          setImage2(result.uri)
        } else {
          setDisabled3(true)
          setImage3(result.uri)
        }
      }
    } catch(e) {
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

      <ScrollView
        style={{ marginHorizontal: 20, marginBottom: 10, marginVertical: 20 }}
      >
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 30,
              marginBottom: 20,
            }}
          >
            Gallery
          </Text>
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text>Shop Photos</Text>
              <Text style={{ color: "#ff0048" }}>*</Text>
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text>Upload photos that describe or related to your shop</Text>
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text>Max 3 pictures can be added</Text>
            </View>
            <View>
            {
                image1 !== null ?
                (
                  <Image source={{ uri: image1 }}
                  style={styles.imageStyle} />
                ):
                (
                  <TouchableOpacity disabled={disabled1} onPress={() => onSelectImage(1) }>
                    <View
                      style={styles.galleryImages}
                    >
                      <Feather name="plus" size={hp('8%')} color="#ff0048" />
                    </View>
                  </TouchableOpacity>
                )
            }

            {
              image2 !== null ?
              (
                  <Image source={{ uri: image2 }} style={styles.imageStyle}/>
              ):
              (
                <TouchableOpacity disabled={disabled2} onPress={ () => onSelectImage(2) }>
                  <View
                    style={styles.galleryImages}
                  >
                    <Feather name="plus" size={hp("8%")} color="#ff0048" />
                  </View>
                </TouchableOpacity>

              )
            }

            {
              image3 !== null ?
              (
                <Image source={{ uri: image3 }} style={styles.imageStyle} />
              ):
              (
                <TouchableOpacity disabled={disabled3} onPress={ () => onSelectImage(3) }>
                  <View
                    style={styles.galleryImages}
                  >
                    <Feather name="plus" size={hp("8%")} color="#ff0048" />
                  </View>
                </TouchableOpacity>
              )
            }


            </View>
          </View>
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
          // onPress={() => navigation.navigate("VendorHome")}
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
          ....
        </Text>
        <Text style={{ fontSize: hp("7%"), color: "#ff0048" }}>.</Text>
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
  galleryImages: {
    elevation: 3,
    backgroundColor: "#fff",
    borderRadius: 10,
    height: hp("10%"),
    width: wp("20%"),
    alignItems: "center",
    justifyContent: "center",
    marginVertical: hp("0.5%")
  },
  imageStyle: {
    borderRadius: 10,
    height: hp("10%"),
    width: wp("20%"),
    marginVertical: hp("0.5%"),
  }
});
