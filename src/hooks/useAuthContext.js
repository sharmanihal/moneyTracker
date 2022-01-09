import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthContext=()=>{
    const context=useContext(AuthContext)
    if(!context){
        throw new Error('use auth context must be inside app component')
    }
    return context
}