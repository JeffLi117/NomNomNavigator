import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AppContext } from '../context/AppContext';

const FilterPicker = ({ navigation }) => {
  const { selectedCuisines, toggleSelectedCuisines, selectedStars, toggleSelectedStars, selectedPrice, toggleSelectedPrice } = useContext(AppContext);
  const arrOfNums = [1, 2, 3, 4, 5];

  return (
    <View style={styles.container}>
        <Text style={styles.text}>1. Select the cuisines you're craving!</Text>
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
        <Text style={styles.text}>2. What's the minimum star rating you want?</Text>
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
        <Text style={styles.text}>3. What's your price range?</Text>
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 15
      },
    text:{
        color: '#fff',
        fontFamily: 'Roboto',
        fontSize: 16,
        backgroundColor:'#006400',
    },
    regularBtn: {
        backgroundColor: 'transparent',
    },
    selectedBtn: {
      backgroundColor: 'rgba(0, 100, 0, 0.5)',
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 15,
        textTransform: 'uppercase',
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    }
  });