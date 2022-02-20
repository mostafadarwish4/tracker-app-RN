import AsyncStorage from '@react-native-async-storage/async-storage'
import trackerApi from '../api/tracker'

const signin=dispatch=>(email,password,callBack)=>{
    trackerApi.post('./signin',{email,password})
    .then(async (res)=>{
        await AsyncStorage.setItem('token',res.data.token)
        dispatch({type:'signin',payLoad:res.data.token})
        if(callBack){
            callBack()
        }
    }).catch(err=>{dispatch({type:'add_error',payLoad:err.response.data})})
}
const signup=dispatch=>(email,password,callBack)=>{
    trackerApi.post('/signUp',{email,password})
    .then(async (res)=>{
        console.log(res.data)
        await AsyncStorage.setItem('token',res.data.token)
        
        dispatch({type:'signin',payLoad:res.data.token}) 
        if(callBack){
            callBack()
        }
    })
    .catch(err=>{
        console.log(err.response.data)
        dispatch({type:'add_error',payLoad:err.response.data})
    })
    
}

const clearErrorMessage=dispatch=>()=>{
    dispatch({type:'add_error',payLoad:''})
}

const persistLogin=dispatch=>()=>{
    AsyncStorage.getItem('token')
    .then(res=>{
        //console.log(res)
        return dispatch({type:'signin',payLoad:res})
    })
    .catch(err=>{
        console.log(err.message)
    })
}

const signout=dispatch=>()=>{
    AsyncStorage.removeItem('token')
    .then(res=>{
        console.log(res)
        dispatch({type:'signout'})
    }).catch(err=>{
        console.log('err')
    })
}


export default {
    signin,
    signup,
    signout,
    persistLogin,
    clearErrorMessage,
}