import { useState } from "react";
import "./LoginStyle.css";

const Login = () =>{
    const [username, Setusername] = useState("");
    const [password, Setpassword] = useState("");

    return(
        <>
         
       <form>
            <h2>LOG IN</h2>
            <label for ="Username" >Username</label>
            <input type="text"
            id="username" 
            name="username"
            value={username} 
            onChange={(e)=>Setusername(e.target.value)} required/>
            
            <label for="Password">Password</label>
            <input type="password"
            id="password" 
            name="password" 
            value={password}
            onChange={(e)=>Setpassword(e.target.value)} required/>

            <button type="submit" >
                        Login
            </button>

        </form>
        <div className="purple-circle"> {}
        </div>
        <div className="orange-circle"> {}
        </div>
        <div className="lightorange1-circle"> {}
        </div>
        <div className="lightorange2-circle"> {}
        </div>
       

        </>
    )
}
 
    

export default Login;
