// MapScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { handleGeocoding, handleNearbySearch } from '../API';
import ZipCodeForm from '../components/ZipCodeForm'

const MapScreen = () => {
  const[zipCode, setZipCode] = useState("");
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        if (zipCode !== "") {
        const coordinates = await handleGeocoding(zipCode);

          if (coordinates) {
            const { latitude, longitude } = coordinates;
            const nearbyPlaces = await handleNearbySearch(latitude, longitude);
            setPlaces(nearbyPlaces);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCoordinates();
  }, [zipCode]);

  const handleZipCodeSubmit = (zip) => {
    // Handle the submitted zip code, e.g., show an alert
    setZipCode(zip)
  };

  return (
    <View style={{ flex: 1 }}>
        <ZipCodeForm onSubmit={handleZipCodeSubmit} />
      <Text>Nearby Places:</Text>
      {places.map((place) => (
        <Text key={place.place_id}>{place.name}</Text>
      ))}
    </View>
  );
};

export default MapScreen;
