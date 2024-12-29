import React, {useContext} from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";

const ProtectedRoute = ({Children}) =>{
    const { User } = useContext(AuthContext)
    if (!User){
        return <Navigate to="/" />
    }
    return Children;
}

export default ProtectedRoute;