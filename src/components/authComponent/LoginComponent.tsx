import React, { useEffect, useState } from 'react'
import { Alert, TextInput, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { logIn } from '../../firebase/auth';

export const LoginComponent = ({nav}:any) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [correctData, setCorrectData] = useState(false);

    const handlerSubmit = async () => {
        setLoading(true);
        const successRegister = await logIn(email, password);
        if (successRegister) {
            setLoading(false);
            //Poner aqui la navegacion
            nav.push('HomeScreen');
        } else {
            setLoading(false);
            console.error('Contraseña o Usuario incorrecto');
        }
    }

    useEffect(() => {
        if (email !== '' && password !== '') {
            setCorrectData(false);
            
        }
        else {
            setCorrectData(true)
        }

    }, [email, password])


  return (
    <>
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Iniciar Sesión</Text>
                <Text style={styles.subtitle}>Por favor inicia sesión para continuar</Text>
                <View style={styles.inputGroup}>
                    <TextInput
                        placeholder="Email"
                        onChangeText={setEmail}
                        value={email}
                        style={styles.input}
                        keyboardType='email-address'
                    />
                    <TextInput
                        placeholder="Contraseña"
                        onChangeText={setPassword}
                        value={password}
                        style={styles.input}
                        secureTextEntry
                    />
                </View>
                <View style={{ marginTop: 50, width: '100%' }}>
                    <TouchableOpacity
                        onPress={handlerSubmit}
                        disabled={loading || correctData}
                        style={styles.buttonLogin}
                    ><Text>{loading ? 'Iniciando Sesión...' : 'Iniciar Sesión'}</Text></TouchableOpacity>
                </View>
            </View>
            <View style={{ marginTop: 50, width: '100%' }}>
                <TouchableOpacity
                    onPress={() => nav.push('SignInScreen')}
                    style={styles.textRegistrar}
                ><Text>Si desea registrarse haga click aquí</Text></TouchableOpacity>
            </View>
        </View>
    </>
  )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        flex: 1
    },
    input: {
        backgroundColor: 'rgba(0,0,0,0.02)',
        height: 50,
        width: '100%',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        alignSelf: 'center',
        borderStyle: 'solid',
        borderColor: '#444',
        borderWidth: .3
    },
    title: {
        fontSize: 30,
        textAlign: 'left',
        paddingLeft: 20,
        paddingBottom: 5
    },
    inputGroup: {
        paddingLeft: 20,
        paddingRight: 20
    },
    subtitle: {
        fontSize: 16,
        paddingLeft: 20,
        paddingBottom: 40,
        opacity: 0.4
    },
    buttonLogin: {
        backgroundColor: 'rgba(245,186,52,.7)',
        padding: 12,
        borderRadius: 15,
        alignSelf: 'center',
        width: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textRegistrar: {
        alignSelf: 'center'
    }
});
