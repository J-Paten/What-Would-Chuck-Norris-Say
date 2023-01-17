import React, { useState } from "react";
import '../styles/chuckNorrisJokeBox.css';

const ChuckNorrisJokeBox = () => {

    const [jokes, setJokes] = useState([]);

    async function getData() {
         const response = await fetch("https://api.chucknorris.io/jokes/random");
         const data = await response.json();
         setJokes(data.value);
    }

   

    return (
        <>
            <div id="link-jokes" className="chuck-norris-joke-box">
                <h2 className="joke-box-heading">Chuck Norris Joke Panel</h2>
                <div className="joke-panel">
                  <p className="joke-box-text">{jokes}</p>
                </div>
                <button onClick={getData} className="btn btn-primary">Joke Please</button>
            </div>
            
        </>
    )
}

export default ChuckNorrisJokeBox;