import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DailyPic from './screens/DailyPic';
import HomeScreen from './screens/HomeScreen';
import SpaceCraft from './screens/SpaceCraft';
import StraMap from './screens/StraMap';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="SpaceCraft" component={SpaceCraft} />
          <Stack.Screen name="DailyPic" component={DailyPic} />
          <Stack.Screen name="StraMap" component={StraMap} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
