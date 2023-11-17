import React from 'react';
import { View, Text, Button } from 'react-native';

const RestaurantDetailScreen = ({ navigation }) => {
  return (
    <View>
      <Text>About Screen</Text>
      <Button
        title="Go back to Home"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default RestaurantDetailScreen;