import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  //endpoint
  const endPoint = "https://www.freetestapi.com/api/v1/actors";
  //actors state
  const [actors, setActors] = useState([]);

  function fetchActors() {
    axios.get(endPoint)
      .then(res => setActors(res.data));
  }

  useEffect(fetchActors, []);

  return (
    <ul>
      {actors.map((actor, i) => (
        <li key={i}>
          <h2 >{actor.name}</h2>
          <p>Birthday: {actor.birth_year}</p>
          <p>Nationality: {actor.nationality}</p>
          <p>Biography: {actor.biography}</p>
          <img src={actor.image} alt={actor.name} />
          <p>Known for: {actor.known_for}</p>
        </li>))}
    </ul>
  )
}

export default App
