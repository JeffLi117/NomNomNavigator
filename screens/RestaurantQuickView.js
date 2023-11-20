import React from "react";
import {
  ScrollView,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import CarouselCards from "../components/CarouselCards.js";
import Icon from "react-native-vector-icons/FontAwesome";

const RestaurantQuickViewScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <SafeAreaView style={styles.carousel}>
          <CarouselCards />
        </SafeAreaView>
        <Text style={styles.title}>Restaurant Name</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.info}>Cuisine</Text>
          <Text style={styles.info}>$$</Text>
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

          <TouchableOpacity style={styles.bottomButton}>
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
