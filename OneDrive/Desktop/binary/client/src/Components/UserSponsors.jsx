import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserSponsors = ({ userId }) => {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    
    const fetchUserSponsors = async () => {
      const UserSponserID=localStorage.getItem("userSponserId");
      console.log("UserSponserID from fetchUserSponsors: ",UserSponserID);
      // localStorage.setItem("userSponserId",sponserId);
      try {
        const response = await axios.get('http://localhost:3000/api/auth/my-team', {
          params: {
            sponsorId: UserSponserID
          }
        });
        setSponsors(response.data);
      } catch (error) {
        console.error("Error fetching user sponsors:", error);
      }
    };

    fetchUserSponsors();
  }, [userId]); // Add userId to the dependency array to trigger useEffect when userId changes

  return (
    <div>
      <h2>User Sponsors</h2>
      <ul>
        {sponsors && sponsors.length > 0 ? (
          sponsors.map((sponsor) => (
            <li key={sponsor.userId}>
              <p>Name: {sponsor.name}</p>
              <p>Level: {sponsor.level}</p>
            </li>
          ))
        ) : (
          <p>No sponsors found</p>
        )}
      </ul>
    </div>
  );
};

export default UserSponsors;
