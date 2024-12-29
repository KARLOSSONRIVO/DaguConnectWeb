import { useContext, useState } from "react";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { AuthContext } from "../AuthContext/AuthContext";
import "./CSS/LoginStyle.css";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api"; 

const Login = () => {
  const {login: loginUser} = useContext(AuthContext);
  const [credentials, setCredentials] = useState({username: "", password: ""})
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(credentials);
      console.log("Login successful, updating context:", data); // Log data
      loginUser(data.token);
      console.log("Navigating to /Dashboard");
      navigate("/Home");
    } catch (error) {
       console.error("log in failed",error);
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
          value={credentials.username}
          onChange={(e) => setCredentials({...credentials, username: e.target.value})}
          required
        />

        <label htmlFor="password">Password</label>
        <div className="password-input">
          <input
            type={visible ? "text" : "password"}
            id="password"
            name="password"
            value={credentials.password}
            onChange={(e) => setCredentials({...credentials, password: e.target.value})}
            required
          />
          <span
            className="visibility-toggle"
            onClick={toggleVisibility}
          >
            {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </span>
        </div>

        <button type="submit">Login</button>
      </form>

      <div className="purple-circle" />
      <div className="orange-circle" />
      <div className="lightorange1-circle" />
      <div className="lightorange2-circle" />
    </>
  );
};

export default Login;
