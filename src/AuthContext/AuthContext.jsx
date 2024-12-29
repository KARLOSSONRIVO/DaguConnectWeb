import React , { createContext, useState} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    
  const login = (token) => {
    localStorage.setItem("token", token);

  };

    const logout = () => {
        localStorage.removeItem("token")
        SetUser(null)
    }
    return(
        <AuthContext.Provider value={{login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

