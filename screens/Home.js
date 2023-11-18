import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { AppContext } from '../context/AppContext';
import FilterPicker from '../components/FilterPicker';
import GetExpoLocation from '../components/GetExpoLocation';

const HomeScreen = ({ navigation }) => {
  const { toggleSelectedCuisines, toggleSelectedStars, toggleSelectedPrice } = useContext(AppContext);

  const handleNavigate = () => {
    navigation.navigate('RestaurantQuickView');
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <GetExpoLocation />
      <FilterPicker />
      <TouchableOpacity
        style={styles.findButton}
        onPress={handleNavigate}
      >
        <Text style={styles.buttonText}>Go to RestaurantQuickView (Find)</Text>
      </TouchableOpacity>
      <Button
        title="Go to MapScreen"
        onPress={() => navigation.navigate('MapScreen')}
      />
    </View>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
  findButton: {
    backgroundColor: 'black', 
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});
