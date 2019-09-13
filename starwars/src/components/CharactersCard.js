import React from "react";
import styled from "styled-components"

const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: black;
  opacity: 0.5;
  color: white;
  width: 600px;
`;

const CharactersCard = props => {
    return (
      <Card key={props.id}>
        <h3>Character Name: {props.name}</h3>
        <p>Birth Year: {props.birth}<br></br>Eye Color: {props.eye}</p>
      </Card>
    );
};

export default CharactersCard;
