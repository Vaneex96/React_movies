import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies } from "../appSearchedItemsByName/moviesSlice";
import { fetchGenres } from "../appFilters/filtersSlice";

import AppMovieTemplate from "../appMovieTemplate/AppMovieTemplate";
import play from "../../resources/icons8-play-50.png";
import movie from "../../resources/icons8-picture.svg";
import "./AppPopularMovies.scss";

const AppPopularMovies = () => {
  const dispatch = useDispatch();
  const objectOfGenres = useSelector((state) => state.filters.objectOfGenres);
  const popularMovies = useSelector(
    (state) => state.movies.popularMovies.results
  );

  useEffect(() => {
    dispatch(fetchGenres());
    dispatch(fetchPopularMovies());
  }, []);

  const renderMovies = (arr) => {
    const movies = arr.map((item) => {
      return <AppMovieTemplate item={item} />;
    });
    return movies;
  };

  return (
    <section className="popular_movies">
      <div className="container">
        <div className="whats_popular">
          <div className="whats_popular__label">What's Popular</div>
          <div className="whats_popular__navbar">
            <button className="btn active-btn">Streaming</button>
            <button className="btn">On TV</button>
            <button className="btn">For Rent</button>
            <button className="btn">In Theaters</button>
          </div>
        </div>
        <div className="movies-list">{renderMovies(popularMovies)}</div>
      </div>
    </section>
  );
};

export default AppPopularMovies;
