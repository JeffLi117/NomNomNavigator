import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Platform, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as Device from 'expo-device';
import * as Location from 'expo-location';

export default function GetExpoLocation() {
  const { location, handleSetLocation, errorMsg, handleSetErrorMsg } = useContext(AppContext);
  const [click, setClick] = useState(false);

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Device.isDevice) {
        handleSetErrorMsg(
          'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        handleSetErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      handleSetLocation(location);
    })();
  }, [click]);

  // useEffect(() => {
  //   console.log("location is ", location)
  // }, [location])

  return (
    <View>
      {(location.latitude && location.longitude) ? 
      <TouchableOpacity style={styles.GPSenabled} onPress={() => handleSetLocation(null)}>
        <Text style={styles.text}>GPS location enabled</Text>
      </TouchableOpacity>
        : 
      <TouchableOpacity style={styles.GPSbutton} onPress={() => setClick(!click)}>
        <Text style={styles.text}>Use GPS</Text>
      </TouchableOpacity>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
  GPSbutton: {
    backgroundColor: "#274690",
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  GPSenabled: {
    backgroundColor: "#002360",
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  text: {
    width: "fit-content",
    textAlign: "center",
    color: "white",
  },
});