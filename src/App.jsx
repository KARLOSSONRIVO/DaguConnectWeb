
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login/Login'
import Dashboard from './Dashboard/dashboard'
function App() {

  return (
   <>
      <Router>
          <Routes>
              <Route path="/" element={<Login />} /> 
              <Route path="/dashboard" element={<Dashboard />} /> 
          </Routes>
      </Router>
    </>
  );
}

export default App
