import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Restaurant"
        onPress={() => navigation.navigate('Restaurant')}
      />
      <Button
        title="Go to RestaurantDetail"
        onPress={() => navigation.navigate('RestaurantDetail')}
      />
    </View>
  );
};

export default HomeScreen;