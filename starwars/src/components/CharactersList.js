import React, { useState, useEffect } from "react";
import CharactersCard from "./CharactersCard";
import axios from "axios";

let count = 0
function keyGenerate (num) {
  return `${num || 'id'}-${count++}`
}

export default function CharactersList() {
    const [characters, setCharacters] = useState([]);
  
    useEffect(() => {
      axios
        .get(`https://swapi.co/api/people/`)
        .then(response => {
          const characters = response.data.results;
          console.log("Characters In Star Wars", characters);
          setCharacters(characters);
        })
        .catch(error => {
          console.log("The Star War Characters Data Was Not Returned", error);
        });
    }, []);
    return (
      <div className="container">
        {characters.map(character => {
            return (
            <CharactersCard
                key={keyGenerate()}
                name={character.name}
                birth={character.birth_year}
                eye={character.eye_color}
            />
            );
        })}
      </div>
    );
  }
  