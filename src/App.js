import React, { useEffect, useState } from 'react';
import './App.css';
import { data } from './mocks/handlers';
import CharCard from './components/CharacterCard';
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);
  const [currentChar, setCurrentChar] = useState(1);

  const closeChar = () => {
    setCurrentChar(null);
  }

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
    .then {
      setCharacters(data);
      console.log(data);
    }.catch(err) {
      console.log(err);
    }
    
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharCard characters={characters}/>
    </div>
  );
}

export default App;
