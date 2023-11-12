import play from "../../resources/icons8-play-50.png";

import "./AppFreeMovies.scss";

const AppFreeMovies = () => {
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
        <div className="movies-list">
          <div className="movie">
            <a href="#">
              <img
                src="https://www.themoviedb.org/t/p/w220_and_h330_face/NNxYkU70HPurnNCSiCjYAmacwm.jpg"
                alt="movie"
                className="movie__img"
              />
              <span class="movie__mask">
                <img src={play} alt="" />
              </span>
            </a>
            <div className="movie__name">Avengers. Age of Ultron</div>
            <div className="movie__genres">2014, USA, Adventure, Fantasy</div>
          </div>

          <div className="movie">
            <a href="#">
              <img
                src="https://image.tmdb.org/t/p/w300_and_h450_face/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg"
                alt="movie"
                className="movie__img"
              />
              <span class="movie__mask">
                <img src={play} alt="" />
              </span>
            </a>
            <div className="movie__name">Avengers. Age of Ultron</div>
            <div className="movie__genres">2014, USA, Adventure, Fantasy</div>
          </div>

          <div className="movie">
            <a href="#">
              <img
                src="https://www.themoviedb.org/t/p/w220_and_h330_face/NNxYkU70HPurnNCSiCjYAmacwm.jpg"
                alt="movie"
                className="movie__img"
              />
              <span class="movie__mask">
                <img src={play} alt="" />
              </span>
            </a>
            <div className="movie__name">Avengers. Age of Ultron</div>
            <div className="movie__genres">2014, USA, Adventure, Fantasy</div>
          </div>

          <div className="movie">
            <a href="#">
              <img
                src="https://image.tmdb.org/t/p/w300_and_h450_face/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg"
                alt="movie"
                className="movie__img"
              />
              <span class="movie__mask">
                <img src={play} alt="" />
              </span>
            </a>
            <div className="movie__name">Avengers. Age of Ultron</div>
            <div className="movie__genres">2014, USA, Adventure, Fantasy</div>
          </div>

          <div className="movie">
            <a href="#">
              <img
                src="https://www.themoviedb.org/t/p/w220_and_h330_face/NNxYkU70HPurnNCSiCjYAmacwm.jpg"
                alt="movie"
                className="movie__img"
              />
              <span class="movie__mask">
                <img src={play} alt="" />
              </span>
            </a>
            <div className="movie__name">Avengers. Age of Ultron</div>
            <div className="movie__genres">2014, USA, Adventure, Fantasy</div>
          </div>

          <div className="movie">
            <a href="#">
              <img
                src="https://image.tmdb.org/t/p/w300_and_h450_face/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg"
                alt="movie"
                className="movie__img"
              />
              <span class="movie__mask">
                <img src={play} alt="" />
              </span>
            </a>
            <div className="movie__name">Avengers. Age of Ultron</div>
            <div className="movie__genres">2014, USA, Adventure, Fantasy</div>
          </div>

          <div className="movie">
            <a href="#">
              <img
                src="https://www.themoviedb.org/t/p/w220_and_h330_face/NNxYkU70HPurnNCSiCjYAmacwm.jpg"
                alt="movie"
                className="movie__img"
              />
              <span class="movie__mask">
                <img src={play} alt="" />
              </span>
            </a>
            <div className="movie__name">Avengers. Age of Ultron</div>
            <div className="movie__genres">2014, USA, Adventure, Fantasy</div>
          </div>

          <div className="movie">
            <a href="#">
              <img
                src="https://image.tmdb.org/t/p/w300_and_h450_face/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg"
                alt="movie"
                className="movie__img"
              />
              <span class="movie__mask">
                <img src={play} alt="" />
              </span>
            </a>
            <div className="movie__name">Avengers. Age of Ultron</div>
            <div className="movie__genres">2014, USA, Adventure, Fantasy</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFreeMovies;
