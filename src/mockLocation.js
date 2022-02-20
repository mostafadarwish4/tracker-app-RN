import * as Location from 'expo-location'
import { useContext, useEffect } from 'react';
import { Context as LocationContext } from './context/locationContext';
const tenMetersWithDegrees=0.0001
let prevLocation = { latitude: 30.469482, longitude: 30.888486 };
const getLocation=increment=>{
    let location= {
        timestamp:10000,
        coords:{
            speed:0,
            heading:0,
            accuracy:5,
            altitudeAccuracy:5,
            altitude:5,
            latitude:30.465450-(increment*tenMetersWithDegrees),
            longitude:30.888263-(increment*tenMetersWithDegrees)
        }
    }
    
     //prevLocation = location.coords;
     return location;
}

 const start =()=>{
    const{state:{recording}}=useContext(LocationContext)
    let counter=0
    useEffect(()=>{
       let interval=  setInterval(()=>{
        Location.EventEmitter.emit('Expo.locationChanged',{
        watchId:Location._getCurrentWatchId(),
        location:getLocation(counter)
    })
    counter++
    },1000)
    return ()=>{
        clearInterval(interval)
    }
    },[recording])
   

}
export default start