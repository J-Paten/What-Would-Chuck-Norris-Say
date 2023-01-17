import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-list-item"><a href="#link-home"><i className="fa-solid fa-house-user"></i>Home</a></li>
                    <li className="nav-list-item"><a href="#link-trivia"><i className="fa-solid fa-question"></i>Trivia</a></li>
                    <li className="nav-list-item"><a href="#link-jokes"><i className="fa-solid fa-masks-theater"></i>Jokes</a></li>
                    <li className="nav-list-item"><a href="#link-memes"><i className="fa-brands fa-meetup"></i>Memes</a></li>
                    <li className="nav-list-item push-right"><a href="#link-gallery"><i className="fa-solid fa-camera"></i>Gallery</a></li>
                </ul>
            </nav>        
        </>
    )
}

export default Navbar;