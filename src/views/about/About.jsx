import { Row, Col, Container, Image, Card } from "react-bootstrap";
import banner from "../../assets/images/environment-banner.jpg";
import pic23 from "../../assets/images/23.jpg";
import "./About.css";
import Header from "../../common/header/Header";
import { Person, Intersect, People, Cone, Tree } from "react-bootstrap-icons";
const About = () => {
  const titles = ["Diversity & Inclusion", "Compliance & Ethics", "Leadership"];
  const icons = [
    <Person color="#0b6e4f" size={40} />,
    <Intersect color="#0b6e4f" size={40} />,
    <People color="#0b6e4f" size={40} />,
    <Cone color="#0b6e4f" size={40} />,
    <Tree color="#0b6e4f" size={40} />,
    <Tree color="#0b6e4f" size={40} />,
  ];
  const coreValues = [
    "Our People First",
    "Inclusion & Diversity",
    "Customers",
    "Safety",
    "Environment",
    "Integrity",
  ];
  const imgs = [pic23, pic23, pic23];
  const text = [
    "Our commitment to diversity is evident in our conscious efforts to make sure everyone feels seen, heard and valued.",
    "We take strict measures to ensure we're in full compliance with legal requirements while exhibiting the highest ethical standards.",
    "Our leadership serves with a focus on maximizing resource value while minimizing environmental impact so that both our economy and environment can thrive.",
  ];
  return (
    <>
      <Header />
      <figure className="w-100">
        <Card.Img variant="top" src={banner} />
      </figure>
      <Container className="py-5">
        <h2 className="heading3 mb-5 dark-text text-center fw-semibold">Our Core Values</h2>
        <Row xs={1} md={2} lg={3} className=" align-items-stretch">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Col className="mx-auto d-flex align-items-stretch">
              <Card >
                <Card.Img variant="top" src={imgs[idx]} className="w-100" />
                <Card.Body>
                  <Card.Title className=" light-text fs-6">{titles[idx]}</Card.Title>
                  <Card.Text className="green-text">{text[idx]}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
            </Container>
        <div className="py-5 my-4 white-bg">
          <Container >
            <Row className=" align-items-center flex-column-reverse flex-lg-row">           
          <Col lg={5} >
            <h2 className="green-text fs-1 mt-lg-0 mb-lg-3 my-4 text-center text-lg-start">Going Above and Beyond</h2>
            <p className="light-text text-center text-lg-start">
              For us, good enough simply isn’t good enough. It’s why every day
              each of our 50,000+ employees goes beyond what’s expected to find
              what’s possible. Because to us, it’s not just collection, it’s
              waste management.
            </p>
          </Col>
          <Col lg={7}>
            <Image src={banner} className="w-100 shadow-lg" />
          </Col>
          </Row>
          </Container>
        </div>
        <Container>
        <Row xs={1} md={2} lg={3} className="py-5">
          {Array.from({ length: 6 }).map((_, idx) => (
            <Col className="text-center">
              <Card
                className="p-4 p-sm-3 p-lg-2 d-flex flex-row justify-content-between align-items-center"
              >
                <div>{icons[idx]}</div>
                <Card.Body className="p-lg-1">
                  <Card.Title style={{ fontSize: "1.5rem", color: "#0b6e4f" }}>
                    {coreValues[idx]}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default About;
