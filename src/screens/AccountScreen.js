import React, { useContext,useEffect } from 'react'
import {View,Text,Button} from 'react-native'
import { Context } from '../context/authContext'

const AccountScreen=()=>{
    useEffect(()=>{
        
        return ()=>{console.log('i am done')}
     },[])
    const {signout}=useContext(Context)
    return (
        <View>
            <Text>AccountScreen</Text>
            <Button title=' Log out'
                    onPress={signout} />
        </View>
        )
}

export default AccountScreen;