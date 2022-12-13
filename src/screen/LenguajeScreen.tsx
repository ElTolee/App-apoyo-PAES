import React from 'react'
import { Button, TextInput, View,Text, StyleSheet } from 'react-native'
import LenguajeComponent from '../components/subjectComponent/LenguajeComponent';



export const LenguajeScreen = () => {
  return (
    <>
        <View style={styles.container}>
           <LenguajeComponent/>
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
