import React, { useContext, useEffect, useState } from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import {Input,Button} from 'react-native-elements'
import {Context} from '../context/authContext'
import Spacer from './spacer'

const AuthForm=({text,title,onSubmit,callBack,navigationText,navigationAction})=>{
    const {state:{errMessage},clearErrorMessage}=useContext(Context)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [check,setCheck] =useState('')
    const [first,second]=navigationText.split('?')
    const validateEmail=()=>{
                        
                        (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email)?
                        setCheck(''):
                        setCheck("You have entered an invalid email address!")        
                    }
    return (
        <View style={styles.root}>
            <View style={styles.main}>

                <Text style={styles.title}>{text}</Text>            
                <Spacer/>
                
                <Input placeholder='Email'
                    style={styles.input}
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={setEmail}
                    value={email}
                    onBlur={validateEmail}
                    onFocus={()=>{
                        clearErrorMessage()
                        setCheck('')}}
                />
                {check?<Text style={styles.errMessage}>{check}</Text>:null}
                <Input placeholder='Password'
                    style={styles.input}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry
                    onChangeText={setPassword}
                    value={password} 
                    onFocus={()=>{
                        clearErrorMessage()
                        }}
                />
                {errMessage ? <Text style={styles.errMessage}>{errMessage}</Text>:null}
                <Spacer/>
                <Button title={title} 
                        
                        onPress={()=>{
                            if(check){
                                return
                            }
                            onSubmit(email,password,callBack)
                        }}
                />
                    <Text style={styles.alert} >{first}?</Text>
                <TouchableOpacity 
                
                onPress={navigationAction}>
                    <Text style={styles.navText}>{second}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#e3e3e3'
    },
    main:{
        width:'90%',
        padding:20,
        backgroundColor:'snow',
        borderWidth:1,
        borderRadius:5,
        borderColor:'#c0cccb',
        justifyContent:'space-between'
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        marginLeft:10
    },
    input:{
        width:'90%',
        height:10,
    },
    errMessage:{
        color:'red',
        fontSize:15,
        marginLeft:10,
        marginBottom:5
    },
    alert:{
        color:'gray',
        alignSelf:'center',
        paddingTop:20,
        fontSize:18
    },
    navText:{
        margin:10,
        padding:8,
        
        color:'#295a91',    
        alignSelf:'center',
        fontSize:18
    },
    
   
})
export default AuthForm