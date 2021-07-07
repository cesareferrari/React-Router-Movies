import React from 'react';

import MovieDetails from './MovieDetails';

const MovieList = props => {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails {...props} key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
