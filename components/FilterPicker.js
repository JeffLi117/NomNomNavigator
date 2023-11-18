import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AppContext } from '../context/AppContext';

const FilterPicker = ({ navigation }) => {
  const { selectedCuisines, toggleSelectedCuisines, selectedStars, toggleSelectedStars, selectedPrice, toggleSelectedPrice } = useContext(AppContext);
  const arrOfNums = [1, 2, 3, 4, 5];

  return (
    <View>
        <Text>Select the cuisines you're craving!</Text>
        {Object.keys(selectedCuisines).map((key) => {
            return (
            <TouchableOpacity
                key={key}
                style={selectedCuisines[key] === 1 ? styles.selectedBtn : styles.regularBtn}
                onPress={() => {
                    toggleSelectedCuisines(key);
                }}
            >
                <Text style={styles.buttonText}>{key}</Text>
            </TouchableOpacity>
            );
        })}
        <Text>What's the minimum star rating you want?</Text>
        {arrOfNums.map((num) => {
            return (
            <TouchableOpacity
                key={num}
                style={selectedStars === num ? styles.selectedBtn : styles.regularBtn}
                onPress={() => {
                    toggleSelectedStars(num);
                }}
            >
                <Text style={styles.buttonText}>{num}</Text>
            </TouchableOpacity>
            );
        })}
        <Text>What's your price range?</Text>
        {Object.keys(selectedPrice).map((key) => {
            return (
            <TouchableOpacity
                key={key}
                style={selectedPrice[key] === 1 ? styles.selectedBtn : styles.regularBtn}
                onPress={() => {
                    toggleSelectedPrice(key);
                }}
            >
                <Text style={styles.buttonText}>{key}</Text>
            </TouchableOpacity>
            );
        })}
    </View>
  );
};

export default FilterPicker;


const styles = StyleSheet.create({
    regularBtn: {
      backgroundColor: 'blue', 
    },
    selectedBtn: {
      backgroundColor: 'green', 
    },
    buttonText: {
      textAlign: 'center',
      color: 'white',
    },
  });