
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login/Login';
import { Authprovider } from './AuthContext/AuthContext';
import PrivateRoute from './Components/PrivateRoutes/PrivateRoutes';
import Sidebar from './Components/Sidebar/Sidebar';
import UserManagement from './Sections/UserManagement/UserManagement';
import Ratings from './Sections/Ratings/Ratings';
import Dashboard from './Sections/Dashboard/Dashboard';
import Payments from './Sections/Payments/Payments';
import Messages from './Sections/Messages/Messages';
import Bookings from './Sections/Bookings/Bookings';


function App() {


  return (
    <>
    <div className='App'>
      
      <Sidebar/>
      <Authprovider>
          <Router>
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/" element={<PrivateRoute/>}>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/user-management" element={<UserManagement/>}/>
                <Route path="/bookings" element={<Bookings/>}/>
                <Route path="/ratings" element={<Ratings/>}/>
                <Route path="/payments" element={<Payments/>}/>
                <Route path="/messages" element={<Messages/>}/>
              </Route>
            </Routes>
          </Router>
      </Authprovider>
      </div>
    </>
    
 
  );
}

export default App
