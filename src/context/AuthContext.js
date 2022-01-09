import { createContext,useEffect,useReducer } from "react";
import { projectAuth } from "../firebase/config";

export const AuthContext=createContext()
export const authReducer=(state,action)=>{
    switch (action.type){
        case "LOGIN":
            return {...state,user:action.payload}
        case "LOGOUT":
            return{...state,user:null}
        case "AUTH_IS_READY":
            return{...state,user:action.payload,authIsReady:true}
        default:
            return state
    }
}
export default function AuthContextProvider({children}) {
    const [state,dispatch]=useReducer(authReducer,{
        user:null,
        authIsReady:false
    })
//this use effect will work when the component is render telling us wheather
//the user is logged in or not. so even if we do a reload the user login status does'nt change
    useEffect(()=>{
        const unsub = projectAuth.onAuthStateChanged((user)=>{
            dispatch({type:"AUTH_IS_READY",payload:user})
            unsub();
        })
    },[])
    return (
        <AuthContext.Provider value={{...state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}




