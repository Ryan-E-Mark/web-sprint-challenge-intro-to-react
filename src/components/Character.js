import React from "react";
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

export default function Character(props) {

    const { char } = props

    return(
        <StyledChar>
            <StyledName>
                <p>{char.name}</p>
            </StyledName>           
        </StyledChar>
    )


}