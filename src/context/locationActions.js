const addLocation=dispatch=>(location)=>{
    dispatch({type:'add_current_location',payLoad:location})
}

const startRecording=dispatch=>()=>{
    dispatch({type:'start_recording'})
}

const stopRecording=dispatch=>()=>{
    dispatch({type:'stop_recording'})
}

const changeName=dispatch=>name=>{
    dispatch({type:'change_name',payLoad:name})
}

const reset=dispatch=>()=>{
    dispatch({type:'reset'})
}




export default{
    addLocation,
    startRecording,
    stopRecording,
    changeName,
    reset
}