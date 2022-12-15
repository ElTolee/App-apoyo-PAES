import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { AuthScreen } from './src/screen/Login/AuthScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInScreen } from './src/screen/Login/SignInScreen';
import { HomeComponent } from './src/components/homeComponent/HomeComponent';
import { HomeScreen } from './src/screen/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {CienceScreen} from './src/screen/Ciencias/CienceScreen';
import {HistoryScreen} from './src/screen/Historia/HistoryScreen';
import { LenguajeScreen } from './src/screen/Lenguaje/LenguajeScreen';
import { MathScreen } from './src/screen/Matematica/MathScreen';

import { Cap1MathScreen } from './src/screen/Matematica/Unidades/Cap1MathScreen';
import { Cap2MathScreen } from './src/screen/Matematica/Unidades/Cap2MathScreen';
import { Cap3MathScreen } from './src/screen/Matematica/Unidades/Cap3MathScreen';
import { Cap4MathScreen } from './src/screen/Matematica/Unidades/Cap4MathScreen';

import { Cap1LenguajeScreen } from './src/screen/Lenguaje/Unidades/Cap1LenguajeScreen';
import { Cap2LenguajeScreen } from './src/screen/Lenguaje/Unidades/Cap2LenguajeScreen';
import { Cap3LenguajeScreen } from './src/screen/Lenguaje/Unidades/Cap3LenguajeScreen';
import { Cap4LenguajeScreen } from './src/screen/Lenguaje/Unidades/Cap4LenguajeScreen';

import { Cap1CienceScreen } from './src/screen/Ciencias/Unidades/Cap1CienceScreen';
import { Cap2CienceScreen } from './src/screen/Ciencias/Unidades/Cap2CienceScreen';
import { Cap3CienceScreen } from './src/screen/Ciencias/Unidades/Cap3CienceScreen';
import { Cap4CienceScreen } from './src/screen/Ciencias/Unidades/Cap4CienceScreen';

import { Cap1HistoryScreen } from './src/screen/Historia/Unidades/Cap1HistoryScreen';
import { Cap2HistoryScreen } from './src/screen/Historia/Unidades/Cap2HistoryScreen';
import { Cap3HistoryScreen } from './src/screen/Historia/Unidades/Cap3HistoryScreen';
import { Cap4HistoryScreen } from './src/screen/Historia/Unidades/Cap4HistoryScreen';

const Stack = createNativeStackNavigator( );
const Tab = createBottomTabNavigator();


function PrincipalStackScreen({navigation}:any) {
  return (
    <Stack.Navigator initialRouteName="Auth"  screenOptions={{
      title: '',
      headerRight: () => (
        <Button
        onPress={() => navigation.navigate('Auth')}
          title="Cerrar Sesion"
          color="black"
        />
      ),
    }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="CienceScreen" component={CienceScreen} />
        <Stack.Screen name="LenguajeScreen" component={LenguajeScreen} />
        <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
        <Stack.Screen name="MathScreen" component={MathScreen} />

        <Stack.Screen name="Cap1MathScreen" component={Cap1MathScreen} />
        <Stack.Screen name="Cap2MathScreen" component={Cap2MathScreen} />
        <Stack.Screen name="Cap3MathScreen" component={Cap3MathScreen} />
        <Stack.Screen name="Cap4MathScreen" component={Cap4MathScreen} />

        <Stack.Screen name="Cap1LenguajeScreen" component={Cap1LenguajeScreen} />
        <Stack.Screen name="Cap2LenguajeScreen" component={Cap2LenguajeScreen} />
        <Stack.Screen name="Cap3LenguajeScreen" component={Cap3LenguajeScreen} />
        <Stack.Screen name="Cap4LenguajeScreen" component={Cap4LenguajeScreen} />
        
        <Stack.Screen name="Cap1CienceScreen" component={Cap1CienceScreen} />
        <Stack.Screen name="Cap2CienceScreen" component={Cap2CienceScreen} />
        <Stack.Screen name="Cap3CienceScreen" component={Cap3CienceScreen} />
        <Stack.Screen name="Cap4CienceScreen" component={Cap4CienceScreen} />

        <Stack.Screen name="Cap1HistoryScreen" component={Cap1HistoryScreen} />
        <Stack.Screen name="Cap2HistoryScreen" component={Cap2HistoryScreen} />
        <Stack.Screen name="Cap3HistoryScreen" component={Cap3HistoryScreen} />
        <Stack.Screen name="Cap4HistoryScreen" component={Cap4HistoryScreen} />
                                                                                                           

      </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false, tabBarActiveTintColor:'blue', }}>
        <Tab.Screen name="Home" component={PrincipalStackScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          
        }} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


