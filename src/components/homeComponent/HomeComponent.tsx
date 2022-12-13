import React from 'react'
import { TextInput, StyleSheet, View, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const HomeComponent = ({navigation}:any) => {
    function handlePress() {
        console.log("Text button pressed");
    
    }
  
  return (
    <View style={styles.container}>
        
        <Text style={styles.Textx}>
            Materias
        </Text>

        <View style={{ marginTop: 50, width: '90%' }}>
            <Button 
                onPress={() => navigation.push('LenguajeScreen')}
                title="Lenguaje"
                color="#C12300"

            />
        </View>
        
        <View style={{ marginTop: 50, width: '90%' }}>
            <Button 
                onPress={() => navigation.push('MathScreen')}
                title="Matematicas"
                color="#0000C1"
            />
        </View>
        <View style={{ marginTop: 50, width: '90%' }}>
            <Button
                onPress={() => navigation.push("CienceScreen")}
                title="Ciencias"
                color="#009900"
                
            />
        </View>
        <View style={{ marginTop: 50, width: '90%', }}>
            <Button 
                onPress={() => navigation.push("HistoryScreen")}
                title="Historia"
                color="#BEBE09"
            />
        </View>
        
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
   
    Textx:{
        fontSize: 60,
        fontWeight: 'bold',
        color: 'black',
        marginVertical: 10,
        marginBottom: 100,
        
    }
});
