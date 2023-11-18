// MapScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { handleGeocoding, handleNearbySearch } from '../API';

const MapScreen = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const zipCode = '11202'; // Replace with the actual ZIP code

        const coordinates = await handleGeocoding(zipCode);
        console.log(coordinates)
        if (coordinates) {
          const { latitude, longitude } = coordinates;
          const nearbyPlaces = await handleNearbySearch(latitude, longitude);
          setPlaces(nearbyPlaces);
          console.log(nearbyPlaces)
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCoordinates();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text>Nearby Places:</Text>
      {places.map((place) => (
        <Text key={place.place_id}>{place.name}</Text>
      ))}
    </View>
  );
};

export default MapScreen;
