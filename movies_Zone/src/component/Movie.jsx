import React, { useState } from "react";
import { movies } from "../data/movies";
import "./Movie.css";

const Movie = () => {
  const [movieList, setMovieList] = useState(movies);

  const topFive = movieList.slice(0, 5);
  const bottomFive = movieList.slice(-5);

  const filterByCategory = (cat)=>{
    setMovieList(movies.filter((data)=>data.category == cat))
  }

  return (
    <>
     <div className="button-group-wrapper">
  <button onClick={() => setMovieList(movies)} type="button" className="btn btn-outline-primary">
    All
  </button>
  <button onClick={() => filterByCategory("Action")} type="button" className="btn btn-outline-secondary">
    Action
  </button>
  <button onClick={() => filterByCategory("Thriller")} type="button" className="btn btn-outline-success">
    Thriller
  </button>
  <button onClick={() => filterByCategory("Animation")} type="button" className="btn btn-outline-danger">
    Animation
  </button>
  <button onClick={() => filterByCategory("Horror")} type="button" className="btn btn-outline-warning">
    Horror
  </button>
  <button onClick={() => filterByCategory("Drama")} type="button" className="btn btn-outline-info">
    Drama
  </button>
  <button onClick={() => filterByCategory("Sci-Fi")} type="button" className="btn btn-outline-light">
    Sci-Fi
  </button>
</div>

      <div className="movie-wrapper">
        <div className="movie-container">
          {topFive.map((data) => (
            <div className="movie-card" key={data.id}>
              <img src={data.backdrop_path} alt={data.title} />
              <h5>{data.title}</h5>
              <p>{data.release_date}</p>
            </div>
          ))}
        </div>

        <div className="movie-container">
          {bottomFive.map((data) => (
            <div className="movie-card" key={data.id}>
              <img src={data.backdrop_path} alt={data.title} />
              <h5>{data.title}</h5>
              <p>{data.release_date}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Movie;
