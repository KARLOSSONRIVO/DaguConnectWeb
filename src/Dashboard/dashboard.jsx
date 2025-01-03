import React, { useContext } from "react";
import { AuthContext } from "../AuthContext/Authcontext";
import "./dashboardstyle.css";

const Dashboard  = () =>{
    const {user,logout} = useContext(AuthContext)
    return(
    <>
        <div className="Dashboard">
            <h1>Dashboard</h1>
            {user ? <p>Welcome, {user.name}</p> : <p>Loading user data...</p>}
            <button onClick={logout}>Logout</button>
        </div>
    </>
     
    )
      
    
}

export default Dashboard;