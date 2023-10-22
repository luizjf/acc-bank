import React from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/bodyPage.css';
import '../styles/Responsive.css';


import background_intro from '../images/bg-intro-desktop.svg';
import example_acc from '../images/image-mockups.png';

export default function SectionBank (){

    const navigate = useNavigate();

    const handleRequestAccount = () => {
      navigate('/form');
    };

    return(
        <div className='bd_container'>
            <div className='sect_bank'>
                <section className='sect_acc'>
                    <h1>Next generation digital banking</h1>
                    <p>Take your financial life online. Your ACCBank account will be 
                       a one-stop-shop for spending, saving, budgeting, investing, and much more. 
                    </p>

                    <button className='btn-acc' onClick={handleRequestAccount}>Request Account</button>

                </section>

                <img className='exampleAcc' alt='example' src={example_acc}></img>
                <img className='bg_intro' alt='background' src={background_intro}></img>

            </div>
        </div>
    )
};