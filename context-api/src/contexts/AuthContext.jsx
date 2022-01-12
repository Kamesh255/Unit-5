import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{

    const [tokenNo, setTokenNo] = useState('');
    const [loginStatus, setloginStatus] = useState(false)

    const authController = ()=>{
        let data = {
            email:"eve.holt@reqres.in",
            password:"cityslicka"
        }
        fetch('https://reqres.in/api/login', {
            method: "POST",
            body:JSON.stringify(data),
            headers:{
                "content-type":"application/json"
            }
        }).then(res=>res.json()).then(res => tokenNo ? setTokenNo("") : setTokenNo(res.token))
        setloginStatus(!loginStatus)
    } 
    
    return <AuthContext.Provider value={{tokenNo,authController,loginStatus}}>
         {children}
    </AuthContext.Provider>
}