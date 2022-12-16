import React from 'react'
import { Button, GestureResponderEvent, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from '../../../firebase/firebaseConfig';
import { assignUnityToUser } from '../../../firebase/usersStorage';
import UnityContentList from '../../common/UnityContentList';


export default function Cap1MathComponent({ navigation }: any) {
    const unities = [
        { title: "Ejercicios números enteros", data: ["https://drive.google.com/file/d/1iSFYiTh236vzlcRzJghKZct2OTZMOi9a/view?usp=share_link"] },
        { title: "Números enteros", data: ["https://drive.google.com/file/d/1A7wXtiMMh__znNnXb3QamTfefV4CiSqA/view?usp=share_link"] },
        { title: "Ensayo matematicas", data: ["https://drive.google.com/file/d/1XStrDm5yia8NjTcqv5486dqMHpnLGjeg/view?usp=share_link"] }
    ]

    const assignUnity = (event: GestureResponderEvent): void => {
        const user = auth.currentUser;
        if (user) {
            assignUnityToUser(user.uid, { id: 1, name: 'Cap1Math', course: 'Math' })
        }
    }
    return (
        <>

            <View style={styles.container}>
                <Text>Capitulo 1 Math</Text>
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
    buttons: {
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
    Text: {
        fontSize: 60,
        fontWeight: 'bold',
        color: 'black',
        marginVertical: 10,
        marginBottom: 100,

    }
});
