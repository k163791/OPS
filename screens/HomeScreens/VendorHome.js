import React, { useState } from "react";
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
import {
  Feather,
  Ionicons,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import DrawerContent from "./VendorDrawerContent";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function homeDrawer({ navigation, route }) {
  const [gallery, setgallery] = useState([
    {
      image: {
        uri:
          "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      title: "Switzerland",
      key: "1",
    },
    {
      image: {
        uri:
          "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      title: "New Zeland",
      key: "2",
    },
    {
      image: {
        uri:
          "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      title: "Rome",
      key: "3",
    },
    {
      image: {
        uri:
          "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      title: "Tahiti",
      key: "4",
    },
  ]);

  return (
    <View style={{ flex: 1, marginBottom: 20 }}>
      <View style={{ backgroundColor: "#5E6364" }}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={{ marginBottom: hp("3%") }}
          >
            <Feather name="menu" size={hp("3.7%")} color="black" />
          </TouchableOpacity>

          <Text style={styles.headerText}>OPS</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Wallet")}
            style={{ marginBottom: hp("3%") }}
          >
            <Ionicons name="ios-wallet" size={hp("3.7%")} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={{ flexGrow: 1, height: "100%" }}>
        <View
          style={{
            height: hp("60%"),
            width: wp("100%"),
            backgroundColor: "#5E6364",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              margin: 20,
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: "https://i.redd.it/8rr9o5hakpg51.jpg" }}
              style={{
                height: hp("10%"),
                width: wp("20%"),
                borderRadius: 50,
                marginRight: 20,
              }}
            />
            <View>
              <Text
                style={{
                  color: "gold",
                  fontWeight: "bold",
                  fontSize: hp("2.2%"),
                  marginRight: 20,
                }}
              >
                Arthur Fleck's Printing Works
              </Text>
            </View>
          </View>
          <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <Text style={{ color: "gold", fontSize: hp("2%") }}>
                Shop Level
              </Text>
              <Text style={{ color: "gold", fontSize: hp("2%") }}>
                Beginner
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: "gold", fontSize: hp("2%") }}>
                Response Time
              </Text>
              <Text style={{ color: "gold", fontSize: hp("2%") }}>
                1 Hour(s)
              </Text>
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: "gold" }}>
              ____________________________________
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={{
                  elevation: 3,
                  width: wp("20"),
                  height: hp("10%"),
                  borderColor: "gold",
                  borderStyle: "solid",
                  borderRadius: 50,
                  borderWidth: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View>
                  <FontAwesome name="users" size={hp("5%")} color="gold" />
                  <Text
                    style={{
                      color: "gold",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    190+
                  </Text>
                </View>
              </TouchableOpacity>
              <Text
                style={{
                  marginTop: 10,
                  color: "gold",
                  alignItems: "center",
                  fontSize: hp("1.5%"),
                  fontWeight: "bold",
                  alignSelf: "center",
                }}
              >
                Customers
              </Text>
            </View>

            <View>
              <TouchableOpacity
                style={{
                  elevation: 3,
                  width: wp("20"),
                  height: hp("10%"),
                  borderColor: "gold",
                  borderStyle: "solid",
                  borderRadius: 50,
                  borderWidth: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View>
                  <FontAwesome
                    name="shopping-cart"
                    size={hp("5%")}
                    color="gold"
                  />
                  <Text
                    style={{
                      color: "gold",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    190+
                  </Text>
                </View>
              </TouchableOpacity>
              <Text
                style={{
                  marginTop: 10,
                  color: "gold",
                  alignItems: "center",
                  fontSize: hp("1.5%"),
                  fontWeight: "bold",
                  alignSelf: "center",
                }}
              >
                Products
              </Text>
            </View>

            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={{
                  elevation: 3,
                  width: wp("20"),
                  height: hp("10%"),
                  borderColor: "gold",
                  borderStyle: "solid",
                  borderRadius: 50,
                  borderWidth: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View>
                  <Ionicons name="ios-done-all" size={hp("5%")} color="gold" />
                  <Text
                    style={{
                      color: "gold",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    10+
                  </Text>
                </View>
              </TouchableOpacity>
              <Text
                style={{
                  marginTop: 10,
                  color: "gold",
                  alignItems: "center",
                  fontSize: hp("1.5%"),
                  fontWeight: "bold",
                  alignSelf: "center",
                }}
              >
                Orders Completed
              </Text>
            </View>
          </View>

          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <View>
              <TouchableOpacity
                style={{
                  elevation: 3,
                  width: wp("20"),
                  height: hp("10%"),
                  borderColor: "gold",
                  borderStyle: "solid",
                  borderRadius: 50,
                  borderWidth: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View>
                  <Ionicons name="ios-document" size={hp("5%")} color="gold" />
                  <Text
                    style={{
                      color: "gold",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    190+
                  </Text>
                </View>
              </TouchableOpacity>
              <Text
                style={{
                  marginTop: 10,
                  color: "gold",
                  alignItems: "center",
                  fontSize: hp("1.5%"),
                  fontWeight: "bold",
                  alignSelf: "center",
                }}
              >
                Orders Pending
              </Text>
            </View>

            <View>
              <TouchableOpacity
                style={{
                  elevation: 3,
                  width: wp("20"),
                  height: hp("10%"),
                  borderColor: "gold",
                  borderStyle: "solid",
                  borderRadius: 50,
                  borderWidth: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View>
                  <FontAwesome name="truck" size={hp("5%")} color="gold" />
                  <Text
                    style={{
                      color: "gold",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    190+
                  </Text>
                </View>
              </TouchableOpacity>
              <Text
                style={{
                  marginTop: 10,
                  color: "gold",
                  alignItems: "center",
                  fontSize: hp("1.5%"),
                  fontWeight: "bold",
                  alignSelf: "center",
                }}
              >
                Products
              </Text>
            </View>

            <View>
              <TouchableOpacity
                style={{
                  elevation: 3,
                  width: wp("20"),
                  height: hp("10%"),
                  borderColor: "gold",
                  borderStyle: "solid",
                  borderRadius: 50,
                  borderWidth: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View>
                  <FontAwesome5 name="pager" size={hp("5%")} color="gold" />
                  <Text
                    style={{
                      color: "gold",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    190+
                  </Text>
                </View>
              </TouchableOpacity>
              <Text
                style={{
                  marginTop: 10,
                  color: "gold",
                  alignSelf: "center",
                  fontSize: hp("1.5%"),
                  fontWeight: "bold",
                }}
              >
                Total Posts
              </Text>
            </View>
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 20,
              marginVertical: 10,
              justifyContent: "space-between",
            }}
          >
            <Text>Earnings</Text>
            <TouchableOpacity>
              <Text style={{ color: "#ff0048", fontWeight: "bold" }}>
                View Details
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <View
            style={{
              width: wp("90%"),
              height: hp("20%"),
              elevation: 10,
              borderRadius: 10,
              backgroundColor: "#fff",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                margin: 10,
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: hp("1.4%") }}>Personal Balance</Text>
                <Text style={{ fontWeight: "bold", color: "#ff0048" }}>
                  Rs. 0
                </Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: hp("1.4%") }}>Earning in August</Text>
                <Text style={{ fontWeight: "bold" }}>Rs. 0</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                margin: 10,
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: hp("1.4%") }}>Avg. Selling Price</Text>
                <Text style={{ fontWeight: "bold" }}>Rs. 0</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: hp("1.4%") }}>Active Orders</Text>
                <Text style={{ fontWeight: "bold" }}>Rs. 0</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default function VendorHome({ navigation }) {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={homeDrawer}
        imageIcon={{ uri: "https://i.redd.it/1ddlsj0xali51.jpg" }}
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
    backgroundColor: "#ff0048",
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
