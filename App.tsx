import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapComponent from './src/components/Map/MapComponent';
import { AuthScreen } from './src/screen/AuthScreen';

export default function App() {

  
  return (
    // <AuthScreen/>
    <MapComponent/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



