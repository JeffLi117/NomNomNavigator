import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ZipCodeForm = ({ onSubmit }) => {
  const [zipCode, setZipCode] = useState('');

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
      <Button title="Submit" onPress={handleSubmit} />
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
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default ZipCodeForm;