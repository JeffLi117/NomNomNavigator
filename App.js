import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/Home";
import RestaurantDetailScreen from "./screens/RestaurantDetail";
import RestaurantQuickViewScreen from "./screens/RestaurantQuickView";
import { AppProvider } from "./context/AppContext";
import MapScreen from "./screens/MapScreen";
import RestaurantReview from "./components/RestaurantReviews";

const Stack = createStackNavigator();

export default function App() {
  return (

    <AppProvider>
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="RestaurantQuickView"
            component={RestaurantQuickViewScreen}
          />
          <Stack.Screen
            name="RestaurantDetail"
            component={RestaurantDetailScreen}
          />
          <Stack.Screen
            name="RestaurantReview"
            component={RestaurantReview}
          />
          <Stack.Screen name="MapScreen" component={MapScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>

  );
  //  return (
  //    <View style={styles.container}>
  //      <Text>HELLO WORLD!</Text>
  //      <StatusBar style="auto" />
  //    </View>
  //  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
