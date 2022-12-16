import React from 'react'
import { Button, ButtonProps, GestureResponderEvent, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { assignUnityToUser } from '../../../firebase/usersStorage';
import { auth } from '../../../firebase/firebaseConfig';
import UnityContentList from '../../common/UnityContentList';

export default function Cap2MathComponent({ navigation }: any) {

    const unities = [
        { title: "Apuntes porcentaje", data: ["https://drive.google.com/file/d/1ZOV8JDiGM7lcrJw1mylxUMN7YQwX8Qmg/view?usp=share_link"] },
        { title: "Ejercicios porcentaje", data: ["https://drive.google.com/file/d/10i9yK5DfXWi-0E1iHUUEKtSqENDoZUy6/view?usp=share_link"] },
        { title: "Ejercicios porcentaje 2", data: ["https://drive.google.com/file/d/1xDaOLMqZpm9eAChyf5e9PkCQCb1_3y29/view?usp=share_link"] }
    ]
    const assignUnity = (event: GestureResponderEvent): void => {
        const user = auth.currentUser;
        if (user) {
            assignUnityToUser(user.uid, { id: 2, name: 'Cap2Math', course: 'Math' })
        }
    }
    return (
        <>
            <View style={styles.container}>
                <Text>Capitulo 2 Math</Text>
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
    Textx: {
        fontSize: 60,
        fontWeight: 'bold',
        color: 'black',
        marginVertical: 10,
        marginBottom: 100,

    }
});