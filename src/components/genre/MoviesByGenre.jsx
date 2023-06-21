/*  This function filter movie based on the selected genre. When the selected general is All, it doesn't filter. When there are several genres of a movie, the genres will be separated with a comma and filtered into related genres */

import React from 'react';
import MovieCard from '../MovieCard';

function MoviesByGenre({ movies = [], selectedGenre }) {
    const filteredMovies = selectedGenre === 'All'
        ? movies
        : movies.filter(movie => movie.Genre && movie.Genre.split(', ').includes(selectedGenre));

    return (
        <div className="d-flex flex-wrap">
            {filteredMovies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
            ))}
        </div>
    );
}

export default MoviesByGenre;
