import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AppContext } from '../context/AppContext';
import FilterPicker from '../components/FilterPicker';
import ZipCodeForm from '../components/ZipCodeForm'
import { handleGeocoding, handleNearbySearch } from '../API';

const HomeScreen = ({ navigation }) => {
  const[zipCode, setZipCode] = useState("");
  const [places, setPlaces] = useState([]);
  const { toggleSelectedCuisines, toggleSelectedStars, toggleSelectedPrice } = useContext(AppContext);

  const handleNavigate = () => {
    navigation.navigate('RestaurantQuickView');
  };

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
    <ScrollView>
      <View>
        <Text>Home Screen</Text>
        <FilterPicker />
        <ZipCodeForm onSubmit={handleZipCodeSubmit} />
        <TouchableOpacity
          style={styles.findButton}
          onPress={handleNavigate}
        >
          <Text style={styles.buttonText}>Go to RestaurantQuickView (Find)</Text>
        </TouchableOpacity>
        <Button
          title="Go to MapScreen"
          onPress={() => navigation.navigate('MapScreen')}
        />
        <Text>Nearby Places:</Text>
        {places.map((place) => (
          <Text key={place.place_id}>{place.name}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
  findButton: {
    backgroundColor: 'black', 
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});
