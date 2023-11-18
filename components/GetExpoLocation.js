import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Device from 'expo-device';
import * as Location from 'expo-location';

export default function GetExpoLocation() {
  const { location, handleSetLocation, errorMsg, handleSetErrorMsg } = useContext(AppContext);

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
  }, []);

  useEffect(() => {
    console.log("location is ", location)
  }, [location])

  return (
    <View>
      <Text>{errorMsg ? errorMsg : `latitude: ${location.latitude}, longitude: ${location.longitude}`}</Text>
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
});
