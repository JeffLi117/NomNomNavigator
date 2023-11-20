import React, { useContext, useEffect, useState } from 'react';
import {
  ScrollView,
  View,
  Button,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import CarouselCards from "../components/CarouselCards.js";
import Icon from "react-native-vector-icons/FontAwesome";
import { AppContext } from '../context/AppContext.js';
import { getNearbyPhoto } from '../API.js';

const RestaurantQuickViewScreen = ({ navigation }) => {
  const { setCopiedList, selectedCuisines, copiedList, currentPlaceId, currentPlaceView, handleDeleteFromList } = useContext(AppContext);
  console.log(copiedList.length);
  const [photoData, setPhotoData] = useState(null);
  const handleNext = () => {
    handleDeleteFromList();
    navigation.navigate("RestaurantQuickView");
  }

  // const singleImg = getNearbyPhoto(currentPlaceView.photos[0].photo_reference);
  let contentType;
  // console.log(currentPlaceView.photos[0].photo_reference);

  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    if (currentPlaceView.photos && currentPlaceView.photos.length > 0) {
      const photo_reference = currentPlaceView.photos[0].photo_reference;

      getNearbyPhoto(photo_reference)
        .then(data => {
          setImageURL(data.config.url);
        })
        .catch(error => {
          // Handle error if necessary
          console.error('Error fetching nearby photo:', error);
        });
    }
  }, [currentPlaceView.photos]); 

  return (
    <ScrollView>
      <View style={styles.container}>
        {imageURL ? (
          <TouchableOpacity style={styles.imageContainer}>
            <Image source={{ uri: `${imageURL}` }} style={{ width: 220, aspectRatio: 1 }} />
          </TouchableOpacity>
        ) : (
          <Text>Loading...</Text>
        )}
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

          <TouchableOpacity style={styles.bottomButton} onPress={handleNext}>
            <Text>Next Restaurant</Text>
          </TouchableOpacity>
        </View>
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
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
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
