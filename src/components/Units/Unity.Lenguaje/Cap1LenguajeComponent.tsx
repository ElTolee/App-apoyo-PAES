import React from 'react'
import { Button, GestureResponderEvent, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from '../../../firebase/firebaseConfig';
import { assignUnityToUser } from '../../../firebase/usersStorage';
import UnityContentList from '../../common/UnityContentList';

export default function Cap1LenguajeComponent({ navigation, route: {params} }: any) {
    const unityId = params.unityId;
    navigation.setOptions({ title: `Cap ${unityId} Language` })
    const unities1 = [[
        { title: "Ensayo comprensión lectora", data: ["https://drive.google.com/file/d/1ma2G9xkRH-vVlohlkM7Srqchbfbf9O-y/view?usp=share_link"] },
        { title: "Comprensión lectora claves", data: ["https://drive.google.com/file/d/1_gKzN6yDp4sI6CHCrSGQPNVbgXM4hqHJ/view?usp=share_link"] },
        { title: "Apuntes Comprensión lectora", data: ["https://drive.google.com/file/d/1_gKzN6yDp4sI6CHCrSGQPNVbgXM4hqHJ/view?usp=share_link"] },
        { title: "Ensayo comprensión lectora general", data: ["https://drive.google.com/file/d/1ROB-FhroVai0ZK2f80fDoQUf3DAivFdB/view?usp=share_link"] }
    ],
    [
        { title: "Ensayo lenguaje", data: ["https://drive.google.com/file/d/1BZaq4rmShr7qEs4cB5MX4EX4JcEdaSqA/view?usp=share_link"] }
    ],
    [
        { title: "Apuntes generales lenguaje", data: ["https://drive.google.com/file/d/1s_hFSLBiNwyTuNfnDeEHB0pOHpOjZmFi/view?usp=share_link"] }
    ],
    [
        { title: "Cuadernillo de vocabulario", data: ["https://drive.google.com/file/d/1QIaPNjMn8g-6PZ1ZbRvT-GRvk95Cfljl/view?usp=share_link"] }
    ]]
    const assignUnity = (event: GestureResponderEvent): void => {
        const user = auth.currentUser;
        if (user) {
            assignUnityToUser(user.uid, { id: unityId, name: `Cap${unityId}Language`, course: 'Language' })
        }
    }
    return (
        <>

            <View style={styles.container}>
                <Text>Cap {unityId} Language</Text>
                <UnityContentList list={unities1[unityId]} />
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
