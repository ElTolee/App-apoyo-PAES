import React from 'react'
import { Button, TextInput, View,Text, StyleSheet } from 'react-native'
import MathComponent from '../components/subjectComponent/MathComponent';



export const MathScreen = () => {
  return (
    <>
        <View style={styles.container}>
           <MathComponent/>
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
