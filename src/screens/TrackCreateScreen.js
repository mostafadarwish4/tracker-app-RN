import start from '../mockLocation'
import React,{useContext, useEffect} from 'react'
import {Text} from 'react-native-elements'
import {ScrollView,StyleSheet} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import Map from '../components/map'
import useLocation from '../hooks/useLocation'
import {Context as LocationContext} from '../context/locationContext'
import TrackForm from '../components/trackForm'
import Spacer from '../components/spacer'

const TrackCreateScreen=({navigation})=>{
  const {state:{recording},reset,addLocation}=useContext(LocationContext)
  useEffect(()=>{
    navigation.addListener('blur',()=>{reset()})
  },[])
    const [err]=useLocation(addLocation)
    start()
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
          <Text h4 style={{color:!recording?'grey':'green',margin:10}}>{recording?"Recording Your Location ...":"Create a new track"}</Text>
          <ScrollView>
            <Map />
            {err !== null && (
            <Text style={styles.error}>Please enable location services</Text>)}
            <Spacer/>
            <TrackForm />
          </ScrollView>     
            
          
        </SafeAreaView>
       
        )
}
const styles = StyleSheet.create({
  error: {
    fontSize: 16,
    color: 'red',
  },
});

export default TrackCreateScreen