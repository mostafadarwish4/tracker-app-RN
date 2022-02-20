import createDataContext from './createDataContext'
import actions from './authActions'

const authReducer =(state,action)=>{
    switch(action.type){
        case 'add_error':
            return {...state,errMessage:action.payLoad}
        case 'signin':
            return {...state,token:action.payLoad}
        case 'signout':
            return {errMessage:'',token:null}
        default:
            return state
    }
}


export const {Context,Provider}=createDataContext(
    authReducer,
    actions,
    {token:'',errMessage:''}
);