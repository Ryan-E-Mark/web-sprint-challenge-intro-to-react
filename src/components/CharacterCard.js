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
    
    h2 {
        font-size: 2rem;
    }


`




export default function CharCard(props) {
    
    const { characters } = props;
    
    

    return (
        <StyledContainer>
            <div>
            <h2>Characters</h2>
            {characters.map((char, ind) => {
                return <Character char={char} key={ind}/>
            })
            }
            </div>
                
            
        </StyledContainer>
        
    )
}