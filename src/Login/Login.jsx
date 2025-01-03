import { useState,useContext } from "react";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./LoginStyle.css";
import { AuthContext } from "../AuthContext/Authcontext";

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const [visible, setVisible] = useState(false)
  const {login, loading } = useContext(AuthContext)
  const navigate = useNavigate();
  

  const toggleVisibility = () => {
    setVisible(!visible); 
  };
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      await login(username, password)
      navigate("/dashboard")
    }catch(err){
      setError(err);
    }
    
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 id="loginHeader">LOG IN</h2>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <div className="password-input">
          <input
            type={visible ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="visibility-toggle"
            onClick={toggleVisibility}
          >
            {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </span>
        </div>

        <button type="submit" disabled= {loading}>{loading ? 'Logging in...' : 'Login'}</button>
      </form>

      <div className="purple-circle" />
      <div className="orange-circle" />
      <div className="lightorange1-circle" />
      <div className="lightorange2-circle" />
    </>
  );
};

export default Login;
