import React, { useState } from "react";
import { Route } from "react-router-dom";
// import axios from "axios";

import MovieList from "./Movies/MovieList";
import SavedList from "./Movies/SavedList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
    console.log('literally anything')
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList}></Route>
      <Route path="/movies/:id"render={props => {
        const {id} = props.match.params;
        return <Movie id={id} save={addToSavedList}/>
      }}/>
        
    </div>
  );
};

export default App;
