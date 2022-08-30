import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./CarouselComp.css";
import Carousel1 from "../images/carousel1.jpg";
import Carousel2 from "../images/carousel2.jpg";
import Carousel3 from "../images/carousel3.jpg";

const CarouselComp = () => {
  return (
    <Carousel fade className="carousel">
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={Carousel1}
          alt="First slide"
        />
        <Carousel.Caption style={{paddingBottom: "2%"}}>
          <h3 style={{ fontFamily: "Rubik Marker Hatch", fontSize: "6rem" }}>
            Looking for the
          </h3>
          <h3 style={{ fontFamily: "Rubik Marker Hatch", fontSize: "6rem" }}>
            perfect bouquet?
          </h3>
          <p style={{ fontFamily: "Dancing Script", fontSize: "4rem" }}>
            We got you!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={Carousel2}
          alt="Second slide"
        />

        <Carousel.Caption style={{ paddingBottom: "2%" }}>
          <h3 style={{ fontFamily: "Rubik Marker Hatch", fontSize: "6rem" }}>
            Design your own{" "}
          </h3>
          <h3 style={{ fontFamily: "Rubik Marker Hatch", fontSize: "6rem" }}>
            floral bouquet!
          </h3>
          <p style={{ fontFamily: "Dancing Script", fontSize: "3rem" }}>
            You can choose your size, color, flowers and many more.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={Carousel3}
          alt="Third slide"
        />

        <Carousel.Caption style={{ paddingBottom: "2%" }}>
          <h3 style={{ fontFamily: "Rubik Marker Hatch", fontSize: "6rem" }}>
            Ready-To-Go
          </h3>
          <h3 style={{ fontFamily: "Rubik Marker Hatch", fontSize: "6rem" }}>
           
            floral bouquets
          </h3>
          <p style={{ fontFamily: "Dancing Script", fontSize: "2.5rem" }}>
            Pre-made floral arrangements are already arranged and ready to be
            picked up.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselComp;