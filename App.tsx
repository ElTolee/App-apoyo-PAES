import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AuthScreen } from './src/screen/AuthScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInScreen } from './src/screen/SignInScreen';
import { HomeComponent } from './src/components/homeComponent/HomeComponent';
import { HomeScreen } from './src/screen/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {CienceScreen} from './src/screen/CienceScreen';
import {HistoryScreen} from './src/screen/HistoryScreen';
import { LenguajeScreen } from './src/screen/LenguajeScreen';
import { MathScreen } from './src/screen/MathScreen';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Auth" >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="CienceScreen" component={CienceScreen} />
        <Stack.Screen name="LenguajeScreen" component={LenguajeScreen} />
        <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
        <Stack.Screen name="MathScreen" component={MathScreen} />

      </Stack.Navigator>
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


