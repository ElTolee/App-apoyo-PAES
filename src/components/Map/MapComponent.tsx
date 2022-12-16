import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View,  Text,  Platform } from 'react-native';
import * as Location from 'expo-location';

export default () => {
  const [origin, setOrigin]= React.useState({
    latitude: -33.44271219189769, 
    longitude: -70.65359070916192,
    latitudeDelta: 0.09,
    longitudeDelta: 0.04
  });
 React.useEffect(() => {
    getLocationPermission();
 }, [])
  async function getLocationPermission(){
    let {status}= await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted'){
        alert('permiso denegado');
        return; 
  }
  
  let location = await Location.getCurrentPositionAsync({});
  const current = {
    latitude: location.coords.latitude,
    longitude: location.coords.latitude,
    latitudeDelta: 0.09,
    longitudeDelta: 0.04
  }
  setOrigin(current);
}
return(      
    <View style={styles.container}>
        <MapView
            style={styles.map} 
            initialRegion={{
            latitude: origin.latitude,
            longitude: origin.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04,
            
           }}
           
        >
                <Marker 
                coordinate={{ latitude: -33.44188972398187, longitude: -70.64578824417677 }}
                title='Biblioteca Nacional de Chile'
                image={{uri: 'https://cdn-icons-png.flaticon.com/128/1183/1183387.png', width: 50, height: 50}}
                />

                <Marker  
                coordinate={{ latitude: -33.50619761071946,   longitude: -70.75658203721999 }} 
                title="Biblioteca Municipal de Maipu"
                 image={{uri: 'https://cdn-icons-png.flaticon.com/128/1183/1183387.png', width: 50, height: 50}}
                />
                <Marker  
                coordinate={{ latitude: -33.50291614742179,   longitude: -70.71329314032589 }} 
                title="Biblioteca Municipal de Cerrillos"
                image={{uri: 'https://cdn-icons-png.flaticon.com/128/1183/1183387.png', width: 50, height: 50}}
                />

                <Marker  
                coordinate={{ latitude: -33.42535670566538,   longitude: -70.70435238401834 }}
                title="Biblioteca Municipal de Quinta Normal"
                image={{uri: 'https://cdn-icons-png.flaticon.com/128/1183/1183387.png', width: 50, height: 50}}
                />

                <Marker  
                coordinate={{ latitude: -33.44017382137755,   longitude: -70.76266955349881 }}
                title="Biblioteca Municipal Gala Torres"
                image={{uri: 'https://cdn-icons-png.flaticon.com/128/1183/1183387.png', width: 50, height: 50}}
                />

                <Marker  
                coordinate={{ latitude: -33.44246241812792,   longitude: -70.6802460260551 }}
                title="Biblioteca Municipal de Santiago"
                image={{uri: 'https://cdn-icons-png.flaticon.com/128/1183/1183387.png', width: 50, height: 50}}
                />

                <Marker  
                coordinate={{ latitude: -33.415236245873515,   longitude: -70.65556227361164 }}
                title="Biblioteca Municipal Pablo Neruda"
                image={{uri: 'https://cdn-icons-png.flaticon.com/128/1183/1183387.png', width: 50, height: 50}}
                />

                <Marker  
                coordinate={{ latitude: -33.39450972016292,  longitude: -70.67071896370851 }}
                title="Biblioteca Municipal de Conchali"
                image={{uri: 'https://cdn-icons-png.flaticon.com/128/1183/1183387.png', width: 50, height: 50}}
                />

                <Marker  
                coordinate={{ latitude: -33.48269807570694,   longitude: -70.65106202870004 }}
                title="Biblioteca Municipal de Maipu"
                image={{uri: 'https://cdn-icons-png.flaticon.com/128/1183/1183387.png', width: 50, height: 50}}
                />
                <Marker  
                coordinate={{ latitude: -33.460215014180946,  longitude: -70.63408111838679 }}
                title="Biblioteca Municipal Barrio Matta"
                 image={{uri: 'https://cdn-icons-png.flaticon.com/128/1183/1183387.png', width: 50, height: 50}}
                />

        </MapView>

    </View>
)}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

