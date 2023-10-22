import React, {useState} from 'react';
import '../styles/navBar.css'
import logo from '../images/logo-bank.png';
import { useNavigate } from 'react-router-dom';

import { home } from '../constants/navBarconst';
import DropdownMenu from '../constants/dropDownMenu';

export default function NavBar() {

  const navigate = useNavigate();

  const handleRequestAccount = () => {
    navigate('/form');
  };

  const [menuOpen, setMenuOpen] = useState(false); // Adicione este estado

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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

      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'active' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'active' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'active' : ''}`}></div>
      </div>

      <DropdownMenu isOpen={menuOpen} /> 

    </div>

  );
}
