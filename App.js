import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import RestaurantDetailScreen from './screens/RestaurantDetail';
import RestaurantQuickViewScreen from './screens/RestaurantQuickView';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="RestaurantQuickView" component={RestaurantQuickViewScreen} />
            <Stack.Screen name="RestaurantDetail" component={RestaurantDetailScreen} />
        </Stack.Navigator>
    </NavigationContainer>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
