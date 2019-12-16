import React from "react";
// import axios from 'axios';
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { title, director, metascore, stars, id, save} = movie;
  const fuckThisError = `movies/${id}`;
  
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <Link to={fuckThisError}>
          <h2>{title}</h2>
        </Link>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button" onClick={save}>Save</div>
    </div>
  );
};

export default MovieCard;
