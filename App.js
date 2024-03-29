import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './screens/Home'
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigation'
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default function App() {
  return (
   <Navigation/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
