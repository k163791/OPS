import React, { useState } from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { APP_URL } from "./constant_vars"


export default function SignUp({ navigation, route }) {

  const [ email, setEmail ] = useState("");
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ userSubmit, setUserSubmit ] = useState(false)
  const [ vendorSubmit, setVendorSubmit ] = useState(false)
  const [ riderSubmit, setRiderSubmit ] = useState(false)

  const resetForm = () => {
    setEmail("")
    setPassword("")
    setUsername("")
  }

  const nextScreen = (vendorData) => {
    navigation.navigate("SignUpScreen1", {
      username: route.params.username,
      vendor: vendorData,
    });
  };

  const HomeUserScreen = (user) => {
    navigation.navigate("Home", { user: user });
  }

  const HomeRiderScreen = (rider) => {
    navigation.navigate("RiderHome", { rider: rider });
  }

  const SignUpVendor = () => {
    if(!email.length || !password.length) {
      alert("Please fill all fields")
      return;
    }

    if(!email.match(new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/))) {
      alert("Invalid email");
      return;
    }

    setVendorSubmit(true)
    let vendorData = {
      email: email.toLowerCase(),
      password: password,
      name: username,
    }

    setVendorSubmit(false)
    resetForm()
    nextScreen(vendorData);
  }

  const signUpRider = () => {
    if(!email.length || !password.length || !username.length) {
      alert("Please fill all fields")
      return;
    }

    if(!email.match(new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/))) {
      alert("Invalid email");
      return;
    }

    let fullName = username.split(" ")
    // console.log(fullName[0], fullName[1])
    setRiderSubmit(true)
    axios.post(APP_URL + "rider/register", {
      email: email.toLowerCase(),
      password: password,
      first_name: fullName[0],
      last_name: fullName[1],
      contact: "03323696481",
    }).then(res => {
        resetForm();
        setRiderSubmit(false);
        HomeRiderScreen(res.data.result);
    }).catch(err => {
        alert(err)
        setRiderSubmit(false);
    })
  }

  const signUpUser = () => {
    if(!email.length || !password.length || !username.length) {
      alert("Please fill all fields")
      return;
    }

    if(!email.match(new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/))) {
      alert("Invalid email");
      return;
    }

    let fullName = username.split(" ")
    // console.log(fullName[0], fullName[1])
    setUserSubmit(true)
    axios.post(APP_URL + "user/register", {
      email: email.toLowerCase(),
      password: password,
      first_name: fullName[0],
      last_name: fullName[1],
    }).then(res => {
      console.log('response: ', res.data.result);
      resetForm()
      setUserSubmit(false)
      HomeUserScreen(res.data.result)
      // alert(res);
    }).catch(err => {
      alert(err);
    })
  }




  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          marginBottom: 50,
          marginTop: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-up" size={hp("4%")} />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center" }}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#F8C471"
          style={styles.inputStyle}
          onChangeText={ email => setEmail(email) }
          value={email}
        />
        <TextInput
          placeholder="Full Name"
          placeholderTextColor="#F8C471"
          style={styles.inputStyle}
          onChangeText={ username => setUsername(username) }
          value={username}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#F8C471"
          secureTextEntry={true}
          style={styles.inputStyle}
          onChangeText={ password => setPassword(password) }
          value={password}
        />
        <Text style={{ fontSize: hp("1.5%"), marginBottom: 30 }}>
          Combine upper and lowercase letters and numbers
        </Text>
        <TouchableOpacity onPress={signUpUser} style={styles.btnContainer}>
          {
            userSubmit ?
            (
                <ActivityIndicator size="large" color="white" />
            ):
            (
                <Text style={styles.btnText}>continue as user</Text>
            )
          }
        </TouchableOpacity>
        <TouchableOpacity onPress={SignUpVendor} style={styles.btnContainer}>
          {
            vendorSubmit ?
            (
                <ActivityIndicator size="large" color="white" />
            ):
            (
                <Text style={styles.btnText}>continue as vendor</Text>
            )
          }
        </TouchableOpacity>
        <TouchableOpacity onPress={signUpRider} style={styles.btnContainer}>
        {
          riderSubmit ?
          (
            <ActivityIndicator size="large" color="white" />
          ):
          (
            <Text style={styles.btnText}>continue as rider</Text>
          )
        }
        </TouchableOpacity>
      </View>
      <View style={styles.termsOfService}>
        <Text style={{ fontSize: hp("1.5%") }}>
          By joining you agree to OPS's
        </Text>
        <TouchableOpacity>
          <Text style={{ color: "lightblue", fontSize: hp("1.5%") }}>
            Terms of Service
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  inputStyle: {
    width: "90%",
    backgroundColor: "#FCF3CF",
    marginBottom: hp("3%"),
    padding: wp("1%") + hp("1%"),
    borderRadius: 10,
  },
  btnContainer: {
    width: wp("90%"),
    height: hp("8%"),
    elevation: 10,
    borderRadius: 10,
    backgroundColor: "gold",
    paddingVertical: hp("2%"),
    paddingHorizontal: wp("1%"),
    marginVertical: hp('0.5%'),
  },
  btnText: {
    fontSize: hp("2.6%"),
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  termsOfService: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
