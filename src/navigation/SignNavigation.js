import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import SigninScreen from '../screens/SigninScreen'
import SignupScreen from '../screens/SignupScreen'

const Stack=createStackNavigator()

const SignNavigation=()=>{
    return (
        <Stack.Navigator screenOptions={{headerTitleAlign:'center'}}>
            <Stack.Screen name='Signin' component={SigninScreen} />
            <Stack.Screen name='Signup' component={SignupScreen} />
        </Stack.Navigator>
    )
}

export default SignNavigation