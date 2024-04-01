import React, { useState } from "react";
import "../App.css";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [sponsorId, setSponsorId] = useState("");
  const [sponsorName, setSponsorName] = useState("");
  const [position, setPosition] = useState(""); // State to hold selected position
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const navigate = useNavigate();

  const handleSponsorName = async (id) => {
    await axios({
      method: "get",
      url: "http://localhost:3000/api/auth/getUserNameById",
      params: {
        id: id,
      },
    })
      .then(function (response) {
        // console.log(response.data);
        setSponsorName(response.data.name);
      })
      .catch(function (error) {
        console.error("Error fetching sponsor name:", error);
        // Handle error here if needed
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert("registerd successfully");
    try {
      const res = await axios.post("http://localhost:3000/api/auth/register", {
        name,
        username,
        email,
        mobile,
        sponsorId,
        sponsorName,
        position,
        password,
        confirmPassword,
      });
      console.log("User ne register kra h" );
      console.log("User : ", res.data.user.userId);
      alert("registerd successfully");
    } catch (err) {
      console.log("Error in registering user: ", err);
    }
    // axios
    //   .post("http://localhost:3000/api/auth/register", {
    //     name,
    //     username,
    //     email,
    //     mobile,
    //     sponsorId,
    //     sponsorName,
    //     position,
    //     password,
    //     confirmPassword,
    //   })
    //   .then((response) => {
    //     // if (response.data.status) {
    //     // }
    //     console.log("User data: ", response);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };
  return (
    <div className="registration-form">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="sponsorId">Sponsor ID</label>
          <input
            type="text"
            id="sponsorId"
            name="sponsorId"
            value={sponsorId}
            onChange={(e) => {
              setSponsorId(e.target.value);
            }}
            onBlur={() => {
              handleSponsorName(sponsorId);
            }}
            // required
          />
        </div>
        <div className="form-group">
          <label htmlFor="sponsorName">Sponsor Name</label>
          <input
            type="text"
            id="sponsorName"
            name="sponsorName"
            readOnly={true}
            value={sponsorName}
            // required
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position</label>
          <select
            id="position"
            name="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            // required
          >
            <option value="">Select Position</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
        </div>
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
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            id="agreeTerms"
            name="agreeTerms"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            required
          />
          <label htmlFor="agreeTerms">I agree to the Terms & Conditions</label>
        </div>
        <button type="submit">
          REGISTER<Link to="/login"></Link>
        </button>
        <br></br>
        <br></br>
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
}

export default Register;
