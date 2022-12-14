import React from 'react'
import { Button, TextInput, View,Text, StyleSheet } from 'react-native'
import HistoryComponent from '../../components/subjectComponent/HistoryComponent';

export const HistoryScreen = ({navigation}:any) => {
  const nav=navigation;
  return (
    <>
        <View style={styles.container}>
            <HistoryComponent navigation={nav}/>
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
