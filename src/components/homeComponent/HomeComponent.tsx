import React from 'react'
import { TextInput, StyleSheet, View, Button, Text } from 'react-native';

export const HomeComponent = ({nav}:any) => {
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
                onPress={handlePress}
                title="Lenguaje"
                color="#C12300"

            />
        </View>
        
        <View style={{ marginTop: 50, width: '90%' }}>
            <Button 
                onPress={() => nav.push('MathScreen')}
                title="Matematicas"
                color="#0000C1"
            />
        </View>
        <View style={{ marginTop: 50, width: '90%' }}>
            <Button
                onPress={handlePress}
                title="Ciencias"
                color="#009900"
                
            />
        </View>
        <View style={{ marginTop: 50, width: '90%', }}>
            <Button 
                onPress={handlePress}
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
