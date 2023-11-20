import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import uuid from 'react-native-uuid';


const RestaurantReview = ( { restaurantName, restaurantReviewData} ) => {
 return (
  <View>
      <Text style={styles.header}>Reviews for {restaurantName}</Text>
      <ScrollView style={styles.scrollView}>
        {restaurantReviewData.flat().map((item, index) => (
          <View key={uuid.v4()} style={styles.reviewContainer}>
            <Text style={styles.reviewData}>{item.relative_time_description}</Text>
            <Text style={styles.reviewData}>{item.author_name}</Text>
            <Text style={styles.reviewData}>{item.text}</Text>
            <Text style={styles.reviewData}>{item.rating}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
   )};


   const styles = StyleSheet.create({
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
      textAlign: 'center',
      marginTop: 10,
    },
    scrollView: {
      marginHorizontal: 10,
    },
    reviewContainer: {
      marginBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    reviewData: {
      color: 'blue',
      marginBottom: 5,
    },

  });
  export default RestaurantReview
