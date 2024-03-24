import { useParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavoriteMovies } from "../appSearchedItemsByName/moviesSlice";
import AppLogin from "../appLogin/AppLogin";
import AppMovieTemplate from "../appMovieTemplate/AppMovieTemplate";

import "./AppUserPageTemplate.scss";

function AppUserPageTemplate() {
  const clientAddress = useSelector((state) => state.movies.clientAddress);
  const favoriteMovies = useSelector((state) => state.movies.favoritesMovies);
  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      dispatch(fetchFavoriteMovies(params.id));
    }
  }, []);

  const renderFavoriteMovies = (arr) => {
    const movies = arr.map((item) => {
      return <AppMovieTemplate item={item} addClass={"modify"} key={item.id} />;
    });

    return movies;
  };

  if (localStorage.getItem("jwt")) {
    return (
      <div className="container">
        <section className="user_page">
          <div className="menu">
            <h2>{localStorage.getItem("username")}</h2>
          </div>
          <div className="movies">{renderFavoriteMovies(favoriteMovies)}</div>
        </section>
      </div>
    );
  }

  return <AppLogin />;
}

export default AppUserPageTemplate;
