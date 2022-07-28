import React from "react";
import personal from "../../assets/images/per.jpg";
import organizational from "../../assets/images/org.jpg";
import { Row, Col, Container, Button } from "react-bootstrap";

const Section = () => {
  return (
    <Container className="py-5">
      <Row className="py-5">
        <Col className="py-5">
          <img
            className="d-block w-100 rounded"
            src={personal}
            alt="personal"
          />
        </Col>
        <Col className="py-5 justify-content-center align-items-center flex-column d-flex">
          <h2 className="text-center  mt-5">
            Invest with your trash ,make profit and protect the environment{" "}
          </h2>
          <Button
            variant="primary"
            className="mt-5 p-3 border-0 shadow-none"
            style={{
              backgroundColor: "#08A045",
            }}
          >
            Sign Up Now
          </Button>
        </Col>
      </Row>
      <Row className="py-5">
        <Col className="py-5 justify-content-center align-items-center flex-column d-flex">
          <h2 className="text-center">
            Save your organization the trouble of wasting time,money and effort
          </h2>
          <Button
            variant="primary"
            className="mt-5 p-3 border-0 shadow-none"
            style={{
              backgroundColor: "#08A045",
            }}
          >
            Sign Up Now
          </Button>
        </Col>
        <Col className="py-5">
          <img
            className="d-block w-100 rounded"
            src={organizational}
            alt="organizational"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Section;
