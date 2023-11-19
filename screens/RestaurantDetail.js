import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Linking,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import CarouselCards from '../components/CarouselCards.js'


const RestaurantDetailScreen = ({ navigation }) => {
  const [iconState, setIconState] = useState({
    color: "white",
    pressed: false,
  });

  const changeColor = () => {
    setIconState({ color: "#f18f01", pressed: true });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.carousel}>
        <CarouselCards />
      </SafeAreaView>
      <View style={styles.likeContainer}>
        <Icon
          name="star"
          style={{ color: iconState.color }}
          size={25}
          onPress={changeColor}
        />
      </View>
      <Text style={styles.title}>restaurant.name</Text>
       
      <Text style={styles.title}>Restaurant Title</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.info}>restaurant.address</Text>
        <Text style={styles.info}>restaurant.rating</Text>
        <Text style={styles.info}>restaurant.price</Text>
        {/* Other restaurant details */}
      </View>
      <TouchableOpacity
        style={styles.directions}
        onPress={() => {
          Linking.openURL(`http://maps.google.com/?q=your+query`);
        }}
      >
        <Text>Get Directions</Text>
      </TouchableOpacity>

      <Text style={styles.goHome} onPress={() => navigation.goBack()}>
        Next Option
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e3d5ca",
    height: "100%",
  },
  image: {
    width: "90%",
    height: 200,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 20,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  info: {
    fontSize: 18,
    margin: 5,
    textAlign: "center",
  },
  directions: {
    backgroundColor: "#302b27",
    color: "#e3d5ca",
    borderRadius: 10,
    padding: 10,
  },
  goHome: {
    marginBottom: 10,
  },
  likeContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: "60%",
    position: "absolute",
  },
  carousel: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
});


export default RestaurantDetailScreen;
