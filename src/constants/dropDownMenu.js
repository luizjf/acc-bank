import React from 'react';
import { home } from '../constants/navBarconst';
import '../styles/navBar.css';

export default function DropdownMenu({ isOpen }) {
  return (
    <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
      <ul>
        {home.map((home, index) => (
          <li key={index}>{home.nav}</li>
        ))}
      </ul>
    </div>
  );
}

