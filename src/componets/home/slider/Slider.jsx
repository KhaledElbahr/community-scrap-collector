import React from "react";
import Carousel from "react-bootstrap/Carousel";
import first from "../../../assets/images/18.jpg";
import second from "../../../assets/images/23.jpg";
import third from "../../../assets/images/24.jpg";
import './Slider.css';

function Slider() {
  return (
    <div>
      <Carousel variant="white">
        <Carousel.Item>
          <img
            className="slider-img d-block w-100"
            src={first}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5 className="white-text">Recycling Our Past</h5>
            <p className="white-text">
              Our landmark investment will help power a renewable energy
              revolution.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slider-img d-block w-100"
            src={second}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5 className="white-text">Get More With CSC</h5>
            <p className="white-text">
              Request services, view pickup schedules and more ,all in one
              place,with a CSC account.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slider-img d-block w-100"
            src={third}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5 className="white-text"> Choose CSC</h5>
            <p className="white-text">Take care of business, we'll take care of the waste.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
