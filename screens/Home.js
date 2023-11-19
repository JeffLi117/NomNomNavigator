import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { AppContext } from '../context/AppContext';
import FilterPicker from '../components/FilterPicker';

const HomeScreen = ({ navigation }) => {
  const { toggleSelectedCuisines, toggleSelectedStars, toggleSelectedPrice } = useContext(AppContext);

  const handleNavigate = () => {
    navigation.navigate('RestaurantQuickView');
  };

  return (
    <View style={styles.container}>
       <ImageBackground
        source={{uri:'https://images.unsplash.com/photo-1555243896-c709bfa0b564?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
      <Text style={styles.heading}>Home Screen</Text>
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
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  exploreButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    backgroundColor: 'white',
    borderColor:'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});
