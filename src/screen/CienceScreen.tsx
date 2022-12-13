import React from 'react'
import { Button, TextInput, View,Text, StyleSheet } from 'react-native'
import CienceComponent from '../components/subjectComponent/CienceComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export const CienceScreen = () => {
  return (
    <>
        <View style={styles.container}>
            <CienceComponent/>
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
