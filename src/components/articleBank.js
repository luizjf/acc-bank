import React from 'react';
import '../styles/articleBank.css';

import article_money from '../images/image-currency.jpg';
import article_restaurant from '../images/image-restaurant.jpg';
import article_plane from '../images/image-plane.jpg';
import article_conffeti from '../images/image-confetti.jpg';



export default function articleBank(){
    return(
        <div id='all'>
            <h1>Lastest Articles</h1>
            <article className='art_container'>

                <section class="article_bank">
  
                    <section className='last_art'>
                        <div className='img_article'>
                            <img alt='article_money' src={article_money}></img>
                            <h4>By Claire Ryan</h4>
                            <h2>Receive money in any currency with no fees</h2>
                            <p>The world is getting smaller and we're becoming more mobile. So why should you be
                                forced to only receive money in a single...
                            </p>
                        </div>
                    </section>

                    <section className='last_art'>
                        <div className='img_article'>
                            <img alt='article_restaurant' src={article_restaurant}></img>
                            <h4>By Billy Mandie</h4>
                            <h2>Treat yourself without worrying about money</h2>
                            <p>Our simple budgeting feature allows you to separate our your spending 
                                and set realistic limits each month That means your....
                            </p>
                        </div>
                    </section>

                    <section className='last_art'>
                        <div className='img_article'>
                            <img alt='article_plane' src={article_plane}></img>
                            <h4>By Claire Ryan</h4>
                            <h2>Take your ACCBank card wherever you</h2>
                            <p>ACC Bank: Your trusted partner, wherever you go. 
                                Take your card and have the world in your hands...
                            </p>
                        </div>
                    </section>


                    <section className='last_art'>
                        <div className='img_article'>
                            <img alt='article_conffeti' src={article_conffeti}></img>
                            <h4>By Billy Mandie</h4>
                            <h2>Our invite-only Beta accounts are now live!</h2>
                            <p>We invite you to explore our exclusive Beta accounts! 
                                An innovative banking experience, tailor-made 
                                for our most special customers...
                            </p>
                        </div>
                    </section>

                </section>

            </article>
        </div>     
    )
}