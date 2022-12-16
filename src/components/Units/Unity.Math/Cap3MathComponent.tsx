import React from 'react'
import { Button, GestureResponderEvent, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from '../../../firebase/firebaseConfig';
import { assignUnityToUser } from '../../../firebase/usersStorage';
import UnityContentList from '../../common/UnityContentList';

export default function Cap3MathComponent({navigation}:any) {
    const unities = [
        { title: "Raíces enesimas", data: ["https://drive.google.com/file/d/1iDGxW8A9jpUhVqUH2GkZnS7zF9fzHqZm/view?usp=share_link"] },
        { title: "Apuntes raíces enesimas", data: ["https://drive.google.com/file/d/1STJl0M48Iz6zd9qRFov1fal6yoabN4QK/view?usp=share_link"] },
        { title: "Guía de raíces enesimas", data: ["https://drive.google.com/file/d/1uVzk1_qHGykByQwiuxU84hHs1sr4Qb6N/view?usp=share_link"] }
    ]
    const assignUnity = (event: GestureResponderEvent): void => {
        const user = auth.currentUser;
        if (user) {
            assignUnityToUser(user.uid, { id: 3, name: 'Cap3Math', course: 'Math' })
        }
    }
    return (
        <>

            <View style={styles.container}>
                <Text>Capitulo 3 Math</Text>
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