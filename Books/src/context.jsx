
import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{

    const [loginBtn, setLoginBtn] = useState(true)
    const [logOutBtn, setLogOutBtn] = useState(false)

    const OnLoginSuccess=(res)=>{
        console.log("Login Success:", res.profileObj)
        setLoginBtn(false)
        setLogOutBtn(true) 
    }
    const OnFailureSuccess=(res)=>{
        console.log("Login Failed:", res)
    }
    const OnSignoutSuccess=( )=>{
        alert ("You have been signed out successfully")
        setLoginBtn(true)
        setLogOutBtn(false)
        console.clear()
    }
 
    return <AuthContext.Provider value={{loginBtn,logOutBtn,OnLoginSuccess,OnFailureSuccess,OnSignoutSuccess}}>
         {children}
    </AuthContext.Provider>
}