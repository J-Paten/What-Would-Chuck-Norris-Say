import React, { useState } from 'react';
import '../styles/randomTriviaBox.css';

function RandomTriviaBox() {

    const [trivia, setTrivia] = useState([]);

   async function getData() {
        const response = await fetch("https://the-trivia-api.com/api/questions?limit=5");
        const data = await response.json();
        setTrivia(data);
   }


    return (
        <>
            <div id='link-trivia' className="random-number-trivia-box">
                <h2 className="trivia-box-heading">Trivia Panel</h2>
                <div className="trivia-panel">
                    <div className="trivia-box-text">{trivia.map((triv) => (
          <div key={triv.question}>{triv.question + ' ' + triv.correctAnswer}</div>
        ))}</div>
                </div>
                <button onClick={getData} className="btn btn-primary">Some Trivia Please</button>
            </div>
        
        </>
    )
}



export default RandomTriviaBox;
