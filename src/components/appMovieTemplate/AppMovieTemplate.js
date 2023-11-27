import "./AppMovieTemplate.scss";
import play from "../../resources/icons8-play-50.png";
import movie from "../../resources/icons8-picture.svg";

const AppMovieTemplate = ({ item, addClass }) => {
  return (
    <div className={`movie ${addClass}`} key={item.id}>
      <a href="#">
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
      <div className="movie__name">{item.title ? item.title : item.name}</div>
      <div className="movie__genres">
        {item.release_date ? item.release_date : item.first_air_date}
        {", " + item.genre_ids[0] + ", " + item.genre_ids[1]}
        {/* {item.genre_ids
              ? ", " + item.genre_ids[0] + ", " + item.genre_ids[1]
              : ""} */}
      </div>
      {/* <div className="movie__release_date">
            {item.release_date ? item.release_date : item.first_air_date}
          </div> */}
    </div>
  );
};

export default AppMovieTemplate;
