import "./AppSlider.scss";
import Carousel from "react-bootstrap/Carousel";
import slide_1 from "../../resources/sliderImages/slide_1.jpg";
import slide_2 from "../../resources/sliderImages/slide_2.jpg";
import slide_3 from "../../resources/sliderImages/slide_3.jpg";

const AppSlider = () => {
  return (
    <section className="app_slider">
      <div className="container">
        <Carousel className="movies_carousel">
          <Carousel.Item interval={2000}>
            <img
              src={slide_1}
              alt="marvel"
              text="First slide"
              // style={{ width: "1920px" }}
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              src={slide_2}
              alt="fnaf"
              text="Second slide"
              // style={{ width: "1920px" }}
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              src={slide_3}
              alt="marvel2"
              text="Third slide"
              // style={{ width: "1920px" }}
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default AppSlider;

// style={{ height: "400px" }}
