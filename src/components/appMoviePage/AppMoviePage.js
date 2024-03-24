import { useParams, Link } from "react-router-dom";

import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAddMovieToFavorite,
  fetchCheckMovieInFavorite,
  fetchFavoriteMovies,
} from "../appSearchedItemsByName/moviesSlice";
import ReactPlayer from "react-player";

import { fetchMovieById } from "../appSearchedItemsByName/moviesSlice";

import favorite from "../../resources/movie_nav_bar/icons8-favorite-25.png";
import "./AppMoviePage.scss";

const AppMoviePage = () => {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.movieById);
  // const favoritesMovies = useSelector((state) => state.movies.favoritesMovies);
  let isMovieInFavorite = useSelector(
    (state) => state.movies.isMovieInFavorite
  );
  const params = useParams();
  const [trailerSwitcher, setTrailerSwitcher] = useState(false);

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    dispatch(fetchMovieById(params.id));
  }, [isMovieInFavorite, isFavorite]);

  if (movie.id && localStorage.getItem("jwt")) {
    dispatch(
      fetchCheckMovieInFavorite({
        userId: localStorage.getItem("id"),
        movieId: movie.id,
      })
    );
  }

  // let isAlreadyInFavorite = null;

  // if (favoritesMovies.length !== 0) {
  //   const idsFavoriteMovies = new Set(
  //     favoritesMovies.map((movie) => {
  //       return movie.id;
  //     })
  //   );

  //   const idsFavoriteMovies2 = new Set(
  //     favoritesMovies.map((movie) => {
  //       return movie.id;
  //     })
  //   );

  //   idsFavoriteMovies.add(+params.id);

  //   console.log(idsFavoriteMovies);
  //   console.log(idsFavoriteMovies2);

  //   isAlreadyInFavorite = idsFavoriteMovies.size === idsFavoriteMovies2.size;
  // }

  // console.log(isAlreadyInFavorite);

  if (movie.id) {
    let genresString = " ";

    for (let i = 0; i < movie.genres.length; i++) {
      genresString += movie.genres[i].name;
      if (i !== movie.genres.length - 1) {
        genresString += ", ";
      }
    }

    return (
      <section className="movie_page">
        <div
          className="backdrop"
          style={{
            background: `url(https://image.tmdb.org/t/p/w1920_and_h1080_face${movie.backdropPath}) center no-repeat`,
          }}
        >
          <div className="mask">
            <div className="container">
              <div className="poster">
                <img
                  src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                  alt=""
                />
              </div>
              <div className="descr">
                <h2 className="title">
                  {movie.originalTitle} ({movie.release_date.slice(0, 4)})
                </h2>
                <p className="genres">
                  {movie.release_date.slice(0, 10) + ", " + genresString}
                </p>
                <div className="nav_bar">
                  <div className="movie_btn">
                    <span className="like"></span>
                  </div>
                  <div
                    style={{
                      display: isMovieInFavorite ? "flex" : "none",
                      justifyContent: "center",
                    }}
                    className="movie_btn"
                    onClick={() => {
                      dispatch(
                        fetchAddMovieToFavorite({
                          userId: localStorage.getItem("id"),
                          movieId: movie.id,
                        })
                      );
                      dispatch(
                        fetchCheckMovieInFavorite({
                          userId: localStorage.getItem("id"),
                          movieId: movie.id,
                        })
                      );
                      setIsFavorite(!isFavorite);
                      // isMovieInFavorite = false;
                    }}
                  >
                    <span className="favorite-active"></span>
                  </div>
                  <div
                    style={{
                      display: isMovieInFavorite ? "none" : "flex",
                      justifyContent: "center",
                    }}
                    className="movie_btn"
                    onClick={() => {
                      dispatch(
                        fetchAddMovieToFavorite({
                          userId: localStorage.getItem("id"),
                          movieId: movie.id,
                        })
                      );
                      // dispatch(fetchFavoriteMovies(localStorage.getItem("id")));
                      dispatch(
                        fetchCheckMovieInFavorite({
                          userId: localStorage.getItem("id"),
                          movieId: movie.id,
                        })
                      );
                      setIsFavorite(!isFavorite);
                      // isMovieInFavorite = true;
                    }}
                  >
                    <span className="favorite"></span>
                  </div>
                  <div className="movie_btn">
                    <span className="bookmarks"></span>
                  </div>
                  <div className="movie_btn">
                    <span className="watchlist"></span>
                  </div>
                  <div
                    href="#"
                    className="play_btn"
                    style={{
                      display: movie.trailer ? "inline-flex" : "none",
                    }}
                  >
                    <span
                      className="play"
                      onClick={() => {
                        setTrailerSwitcher(!trailerSwitcher);
                        document.body.style.overflow = "hidden";
                      }}
                    ></span>
                    Play Trailer
                  </div>
                </div>
                <div className="overview">
                  <span>Overview</span>
                  <br />
                  {movie.overview}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div
            className="youtube"
            style={{ display: trailerSwitcher ? "flex" : "none" }}
            onClick={() => setTrailerSwitcher(!trailerSwitcher)}
          >
            <iframe
              id="ytplayer"
              title="example"
              type="text/html"
              width="800px"
              height="480px"
              src={
                trailerSwitcher
                  ? `http://www.youtube.com/embed/${movie.trailer}?autoplay=1`
                  : ""
              }
              frameBorder="0"
              allowFullScreen={true}
              // mozallowfullscreen="true"
              // msallowfullscreen="true"
              // oallowfullscreen="true"
              // webkitallowfullscreen="true"
              // allow="fullscreen"
            />
          </div>
        </div>

        <div className="container">
          <section
            className="movie-player"
            // style={{ display: !movie.video ? "none" : "block" }}
          >
            <ReactPlayer
              // style={{ display: !movie.video ? "none" : "block" }}
              width="1280px"
              height="auto"
              autoPlay={true}
              controls={true}
              url={`http://localhost:8080/photos/${
                movie.video ? movie.video : "NoWayUp(2024).mp4"
              }`}
            />
          </section>
        </div>
      </section>
    );
  }
};

export default AppMoviePage;
