function ActorCard({ actors }) {
    return actors.map((actor, i) => (
        <li key={i}>
            <h2 >{actor.name}</h2>
            <p>Birthday: {actor.birth_year}</p>
            <p>Nationality: {actor.nationality}</p>
            <p>Biography: {actor.biography}</p>
            <img src={actor.image} alt={actor.name} />
            <p>Known for: {actor.known_for}</p>
        </li>))
}

export default ActorCard;