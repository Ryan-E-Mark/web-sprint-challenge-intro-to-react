import React, { useState, useEffect } from "react";
import styled from 'styled-components';

export default function Details(props) {
    const { charId, close, characters } = props;
    const [ details, ActivateDetails ] = useState('');

    useEffect(() => {
        ActivateDetails(charId);
        console.log(charId);
    }, [charId])


    return (
        <div>
            <p>Eye color: {characters.eye_color}</p>
            {details && <p>stuff</p>}
        </div>
        
    )

}