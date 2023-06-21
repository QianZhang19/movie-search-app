/* styling movie card, and click the card will open movie detail information */

import React from 'react';
import './MovieCard.css';

function MovieCard({ movie }) {
    if (!movie) return <></>
    return (
        <div className="d-inline-block mb-4 mr-2 card-container">
            <a href={`/movie/${movie.imdbID}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card h-100">
                    <img src={movie.Poster} alt={movie.Title} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{movie.Title}</h5>
                        <p className="card-text">Year: {movie.Year}</p>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default MovieCard;

