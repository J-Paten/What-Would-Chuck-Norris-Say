import React from 'react';
import '../styles/scrollBody.css'
import RandomTriviaBox from './RandomTriviaBox';
import ChuckNorrisJokeBox from './ChuckNorrisJokeBox';



const ScrollBody = () => {


    return (

        <>
            <section className="scroll-body">
                <RandomTriviaBox />
                <ChuckNorrisJokeBox />
            </section>
        
        
        
        </>
    )
}

export default ScrollBody;