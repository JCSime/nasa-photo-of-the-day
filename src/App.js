import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function CardGrabber() {
  const [cardDets, setCardDets] = useState([])
  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then((resp)=>{
      setCardDets(resp.data)
    })
    .catch((err)=>{
      console.error(err)
    })
  }, [])
  return (
    <div className='imgCard'>
      <h3 className='imgCardTitle'>{cardDets.title}</h3>
      <img className='imgCardImg' src={cardDets.hdurl} alt='Cool APOD!'></img>
      <p className='imgCardDes'>{cardDets.description}</p>
      <p className='imgCardCopyright'>{cardDets.copyright}</p>
    </div>
  )
}
CardGrabber();

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;