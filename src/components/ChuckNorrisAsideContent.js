import React from 'react';
import ChuckNorrisMemes from './ChuckNorrisMemes';
import ChuckNorrisPhotoGallery from './ChuckNorrisPhotoGallery';
import '../styles/chuckNorrisAsideContent.css';

const ChuckNorrisAsideContent = () => {


    return (

        <>
            <section className="chuck-norris-aside-content">
                <h2 className='aside-heading'>Chuck Norris Memes and Photo Gallery</h2>
                <div className='inline-buttons'>
                </div>
                <ChuckNorrisMemes />
                <ChuckNorrisPhotoGallery />
            </section>
        
        
        
        </>
    )
}

export default ChuckNorrisAsideContent;