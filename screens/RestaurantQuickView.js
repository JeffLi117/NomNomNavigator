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
    </View>
  );
};

export default RestaurantQuickViewScreen;