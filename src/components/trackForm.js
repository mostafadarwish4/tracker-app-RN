import React,{useContext} from 'react'
import {View } from 'react-native'
import {Input,Button} from 'react-native-elements'
import {Context as LocationContext} from '../context/locationContext'
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm =()=>{
   
    const {state,stopRecording,startRecording,changeName}=useContext(LocationContext)
    const [saveTrack]=useSaveTrack()
    return (
        <View style={{flex:1,margin: 10}}>
           {!state.recording&& state.locations.length===0? <Input 
                onChangeText={changeName} value={state.name}
                placeholder={'Track name'}
                style={{margin:10,}}
                />:null}
            {state.recording?
            <Button title='Save Track'
                onPress={ saveTrack }    
            />:
            <Button title={'start Recording'}
             onPress={startRecording}
            />
            }
        </View>
    )
}

export default TrackForm