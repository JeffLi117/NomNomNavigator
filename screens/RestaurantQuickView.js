import React from 'react';
import { View, Text, Button } from 'react-native';

const RestaurantQuickViewScreen = ({ navigation }) => {
  return (
    <View>
      <Text>RestaurantQuickView Screen</Text>

      <Button
        title="Go to RestaurantDetail"
        onPress={() => navigation.navigate('RestaurantDetail')}
      />
      <Button
        title="Go to RestaurantReview"
        onPress={() => navigation.navigate('RestaurantReview')}
      />
    </View>
  );
};

export default RestaurantQuickViewScreen;