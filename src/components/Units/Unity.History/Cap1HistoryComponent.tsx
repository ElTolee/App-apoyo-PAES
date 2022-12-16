import { Link } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Button, GestureResponderEvent, ImageBackground, Linking, SectionList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Header } from 'react-native/Libraries/NewAppScreen';
import { auth } from '../../../firebase/firebaseConfig';
import { assignUnityToUser } from '../../../firebase/usersStorage';
import UnityContentList from '../../common/UnityContentList';

export default function Cap1HistoryComponent({ navigation, route: { params } }: any) {
    const unityId = params.unityId;

    const unities1 = [[
        { title: "La Guerra Fría", data: ["https://drive.google.com/file/d/1wDqZ6vJ4DgrVe_yaThWV99bkfVydZ5W_/view?usp=share_link"] },
        { title: "Estado, Nación y Sociedad", data: ["https://drive.google.com/file/d/1ZmkZDZDo9O3NdoefF74Qz97TXipAijNa/view?usp=share_link"] },
        { title: "QUIZ", data: ["https://drive.google.com/file/d/124AIprMk9Qo2rkmIaoWnq6T5rNhWx_pa/view?usp=share_link"] }
    ],
    [
        { title: "Estado de derecho e institucionalidad.", data: ["https://drive.google.com/file/d/1vuZAlbkohUC1ZGt6EU4mB7b2MoVoH4Ha/view?usp=share_link"] },
        { title: "Progreso indefinido e industrialización", data: ["https://drive.google.com/file/d/1GYwB68dj4gRfLKtqgobNn5q4yMAtil-6/view?usp=share_link"] }
    ],
    [
        { title: "Proceso de independencia", data: ["https://drive.google.com/file/d/1c-l7ToQzXINuhy9nQyVO5SULxXHCqEI-/view?usp=share_link"] },
        { title: "Ideas liberales y republicanas", data: ["https://drive.google.com/file/d/1Qi8-UvnPZF_wI1UtFa8k30wA6VOD0bYs/view?usp=share_link"] }
    ],
    [
        { title: "Sintesis contenidos de historia", data: ["https://drive.google.com/file/d/1z4ZYU35cHRsaZ7NVueKdUkbJXwDfcFNJ/view?usp=share_link"] },
        { title: "Territorio chileno", data: ["https://drive.google.com/file/d/1ORQp9tRj_sMizVmN7Ysk6_w7C_at9b6Z/view?usp=share_link"] },
        { title: "Ensayo de historia", data: ["https://drive.google.com/file/d/1SY_aAzL6m5-uCsdutIiQYevXlVWK-UOG/view?usp=share_link"] }
    ]]

    useEffect(() => {
        navigation.setOptions({ title: `Cap ${unityId} History` })
    })
    const assignUnity = (event: GestureResponderEvent): void => {
        const user = auth.currentUser;
        if (user) {
            assignUnityToUser(user.uid, { id: unityId, name: `Cap${unityId}History`, course: 'History' })
        }
    }
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Cap {unityId} History</Text>

                <UnityContentList list={unities1[unityId-1]}  />
                <Button title='Completado' color={'green'} onPress={(e) => assignUnity(e)} />
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        padding: 10,
        fontSize: 20
    },
    title: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 5
    },
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
