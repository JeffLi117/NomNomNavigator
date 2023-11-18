import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to RestaurantQuickView"
        onPress={() => navigation.navigate('RestaurantQuickView')}
      />
      <Button
        title="Go to MapScreen"
        onPress={() => navigation.navigate('MapScreen')}
      />
    </View>
  );
};

export default HomeScreen;