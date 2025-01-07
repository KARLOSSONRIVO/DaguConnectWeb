import React, { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications"; 
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

import "./Dashboard.css";

const Dashboard  = () =>{
    const {user,logout} = useContext(AuthContext)
    return(
    <>
        <div className="Container">
            <div className = "item1">
                
                <div className ="search">
                    <TextField
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    label="Search"
                    sx={{
                        borderRadius: "50px", 
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "50px",
                            color: "black" 
                        },
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    />
                 </div>
                <div className="notification-icon">
                            <NotificationsIcon style={{ color: "#3F51B7", fontSize: "40px" }} />
                </div>
            
            </div>
            <div className = "item2">
                <div className="Overview">
                    <h3>Dashboard Overview</h3>
                    <div className="Admin">
                    
                        <div className="admin_pfp">
                            <SupervisorAccountIcon/>
                        </div>
                        <div className="admin-info">
                            <h2>Goodmorning, Admin!</h2>
                            <p>Monday, December 30, 2024</p>
                        </div>
                    </div>
                    <div className="total_users">
                    
                       </div>
                       <div className="active_users">
                    
                       </div>

                </div>
                <div className="total_bookings">
                    <h3>Total Bookings</h3>


                </div>


            
            </div>
            
        </div>
    </>
     
    )
      
    
}

export default Dashboard;