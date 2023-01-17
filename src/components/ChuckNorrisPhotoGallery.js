import React from 'react';
import '../styles/chuckNorrisPhotoGallery.css';
import firstNorrisPhoto from '../images/norris-1.jpeg';
import secondNorrisPhoto from '../images/norris-2.png';
import thirdNorrisPhoto from '../images/norris-4.jpeg';
import fourthNorrisPhoto from '../images/norris-5.jpeg';
import fifthNorrisPhoto from '../images/norris-6.jpeg';
import sixthNorrisPhoto from '../images/norris-7.jpeg';


const ChuckNorrisPhotoGallery = () => {


    return (

        <>
            <div id='link-gallery' className="chuck-norris-photo-gallery">
                <div className='chuck-norris-images'>
                    <img src={firstNorrisPhoto} alt=''></img>
                    <img src={secondNorrisPhoto} alt=''></img>
                    <img src={thirdNorrisPhoto} alt=''></img>
                    <img src={fourthNorrisPhoto} alt=''></img>
                    <img src={fifthNorrisPhoto} alt=''></img>
                    <img src={sixthNorrisPhoto} alt=''></img>
                </div>
            </div>
        
        </>
    )
}

export default ChuckNorrisPhotoGallery;