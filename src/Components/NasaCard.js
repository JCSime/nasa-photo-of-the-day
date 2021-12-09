import React from 'react';

const NasaCard = (props) => {
    return (
        <>
            <h1>Nasa Card!</h1>
            <p>{props.data.date}</p>
            <p>{props.data.title}</p>
            <img src={props.data.url} alt="Nasa photo of the day"/>
            <p>{props.data.explanation}</p>
        </>
    )
}

export default NasaCard;