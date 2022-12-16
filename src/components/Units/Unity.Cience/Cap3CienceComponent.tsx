import React from 'react'
import { Button, GestureResponderEvent, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from '../../../firebase/firebaseConfig';
import { assignUnityToUser } from '../../../firebase/usersStorage';
import UnityContentList from '../../common/UnityContentList';

export default function Cap3CienceComponent({ navigation }: any) {
    const unities = [
        { title: "Número atomico y masico", data: ["https://drive.google.com/file/d/1ykIbNxcfaF5ypKFJ2dz8xQbP6BMrbhf-/view?usp=share_link"] },
        { title: "Metodo ceintifico", data: ["https://drive.google.com/file/d/1A7yOuu724GCI-hlnrswXVh4fXfSCWeDB/view?usp=share_link"] },
        { title: "Metales, no metales y metaloides", data: ["https://drive.google.com/file/d/1ulkeAzbtHuxH8erk0jDyE99gOXQEAt3e/view?usp=share_link"] },
        { title: "Ensayo de química", data: ["https://drive.google.com/file/d/1BTafPjABa-N1sdQUscQVbs5IHTOZKm7d/view?usp=share_link"] }
    ]
    const assignUnity = (event: GestureResponderEvent): void => {
        const user = auth.currentUser;
        if (user) {
            assignUnityToUser(user.uid, { id: 3, name: 'Cap3Science', course: 'Science' })
        }
    }
    return (
        <>

            <View style={styles.container}>
                <Text>Capitulo 3 Science</Text>
                <UnityContentList list={unities} />
                <Button title='Asignar' onPress={(e) => assignUnity(e)} />
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
