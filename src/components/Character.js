import React, { useState, useEffect } from "react";
import styled from 'styled-components';





export default function Character(props) {

    const { char } = props

    return(
        <div>
            {char.name}
            <button>Details</button>
        </div>
    )


}