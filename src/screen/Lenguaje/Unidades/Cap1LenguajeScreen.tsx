import React from 'react'
import { Button, TextInput, View,Text, StyleSheet } from 'react-native'
import Cap1LenguajeComponent from '../../../components/Units/Unity.Lenguaje/Cap1LenguajeComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export const Cap1LenguajeScreen = ({navigation, route}:any) => {
    const nav=navigation;
  return (
    <>
        <View style={styles.container}>
            <Cap1LenguajeComponent navigation={nav} route={route}/>
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