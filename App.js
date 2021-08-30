import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigations/DrawerNavigator';

export default function App() {
  return (
   <NavigationContainer>
     <DrawerNavigator/>
   </NavigationContainer>
  );
}

