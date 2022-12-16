import React from 'react'
import { StatusBar, View, StyleSheet } from 'react-native';
import { LoginComponent } from '../../components/authComponent/LoginComponent';
import { NavigationContainer } from '@react-navigation/native';

import { SignInComponents } from '../../components/authComponent/SignInComponent';

export const AuthScreen = ({navigation}:any) => {
    const nav2=navigation;

    return (
        <View style={styles.container}>
            <StatusBar />
            {/* <SignInComponents /> */}
            <LoginComponent nav={nav2}/>
            
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
