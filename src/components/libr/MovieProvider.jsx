/* In this component, I create a library state as a library to store the movies that the users searched. There is a function - addMovieToLibrary - Check if the movie is not in the library, then add the searched movie to the library */

import React, { useState } from 'react';
import MovieContext from './MovieContext';

function MovieProvider({ children }) {
    const [library, setLibrary] = useState([]);

    const addMovieToLibrary = (movie) => {
        // Check if movie already exists in library
        if (!library.some(existingMovie => existingMovie.imdbID === movie.imdbID)) {
            setLibrary(prevLibrary => [...prevLibrary, movie]);
        }
    };

    return (
        <MovieContext.Provider value={{ library, setLibrary, addMovieToLibrary }}>
            {children}
        </MovieContext.Provider>
    );
}

export default MovieProvider;

