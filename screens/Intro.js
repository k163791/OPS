import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Intro({ navigation }) {
  const goToJoin = () => {
    navigation.navigate("Join", { username: "Vendor" });
  };

  return (
    <View style={styles.container}>
      <View style={styles.backContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-up" size={hp("4%")} />
        </TouchableOpacity>
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.userGreet}>Work for your effort</Text>
        <Text>You bring the printing skills, we'll make the earning</Text>
      </View>
      <View>
        <View style={styles.contentOuterView}>
          {/*  1st View */}
          <View style={styles.contentHeight}>
            <Feather name="shopping-bag" size={65} color="gold" />
          </View>
          <View style={styles.rightText}>
            <Text style={styles.rightTextHeaderStyle}>Create a Shop</Text>
            <Text style={styles.rightTextContentStyle}>
              Offer your printing services to the right digital audience and
              start earning
            </Text>
          </View>
        </View>
        <View style={styles.contentOuterView}>
          {/*  2nd View */}
          <View style={styles.contentHeight}>
            <MaterialCommunityIcons
              name="truck-delivery"
              size={65}
              color="gold"
            />
          </View>
          <View style={styles.rightText}>
            <Text style={styles.rightTextHeaderStyle}>Deliver your work</Text>
            <Text style={styles.rightTextContentStyle}>
              use our built-in tools to communicate with your customers and
              deliver their orders
            </Text>
          </View>
        </View>
        <View style={styles.contentOuterView}>
          {/*  3rd View */}
          <View style={styles.contentHeight}>
            <MaterialIcons name="payment" size={65} color="gold" />
          </View>
          <View style={styles.rightText}>
            <Text style={styles.rightTextHeaderStyle}>Get Paid</Text>
            <Text style={styles.rightTextContentStyle}>
              Recieve your payment once the order is complete
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={styles.btnStyle} onPress={goToJoin}>
            <Text style={styles.btnTextStyle}>continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  userGreet: {
    fontSize: hp("3.8%"),
    fontWeight: "bold",
    marginBottom: hp("1%"),
  },
  backContainer: {
    alignItems: "center",
    marginBottom: hp("1%"),
    marginTop: hp("1%"),
  },
  headingContainer: {
    marginTop: hp("1%"),
    padding: hp("2%") + wp("2%"),
    marginBottom: hp("3%"),
  },
  contentOuterView: {
    flexDirection: "row",
    paddingHorizontal: wp("2%"),
    marginHorizontal: wp("10%"),
    justifyContent: "center",
    marginBottom: hp("4%"),
  },
  rightText: {
    paddingHorizontal: wp("2%"),
    marginHorizontal: wp("5%"),
  },
  rightTextHeaderStyle: {
    fontWeight: "bold",
    marginBottom: hp("1%"),
    fontSize: hp("2.2%"),
  },
  rightTextContentStyle: {
    fontSize: hp("2.2%"),
  },
  contentHeight: { height: hp("15%") },
  btnContainer: {
    marginBottom: hp("4%"),
    position: "absolute",
    bottom: 0,
    left: 30,
    alignItems: "center",
  },
  btnStyle: {
    width: wp("80%"),
    height: hp("8%"),
    elevation: hp("1%"),
    borderRadius: 10,
    backgroundColor: "gold",
    paddingVertical: hp("2%"),
    paddingHorizontal: wp("1%"),
  },
  btnTextStyle: {
    fontSize: hp("2.2%"),
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
