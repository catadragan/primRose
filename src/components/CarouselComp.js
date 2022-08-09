import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./CarouselComp.css"
import Carousel1 from '../images/carousel1.jpg'
import Carousel2 from '../images/carousel2.jpg'
import Carousel3 from '../images/carousel3.jpg'

const CarouselComp = () => {
  return (
    <Carousel fade className="carousel">
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={Carousel1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Looking for the perfect bouquet?</h3>
          <p>We got you!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100 carousel-image"
          src={Carousel2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Design your own floral bouquet!</h3>
          <p>You can choose your size, color, flowers and many more.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={Carousel3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Ready-To-Go floral bouquets</h3>
          <p>
           Pre-made floral arrangements are already arranged and ready to be picked up. 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComp;