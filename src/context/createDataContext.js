import React ,{useReducer,createContext} from 'react'

//this is a form for any context can use it
//here will distructe a component that return the context 
//and context provider  that wrap the components which listen to provider value
//the props will be from a Context and actions
export default (reducer,actions,defaultValue)=>{
    const Context = createContext()

    const Provider=({children})=>{
        const [state,dispatch]=useReducer(reducer,defaultValue)
        
        const boundActions={}
        for (let key in actions){
            boundActions[key]=actions[key](dispatch)
        }
        return (
            //...boundActions refer to the the value's properities also 
            //contain boundActions properites also with state properity
            <Context.Provider value={{state,...boundActions}}>
                {children}
            </Context.Provider>
        )
    }

    //return of default 
    return {Context,Provider}
}