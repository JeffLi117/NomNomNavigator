import React from "react";
import {
  ScrollView,
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import CarouselCards from "../components/CarouselCards.js";

const RestaurantQuickViewScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <SafeAreaView style={styles.carousel}>
          <CarouselCards />
        </SafeAreaView>
        <Text style={styles.title}>Restaurant Name</Text>

        <View style={styles.bottomButtContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("RestaurantDetail")}
            style={styles.bottomButt}
          >
            <Text>More Details</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomButt}>
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
    paddingBottom: 20,
  },

  carousel: {
    height: 300,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomButtContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  bottomButt: {
    backgroundColor: "#d5bdaf",
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
});

export default RestaurantQuickViewScreen;
