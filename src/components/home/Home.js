import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Navbar from "../NavBar"
import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function Home() {

  const nav=useNavigate();
  let gotoLogin=()=>{
    nav("/login")
  }
  return (
    <div className="home-page">
      
      <div className="text-container">
        <h1 className="text-light">Welcome to SkillSync</h1>
        <p className="text-light">Explore amazing features and content on our platform.</p>
        {/* <Link onClick={gotoLogin} to="/login" className="btn btn-dark">
          Login
        </Link> */}
      </div>
    </div>
  );
}

export default Home;
