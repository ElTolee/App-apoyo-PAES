import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CienceComponent({navigation}:any) {
  return (
    <>
      
      <View style={styles.container}>
          <Text style={styles.Textx}>Unidades</Text>
          <Text style={styles.Textxx}>En esta sección, se reforzara las habilidades en el área de las ciencias "Biología, Física y quimica"</Text>
              <TouchableOpacity style={[styles.buttons,styles.green]} onPress={() => navigation.navigate('Cap1CienceScreen')}>
                  <Text style={styles.buttonText}>Unidad 1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.buttons,styles.green]} onPress={() => navigation.navigate('Cap2CienceScreen')}>
                  <Text style={styles.buttonText} >Unidad 2</Text>
                  
              </TouchableOpacity>
              <TouchableOpacity style={[styles.buttons,styles.green]} onPress={() => navigation.navigate('Cap3CienceScreen')}>
                  <Text style={styles.buttonText} >Unidad 3</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.buttons,styles.green]} onPress={() => navigation.navigate('Cap4CienceScreen')}>
                  <Text style={styles.buttonText} >Unidad 4</Text>
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
      marginVertical: "10%",
      marginBottom: "10%",
      marginTop: "20%",
      
  },
  Textxx:{
    fontSize: 20,
    fontWeight: 'normal',
    color: 'black',
    marginVertical: "5%",
    marginBottom: "5%",
    paddingHorizontal:"10%",
}
});



