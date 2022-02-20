import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import AccountScreen from '../screens/AccountScreen'
import TrackCreateScreen from '../screens/TrackCreateScreen'
import TracksNavigation from '../navigation/TracksNavigation'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons'


const Bottom =createBottomTabNavigator()
const HomeNavigation=()=>{
    return (
        <Bottom.Navigator screenOptions={()=>({
            headerShown:false,
                tabBarShowLabel:false,
                tabBarActiveTintColor: 'green',
                tabBarInactiveTintColor: 'gray',
                barBackground:'#c9e8f0'
            })}>
            <Bottom.Screen options={{headerShown:false,
                  tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused? 'home': 'home-outline'} size={size} color={color} />
                }}
                 name='Tracks' 
                 component={TracksNavigation}/>
            <Bottom.Screen options={{
                  headerShown:false,
                  tabBarIcon: ({ focused, color, size }) =><Ionicons name={focused?'create':'create-outline'} size={size} color={color} />}}
            name='createTrack' component={TrackCreateScreen}/>
            <Bottom.Screen options={{
                  tabBarIcon: ({ focused, color, size }) =><AntDesign name={'profile'} size={size} color={color} />}}
            name='Account'
             component={AccountScreen}/>
        </Bottom.Navigator>
    )
}
export default HomeNavigation;