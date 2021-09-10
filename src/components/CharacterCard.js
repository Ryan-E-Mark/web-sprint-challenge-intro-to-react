import React from "react";
import styled from 'styled-components';
import Character from "./Character";
import Details from "./CharDetails";


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

    button {
        font-size: 1rem;
        background-color: rgba(2, 2, 2);
        border: .25px solid #ffde00;
        color: white;
        margin: 0 1%;

        &:hover {
            background-color: rgba(2, 2, 2, 0.2);
            transform: scale(1.1);
        }

        &:active {
            transform: translateY(2px);
        }
    }

`
const CharContainer = styled.div`
    width: 100%;
    color: #ffde00;
    display: flex;
    flex-direction: column;
    align-items: center;

`
const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    
`


export default function CharCard(props) {
    
    const { characters, detailsActive, charId, close } = props;
    
    

    return (
        <StyledContainer>
            
            <h2>Characters</h2>
            <ButtonContainer>
            <button onClick={(e) => detailsActive(e.target)}>Details</button>
            { charId !== '' && <button onClick={close}>close</button>}
            </ButtonContainer>
            {characters.map((char, ind) => {
                return (
                    <CharContainer>
                        <Character char={char} key={ind} detailsActive={detailsActive} close={close} charId={charId}/>
                        {charId !== '' && <Details charId={charId} close={close} characters={char} key={ind}/>}
                    </CharContainer>
                    
                )
            })
        }
        </StyledContainer>
        
    )
}