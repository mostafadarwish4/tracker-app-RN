import instance from '../api/tracker'

const fetchTracks=dispatch=>async()=>{
    const tracks=await (await instance.get('/tracks')).data
    dispatch({type:'fetch_tracks',payLoad:tracks})
}

const createTrack=dispatch=>async(name,locations)=>{
    try{
        const track=await instance.post('/tracks',{name,locations})
    }catch(err){
        console.log(err.message)
    }
    
}

const deleteTrack=dispatch=>async(id)=>{
    try {
        
        dispatch({type:'delete',payLoad:id})
        await instance.delete(`/tracks/${id}`)
    }catch (e) {
        console.log(e.message)
    }
}


export default {
    createTrack,
    fetchTracks,
    deleteTrack
}