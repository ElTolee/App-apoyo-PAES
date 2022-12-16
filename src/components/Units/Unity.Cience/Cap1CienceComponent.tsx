import React from 'react'
import { Button, GestureResponderEvent, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from '../../../firebase/firebaseConfig';
import { assignUnityToUser } from '../../../firebase/usersStorage';
import UnityContentList from '../../common/UnityContentList';

export default function Cap1CienceComponent({ navigation }: any) {
    const unities = [
        { title: "Guía de organelos celulares", data: ["https://drive.google.com/file/d/1IjX7J1xWShEanb4tcVzDt-a31CtK0JCV/view?usp=share_link"] },
        { title: "Manual de biología", data: ["https://drive.google.com/file/d/1Wn022NMOGc46E3q78yfaDxy7ksTX82Rn/view?usp=share_link"] },
        { title: "Guía de ejercicios actividad celular", data: ["https://drive.google.com/file/d/117ngVbc7tYAKUsV9NK0lOL_sVv2mquug/view?usp=share_link"] },
        { title: "Ensayo de biología", data: ["https://drive.google.com/file/d/1jPmqfcfojpf61HyYPvPg4tS-sGGIEgRa/view?usp=share_link"] }
    ]
    const assignUnity = (event: GestureResponderEvent): void => {
        const user = auth.currentUser;
        if (user) {
            assignUnityToUser(user.uid, { id: 1, name: 'Cap1Science', course: 'Science' })
        }
    }
    return (
        <>

            <View style={styles.container}>
                <Text>Capitulo 1 Science</Text>
                <UnityContentList list={unities} />
                <Button title='Completado' color={'green'} onPress={(e) => assignUnity(e)} />
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
