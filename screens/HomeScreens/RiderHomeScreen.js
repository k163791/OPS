import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
 } from 'react-native';

 import {
   widthPercentageToDP as wp,
   heightPercentageToDP as hp,
 } from "react-native-responsive-screen";

import { APP_URL } from "../constant_vars";
import axios from "axios";

export default function RiderHomeScreen({ navigation, route }) {

  const [ requests, setRequests ] = useState([])

  useEffect(() => {
    console.log("Route: ", route.params);

    axios.get(APP_URL + "rider/dashboardDetails", {
      headers: { "Authorization": `Bearer ${route.params.token}`}
    }).then(res => {
      console.log('total requests: ', res.data.result.totalRequest);
      console.log('total requests length: ', res.data.result.totalRequest.length);
      setRequests(res.data.result.totalRequest);
    }).catch(err => {
      alert(err);
    })
  }, [])


  const acceptOrder = (id, item) => {
    axios.get(APP_URL + "rider/acceptOrderDelivery/" + id, {
      headers: { 'Authorization': `Bearer ${route.params.token}` }
    })
    .then(res => {
      console.log('accept order response: ',res.data)
      navigation.navigate("MapView", { data: item })
    }).catch(err => {
      alert(err);
    })
  }

  // rider/orderStatus

  const allRequests = () => {

    if(!requests.length) {
      return <Text>No pending requests</Text>
    } else {
      return requests.map((item) => {
        return(
          <View key={item._id} style={styles.acceptModal}>
            <Text>Order id: {item._id}</Text>
            <Text>payment: {item.payment.method}</Text>
            <Text>
              Location:
              { item.shippingAddress.address },
              { item.shippingAddress.city },
              { item.shippingAddress.country },
              { item.shippingAddress.region },
              { item.shippingAddress.zip }
            </Text>
            <TouchableOpacity
              style={styles.acceptBtnStyle}
              onPress={() => acceptOrder(item._id, item)}
              >
              <Text style={styles.btnTextStyle}>Accept</Text>
            </TouchableOpacity>
          </View>
        )
      })
    }

  }


  return(
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: hp('3%'), marginBottom: hp('1%') }}>All Requests</Text>
      </View>
      <ScrollView>
        <SafeAreaView>
          {allRequests()}

          
        </SafeAreaView>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: hp('7%')
    // marginVertical: hp('2%'),
  },
  acceptBtnStyle: {
    width: wp('80%'),
    height: hp('7%'),
    backgroundColor: '#0275d8',
    marginVertical: hp('1%'),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  acceptModal: {
    width: wp('90%'),
    backgroundColor: '#F2F4F4',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  btnTextStyle: {
    color: 'white'
  }
})
