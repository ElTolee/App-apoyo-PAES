import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HistoryComponent({ navigation: {navigate}, route }: any) {
    const unities: number[] = [1, 2, 3, 4]
    return (
        <>

            <View style={styles.container}>
                <Text style={styles.Textx}>Unidades</Text>
                {unities.map((item, index) =>
                    <TouchableOpacity key={`${item} ${index}`}
                        
                        style={[styles.buttons, styles.yellow]}
                        onPress={() => navigate(`Cap1HistoryScreen`, {unityId: item})}>
                        <Text style={styles.buttonText}>Unidad {item}</Text>
                    </TouchableOpacity>
                )}
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
