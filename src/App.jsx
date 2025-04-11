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
      .then(res => console.log(res.data))
  }

  useEffect(fetchActors, [])

  return (
    <></>
  )
}

export default App
