// import React, { useState } from 'react';
// import "./Login.css";

// import Axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';


// function resetpassword() {
//   const [password, setPassword] = useState('');
  
 
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     Axios.post("http://localhost:3000/api/auth/reset-password", {
//       password,
//     })
//       .then(response => {
//         if (response.data.status) {
            
          
//         }
//       })
//       .catch(err => {
//         console.error(err);
//       });
//   };
//   return (
//     <div className="login-page">
//       <h1>Reset Password</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//         <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
       
//         <button type="submit">Submit</button>
       

//       </form>
//     </div>
//   );
// }

// export default resetpassword;
import React, { useState } from 'react';
import "./Login.css";
import Axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams to extract token from URL

function resetpassword() {
  const [password, setPassword] = useState('');
  const { token } = useParams(); // Extract token from URL

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post(`http://localhost:3000/api/auth/reset-password/${token}`, { // Include token in the URL
      password,
    })
      .then(response => {
        console.log(response.data);
        alert("password update successfully");
        // Handle success response if needed
      })
      .catch(err => {
        console.error(err);
        // Handle error response if needed
      });
  };

  return (
    <div className="login-page">
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default resetpassword;
