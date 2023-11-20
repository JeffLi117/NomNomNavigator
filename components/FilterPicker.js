import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AppContext } from "../context/AppContext";

const FilterPicker = ({ navigation }) => {
  const {
    selectedCuisines,
    toggleSelectedCuisines,
    selectedStars,
    toggleSelectedStars,
    selectedPrice,
    toggleSelectedPrice,
    showRange,
  } = useContext(AppContext);
  const arrOfNums = [1, 2, 3, 4, 5];
  const arrOfCuisines = [
    "asian",
    "italian",
    "american",
    "breakfast",
    "brunch",
    "diner",
    "fast food",
  ];

  return (
    <View>
      <Text style={styles.topText}>Select the cuisines you're craving!</Text>
      <View>
        {arrOfCuisines.map((sel) => {
            return (
            <TouchableOpacity
                key={sel}
                style={
                selectedCuisines === sel ? styles.selectedBtn : styles.regularBtn
                }
                onPress={() => {
                toggleSelectedCuisines(sel);
                }}
            >
                <Text
                style={
                    selectedCuisines === sel
                    ? styles.selectedTextCuisine
                    : styles.buttonTextCuisine
                }
                >
                {sel}
                </Text>
            </TouchableOpacity>
            );
        })}
      </View>
      <Text style={styles.text}>What's the minimum star rating you want?</Text>
      <View style={styles.container}>
        {arrOfNums.map((num) => {
          return (
            <TouchableOpacity
              key={num}
              style={
                selectedStars === num
                  ? styles.smallSelectedBtn
                  : styles.smallRegularBtn
              }
              onPress={() => {
                toggleSelectedStars(num);
              }}
            >
              <Text
                style={
                  selectedStars === num
                    ? styles.selectedText
                    : styles.buttonText
                }
              >
                {num}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <Text style={styles.text}>What's your price range?</Text>
      <View style={styles.container}>
        {selectedPrice.map((el) => {
          return (
            <TouchableOpacity
              key={el.priceLevel}
              style={
                el.toggle === 1
                  ? styles.smallSelectedBtn
                  : styles.smallRegularBtn
              }
              onPress={() => {
                toggleSelectedPrice(el.priceLevel);
              }}
            >
              <Text
                style={
                  el.toggle === 1 ? styles.selectedText : styles.buttonText
                }
              >
                {el.text}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {showRange && showRange.length === 2 ? (
        <TouchableOpacity style={styles.priceRange}>
          <Text>Min Price Level: {`${showRange[0]}`}</Text>
          <Text>Max Price Level: {`${showRange[1]}`}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default FilterPicker;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  regularBtn: {
    backgroundColor: "#d5bdaf",
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  selectedBtn: {
    backgroundColor: "#274690",
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  smallRegularBtn: {
    backgroundColor: "#d5bdaf",
    borderRadius: 10,
    padding: 10,
    margin: 5,
    width: "18%",
  },
  smallSelectedBtn: {
    backgroundColor: "#274690",
    borderRadius: 10,
    padding: 10,
    margin: 5,
    width: "18%",
  },
  buttonText: {
    fontSize: 12,
    textAlign: "center",
  },
  selectedText: {
    fontSize: 12,
    textAlign: "center",
    color: "white",
  },
  buttonTextCuisine: {
    fontSize: 12,
    textAlign: "center",
    width: "fit-content",
    margin: 5,
  },
  selectedTextCuisine: {
    fontSize: 12,
    textAlign: "center",
    color: "white",
    width: "fit-content",
    margin: 5,
  },
  priceRange: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    paddingTop: 20,
  },
  topText: {
    textAlign: "center",
    paddingTop: 0,
  }
});
