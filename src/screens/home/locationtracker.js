import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from "@react-navigation/core";
import firebase from 'firebase/app';
import 'firebase/database';

const Location = () => {

  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {

    // Retrieve coordinates from Firebase Realtime Database
    const dbRef = firebase.database().ref('coordinates');
    dbRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setCoordinates(data);
      }
    });

    return () => {
      dbRef.off();
    };
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
        {coordinates.map((coordinate, index) => (
          <Marker key={index} coordinate={coordinate} title="Marker Title" description="Marker Description">
            <View style={styles.marker}>
              {/* Marker content here */}
            </View>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  marker: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 5,
  },
});

export default Location;