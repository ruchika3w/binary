import {BrowserRouter , Routes , Route    } from 'react-router-dom'
 import Login from './Components/Login'
 import React, { useState, useEffect } from 'react';
import Register from "./Components/Register";
import Sidebar from './Components/Sidebar';
import ForgotPassword from './Components/forgotpassword'
import Resetpassword from './Components/resetpassword';
 import Home from './Components/Home'
// import ForgotPassword from './Components/ForgotPassword'
// import Dashboard from './Components/Dashboard'
 import Adminlogin from './Components/adminlogin'
 import Admindashboard from './Components/Admindashboard';
// import Adminsignup from './Components/Adminsignup'
// import Userdashboard from './Components/Userdashboard'
import MyProfile from './Components/MyProfile'

import Myteam from './Components/Myteam'
import UserSponsors from './Components/UserSponsors';
// import Binary from './Components/Binary'
function App() {
 
  
  
  return (
    <BrowserRouter>
    <Routes>
    {/* <Route path ="/" element={<Home />}></Route> */}
    <Route path ="/" element={<Home />}></Route>
      <Route path ="/register" element={<Register />}></Route>
      <Route path ="/login" element={<Login />}></Route>
     < Route path ="/adminlogin" element={<Adminlogin />}></Route>
      <Route path ="/dashboard" element={<Sidebar />}></Route>
      <Route path="/user-profile" element={<MyProfile />} /> 
      <Route path='/myteam' element={<Myteam />} />
      <Route path ="/forgot-password" element={<ForgotPassword/>}></Route>
      <Route path ="/admindashboard" element={<Admindashboard />}></Route>
     <Route path ="/resetpassword/:token" element={<Resetpassword />}></Route>
      {/* <Route path ="/forgotPassword" element={<ForgotPassword/>}></Route>
      <Route path ="/resetPassword/:token" element={<ResetPassword />}></Route>
      <Route path ="/dashboard" element={<Dashboard />}></Route>
      <Route path ="/adminlogin" element={<AdminLogin />}></Route>
      <Route path ="/adminsignup" element={<Adminsignup />}></Route>
      <Route path ="/admindashboard" element={<Admindashboard />}></Route>
      <Route path ="/userdashboard"exact="true" element={<Userdashboard />}></Route>
      <Route path="/user-profile" element={<MyProfile />} /> 
      <Route path='/myteam' element={<MyTeam />} />
      <Route path='/binary' element={<Binary />}/> */} 
 <Route path='/member' element={<UserSponsors />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
