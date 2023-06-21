/* This is a GenreButton function - the end user selects genre and set the selected genre */

import React from 'react';

function GenreButton({ genre, selectedGenre, setSelectedGenre }) {
    return (
        <button
            style={{ backgroundColor: genre === selectedGenre ? 'lightblue' : 'white' }}
            onClick={() => setSelectedGenre(genre)}
        >
            {genre}
        </button>
    );
}

export default GenreButton;
