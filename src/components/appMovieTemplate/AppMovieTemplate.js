import "./AppMovieTemplate.scss";
import play from "../../resources/icons8-play-50.png";
import movie from "../../resources/icons8-picture.svg";
import movieIcon from "../../resources/icons8-movie-30.png";
import youtubeIcon from "../../resources/icons8-youtube.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAddMovieToFavorite,
  fetchCheckMovieInFavorite,
  fetchFavoriteMovies,
} from "../appSearchedItemsByName/moviesSlice";
import { useHttp } from "../../hooks/http.hook";
import { useEffect, useState } from "react";

const AppMovieTemplate = ({ item, addClass }) => {
  const dispatch = useDispatch();
  const { request } = useHttp();

  const [active, setActive] = useState(true);
  const favoritesMovies = useSelector((state) => state.movies.favoritesMovies);

  const clientAddress = useSelector((state) => state.movies.clientAddress);

  // let isMovieInFavorite = useSelector(
  //   (state) => state.movies.isMovieInFavorite
  // );

  let genresString = " ";

  for (let i = 0; i < item.genres.length; i++) {
    genresString += item.genres[i].name;
    if (i !== item.genres.length - 1) {
      genresString += ", ";
    }
  }

  const [isMovieInFavorite, setIsMovieInFavorite] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      request(
        "http://localhost:8080" +
          `/id/${localStorage.getItem("id")}/check_movie_in_favorite/movie_id/${
            item.id
          }`,
        "GET",
        null,
        {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        }
      )
        .then((res) => {
          setIsMovieInFavorite(res);
        })
        .catch(console.log);
    }
  }, [item]);

  return (
    <div
      className={`movie ${addClass}`}
      key={item.id}
      style={{ display: active ? "flex" : "none" }}
    >
      <a href={clientAddress + "/movie/" + item.id}>
        <span
          className="movie__icon"
          style={{ display: item.video ? "block" : "none" }}
        >
          <img src={movieIcon} alt="movieIcon" />
        </span>

        <span
          className="movie__icon_youtube"
          style={{ display: item.trailer ? "block" : "none" }}
        >
          <img src={youtubeIcon} alt="youtubeIcon" />
        </span>
        <img
          src={
            item.poster_path
              ? `https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`
              : movie
          }
          alt="movie"
          className={item.poster_path ? "movie__img" : "plug"}
        />
        <span className="movie__mask">
          <img src={play} alt="play" />
        </span>
      </a>
      <div className="movie__name">
        <p>{item.title ? item.title : item.name}</p>
        <span
          onClick={() => {
            if (localStorage.getItem("jwt")) {
              dispatch(
                fetchAddMovieToFavorite({
                  userId: localStorage.getItem("id"),
                  movieId: item.id,
                })
              );
              setIsMovieInFavorite(!isMovieInFavorite);
            }
          }}
          className="favorite__add"
          style={{ display: isMovieInFavorite ? "none" : "flex" }}
        ></span>
        <span
          onClick={() => {
            if (localStorage.getItem("jwt")) {
              dispatch(
                fetchAddMovieToFavorite({
                  userId: localStorage.getItem("id"),
                  movieId: item.id,
                })
              );
              setIsMovieInFavorite(!isMovieInFavorite);
              if (
                window.location.href ===
                `http://localhost:3000/user/${localStorage.getItem("id")}`
              ) {
                setActive(!active);
              }
            }
          }}
          className="favorite__remove"
          style={{ display: isMovieInFavorite ? "flex" : "none" }}
        ></span>
      </div>
      <div className="movie__genres">
        {item.release_date ? item.release_date.slice(0, 10) : ""}
        <br></br>
        {genresString}
      </div>
      {/* <div className="movie__release_date">
            {item.release_date ? item.release_date : item.first_air_date}
          </div> */}
    </div>
  );
};

export default AppMovieTemplate;
