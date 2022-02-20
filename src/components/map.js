import React,{useContext, useRef} from 'react'
import {StyleSheet, ActivityIndicator, View} from 'react-native'
import MapView ,{Polyline,Circle} from 'react-native-maps'
import {Context as LocationContext} from '../context/locationContext'

const Map=()=>{   
    const {state:{currentLocation,locations}}=useContext(LocationContext)
    
  if(!currentLocation){
    return <ActivityIndicator color="grey" style={{margin:20}} size='large'/>
  }

  const center = {
    ...currentLocation.coords,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
    return (
      <View style={{margin:10}}>
        <MapView initialRegion={center} style={styles.map}>
          <Polyline coordinates={locations.map(({ coords }) => coords)} />
          <Circle
            center={currentLocation.coords}
            radius={30}
            strokeColor="rgba(255, 128, 128, 1.0)"
            fillColor="rgba(255, 128, 128, 0.3)"
          />
        </MapView> 
           
      </View>
          
        )
}
const styles = StyleSheet.create({
  map: {
    minHeight: 300,
    minWidth:300
  },
});
export default Map
