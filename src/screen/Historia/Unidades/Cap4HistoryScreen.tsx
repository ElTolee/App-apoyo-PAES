import React from 'react'
import { Button, TextInput, View,Text, StyleSheet } from 'react-native'
import Cap4HistoryComponent from '../../../components/Units/Unity.History/Cap4HistoryComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export const Cap4HistoryScreen = ({navigation}:any) => {
    const nav=navigation;
  return (
    <>
        <View style={styles.container}>
            <Cap4HistoryComponent navigation={nav}/>
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