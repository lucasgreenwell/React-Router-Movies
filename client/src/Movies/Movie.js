import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard'

const Movie = (props) => {
  const [movie, setMovie] = useState();
 
  useEffect(() => {

       axios
        .get(`http://localhost:5000/api/movies/${props.id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[props.id]);
  
  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return <MovieCard movie={movie} save={props.save}/>
}

export default Movie;
