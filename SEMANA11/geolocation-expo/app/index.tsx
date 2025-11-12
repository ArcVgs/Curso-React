import { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import MapView, { Callout, Circle, Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import MapViewDirection from "react-native-maps-directions";


const GOOGLE_MAPS_APIKEY = GOOGLE


export default function Index() {
  const [origin, setOrigin] = useState({
    latitude: -12.086860905603952,
    longitude: -77.00306161386227,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [destination, setDestination]= useState({
    latitude: -12.097897200767733,
    longitude: -77.01271756583446,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  
  const zoomIn = ()=>{
    setOrigin((prev)=> ({
      ...prev,
      latitudeDelta: prev.latitudeDelta* 2,
      longitudeDelta: prev.longitudeDelta * 2
    }));
  };

  const zoomOut = ()=>{
    setOrigin((prev)=> ({
      ...prev,
      latitudeDelta: prev.latitudeDelta* 2,
      longitudeDelta: prev.longitudeDelta * 2
    }));
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <MapView
          initialRegion={origin}
          style={styles.maps}
          provider={PROVIDER_GOOGLE}
        >
          <Marker
            coordinate={origin}
            title="Markek Title"
            description="Marker Description"
            pinColor="red"
            draggable={true}
          >
            <Callout>
            <Text>This Callout</Text>
          </Callout>
          </Marker>
          <Circle 
          center={origin}
          radius={100}
          />
          <MapViewDirection 
          origin={origin}
          destination={destination}
          apikey={PROVIDER_GOOGLE}
          strokeWidth={5}
          strokeColor="gold"/>
          {
          /* <Polyline 
          coordinates={[origin,destination]}
          strokeColor="#f01ff4"
          strokeWidth={3}
          /> */}
        </MapView>
        <View style={styles.zoomControls}>
          <Pressable style={styles.zoomButton} onPress={zoomIn}>
            <Text style={styles.zoomButtonText}>+</Text>
            </Pressable>
            <Pressable style={styles.zoomButton} onPress={zoomOut}>
            <Text style={styles.zoomButtonText}>-</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dd7a7aff",
    alignItems: "center",
    justifyContent: "center",
  },
  maps: {
    width: "100%",
    height: "100%",
  },

  zoomControls: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    flexDirection: 'column',
  },

  zoomButton: {
    width:40,
    height:45,
    borderRadius:20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    shadowColor: '#000',
    marginBottom:12,
    elevation:5,
  },
  zoomButtonText :{
    fontSize:24,
    textAlign: 'center',
    color: 'black',
    lineHeight: 24
}

});
