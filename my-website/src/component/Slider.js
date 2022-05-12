import React from "react";
import {Carousel} from 'react-bootstrap';

function Slider(){
    return(
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={require('../image/p1.jpg')}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={require('../image/p2.jpg')}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../image/p3.jpg')}
      alt="Third slide"
    />
  
  </Carousel.Item>
</Carousel>
    )
}

export default Slider;
