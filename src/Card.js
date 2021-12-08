import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Card = props => {
    const [cards, setCards] = useState([]) 
    useEffect(()=> {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY `)
        .then(res => {
            setCards(res.data)
            console.log(res.data)
        })
        .catch(err => {
            debugger
        })
    }, [])
    return (
        <div className='card'>
            <h2>Picture of the day for {cards.date}</h2>
        </div>
    )
}

export default Card;