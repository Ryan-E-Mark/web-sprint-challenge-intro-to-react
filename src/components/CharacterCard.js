import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Character from "./Character";


const StyledContainer = styled.div`
    background-color: rgba(2, 2, 2, 0.5);
    width: 60%;
    color: #ffde00;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 1%;
    
    h2 {
        font-size: 2rem;
        padding: 0;
    }

`




export default function CharCard(props) {
    
    const { characters } = props;
    
    

    return (
        <StyledContainer>
            
            <h2>Characters</h2>
            {characters.map((char, ind) => {
                return <Character char={char} key={ind}/>
            })
            }
            
                
            
        </StyledContainer>
        
    )
}