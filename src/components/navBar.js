import React from 'react';
import '../styles/navBar.css'
import logo from '../images/logo-bank.png';
import { home } from '../constants/navBarconst';

import { useNavigate } from 'react-router-dom';

export default function NavBar() {

  const navigate = useNavigate();

  const handleRequestAccount = () => {
    navigate('/form');
  };

  return (
    <div className="nav-container">
      <div className='nav-two'>
        <img className="logo" alt='logo' src={logo}></img>
        <h1>accbank</h1>

        <nav>
            <ul>
              {home.map((home, index) => (
                <li key={index}>{home.nav}</li>
              ))}
            </ul>
          </nav>
      </div>

        <button className='btn-account' onClick={handleRequestAccount}>Request Account</button>

    </div>
  );
}
