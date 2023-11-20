import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AppContext } from '../context/AppContext';

const FilterPicker = ({ navigation }) => {
  const { selectedCuisines, toggleSelectedCuisines, selectedStars, toggleSelectedStars, selectedPrice, toggleSelectedPrice, showRange } = useContext(AppContext);
  const arrOfNums = [1, 2, 3, 4, 5];
  const arrOfCuisines = ["asian", "italian", "american", "breakfast", "diner", "fast food"]

  return (
    <View>
        <Text>Select the cuisines you're craving!</Text>
        {arrOfCuisines.map((sel) => {
            return (
            <TouchableOpacity
                key={sel}
                style={selectedCuisines === sel ? styles.selectedBtn : styles.regularBtn}
                onPress={() => {
                    toggleSelectedCuisines(sel);
                }}
            >
                <Text style={styles.buttonText}>{sel}</Text>
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
        {selectedPrice.map((el) => {
            return (
            <TouchableOpacity
                key={el.priceLevel}
                style={el.toggle === 1 ? styles.selectedBtn : styles.regularBtn}
                onPress={() => {
                    toggleSelectedPrice(el.priceLevel);
                }}
            >
                <Text style={styles.buttonText}>{el.text}</Text>
            </TouchableOpacity>
            );
        })}
        {showRange && showRange.length === 2 ?
            <TouchableOpacity style={styles.priceRange}>
                <Text>Min Price Level: {`${showRange[0]}`}</Text>
                <Text>Max Price Level: {`${showRange[1]}`}</Text>
            </TouchableOpacity>
            : null
        }
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
    priceRange: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        textAlign: 'center',
    },
  });