import React from 'react';
import { View, Text, Button, Linking, StyleSheet } from 'react-native';


const RestaurantDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.image} >restaurant picture or food picture</Text>
      <Text style={styles.title}>Restaurant Title</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>restaurantDetails.name</Text>
        <Text style={styles.address}>restaurantDetails.address</Text>
        <Text style={styles.rating}>Rating: restaurantDetails.rating</Text>
        <Text style={styles.price}>Restaurant $$</Text>
        {/* Other restaurant details */}
      </View>
      <Text onPress={() => {Linking.openURL(`http://maps.google.com/?q=your+query`)}}>Get Directions</Text>
      <Button
        title="Go back to Home"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  address: {
    fontSize: 16,
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    color: 'green', // Change color as needed
    marginBottom: 12,
    fontWeight: 'bold', // Make it bold
  },
})

export default RestaurantDetailScreen;