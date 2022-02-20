import React, { useContext, useEffect, useState } from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import SignNavigation from './src/navigation/SignNavigation';
import HomeNavigation from './src/navigation/HomeNavigation';
import Blank from './src/screens/BlankScreen'
import { Context,Provider as AuthProvider } from './src/context/authContext';
import {Provider as LocationProvider} from './src/context/locationContext'
import {Provider as TrackProvider} from './src/context/trackContext'

const Stack =createStackNavigator()

const Component = () => {
  const { state, persistLogin } = useContext(Context)
  const [transition, setTransition] = useState(false)
  useEffect(() => {
    (async () => {
      await persistLogin()
      setTimeout(() => {
        setTransition(true)
      }, 1000)
    })()

  }, [])
  return (
      !transition? <Blank/>:
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerTitleAlign:'center'}}>
            
          {state.token?
            <Stack.Screen name='Home' component={HomeNavigation}/>:
            <Stack.Screen name='Sign' component={SignNavigation} options={{headerShown:false}}/>}
          </Stack.Navigator>
        </NavigationContainer>
      )
}

export default function App() {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <Component/>
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
    
    
  )
}

