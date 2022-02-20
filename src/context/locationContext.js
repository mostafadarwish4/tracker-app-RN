import locationActions from './locationActions'
import createDataContext from './createDataContext'


const locationReducer=(state,action)=>{
    switch(action.type){
        case 'add_current_location':
            return {...state,
                currentLocation:action.payLoad,
                locations:[action.payLoad,...state.locations]
                }
        case 'change_name':
            return {...state,name:action.payLoad}
        case 'stop_recording':
            return {...state,recording:false}
        case 'start_recording':
            return {...state,recording:true}
        case 'reset':
            return {...state,name:'',recording:false,currentLocation:null,locations:[]}
        default:
            return state
    }
}

export const {Context,Provider}=createDataContext(
    locationReducer,
    locationActions,
    {
        recording:false,
        locations:[],
        currentLocation:null,
        name:''
    })