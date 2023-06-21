/* In this component, I create two states one is searchTerm, and the other is the response. SearchTerm is the value the end user input to the search bar. There is search movie function - it sends a GET request to API to fetch movies that match the end user input */

import React, { useState } from 'react';
import axios from 'axios';
import AutoComplete from './AutoComplete/AutoComplete';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [response, setResponse] = useState(null);
    const navigate = useNavigate();

    const searchMovie = async (e) => {
        e.preventDefault();
        const searchResponse = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=b3ce5e54`);

        if (searchResponse?.data?.Search) {
            setResponse(searchResponse)
        }
    }

    const goHome = () => navigate(`/`)

    return (
        <div className="search-bar">
            <form onSubmit={searchMovie} style={{ width: '100%', display: 'flex' }}>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <button onClick={goHome} className="go-home-btn">Home</button>
            </form>
            <AutoComplete searchTerm={searchTerm} />
        </div>
    );


}

export default SearchBar;

