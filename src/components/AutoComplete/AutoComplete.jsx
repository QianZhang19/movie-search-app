/* This is an autocomplete function. When the user input value, it will send a GET request to API. Then it will fetch the first five movie options as autocomplete results. When the end user clicks it, It will send a request to fetch the movie ID information and store this information in the movie library. It also has a keyboard control function to select suggested movies by right key or tab */

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import MovieContext from '../libr/MovieContext';
import { useNavigate } from 'react-router-dom';
import MovieAutoCompleteItem from './MovieAutoCompleteItem';

function AutoComplete({ searchTerm }) {
    const [results, setResults] = useState([]);
    const { addMovieToLibrary } = useContext(MovieContext);
    const navigate = useNavigate();
    const [highlightIndex, setHighlightIndex] = useState(-1);

    useEffect(() => {
        const search = async () => {
            if (searchTerm) {
                const response = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=b3ce5e54`);
                if (response?.data?.Search) {
                    setResults(response.data.Search.slice(0, 5));
                } else {
                    setResults([]);
                }
            } else {
                setResults([]);
            }
        };
        search();
    }, [searchTerm]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowDown") {
                setHighlightIndex(prev => Math.min(prev + 1, results.length - 1));
            } else if (e.key === "ArrowUp") {
                setHighlightIndex(prev => Math.max(prev - 1, 0));
            } else if ((e.key === "ArrowRight" || e.key === "Tab") && highlightIndex >= 0) {
                handleClick(results[highlightIndex].imdbID);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [highlightIndex, results]);


    const handleClick = async (imdbID) => {
        const response = await axios.get(`http://www.omdbapi.com/?i=${imdbID}&apikey=b3ce5e54`);
        addMovieToLibrary(response.data);
        navigate(`/movie/${imdbID}`);
    }

    return (
        <ul
            onMouseLeave={() => setResults([])}
        >
            {results.map((movie, index) => (
                <MovieAutoCompleteItem
                    key={index}
                    title={movie.Title}
                    poster={movie.Poster}
                    isHighlighted={index === highlightIndex}
                    onSelectItem={() => handleClick(movie.imdbID)}
                />
            ))}
        </ul>
    );
}

export default AutoComplete;
