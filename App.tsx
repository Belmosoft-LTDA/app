// In App.js in a new project
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import {StyleSheet} from 'react-native';
import {GetStartedScreen} from './src/screens/Auth/GetStartedScreen';
import {LoginScreen} from './src/screens/Auth/LoginScreen';
import {HomeScreen} from './src/screens/Core/Home';
import {RegisterLeadScreen} from './src/screens/Core/Leads/RegisterLeadScreen';

export type RootStackParamList = {
  GetStartedScreen: undefined;
  LoginScreen: undefined;
  HomeScreen: undefined;
  RegisterLeadScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="GetStartedScreen" component={GetStartedScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterLeadScreen" component={RegisterLeadScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
