import React,{useContext,useState,useEffect} from 'react'
import AuthForm from '../components/AuthForm'
import {Context} from '../context/authContext'
const SignupScreen=({navigation})=>{
    const {signup,state ,clearErrorMessage}=useContext(Context)
    useEffect(()=>{
        navigation.addListener('blur',()=>{clearErrorMessage()})
    },[])
    return (
        <AuthForm  title='SIGN UP'
                    text='Create your Tracker account'
                    onSubmit={signup}
                    callBack={()=>{
                            navigation.navigate('Home')
                        }}
                    errMessage={state.errMessage}
                    navigationText="Aleady have an Account ?Login"
                    navigationAction={()=>{
                        navigation.navigate('Signin')
                    }}
                     />
        
        
    )
}


export default SignupScreen;