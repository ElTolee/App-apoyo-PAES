import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const HomeComponent = ({navigation}:any) => {
    
  
    return (
        <>
            <View style={styles.container} >
                
                <Text style={styles.Textx}>Materias</Text>
                
                    <TouchableOpacity style={[styles.buttons,styles.red]} onPress={() => navigation.navigate('LenguajeScreen')}>
                        <Text style={styles.buttonText}>Lenguaje</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttons,styles.blue]} onPress={() => navigation.navigate('MathScreen')}>
                        <Text style={styles.buttonText} >Matematicas</Text>
                        
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttons,styles.green]} onPress={() => navigation.navigate('CienceScreen')}>
                        <Text style={styles.buttonText} >Ciencias</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttons,styles.yellow]} onPress={() => navigation.navigate('HistoryScreen')}>
                        <Text style={styles.buttonText} >Historia</Text>
                    </TouchableOpacity>
                    
                
            </View>
        </>
      )
    }
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
            
        },
        buttonText: {
            fontSize: 25,
            color: 'white',
            alignItems: 'center',
            justifyContent: 'center'
        },
        buttons:{
            width: '80%',
            height: 60,
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 10,
            
        },
        red: {
            backgroundColor: '#EC4141',
            opacity: 0.8,
        }
        ,
        blue: {
            backgroundColor: '#414BEC',
            opacity: 1,
        }
        ,
        yellow: {
            backgroundColor: '#DDE71E',
            opacity: 0.8,
        }
        ,
        green: {
            backgroundColor: '#23D634',
            opacity: 0.8,
        }
        ,
        Textx:{
            fontSize: 60,
            fontWeight: 'bold',
            color: 'black',
            marginVertical: 10,
            marginBottom: 100,
            
        }
    });