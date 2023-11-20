import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AppContext } from "../context/AppContext";
import FilterPicker from "../components/FilterPicker";
import ZipCodeForm from "../components/ZipCodeForm";
import { handleGeocoding, handleNearbySearch } from "../API";
import GetExpoLocation from "../components/GetExpoLocation";

const HomeScreen = ({ navigation }) => {
  const [places, setPlaces] = useState([]);
  const [showError, setShowError] = useState(false);
  const { zipCode, location, showRange, selectedStars, selectedCuisine, setCopiedList, copiedList } = useContext(AppContext);

  const filterByPrice = (resultArr) => {
    return resultArr.filter((result) => {
      return (
        result.price_level >= showRange[0] && result.price_level <= showRange[1]
      );
    });
  };

  const filterByStars = (resultArr) => {
    return resultArr.filter((result) => {
      return result.rating >= selectedStars;
    });
  };

  const getResults = async () => {
    try {
      let latitude, longitude;
      if (!location.latitude && !location.longitude) {
        // if location in global context, go to else and get lat/lng
        // otherwise, use zipCode
        const coordinates = await handleGeocoding(zipCode);
        latitude = coordinates.latitude;
        longitude = coordinates.longitude;
      } else {
        latitude = location.latitude;
        longitude = location.longitude;
      }
      const nearbyPlaces = await handleNearbySearch(
        latitude,
        longitude,
        selectedCuisine
      );
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
      } else {
        setPlaces(nearbyPlaces);
        setCopiedList(nearbyPlaces);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    if (copiedList.length > 0 && places.length > 0) {
      navigation.navigate("Restaurant Quick View");
    }
  }, [copiedList]);

  useEffect(() => {
    if ((location.latitude && location.longitude) || zipCode.length === 5) setShowError(false);
  }, [location, zipCode])

  const handleSubmit = async () => {
    if ((location.latitude && location.longitude) || zipCode.length === 5) {
      setShowError(false);
      setPlaces([]);
      getResults();
    } else {
      setShowError(true);
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <FilterPicker />
        <TouchableOpacity style={styles.locationInfoHolder}>
          <GetExpoLocation />
          <ZipCodeForm />
        </TouchableOpacity>
        {showError && <Text style={styles.errorText}>Please enable GPS access or enter a 5-digit zip code.</Text>}
        <TouchableOpacity onPress={handleSubmit} style={styles.submitBtn}>
          <Text style={styles.buttonText}>Go</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 6,
    backgroundColor: "#f2e5d7",
    height: "100%"
  },
  findButton: {
    backgroundColor: "black",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
  locationInfoHolder: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  submitBtn: {
    backgroundColor: "#b0424d",
    borderRadius: 10,
    padding: 10,
  },
  orText: {
    width: "fit-content",
    textAlign: "center",
  },
  errorText: {
    width: "fit-content",
    textAlign: "center",
    color: "red",
    margin: 5,
  }
});
