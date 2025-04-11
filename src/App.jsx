import { useState, useEffect } from 'react'
import axios from 'axios'
import ActorCard from './components/ActorCard';

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

  return (<>
    <h1>Actors</h1>
    <div className='container'>
      <ul>
        <ActorCard actors={actors} />
      </ul>
    </div>
  </>

  )
}

export default App
