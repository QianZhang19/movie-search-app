
/* there are two routes on this application one is the homepage and the other is the movie introduction page down */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import MoviePage from './components/MoviePage';
import HomePage from './components/HomePage';
import MovieProvider from './components/libr/MovieProvider';

function App() {
  return (
    <MovieProvider>
      <Router>
        <SearchBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
      </Router>
    </MovieProvider>
  );
}

export default App;


