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
  CheckBox,
} from "react-native";
import { Feather, Ionicons, FontAwesome } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as DocumentPicker from "expo-document-picker";
import { APP_URL } from "../constant_vars";
import axios from "axios";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function MessagesScreen({ navigation, route }) {
  const [ title, setTitle ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ cost, setCost ] = useState("")
  const [ show, setShow ] = useState(false)
  const [ mode, setMode ] = useState("date")
  const [ date, setDate ] = useState(new Date());
  const [ file, setFile ] = useState([]);
  const [ secure, setSecure ] = useState(false);

  const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    }

    const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const resetForm = () => {
    setDate(new Date())
    setFile([])
    setDescription("")
    setTitle("")
    setCost(0)
    setSecure(false)
  }

  const submit = () => {

    if( !title.length || cost <= 0 || !description.length || !file.length)
    {
      alert('All fields are required');
      return
    }

    let type = "secure";
    if(!secure) {
      type = "normal";
    }

    let newDate = date.toDateString();
    let newTime = date.toLocaleTimeString();


    axios.post(APP_URL + `user/documentRequest?type=${type}`, {
      date: newDate,
      time: newTime,
      description: description,
      title: title,
      file: JSON.stringify(file),
      type: type,
      cost: cost,
    }, {
      headers: { 'Authorization': `Bearer ${route.params.token}`}
    }).then(res => {
        // console.log('post a request: ',res);
        resetForm();
        alert('Post request completed successfully')
    }).catch(err => {
      alert(err);
    })
  }

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
      let newFile = file.concat(result.uri);
      setFile(newFile)
    }

    const removeFile = (index, value) => {
      console.log('index: ', index)
      let newFile = file;
      console.log("sliced: ", newFile.splice(index, 1) )
      console.log("new file: ", newFile)
      newFile = newFile.splice(index, 1)
      setFile(newFile)
    }

  return (
    <View style={{ flex: 1, marginBottom: 10 }}>
      <View style={styles.headerContainer}>

        <Text style={styles.headerText}>Post request</Text>

      </View>

      <SafeAreaView
        style={{ flex: 1, marginVertical: 10, marginHorizontal: 10 }}
      >
        <ScrollView>

        <TextInput
          placeholder="Enter title"
          value={title}
          onChangeText={ title => setTitle(title) }
          style={styles.inputStyles}
        />



        <TextInput
          textAlignVertical={"top"}
          underlineColorAndroid="transparent"
          placeholder="Enter Description"
          multiline={true}
          numberOfLines={8}
          style={styles.textAreaStyle}
          value={description}
          onChangeText={description => setDescription(description) }
        />

        <TextInput
          placeholder="Enter cost"
          keyboardType="numeric"
          onChangeText={cost => setCost(cost)}
          style={styles.inputStyles}
          value={cost.toString()}
        />
        <View style={styles.centerContainer}>
          <TouchableOpacity
            onPress={showDatepicker}
            style={styles.btnStyle}
          >
          {
            show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )
          }
          <Text style={styles.btnTextStyle}>Date</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.centerContainer}>
          <TouchableOpacity
            onPress={showTimepicker}
            style={styles.btnStyle}
          >
          {
            show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )
          }
            <Text style={styles.btnTextStyle}>Time</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.centerContainer}>
          <TouchableOpacity
            style={styles.btnStyle}
            onPress={pickDocument}
          >
            <Text style={styles.btnTextStyle}>
              Upload File
            </Text>
          </TouchableOpacity>


            {
              file.length ?
              (
                  file.map((item, index) => (
                    <View style={styles.fileStyle} key={index}>
                    <TouchableOpacity onPress={() => removeFile(index)}>

                        <Text style={{ color: 'white', fontSize: hp('1%') }}>
                          { item }
                        </Text>
                    </TouchableOpacity>
                    </View>

                  ))
              ): null
            }

        </View>

        <View style={{ marginTop: 50}}>
          <Text>Secure or not ? </Text>
          <CheckBox
            style={{ color: "#ff0048" }}
            value={secure}
            onValueChange={setSecure}
            />
        </View>

        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: hp('10%')}}>
          <TouchableOpacity
            style={{
              width: wp('80%'),
              height: hp('5%'),
              backgroundColor: "gold",
              borderRadius: 10,
              elevation: 10,
            }}

            onPress={submit}
          >
            <Text
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: hp('3%'),
                alignSelf: 'center',
              }}
            >
              POST
            </Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
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
  inputStyles: {
    width: wp('90%'),
    height: hp('5%'),
    marginHorizontal: 10,
    marginVertical: 10,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
  textAreaStyle: {
    width: wp('90%'),
    marginHorizontal: 10,
    marginVertical: 10,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
  btnStyle: {
    height: hp('5%'),
    width: wp('90%'),
    backgroundColor: '#F7DC6F',
    elevation: 10,
    borderRadius: 10,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTextStyle: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadText: {
    fontSize: hp('1%'),
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitBtnStyle: {
    height: hp('5%'),
    width: wp('30%'),
    backgroundColor: '#F7DC6F',
    elevation: 10,
    borderRadius: 10,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  fileStyle: {
    width: wp('90%'),
    height: hp('5%'),
    backgroundColor: 'gray',
    borderRadius: 10,
    marginVertical: 10
  }

});
