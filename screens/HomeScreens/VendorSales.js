import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  ImageBackground,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import {
  Feather,
  Ionicons,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import axios from "axios"
import { APP_URL } from "../constant_vars";

export default function VendorMessages({ navigation, route }) {
  const [message, setMessage] = useState([
    { message: "Hello Brother", key: "1" },
    { message: "In This Shirt", key: "2" },
  ]);

  const [ orders, setOrders ] = useState([])
  // const [ delivered, setDelivered ] = useState([])
  // const [ shipped, setShipped ] = useState([])
  // const [ profileImage, setProfileImage ] = useState("")
  const [ changeStatusSubmit, setChangeStatusSubmit ] = useState(false)
  const [ token, setToken ] = useState("")
  useEffect(() => {
    console.log("Sales: ", route);
    let vendor = route.params;
    axios.get(APP_URL + "vendor/getOrder", {
      headers: {'Authorization': `Bearer ${vendor.token}`}
    })
    .then(res => {
      let result = res.data.result;
      console.log('result: ', result);
      setOrders(result)
    }).catch(err => {
      alert(err);
    })


    axios.get(APP_URL + "vendor/documentRequest", {
      headers: { 'Authorization': `Bearer ${route.params.token}`}
    })
    .then(res => {
      console.log('Doc Request: ', res.data)
    }).catch(err => {
      alert(err)
    })


  }, [])


  const changeStatus = (tracking, id, token) => {
    let { delivered, shipped } = tracking;
    if(!delivered) {
        // console.log('token: ', token)
        setChangeStatusSubmit(true)
        axios.post(APP_URL + "vendor/orderStatus/" + id, {
          tracking: {
            delivered: true,
            shipped: true,
          }
        }, {
          headers: { 'Authorization': `Bearer ${route.params.token}`}
        }).then(res => {
          setChangeStatusSubmit(false)

            console.log(res.data);
        }).catch(err => {
          setChangeStatusSubmit(false)
          alert(err);
        })

    } else {
      setChangeStatusSubmit(true)
      axios.post(APP_URL + "vendor/orderStatus/" + id, {
        tracking: {
          delivered: false,
          shipped: true
        }
      }, {
        headers: { 'Authorization': `Bearer ${route.params.token}`}
      }).then(res => {
        setChangeStatusSubmit(false)

          console.log(res.data);
      }).catch(err => {
        setChangeStatusSubmit(false)
        alert(err);
      })
    }
  }

  return (
    <View style={{ flex: 1, marginBottom: 10 }}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Manage Sales</Text>
        <TouchableOpacity
          style={{
            marginBottom: hp("3%"),
            fontWeight: "bold",
            color: "#ff0048",
            fontSize: hp("3%"),
            left: wp("12%"),
            marginBottom: hp("3%"),
          }}
        >
          <FontAwesome name="question-circle" size={hp("4%")} color="black" />
        </TouchableOpacity>
      </View>

      <SafeAreaView
        style={{ flex: 1, marginVertical: 10, marginHorizontal: 10 }}
      >
        <FlatList
          data={orders}
          renderItem={({ item }) => {
            return (
              <View key={item._id}>
                <View
                  style={{
                    flex: 1,
                    elevation: 5,
                    backgroundColor: "#fff",
                    marginBottom: 20,
                    borderRadius: 10,
                    padding: 20,
                    alignItems: "flex-start",
                  }}
                >
                  <Image
                    source={{ uri: "https://i.redd.it/1ddlsj0xali51.jpg" }}
                    style={{ height: 70, width: 70, borderRadius: 50 }}
                  />
                  <Text
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 100,
                      top: 20,
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  >
                    {item.user.first_name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "bold",
                      position: "absolute",
                      top: 0,
                      right: 0,
                      marginRight: 10,
                    }}
                  >
                    April 23, 2020
                  </Text>
                  <Text
                    numberOfLines={3}
                    style={{
                      fontSize: 14,
                      position: "absolute",
                      top: 40,
                      left: 100,
                      marginRight: wp("35%"),
                    }}
                  >

                  </Text>
                  <View
                    style={{
                      position: "absolute",
                      top: 80,
                      left: 100,
                      marginRight: wp("35%"),
                      borderWidth: 1,
                      borderColor: "gold",
                      borderRadius: 8,
                      width: wp("30%"),
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ alignSelf: "center" }}>
                      {
                        item.tracking.delivered ?
                        (
                          "Delivered"
                        ):
                        item.tracking.shipped ?
                        (
                          "Shipped"
                        ):
                        (
                          "Pending"
                        )
                      }

                    </Text>
                  </View>

                  <View
                    style={{
                      position: "absolute",
                      top: 70,
                      left: wp("70%"),
                      marginRight: wp("35%"),
                      justifyContent: "center",
                    }}
                  >
                    <TouchableOpacity
                      disabled={item.tracking.delivered && item.tracking.shipped}
                      style={styles.sendBtnStyle}
                      onPress={ () => changeStatus(item.tracking, item._id)}
                    >
                    {
                      changeStatusSubmit ?
                      (
                          <ActivityIndicator size="small" color="white"/>
                      ):
                      (
                          <Text style={styles.whiteTextStyle}>
                            {
                              !item.tracking.shipped ?
                              (
                                "Ship"
                              ):
                              !item.tracking.delivered ?
                              (
                                  "Deliver"
                              ):
                              (
                                "Delivered"
                              )
                            }
                          </Text>
                      )
                    }
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#ff0048",
    height: hp("15%"),
    width: wp("100%"),
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  headerText: {
    fontSize: hp("3.7%"),
    fontWeight: "bold",
    color: "black",
    marginBottom: hp("2%"),
  },
  sendBtnStyle: {
    width: wp('20%'),
    height: hp('4%'),
    fontSize: hp('4%'),
    borderRadius: 10,
    backgroundColor: '#5bc0de',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteTextStyle: {
    color: 'white',
  }
});
