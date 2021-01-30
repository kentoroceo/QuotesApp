import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import FavoriteQuotesScreen from './src/screens/FavoriteQuotesScreen';
import QuoteOfTheDayScreen from './src/screens/QuoteOfTheDayScreen';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import RootReducer from './src/reducers/RootReducer';

const store = createStore(RootReducer)
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title: "Practical Exam App 2", headerTitleStyle: { alignSelf: 'center' },}} />
          <Stack.Screen name="FavoriteQuotesScreen" component={FavoriteQuotesScreen} options={{ title: "Favorite Quotes", headerTitleStyle: { alignSelf: 'center' },}} />
          <Stack.Screen name="QuoteOfTheDayScreen" component={QuoteOfTheDayScreen} options={{ title: "Quote of the Day", headerTitleStyle: { alignSelf: 'center' },}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}         