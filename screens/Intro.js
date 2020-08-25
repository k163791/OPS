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

export default function Intro({ navigation }) {
  const goToJoin = () => {
    navigation.navigate("Join");
  };

  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View
        style={{
          alignItems: "center",
          marginBottom: 10,
          marginTop: 10,
        }}
      >
        <TouchableOpacity>
          <Ionicons name="ios-arrow-up" size={30} style={{ left: 10 }} />
          <Text style={{ textAlign: "center" }}>Go Back</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 10,
          padding: 20,
          marginBottom: 20,
        }}
      >
        <Text style={styles.userGreet}>Work for your effort</Text>
        <Text>You bring the printing skills, we'll make the earning</Text>
      </View>
      <View style={{ marginBottom: 20 }}>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 10,
            marginHorizontal: 30,
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          {/*  1st View */}
          <View style={{ height: 100 }}>
            <Feather name="shopping-bag" size={65} color="gold" />
          </View>
          <View
            style={{
              paddingHorizontal: 12,
              marginHorizontal: 12,
            }}
          >
            <Text
              style={{ fontWeight: "bold", marginBottom: 10, fontSize: 14 }}
            >
              Create a Shop
            </Text>
            <Text style={{}}>
              Offer your printing services to the right digital audience and
              start earning
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 10,
            marginHorizontal: 30,
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          {/*  2nd View */}
          <View style={{ height: 100 }}>
            <MaterialCommunityIcons
              name="truck-delivery"
              size={65}
              color="gold"
            />
          </View>
          <View
            style={{
              paddingHorizontal: 12,
              marginHorizontal: 12,
            }}
          >
            <Text
              style={{ fontWeight: "bold", marginBottom: 10, fontSize: 14 }}
            >
              Deliver your work
            </Text>
            <Text style={{}}>
              use our built-in tools to communicate with your customers and
              deliver their orders
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 10,
            marginHorizontal: 30,
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          {/*  3rd View */}
          <View style={{ height: 100 }}>
            <MaterialIcons name="payment" size={65} color="gold" />
          </View>
          <View
            style={{
              paddingHorizontal: 12,
              marginHorizontal: 12,
            }}
          >
            <Text
              style={{ fontWeight: "bold", marginBottom: 10, fontSize: 14 }}
            >
              Get Paid
            </Text>
            <Text style={{}}>
              Recieve your payment once the order is complete
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginBottom: 20,
          position: "absolute",
          bottom: 0,
          left: 30,
          alignItems: "center",
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: 300,
              height: 50,
              elevation: 10,
              borderRadius: 10,
              backgroundColor: "gold",
              paddingVertical: 10,
              paddingHorizontal: 12,
            }}
            onPress={goToJoin}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#fff",
                fontWeight: "bold",
                alignSelf: "center",
                textTransform: "uppercase",
              }}
            >
              continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userGreet: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
