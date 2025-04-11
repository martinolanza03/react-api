import { useState, useEffect } from 'react'
import axios from 'axios'
import ActorCard from './components/ActorCard';
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
      <ActorCard actors={actors} />
    </ul>
  )
}

export default App
