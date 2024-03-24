import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFreeToWatchMovies } from "../appSearchedItemsByName/moviesSlice";

import AppMovieTemplate from "../appMovieTemplate/AppMovieTemplate";

import "./AppFreeMovies.scss";

const AppFreeMovies = () => {
  const dispatch = useDispatch();

  const freeToWatchMovies = useSelector(
    (state) => state.movies.freeToWatchMovies
  );

  useEffect(() => {
    dispatch(fetchFreeToWatchMovies({ pageNumber: 12 }));
  }, []);

  const renderMovies = (arr) => {
    const movies = arr.map((item) => {
      return <AppMovieTemplate item={item} key={item.id} />;
    });
    return movies;
  };

  return (
    <section className="free_movies">
      <div className="container">
        <div className="whats_popular">
          <div className="whats_popular__label">Free to watch</div>
          <div className="whats_popular__navbar">
            <button className="btn active-btn">Movies</button>
            <button className="btn">TV</button>
          </div>
        </div>
        <div className="movies-list">{renderMovies(freeToWatchMovies)}</div>
      </div>
    </section>
  );
};

export default AppFreeMovies;
