import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    background-color: #894128;

    .card-container {
        display: flex;
        background-color: #102f3c;
        border-radius: 25px;
        border-bottom: 40px solid #894128;
    }

    img {
        width: 50%;
        height: 50%;
        object-fit: contain;
    }
    p {
        margin: auto;
        width: 60%;
        padding: 10px;
        font-size: 22px;
    }
    .expl {
        color: #e5bf48;
    }
`

const NasaCard = (props) => {
    return (
        <StyledCard>
            <h1>Astronomy Picture of the Day</h1>
            <p>~{props.data.date}~</p>
            <p>{props.data.title}</p>
            <div className='card-container'>
            <img src={props.data.url} alt="Nasa photo of the day"/>
            <p className='expl'>{props.data.explanation}</p>
            </div>
            <footer>© Copyright {props.data.copyright} ©</footer>
        </StyledCard>
    )
}

export default NasaCard;