import React from 'react';
import { View, Text, Button } from 'react-native';

const RestaurantScreen = ({ navigation }) => {
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

export default RestaurantScreen;