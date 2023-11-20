import React from "react";
import {
  ScrollView,
  View,
  Text,
  Button,
  Linking,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import CarouselCards from "../components/CarouselCards.js";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState, useContext, useEffect } from "react";
import { AppContext } from '../context/AppContext.js';

const RestaurantDetailScreen = ({ navigation }) => {
  const { setCopiedList, selectedCuisines, copiedList, currentPlaceId, currentPlaceView, handleDeleteFromList } = useContext(AppContext);

  useEffect(() => {
    if (currentPlaceId) {

    }
  }, [])


  const [iconColor, setIconColor] = useState({
    color: "black",
    pressed: false,
  });

  const changeColor = () => {
    setIconColor({ color: "#f18f01", pressed: true });
  };

  const handleNextRestaurant = () => {
    handleDeleteFromList()
    navigation.navigate("RestaurantQuickView");
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <SafeAreaView style={styles.carousel}>
          <CarouselCards />
        </SafeAreaView>

        {/* <View style={styles.iconContainer}>
          <Icon
            name="star"
            onPress={changeColor}
            style={{ color: iconColor.color }}
            size={25}
          />
        </View> */}
        <Text style={styles.title}>Restaurant Title</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.info}>restaurantDetails.address</Text>
          <Text style={styles.info}>restaurantDetails.rating</Text>
          <Text style={styles.info}>restaurantDetails.menu</Text>
          <Text style={styles.info}>$$</Text>
          {/* Other restaurant details */}
        </View>
        <TouchableOpacity
          style={styles.directions}
          onPress={() => {
            Linking.openURL(`http://maps.google.com/?q=your+query`);
          }}
        >
          <Text styles={styles.text}>Get Directions</Text>
        </TouchableOpacity>
        <Text onPress={handleNextRestaurant}>New Restaurant</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2e5d7",
    paddingBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
  detailsContainer: {
    margin: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  info: {
    fontSize: 20,
    textAlign: "center",
  },
  carousel: {
    height: 450,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    width: "80%",
    alignItems: "flex-end",
  },
  directions: {
    backgroundColor: "#d5bdaf",
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  text: {
    color: "white",
  },
});

export default RestaurantDetailScreen;
