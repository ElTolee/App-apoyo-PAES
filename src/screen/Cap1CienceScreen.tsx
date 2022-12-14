import React from 'react'
import { Button, TextInput, View,Text, StyleSheet } from 'react-native'
import Cap1CienceComponent from '../components/Units/Unity.Cience/Cap1CienceComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export const Cap1CienceScreen = ({navigation}:any) => {
    const nav=navigation;
  return (
    <>
        <View style={styles.container}>
            <Cap1CienceComponent navigation={nav}/>
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