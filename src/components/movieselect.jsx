import React from "react"
import { useState, useEffect } from "react"
import PropTypes from 'prop-types';

function Movieselect({ setTicketPrice, setSelectedMovie }) {

  const [movies, setMovies] = useState([]);

  

  useEffect(() => {
    fetch ('movies.json')
    .then(response => response.json())
    .then(data => setMovies(data))
    .catch(error => console.error('error fetching', error))
  }, []);
  
  
  
    
    return(
      <>
    <div className="movie-container">
      <label htmlFor="movie">Pick a movie</label>
      <select name="movie" id="movie" defaultValue="" onChange={e => { const movie = movies.find(movie => movie.id == e.target.value); setTicketPrice(movie.price); setSelectedMovie(movie.title) }}>
        <option value="" disabled>Select a movie</option>
        {Array.isArray(movies) && movies.map(movie => (
          <option key={movie.id} value={movie.id}>{movie.title}, {movie.price}</option>
        ))}
      </select>
    </div>
        
      </>
    )
}

Movieselect.propTypes = {
  setTicketPrice: PropTypes.func.isRequired,
  setSelectedMovie: PropTypes.func.isRequired,
};

export default Movieselect
