import React, { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";

const Dashboard = () => {
  const {logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome, {username}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;