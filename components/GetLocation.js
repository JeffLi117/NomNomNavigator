import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export default function GetLocation() {
  // state to hold location
  const [location, setLocation] = useState(false);

  // Function to get permission for location
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('granted', granted);
      if (granted === 'granted') {
        console.log('You can use Geolocation');
        return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    } catch (err) {
      return false;
    }
  };

  // function to check permissions and get Location
  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
            setLocation(position);
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
            setLocation(false);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
    console.log(location);
  };

  return (
    <View>
        <View>
            <Button title="Get Location" onPress={getLocation} />
        </View>
        <Text>Latitude: {location ? location.coords.latitude : null}</Text>
        <Text>Longitude: {location ? location.coords.longitude : null}</Text>
    </View>
  )
}