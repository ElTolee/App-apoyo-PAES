import React from 'react'
import { StatusBar, View, StyleSheet } from 'react-native';
import { LoginComponent } from '../components/authComponent/LoginComponent';

import { SignInComponents } from '../components/authComponent/SignInComponent';

export const AuthScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar />
            {/* <SignInComponents /> */}
            <LoginComponent/>
            
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
