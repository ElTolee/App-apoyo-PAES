import React, { useEffect } from 'react'
import { Button, TextInput, View,Text, StyleSheet } from 'react-native'
import { HomeComponent } from '../components/homeComponent/HomeComponent'
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

export const HomeScreen = ( {navigation}:any)  => {
  const nav= navigation;
  
  return (

    <>
        <View style={styles.container}>
            <HomeComponent navigation={nav}/>
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
