import React from "react";
import personal from "../../../assets/images/per.jpg";
import organizational from "../../../assets/images/org.jpg";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './section.css'

const Section = () => {
  return (<>
    <Container className="pt-5">
      <Row className="py-3 py-lg-5">
        <Col className="py-3 py-lg-5">
          <img
            className="d-block w-100 rounded"
            src={personal}
            alt="personal"
          />
        </Col>
        <Col className="col-12 col-lg-6 py-3 py-lg-5 justify-content-center align-items-center flex-column d-flex">
          <h2 className="text-center green-text">
            Invest with your trash ,make profit and protect the environment{" "}
          </h2>
          <Button
            variant="primary"
            className="home-btn mt-5 px-4 py-3 shadow-none opacity-100"
            as={Link}
            to='/register'
          >
            Sign Up Now
          </Button>
        </Col>
      </Row>
      </Container>
      <div className=" mb-2 white-bg">
      <Container>
      <Row className="py-3 py-lg-5 flex-column-reverse flex-lg-row">
        <Col className="col-12 col-lg-6 py-3 py-lg-5 justify-content-center align-items-center flex-column d-flex">
          <h2 className="text-center green-text">
            Save your organization the trouble of wasting time,money and effort
          </h2>
          <Button
            variant="primary"
            className="home-btn mt-5 px-4 py-3 shadow-none opacity-100"
            as={Link}
            to='/register'
          >
            Sign Up Now
          </Button>
        </Col>
        <Col className="py-3 py-lg-5">
          <img
            className="d-block w-100 rounded"
            src={organizational}
            alt="organizational"
          />
        </Col>
      </Row>
    </Container>
      </div>
    </>
  );
};

export default Section;
