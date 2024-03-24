import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies } from "../appSearchedItemsByName/moviesSlice";

import AppMovieTemplate from "../appMovieTemplate/AppMovieTemplate";

import "./AppPopularMovies.scss";

const AppPopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(
    (state) => state.movies.popularMovies.movie_list
  );

  useEffect(() => {
    dispatch(fetchPopularMovies({ pageNumber: 1 }));
  }, []);

  const renderMovies = (arr) => {
    const movies = arr.map((item) => {
      return <AppMovieTemplate item={item} key={item.id} />;
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
