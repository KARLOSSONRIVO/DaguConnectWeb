import React,{ useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthContext/Authcontext";


const PrivateRoute = () => {
    const {token } = useContext(AuthContext)
    console.log('Token in PrivateRoute:', token); // Debugging line
    return token ? <Outlet/> : <Navigate to= "/"/>
}

export default PrivateRoute;