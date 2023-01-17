import React from 'react';
import '../styles/chuckNorrisMemes.css';
import firstMeme from '../images/meme1.webp';
import secondMeme from '../images/meme2.webp';
import thirdMeme from '../images/meme3.jpeg';
import fourthMeme from '../images/meme4.jpeg';
import fifthMeme from '../images/meme5.jpeg';
import sixthMeme from '../images/meme6.png';


const ChuckNorrisMemes = () => {

    return (


        <>
            <div id='link-memes' className="chuck-norris-meme-container">
                <div className='meme-images'>
                    <img src={firstMeme} alt=''></img>
                    <img src={secondMeme} alt=''></img>
                    <img src={thirdMeme} alt=''></img>
                    <img src={fourthMeme} alt=''></img>
                    <img src={fifthMeme} alt=''></img>
                    <img src={sixthMeme} alt=''></img>
                </div>
            </div>
        
        
        </>
    )
}

export default ChuckNorrisMemes;