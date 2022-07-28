import React from "react";
import Carousel from "react-bootstrap/Carousel";
import first from "../../../assets/images/18.jpg";
import second from "../../../assets/images/23.jpg";
import third from "../../../assets/images/24.jpg";

function Slider() {
  return (
    <div>
      <Carousel variant="white">
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh" }}
            src={first}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Recycling Our Past</h5>
            <p>
              Our landmark investment will help power a renewable energy
              revolution.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh" }}
            src={second}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Get More With CSC</h5>
            <p>
              Request services, view pickup schedules and more ,all in one
              place,with a CSC account.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh" }}
            src={third}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5> Choose CSC</h5>
            <p>Take care of business, we'll take care of the waste.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
