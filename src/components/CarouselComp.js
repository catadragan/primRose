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
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100 carousel-image"
          src={Carousel2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={Carousel3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComp;