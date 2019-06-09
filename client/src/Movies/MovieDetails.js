import React from 'react';

function MovieDetails(props) {
  const movie = props.movie;
  const { title, director, metascore, stars } = movie;
  return (
    <div className="movie-card" onClick={() => routeToMovie(props, movie)}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}


    </div>
  );
}


function routeToMovie(props, movie) {
  props.history.push(`/movies/${movie.id}`);
}

export default MovieDetails;