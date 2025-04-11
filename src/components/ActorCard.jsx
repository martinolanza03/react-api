import './Actor.css';


function ActorCard({ actors }) {
    return actors.map((actor, i) => (
        <li key={i}>
            <h2 className="actor-name">{actor.name}</h2>
            <p><span>Birthday:</span> {actor.birth_year}</p>
            <p><span>Nationality:</span> {actor.nationality}</p>
            <p><span>Biography:</span> {actor.biography}</p>
            <img src={actor.image} alt={actor.name} className="actor-image" />
            <p><span>Known for:</span> {actor.known_for}</p>
        </li>))
}

export default ActorCard;