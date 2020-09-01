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
import { Feather, Ionicons, FontAwesome } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import DrawerContent from "./DrawerContent";
const Drawer = createDrawerNavigator();

function homeDrawer({ navigation }) {
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
    <View style={{ flex: 1, marginBottom: 10 }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={{ marginBottom: hp("3%") }}
        >
          <Feather name="menu" size={hp("3.7%")} color="#ff0048" />
        </TouchableOpacity>

        <Text style={styles.headerText}>OPS</Text>
        <TouchableOpacity style={{ marginBottom: hp("3%") }}>
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
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Popular Services
          </Text>
          <TouchableOpacity>
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
                          source={item.image}
                          style={{
                            height: 135,
                            width: 120,
                          }}
                        />
                      </View>
                      <View style={{ padding: 10, width: 120 }}>
                        <Text style={{ textAlign: "center" }}>
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
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>
            Inspired by Your Browser History
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
                          source={item.image}
                          style={{
                            height: 135,
                            width: 120,
                          }}
                        />
                      </View>
                      <View style={{ padding: 10, width: 120 }}>
                        <Text
                          style={{
                            textAlign: "center",
                            fontSize: hp("2%"),
                            fontWeight: "bold",
                            color: "#ff0048",
                          }}
                        >
                          {item.title}
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
      </ScrollView>
    </View>
  );
}

function helpAndSupport() {
  return (
    <View style={{ alignContent: "center", flex: 1, justifyContent: "center" }}>
      <Text>Help & Support</Text>
    </View>
  );
}

function aboutUs() {
  return (
    <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
      <Text>aboutUs</Text>
    </View>
  );
}

function shareApp() {
  return (
    <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
      <Text>shareApp</Text>
    </View>
  );
}

function settings() {
  return (
    <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
      <Text>settings</Text>
    </View>
  );
}

export default function HomeScreen() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={homeDrawer}
        imageIcon={{ uri: "https://i.redd.it/1ddlsj0xali51.jpg" }}
      />
      <Drawer.Screen name="Help and Support" component={helpAndSupport} />
      <Drawer.Screen name="About Us" component={aboutUs} />
      <Drawer.Screen name="Share Application" component={shareApp} />
      <Drawer.Screen name="Settings" component={settings} />
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
