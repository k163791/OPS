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
} from "react-native";
import { Feather, Ionicons, FontAwesome } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import DrawerContent from "./DrawerContent";
import axios from "axios";
import { APP_URL } from "../constant_vars"

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function homeDrawer({ navigation, route }) {

  const [gallery, setgallery] = useState([]);
  const [ sellers, setSellers ] = useState([]);
  const [ products, setProducts ] = useState([]);
  const [ virtualProducts, setVirtualProducts ] = useState([]);

  useEffect(() => {
    console.log('Route Params: ', route)
    axios.get(APP_URL + "user/popularServices")
    .then(res => {
      // console.log(res.data.result.p)
      setgallery(res.data.result.popularServices)
    }).catch(err => {
      alert(err);
    })

    axios.get(APP_URL + "vendor/getAllVendor", {
      headers: { "Authorization": `Bearer ${route.params.token}`}
    })
    .then(res => {
        // console.log('vendors: ',res.data.result);
        setSellers(res.data.result)
    }).catch(err => {
      alert(err)
    })

    axios.get(APP_URL + "product?type=physical", {
      headers: { 'Authorization': `Bearer ${route.params.token}`}
    }).then(res => {
      setProducts(res.data.result)
    }).catch(err => {
      alert(err)
    })

    axios.get(APP_URL + "product?type=virtual", {
      headers: {'Authorization': `Bearer ${route.params.token}`}
    }).then(res => {
      setVirtualProducts(res.data.result)
    })

  }, [])

  return (
    <View style={{ flex: 1, marginBottom: 10 }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={{ marginBottom: hp("3%") }}
        >
          <Feather name="menu" size={hp("3.7%")} color="#ff0048" />
        </TouchableOpacity>

        <Text style={styles.headerText}>OPS</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Wallet")}
          style={{ marginBottom: hp("3%") }}
        >
          <Ionicons name="ios-wallet" size={hp("3.7%")} color="#ff0048" />
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flexGrow: 1, height: "100%" }}>
        <View
          style={{
            alignItems: "center",
            marginVertical: 10,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <FontAwesome name="search" size={20} color="#ff0048" />
          <TextInput
            placeholder="Find services you want"
            style={{
              height: hp("5%"),
              width: wp("70%"),
              borderColor: "transparent",
              borderWidth: 1,
              left: 10,
            }}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={{ fontSize: hp("3%"), fontWeight: "bold" }}>
            Popular Services
          </Text>
          <TouchableOpacity onPress={() => console.log(route.params.username)}>
            <Text style={{ top: 20, color: "#ff0048", fontWeight: "bold" }}>
              View All
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20 }}>
          <FlatList
            style={{ marginHorizontal: 10 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={gallery}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    marginHorizontal: 10,
                  }}
                >
                  <TouchableOpacity>
                    <View
                      style={{
                        backgroundColor: "#eee",
                        borderRadius: 10,
                        overflow: "hidden",
                      }}
                    >
                      <View>
                        <Image
                          source={{ uri: item.img }}
                          style={{
                            height: hp("30%"),
                            width: wp("35%"),
                          }}
                        />
                      </View>
                      <View style={{ padding: 10, width: 120 }}>
                        <Text style={{ textAlign: "center", fontSize: hp('1%') }}>
                          {item.title}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <View style={{ height: 50 }}></View>
        <View style={styles.titleContainer}>
          <Text style={{ fontSize: hp("2.2%"), fontWeight: "bold" }}>
            Sellers
          </Text>
          <TouchableOpacity>
            <Text style={{ top: 10, color: "#ff0048", fontWeight: "bold" }}>
              View All
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20 }}>
          <FlatList
            style={{ marginHorizontal: 10 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={sellers}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    marginHorizontal: 10,
                  }}
                >
                  <TouchableOpacity>
                    <View
                      style={{
                        backgroundColor: "#eee",
                        borderRadius: 10,
                        overflow: "hidden",
                      }}
                    >
                      <View>
                        <Image
                          source={{ uri: item.gallery[0] }}
                          style={{
                            height: 135,
                            width: 120,
                          }}
                        />
                      </View>
                      <View style={{ padding: 10, width: 120 }}>
                        <Text style={{ textAlign: "center", fontSize: hp('1%') }}>
                          {item.personal.shopName}
                        </Text>
                      </View>
                      <View
                        style={{
                          backgroundColor: "#fff",
                          width: wp("15%"),
                          height: hp("3%"),
                          position: "absolute",
                          top: 0,
                          right: 0,
                          borderBottomLeftRadius: 10,
                        }}
                      >
                        <Text
                          style={{
                            color: "#ff0048",
                            fontSize: hp("1.5%"),
                            fontWeight: "bold",
                            textAlign: "center",
                          }}
                        >
                          25 min
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <View style={{ height: 50 }}></View>
        <View style={styles.titleContainer}>
          <Text style={{ fontSize: hp("3%"), fontWeight: "bold" }}>
            Physical Products
          </Text>
          <TouchableOpacity onPress={() => console.log(route.params.username)}>
            <Text style={{ top: 20, color: "#ff0048", fontWeight: "bold" }}>
              View All
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20 }}>
          <FlatList
            style={{ marginHorizontal: 10 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={products}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    marginHorizontal: 10,
                  }}
                >
                  <TouchableOpacity>
                    <View
                      style={{
                        backgroundColor: "#eee",
                        borderRadius: 10,
                        overflow: "hidden",
                      }}
                    >
                      <View>
                        <Image
                          source={{ uri: item.img[0] }}
                          style={{
                            height: hp("30%"),
                            width: wp("35%"),
                          }}
                        />
                      </View>
                      <View style={{ padding: 10, width: 120 }}>
                        <Text style={{ textAlign: "center", fontSize: hp('1%') }}>
                          {item.title}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <View style={{ height: 50 }}></View>
        <View style={styles.titleContainer}>
          <Text style={{ fontSize: hp("3%"), fontWeight: "bold" }}>
            Virtual Products
          </Text>
          <TouchableOpacity onPress={() => console.log(route.params.username)}>
            <Text style={{ top: 20, color: "#ff0048", fontWeight: "bold" }}>
              View All
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20 }}>
          <FlatList
            style={{ marginHorizontal: 10 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={virtualProducts}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    marginHorizontal: 10,
                  }}
                >
                  <TouchableOpacity>
                    <View
                      style={{
                        backgroundColor: "#eee",
                        borderRadius: 10,
                        overflow: "hidden",
                      }}
                    >
                      <View>
                        <Image
                          source={{ uri: item.img[0] }}
                          style={{
                            height: hp("30%"),
                            width: wp("35%"),
                          }}
                        />
                      </View>
                      <View style={{ padding: 10, width: 120 }}>
                        <Text style={{ textAlign: "center", fontSize: hp('1%') }}>
                          {item.title}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <View style={{ height: 50 }}></View>
      </ScrollView>
    </View>
  );
}

export default function HomeScreen({ navigation, route }) {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={homeDrawer}
        imageIcon={{ uri: "https://i.redd.it/1ddlsj0xali51.jpg" }}
        initialParams={route.params}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  searchBox: {
    marginTop: 16,
    backgroundColor: "#fff",
    paddingLeft: 24,
    padding: 12,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    width: "90%",
  },
  imageOverlay: {
    width: wp("41.5%"),
    height: hp("42%"),
    marginRight: 8,
    borderRadius: 10,
    position: "absolute",
    backgroundColor: "#000",
    opacity: 0.2,
  },
  imageIcon: {
    position: "absolute",
    marginTop: 4,
    left: 10,
    bottom: 10,
  },
  imageText: {
    position: "absolute",
    color: "white",
    fontSize: hp("2.2%"),
    left: 30,
    bottom: 20,
  },
  headerContainer: {
    backgroundColor: "#F7DC6F",
    height: hp("15%"),
    width: wp("100%"),
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  headerText: {
    fontSize: hp("4.7%"),
    fontWeight: "bold",
    color: "black",
    marginBottom: hp("2%"),
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  imageStyle: {
    width: wp("35%"),
    marginRight: 8,
    height: hp("25%"),
    borderRadius: 10,
  },
});
