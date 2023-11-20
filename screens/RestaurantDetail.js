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
import { AppContext } from "../context/AppContext.js";
import { handlePlaceDetailQuery } from "../API";
import RestaurantReviews from "../components/RestaurantReviews.js";

const RestaurantDetailScreen = ({ navigation }) => {
  const {
    setCopiedList,
    selectedCuisines,
    copiedList,
    currentPlaceId,
    currentPlaceView,
    handleDeleteFromList,
  } = useContext(AppContext);
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    async function fetchRestaurantDetails() {
      try {
        if (currentPlaceId) {
          // Set loading state to true before making the API call
          setIsLoading(true);

          // Make the API call and wait for the response
          const data = await handlePlaceDetailQuery(currentPlaceId);

          // Update restaurantDetails with the fetched data
          setRestaurantDetails(data);
        }
      } catch (error) {
        // Handle errors, if any, and log the details
        console.error("Error fetching restaurant details:", error);
      } finally {
        // Set loading state to false after the API call is completed (success or error)
        setIsLoading(false);
      }
    }

    // Call the fetchRestaurantDetails function when currentPlaceId changes
    fetchRestaurantDetails();
  }, [currentPlaceId]);

  const [iconColor, setIconColor] = useState({
    color: "black",
    pressed: false,
  });

  const changeColor = () => {
    setIconColor({ color: "#f18f01", pressed: true });
  };

  const handleNextRestaurant = () => {
    handleDeleteFromList();
    navigation.navigate("RestaurantQuickView");
  };

  const renderDollarSigns = (price_level) => {
    let dollarSigns = "";
    for (let i = 0; i < price_level; i++) {
      dollarSigns += "$";
    }
    return dollarSigns;
  };

  if (isLoading) {
    return (
      <View>
        <Text> Loading... </Text>
      </View>
    );
  }

  if (showReviews) {
    return (
      <ScrollView>
        <View>
          <TouchableOpacity
            style={styles.directions}
            onPress={() => {
              setShowReviews(false);
            }}
          >
            <Text styles={styles.text}>Back to Details</Text>
          </TouchableOpacity>
          <RestaurantReviews
            restaurantName={restaurantDetails.name}
            restaurantReviewData={restaurantDetails.reviews}
          />
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <SafeAreaView style={styles.carousel}>
          <CarouselCards photoData={restaurantDetails.photos} />
        </SafeAreaView>

        <Text style={styles.title}>{restaurantDetails.name}</Text>
        <View style={styles.detailsContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.info}>
              <Icon name="star" style={{ color: "#f18f01" }} size={25} />
              {"    "}
              {restaurantDetails.rating}
            </Text>
            <Text style={styles.info}>
              {renderDollarSigns(restaurantDetails.price_level)}
            </Text>
          </View>

          <Text style={styles.info}>{restaurantDetails.formatted_address}</Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.directions}
            onPress={() => {
              setShowReviews(true);
            }}
          >
            <Text styles={styles.text}>Check Reviews</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.directions}
            onPress={() => {
              Linking.openURL(`http://maps.google.com/?q=your+query`);
            }}
          >
            <Text styles={styles.text}>Get Directions</Text>
          </TouchableOpacity>
        </View>

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
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
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
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default RestaurantDetailScreen;
