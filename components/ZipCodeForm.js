import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const ZipCodeForm = ({ onSubmit }) => {
  const [zipCode, setZipCode] = useState("");

  const handleInputChange = (text) => {
    setZipCode(text);
  };

  const handleSubmit = () => {
    // You can add validation or additional logic here before submitting
    if (zipCode.length === 5) {
      onSubmit(zipCode);
    }
  };

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
      <TouchableOpacity onPress={handleSubmit} style={styles.submitBtn}>
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  submitBtn: {
    backgroundColor: "#274690",
    borderRadius: 10,
    padding: 10,
  },
  text: {
    textAlign: "center",
    color: "white",
  },
});

export default ZipCodeForm;
