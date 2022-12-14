import React from 'react'
import { Button, TextInput, View,Text, StyleSheet } from 'react-native'
import LenguajeComponent from '../components/subjectComponent/LenguajeComponent';



export const LenguajeScreen = ({navigation}:any) => {
  const nav= navigation;
  return (
    <>
        <View style={styles.container}>
           <LenguajeComponent navigation={nav}/>
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
