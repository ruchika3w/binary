import React from 'react'
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      Home <br></br>
      <Link to = "/login" >Login</Link>
      <br></br>
      <Link to = "/register" >Register</Link>

    </div>
  )
}

export default Home
