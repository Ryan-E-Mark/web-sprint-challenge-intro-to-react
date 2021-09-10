import React, { useEffect, useState } from 'react';
import './App.css';

import CharCard from './components/CharacterCard';
import axios from 'axios';
import styled from 'styled-components';
import Details from './components/CharDetails';

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 4rem;
    color: #ffde00;
  }
`


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);
  const [currentChar, setCurrentChar] = useState('');

  const detailsActive = name => {
    setCurrentChar(name);
  }

  const detailsClosed = () => {
    setCurrentChar('');
  }


  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
    .then(resp => {
      setCharacters(resp.data);
      console.log(resp.data);
    })
    .catch(err => {
      console.log(err);
    })
    
  }, [])

  return (
    <StyledPage>
      <h1 className="Header">Star Wars</h1>
      <CharCard characters={characters} detailsActive={detailsActive} charId={currentChar} close={detailsClosed}/>
      
    </StyledPage>
  );
}

export default App;
