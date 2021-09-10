import React, { useState, useEffect } from "react";
import styled from 'styled-components';


const StyledChar = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    border-bottom: .5px solid white;

    p {
        font-size: 1.2rem;
    }

`
const StyledName = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 0 5%;
    width: 50%;
`
const StyledButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 0 5%;
    width: 50%;

    button {
        font-size: 1rem;
        background-color: rgba(2, 2, 2);
        border: .25px solid #ffde00;
        color: white;
        

        &:hover {
            background-color: rgba(2, 2, 2, 0.2);
            transform: scale(1.1);
        }

        &:active {
            transform: translateY(2px);
        }
    }

`

export default function Character(props) {

    const { char } = props

    return(
        <StyledChar>
            <StyledName>
                <p>{char.name}</p>
            </StyledName>
            <StyledButtonContainer>
                <button>Details</button>
            </StyledButtonContainer>
        </StyledChar>
    )


}