import React,{useContext, useEffect} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import MapView, { Polyline } from 'react-native-maps'
import {Context as TrackContext} from '../context/trackContext'
import moment from 'moment';
const TrackDetailScreen=({navigation,route})=>{
    const {state} = useContext(TrackContext)
    const track =state.filter(item=>item._id===route.params.id)[0]
    useEffect(()=>{
        navigation.setOptions({ title: track.name })
     },[])
    return (
        <View style={styles.root}> 
            
            <Text  style={[styles.text,{alignSelf:'center',color:'#044270'}]}>{track.name}</Text>
            <MapView style={styles.map}

                region={{
                    ...track.locations[0].coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                    }} >
           <Polyline coordinates={track.locations.map(loc=>loc.coords)} />
           </MapView>
            <Text  style={styles.text}>Created at {moment(track.createdAt).format('LLLL')}</Text>
        </View>
        )
}
const styles=StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:'#d2d6d5',

    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        margin:10
    },
    map:{ 
        height:400,
        width:'95%',
        borderColor:'black',
        borderWidth:3,
        alignSelf:'center'
    }
})
export default TrackDetailScreen;