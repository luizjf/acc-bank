import React from 'react';
import '../styles/informationBank.css';


import online_bank from '../images/icon-online.svg';
import onboarding from '../images/icon-onboarding.svg';
import img_api from '../images/icon-api.svg';
import budgeting from '../images/icon-budgeting.svg';

export default function informationBank(){
    return(
        <div className='container'>
            <section className='sect_container'>
                <h1>Why choose ACCBank?</h1>
                <p> We leverage Open Banking to turn your bank account into your financial</p>
                <p> Control your finances like never before.</p>

                <section className='informations'>
                    <div className='logo_info'>
                        <img alt='onlineBank_logo' src={online_bank}></img>
                        <h2>Online Banking</h2>
                        <p>Our modern web and mobile applications allow you to keep 
                            track of your finances wherever you are in the world.
                        </p>
                    </div>

                    <div className='logo_info'>
                        <img alt='budgeting_logo' src={budgeting}></img>
                        <h2>Simple Budgeting</h2>
                        <p>See exactly where your money goes each month. Receive notifications 
                            when you're close to hitting your limits.
                        </p>
                    </div>

                    <div className='logo_info'>
                        <img alt='onboarding_logo' src={onboarding}></img>
                        <h2>Fast Onboarding</h2>
                        <p>We don't do branches. Open your account in minutes online and start
                            taking control of your finances right away.
                        </p>
                    </div>

                    <div className='logo_info'>
                        <img alt='img-api_logo' src={img_api}></img>
                        <h2>Open API</h2>
                        <p>Manage your savings, investiments pension, and much more from one account. Tracking
                            your money has never been easier.
                        </p>
                    </div>

                </section>
            </section>
        </div>
    )
};