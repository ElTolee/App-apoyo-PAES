import React, { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GetFilesUnit } from '../../../firebase/storage';
import Pdf from 'react-native-pdf';

export default function Cap1MathComponent({navigation}:any) {

    const [listFiles, setListFiles] = useState(['']);
    console.log(listFiles.length);

    useEffect( () => {
        GetFilesUnit('matematica', 1).then((r) => {setListFiles(r); });
    }, []);

    if(listFiles.length < 1) return (<View><Text>Cargando...</Text></View>)

    const lista : any = [];

    for(let i = 1; i < listFiles.length; i++){
        lista.push(
            <Text key={i}>{listFiles[0].toString()}</Text>
        );
    }

    return (
        <>
            <View style={styles.container}>
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
      marginVertical: 10,
      marginBottom: 100,
      
  }
});
