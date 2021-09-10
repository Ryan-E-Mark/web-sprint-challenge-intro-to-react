import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const StyledHolder = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    border-bottom: .5px solid white;

    p {
        font-size: .8rem;
    }

`
const StyledDetails = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 0 5%;
    width: 50%;

    p {
        padding: 0 3%;
    }
`

export default function Details(props) {
    const { charId, characters } = props;
    const [ details, ActivateDetails ] = useState('');


    useEffect(() => {
        ActivateDetails(charId);
        console.log(charId);
        
    }, [charId])


    return (
        <StyledHolder>
            <StyledDetails>
            <p>Eye color: {characters.eye_color}</p>
            <p>Gender: {characters.gender}</p>
            <p>Hair Color: {characters.hair_color}</p>
            <p>Height: {characters.height}</p>
            <p>Mass: {characters.mass}</p>
            </StyledDetails>
        </StyledHolder>
        
    )

}