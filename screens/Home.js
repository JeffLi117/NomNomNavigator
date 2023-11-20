import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AppContext } from '../context/AppContext';
import FilterPicker from '../components/FilterPicker';
import ZipCodeForm from '../components/ZipCodeForm'
import { handleGeocoding, handleNearbySearch } from '../API';
import GetExpoLocation from '../components/GetExpoLocation';

const HomeScreen = ({ navigation }) => {
  const [zipCode, setZipCode] = useState("");
  const [places, setPlaces] = useState([]);
  const { toggleSelectedCuisines, toggleSelectedStars, toggleSelectedPrice, showRange, selectedStars, selectedCuisine, setCopiedList, copiedList } = useContext(AppContext);

  const handleNavigate = () => {
    navigation.navigate('RestaurantQuickView');
  };

  const filterByPrice = (resultArr) => {
    return resultArr.filter((result) => {
      return result.price_level >= showRange[0] && result.price_level <= showRange[1];
    });
  }

  const filterByStars = (resultArr) => {
    return resultArr.filter((result) => {
      return result.rating >= selectedStars;
    });
  }

  const fetchCoordinates = async () => {
    try {
      if (zipCode !== "") {
      const coordinates = await handleGeocoding(zipCode);

        if (coordinates) {
          const { latitude, longitude } = coordinates;
          const nearbyPlaces = await handleNearbySearch(latitude, longitude, selectedCuisine);
          let filtered;
          let filtersRun = false;
          if (showRange.length === 2) {
            filtered = filterByPrice(nearbyPlaces);
            filtersRun = true;
          }
          if (selectedStars) {
            // nearbyPlaces has already been filtered by price, thus filtered array is not null
            if (filtersRun) {
              filtered = filterByStars(filtered);
            } else {
              filtered = filterByStars(nearbyPlaces);
              filtersRun = true;
            }
          }
          if (filtersRun) {
            setPlaces(filtered); 
            setCopiedList(filtered);
            console.log("# of filtered results is ", filtered.length);
          }
          else {
            setPlaces(nearbyPlaces);
            setCopiedList(nearbyPlaces);
          }
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    console.log("copiedList changed");
    if (copiedList.length > 0 && places.length > 0) {
      navigation.navigate('RestaurantQuickView');
    }
  }, [copiedList])

  const handleZipCodeSubmit = async (zip) => {
    // Handle the submitted zip code, e.g., show an alert
    setPlaces([]);
    setZipCode(zip);
    fetchCoordinates();
  };

  return (
    <ScrollView>
      <View>
        <Text>Home Screen</Text>
        {/* <GetExpoLocation /> */}
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
        {/* {places.map((place) => (
          <Text key={place.place_id}>{place.name}</Text>
        ))} */}
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