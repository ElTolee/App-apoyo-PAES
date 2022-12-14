import React from 'react'
import { Button, TextInput, View,Text, StyleSheet } from 'react-native'
import MathComponent from '../components/subjectComponent/MathComponent';



export const MathScreen = ({navigation}:any) => {
  const nav=navigation;
  return (
    <>
        <View style={styles.container}>
           <MathComponent navigation={nav}/>
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
