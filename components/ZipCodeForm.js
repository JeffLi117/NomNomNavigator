import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AppContext } from "../context/AppContext";

const ZipCodeForm = () => {
  const { zipCode, handleZipCode, location } = useContext(AppContext);

  const handleInputChange = (text) => {
    handleZipCode(text);
  };

  // const handleSubmit = () => {
  //   // You can add validation or additional logic here before submitting
  //   if (zipCode.length === 5) {
  //     onSubmit(zipCode);
  //   }
  // };
  if (location.latitude && location.longitude) {
    return (
      <View style={styles.containerGrayed}>
      <Text style={styles.labelGrayed}>Enter Zip Code:</Text>
      <TextInput
        style={styles.inputGrayed}
        placeholder="e.g., 12345"
        keyboardType="numeric"
      />
    </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Zip Code:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., 12345"
        keyboardType="numeric"
        onChangeText={handleInputChange}
        value={zipCode}
      />
      {/* <TouchableOpacity onPress={handleSubmit} style={styles.submitBtn}>
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 0,
    paddingBottom: 0,
  },
  label: {
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  containerGrayed: {
    padding: 16,
    paddingTop: 0,
    paddingBottom: 0,
    opacity: 0.7,
    text: "gray",
  },
  labelGrayed: {
    fontSize: 16,
    color: "gray",
  },
  inputGrayed: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
});

export default ZipCodeForm;
