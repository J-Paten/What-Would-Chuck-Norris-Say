import React from 'react';
import '../styles/footer.css';
import SocialMediaIconsRow from './SocialMediaIconsRow';

const Footer = () => {


    return (

        <>
            
            <footer className="footer">
                <section className='social-media-icon-display'>
                    <SocialMediaIconsRow />
                </section>
                <section className='footer-nav-links'>
                    <nav className='footer-nav'>
                        <ul className='footer-nav-list'>
                             <li className='footer-nav-list-item'><a href="#link-home"><i className="fa-solid fa-house-user"></i>Home</a></li>
                             <li className='footer-nav-list-item'><a href="#link-trivia"><i className="fa-solid fa-question"></i>Trivia</a></li>
                             <li className='footer-nav-list-item'><a href="#link-jokes"><i className="fa-solid fa-masks-theater"></i>Jokes</a></li>
                            <li className='footer-nav-list-item'><a href="#link-memes"><i className="fa-brands fa-meetup"></i>Memes</a></li>
                            <li className='footer-nav-list-item'><a href="#link-gallery"><i className="fa-solid fa-camera"></i>Gallery</a></li>
                        </ul>
                    </nav>
                </section>
                <section className='designer'>
                    <h3 className='designer-heading'>Designed and Developed</h3>
                    <p className='footer-text'>Designed and developed by Jacob Patenaude</p>
                </section>
            </footer>
        
        
        </>
    )
}

export default Footer;