import React from 'react';
import { View, Text, Button, Linking } from 'react-native';

const RestaurantDetailScreen = ({ navigation }) => {
  return (
    <View>
      <Text>RestaurantDetail Screen</Text>
      <Text>Restaurant Title</Text>
      <Text>Restaurant $$</Text>
      <Text>Restaurant Stars</Text>
      <Text onPress={() => {Linking.openURL(`http://maps.google.com/?q=your+query`)}}>Get Directions</Text>
      <Button
        title="Go back to Home"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default RestaurantDetailScreen;