import React from 'react'
import { StatusBar, View, StyleSheet } from 'react-native';

import { SignInComponents } from '../components/authComponent/SignInComponent';

export const SignInScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar />
            {/* <SignInComponents /> */}
            <SignInComponents/>
            
        </View>
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
