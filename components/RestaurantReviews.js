import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import uuid from 'react-native-uuid';


const RestaurantReview = ({ restaurantName, restaurantReviewData }) => {
  return (
    <View>
      <Text style={styles.header}>Reviews for {restaurantName}</Text>
      <ScrollView style={styles.scrollView}>
        {restaurantReviewData.flat().map((item, index) => (
          <View key={uuid.v4()} style={styles.reviewContainer}>
            <Text style={styles.reviewData}>{item.relative_time_description}</Text>
            <Text style={styles.reviewData}>{item.author_name}</Text>
            <Text style={styles.reviewData}>{item.text}</Text>
            <Text style={styles.reviewData}>Rating: {item.rating}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
    fontWeight: "bold",
    fontSize: 24,
    textAlign: 'center',
  },
  scrollView: {
    marginHorizontal: 10,
    borderRadius: 20
  },
  reviewContainer: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: "#f2e5d7",
    borderRadius:10
  },
  reviewData: {
    color: 'black',
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 2,
    borderRadius: 10,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10

  },

});
export default RestaurantReview;
