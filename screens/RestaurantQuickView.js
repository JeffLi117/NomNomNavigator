import React, { useContext, useEffect, useState } from 'react';
import {
  ScrollView,
  View,
  Button,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import CarouselCards from "../components/CarouselCards.js";
import Icon from "react-native-vector-icons/FontAwesome";
import { AppContext } from '../context/AppContext.js';

const RestaurantQuickViewScreen = ({ navigation }) => {
  const { setCopiedList, selectedCuisines, copiedList, currentPlaceId, currentPlaceView, handleDeleteFromList } = useContext(AppContext);
  console.log(copiedList.length);

  const handleNext = () => {
    handleDeleteFromList();
    navigation.navigate("RestaurantQuickView");
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <SafeAreaView style={styles.carousel}>
          <CarouselCards />
        </SafeAreaView>
        <Text style={styles.title}>{currentPlaceView.name}</Text>
        <View style={styles.infoContainer}>
          {selectedCuisines && <Text style={styles.info}>{selectedCuisines}</Text>}
          <Text style={styles.info}>Rating: {currentPlaceView.rating}</Text>
          <Text style={styles.info}>Price level: {currentPlaceView.price_level}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="star" style={styles.icon} size={25} />
          <Icon name="star" style={styles.icon} size={25} />
          <Icon name="star" style={styles.icon} size={25} />
          <Icon name="star" style={styles.icon} size={25} />
          <Icon name="star" style={styles.icon} size={25} />
        </View>

        <View style={styles.bottomButtonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("RestaurantDetail")}
            style={styles.bottomButton}
          >
            <Text>More Details</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomButt} onPress={handleNext}>
            <Text>Next Restaurant</Text>
          </TouchableOpacity>
        </View>
        <Button
          title="Go to RestaurantReview"
          onPress={() => navigation.navigate('RestaurantReview')}
        />
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
    paddingBottom: 50,
  },
  carousel: {
    height: 450,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  infoContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  icon: {
    color: "black",
    // color changes to #f18f01 dependent on rating
    margin: 5,
  },
  bottomButtonContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  bottomButton: {
    backgroundColor: "#d5bdaf",
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
});

export default RestaurantQuickViewScreen;
