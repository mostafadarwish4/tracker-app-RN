import {useContext,useEffect, useState} from 'react'
import {watchPositionAsync,requestForegroundPermissionsAsync,Accuracy} from 'expo-location'
import { Context as LocationContext} from '../context/locationContext'

const useLocation=(callBack)=>{
  const [subscriber,setSub]=useState(null)
  const {state:{recording}}=useContext(LocationContext)
  const [err,setErr]=useState(null)
  const startWatching=async()=>{
          try{
          const {status}=await requestForegroundPermissionsAsync()
            if(status!=='granted'){
              setErr(true)
              return
            }
            await watchPositionAsync({
              accuracy:Accuracy.BestForNavigation,
              timeInterval:5000,
              distanceInterval:100,
              },callBack).then(sub=>{
                setSub(sub)
              })

              }catch(e){
                console.log(e.message)
                setErr(e.message)
              }
          
        }
  useEffect(()=>{
   if(recording){
      startWatching()
      }else{
        if(subscriber){
          subscriber.remove()
          setSub(null)
        }          
      }     
    return ()=>{
      if(subscriber){
        subscriber.remove()
        setSub(null)
      }
    }
    },[recording]) 
    return [err];
} 
 
  export default useLocation