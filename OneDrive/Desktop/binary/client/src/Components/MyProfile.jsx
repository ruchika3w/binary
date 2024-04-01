import React, { useState, useEffect } from "react";
import Axios from 'axios';
import './Profile.css'; // Import the CSS file

Axios.defaults.withCredentials = true;

const MyProfile = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    Axios.get("http://localhost:3000/api/auth/user-profile")
      .then(response => {
        setUserData(response.data);
      })
      .catch(err => {
        console.error(err);
        // Handle error, e.g., redirect to login page
      });
  }, []);

  return (
    <div className="container">
      <h1>My Profile</h1>

      <div className="profile-section">
        <p>Username: {userData.username}</p>
        <p>Email: {userData.email}</p>
        <p>Name: {userData.name}</p>
        <p>UserID: {userData.userId}</p>
       

      </div>
    </div>
  );
};

export default MyProfile;
