/* I create a movieDetail state. it sends request to fetch movie detail information  */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './MoviePage.css';

function MoviePage() {
    const [movieDetails, setMovieDetails] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=b3ce5e54`);
            setMovieDetails(response.data);
        };
        fetchMovieDetails();
    }, [id]);

    return (
        <div className="movie-details">
            <h2>{movieDetails.Title}</h2>
            <img src={movieDetails.Poster} alt={movieDetails.Title} />
            <p>Year: {movieDetails.Year}</p>
            <p>Genre: {movieDetails.Genre}</p>
            <p>Director: {movieDetails.Director}</p>
            <p>Actors: {movieDetails.Actors}</p>
            <p>Plot: {movieDetails.Plot}</p>
        </div>
    );
}

export default MoviePage;
