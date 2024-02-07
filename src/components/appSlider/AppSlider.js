import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchImagesMovieById } from "../appSearchedItemsByName/moviesSlice";

import "./AppSlider.scss";
import Carousel from "react-bootstrap/Carousel";
import slide_1 from "../../resources/sliderImages/slide_1.jpg";
import slide_2 from "../../resources/sliderImages/slide_2.jpg";
import slide_3 from "../../resources/sliderImages/slide_3.jpg";
import movie from "../../resources/icons8-picture.svg";

const AppSlider = () => {
  const dispatch = useDispatch();

  const slide1 = useSelector((state) => state.movies.imagesOfMovie[0]);
  const slide2 = useSelector((state) => state.movies.imagesOfMovie[1]);
  const slide3 = useSelector((state) => state.movies.imagesOfMovie[2]);

  console.log(slide1);
  // const slide2 = useSelector((state) => state.movies.popularMovies.results[1]);
  // const slide3 = useSelector((state) => state.movies.popularMovies.results[2]);
  //
  // const slide4 = useSelector((state) => state.movies.imagesOfMovie[3]);
  // const slide5 = useSelector((state) => state.movies.popularMovies.results[4]);
  // const slide6 = useSelector((state) => state.movies.popularMovies.results[5]);
  //
  // const slide7 = useSelector((state) => state.movies.imagesOfMovie[3]);
  // const slide8 = useSelector((state) => state.movies.popularMovies.results[7]);
  // const slide9 = useSelector((state) => state.movies.popularMovies.results[8]);

  useEffect(() => {
    dispatch(fetchImagesMovieById(1079944));
    dispatch(fetchImagesMovieById(672));
    dispatch(fetchImagesMovieById(12444));
  }, []);

  console.log(slide1);

  return (
    <section className="app_slider">
      <div className="container">
        <Carousel className="movies_carousel">
          <Carousel.Item interval={2000}>
            <a href="">
              <img
                src={
                  slide1
                    ? `https://image.tmdb.org/t/p/w1920_and_h1080_face/${slide1.file_path}`
                    : movie
                }
                alt="fnaf"
                text="Second slide"
                style={{ marginRight: "40px", marginLeft: "130px" }}
              />
            </a>
            {/* <a href="">
              <img
                src={
                  slide
                    ? `https://image.tmdb.org/t/p/w300_and_h450_face${slide3.poster_path}`
                    : movie
                }
                alt="fnaf"
                text="Second slide"
                style={{ marginRight: "40px" }}
              />
            </a>
            <a href="">
              <img
                src={
                  slide
                    ? `https://image.tmdb.org/t/p/w300_and_h450_face${slide.poster_path}`
                    : movie
                }
                alt="fnaf"
                text="Second slide"
                style={{ marginRight: "40px" }}
              />
            </a> */}
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <a href="">
              <img
                src={
                  slide2
                    ? `https://image.tmdb.org/t/p/w1920_and_h1080_face${slide2.file_path}`
                    : movie
                }
                alt="fnaf"
                text="Second slide"
                style={{ marginRight: "40px", marginLeft: "130px" }}
              />
            </a>
            {/* <a href="">
              <img
                src={
                  slide
                    ? `https://image.tmdb.org/t/p/w300_and_h450_face${slide5.poster_path}`
                    : movie
                }
                alt="fnaf"
                text="Second slide"
                style={{ marginRight: "40px" }}
              />
            </a>
            <a href="">
              <img
                src={
                  slide
                    ? `https://image.tmdb.org/t/p/w300_and_h450_face${slide6.poster_path}`
                    : movie
                }
                alt="fnaf"
                text="Second slide"
                style={{ marginRight: "40px" }}
              />
            </a> */}
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <a href="">
              <img
                src={
                  slide3
                    ? `https://image.tmdb.org/t/p/w1920_and_h1080_face${slide3.file_path}`
                    : movie
                }
                alt="fnaf"
                text="Second slide"
                style={{ marginRight: "40px", marginLeft: "130px" }}
              />
            </a>
            {/* <a href="">
              <img
                src={
                  slide
                    ? `https://image.tmdb.org/t/p/w300_and_h450_face${slide8.poster_path}`
                    : movie
                }
                alt="fnaf"
                text="Second slide"
                style={{ marginRight: "40px" }}
              />
            </a>
            <a href="">
              <img
                src={
                  slide
                    ? `https://image.tmdb.org/t/p/w300_and_h450_face${slide9.poster_path}`
                    : movie
                }
                alt="fnaf"
                text="Second slide"
                style={{ marginRight: "40px" }}
              />
            </a> */}
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default AppSlider;

// style={{ height: "400px" }}
