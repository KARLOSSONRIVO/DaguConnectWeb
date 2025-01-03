
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login/Login';
import Dashboard from './Dashboard/dashboard';
import { Authprovider } from './AuthContext/Authcontext';
import PrivateRoute from './Components/PrivateRoutes';

function App() {

  return (
    <>
      <Authprovider>
          <Router>
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/" element={<PrivateRoute/>}>
                <Route path="/dashboard" element={<Dashboard/>}/>
              </Route>
            </Routes>
          </Router>
      </Authprovider>
    </>
 
  );
}

export default App
