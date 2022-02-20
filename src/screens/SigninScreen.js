import React,{useContext, useEffect} from 'react'
import AuthForm from '../components/AuthForm'
import {Context} from '../context/authContext'




const SigninScreen=({navigation})=>{
    const {signin,state,clearErrorMessage}=useContext(Context)
     useEffect(()=>{
        navigation.setOptions({ title: 'LOG IN' })
        navigation.addListener('blur',()=>{clearErrorMessage()})
     },[])
     
    return (
       <AuthForm  title='Sign in'
                    text='Get to your Tracker account'
                    onSubmit={signin}
                    callBack={()=>{
                            navigation.navigate('Home')
                        }}
                    errMessage={state.errMessage}
                    navigationText="Don't have an Account ?Register Now"
                    navigationAction={()=>{
                        navigation.navigate('Signup')
                    }}
                     />
    )
}

export default SigninScreen