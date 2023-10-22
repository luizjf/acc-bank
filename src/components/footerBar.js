import React from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/footerBar.css';
import '../styles/Responsive.css';
import { footerli } from '../constants/footerBarconst';

import logo from '../images/logo-bank.png';
import facebook from '../images/icon-facebook.svg';
import youtube from '../images/icon-youtube.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';
import instagram from '../images/icon-instagram.svg';

export default function FooterBar(){

    const navigate = useNavigate();

    const handleRequestAccount = () => {
      navigate('/form');
    };


    return(
        <div id='cnt_footer'>
            <footer className='ftr_container'>
                <img className="logo" alt='logo' src={logo}></img>
                <h1>accbank</h1>

                <section className='midias'>
                    <img alt='facebook' src={facebook}></img>
                    <img alt='youtube' src={youtube}></img>
                    <img alt='twitter' src={twitter}></img>                    
                    <img alt='pinterest' src={pinterest}></img>
                    <img alt='instagram' src={instagram}></img>
                </section>

                <nav>
                    <ul>
                        {footerli.map((footerli, index) => (
                            <li key={index}>{footerli.name}</li>
                        ))}
                    </ul>
                </nav>

                <div className='invite'>
                    <button className='btn-account' onClick={handleRequestAccount}>Request Account</button>
                    <p>© ACCBank. All Rights Reserved</p>
                </div>
            </footer>
        </div>
    )
};