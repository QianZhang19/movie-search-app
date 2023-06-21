/* On the homepage, I fetched the library to render the homepage and created a genre selection state so that movies by genre components render the homepage */

import React, { useContext, useState } from 'react';
import MovieContext from './libr/MovieContext';
import MoviesByGenre from './genre/MoviesByGenre';
import GenreButton from './genre/GenreButton';
import './HomePage.css';


function HomePage() {
    const { library } = useContext(MovieContext);

    console.log(library.map(movie => movie.Genre));

    const [selectedGenre, setSelectedGenre] = useState('All');

    // All genres
    const genres = ['All', 'Action', 'Crime', 'Drama', 'Mystery', 'Sci-Fi', 'Adventure'];

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-3 position-fixed" style={{ paddingRight: '15px' }}>
                    <div className="d-flex flex-column justify-content-center">
                        {genres.map((genre) => (
                            <GenreButton
                                key={genre}
                                genre={genre}
                                selectedGenre={selectedGenre}
                                setSelectedGenre={setSelectedGenre}
                            />
                        ))}
                    </div>
                </div>

                <div className="col-sm-9 offset-sm-4">
                    {selectedGenre === 'All'
                        ? <MoviesByGenre movies={library} selectedGenre={selectedGenre} />
                        : <div>
                            <h3>{selectedGenre}</h3>
                            <MoviesByGenre movies={library} selectedGenre={selectedGenre} />
                        </div>
                    }

                    {library.length === 0 && (
                        <p>Empty Movie Library</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HomePage;
