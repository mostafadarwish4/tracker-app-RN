import trackActions from './trackActions'
import createDataContext from './createDataContext'

const trackReducer=(state,action)=>{
    switch(action.type){
        case 'fetch_tracks':
            return action.payLoad
        case 'delete':
            return state.filter(item=>item._id!==action.payLoad)
        default:
            return state
      }
    }
export const {Context,Provider}=createDataContext(
    trackReducer,
    trackActions,
    []
    )

