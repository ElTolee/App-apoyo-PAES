import React from 'react'
import { Button, TextInput, View,Text, StyleSheet } from 'react-native'
import { HomeComponent } from '../components/homeComponent/HomeComponent'

export const HomeScreen = ({navigation}:any) => {
    const nav2=navigation;
  return (
    <>
        <View style={styles.container}>
            <HomeComponent nav={nav2}/>
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
