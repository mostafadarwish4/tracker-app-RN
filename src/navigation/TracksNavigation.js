import React from 'react'
import {CreateStackNavigator, createStackNavigator} from '@react-navigation/stack'
import TrackListScreen from '../screens/TrackListScreen'
import TrackDetailScreen from '../screens/TrackDetailScreen'


const Stack=createStackNavigator()

const TracksNavigation =()=>{
    return(
        <Stack.Navigator screenOptions={()=>({
          headerShown:false
        })}>
            <Stack.Screen name='List' component={TrackListScreen}/>
            <Stack.Screen 
            name='Detail'
             component={TrackDetailScreen}/>
        </Stack.Navigator>
    )
}
export default TracksNavigation