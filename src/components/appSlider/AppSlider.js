import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./AppSlider.scss";
import Carousel from "react-bootstrap/Carousel";
import movie from "../../resources/icons8-picture.svg";

const AppSlider = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector(
    (state) => state.movies.popularMovies.movie_list
  );

  const clientAddress = useSelector((state) => state.movies.clientAddress);

  useEffect(() => {}, [popularMovies]);

  function randomSlide(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const renderSlide = (arr) => {
    const slideArr = arr.map((movie) => {
      return (
        <Carousel.Item interval={2000} key={movie.id}>
          <a href={clientAddress + "/movie/" + movie.id}>
            <h2
              style={{
                position: "absolute",
                color: "white",
                fontSize: "60px",
                top: "500px",
                right: "50px",
              }}
            >
              {movie.title}
            </h2>
            <img
              src={`https://image.tmdb.org/t/p/w1920_and_h1080_face/${movie.backdropPath}`}
              alt={`slide ${movie.title}`}
              text="First slide"
            />
          </a>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      );
    });

    return slideArr;
  };

  if (popularMovies.length !== 0) {
    return (
      <section className="app_slider">
        <Carousel className="movies_carousel">
          {renderSlide(popularMovies)}
        </Carousel>
      </section>
    );
  }
};

export default AppSlider;
