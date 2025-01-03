import React,{ createContext, useState, useEffect } from "react"; 
import { loginUser } from "../Services/AuthApi";


export const AuthContext = createContext();

export const Authprovider = ({ children }) => {
    const [user , setUser] = useState(null)
    const [token , setToken] = useState(localStorage.getItem("token") || "")
    const [loading, setLoading] = useState(false)



    const login = async (username, password) => {
        setLoading(true)
        try{
            const data = await loginUser(username, password);
            setToken(data.token)
            localStorage.setItem("token", data.token)
        }catch(error){
            throw error.response ? error.response.data.message : "Login failed"
        }finally{{ setLoading(false);}}
    }
    
    
    const logout = () => {
        setUser(null)
        setToken('')
        localStorage.removeItem("token")
    }

    useEffect(() => {
        if (token) {
          // Optionally fetch user data using token
        }
      }, [token]);
    

    return (
        <AuthContext.Provider value={{ user, token, loading, login, logout }}>
          {children}
        </AuthContext.Provider>
      );
}




