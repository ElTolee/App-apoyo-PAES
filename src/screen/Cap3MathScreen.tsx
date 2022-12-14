import React from 'react'
import { Button, TextInput, View,Text, StyleSheet } from 'react-native'
import Cap3MathComponent from '../components/Units/Unity.Math/Cap3MathComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export const Cap3MathScreen = ({navigation}:any) => {
    const nav=navigation;
  return (
    <>
        <View style={styles.container}>
            <Cap3MathComponent navigation={nav}/>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});