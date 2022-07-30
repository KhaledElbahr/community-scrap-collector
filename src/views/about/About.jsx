import { Row, Col, Container, Button, Image, Card, } from "react-bootstrap";
import banner from '../../assets/images/environment-banner.jpg';
import pplFirst from '../../assets/images/people-first-person-icon.svg';
import inclusion from '../../assets/images/inclusion-diversity-venndiagram-icon.svg';
import tree from '../../assets/images/environment-trees-icon.svg';
import pic23 from '../../assets/images/23.jpg';
import pic24 from '../../assets/images/24.jpg';
import pic18 from '../../assets/images/18.jpg';
import './About.css';
import { Person, Intersect, People, Cone, Tree, } from 'react-bootstrap-icons';
const About = () => {
    const titles = ['Diversity & Inclusion', 'Compliance & Ethics', 'Leadership'];
    const icons = [<Person color="#0b6e4f" size={96} />, <Intersect color="#0b6e4f" size={96} />, <People color="#0b6e4f" size={96} />, <Cone color="#0b6e4f" size={96} />, <Tree color="#0b6e4f" size={96} />, <Tree color="#0b6e4f" size={96} />];
    const coreValues = ['Our People First', 'Inclusion & Diversity', 'Customers', 'Safety', 'Environment', 'Integrity']
    const imgs = [pic23, pic23, pic23];
    const text = ['Our commitment to diversity is evident in our conscious efforts to make sure everyone feels seen, heard and valued.',
        'We take strict measures to ensure we\'re in full compliance with legal requirements while exhibiting the highest ethical standards.', 'Our leadership serves with a focus on maximizing resource value while minimizing environmental impact so that both our economy and environment can thrive.'];
    return (
        <>
            <Card className='mb-5'>
                <Card.Img variant="top" src={banner} />
            </Card>
            <Container className='py-5'>
                <h3 className='heading3 mb-5'>Our Core Values</h3>
                <Row xs={1} md={3} className="g-4 mb-5" >

                    {Array.from({ length: 3 }).map((_, idx) => (
                        <Col >
                            <Card >
                                <Card.Img variant="top" src={imgs[idx]} className='' />
                                <Card.Body >
                                    <Card.Title>{titles[idx]}</Card.Title>
                                    <Card.Text>
                                        {text[idx]}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Row className='mb-5'>
                    <Col style={{ backgroundColor: '#0b6e4f' }}>



                        <h2 style={{ color: '#fff' }}>Going Above and Beyond</h2>
                        <p style={{ color: '#fff' }}>
                            For us, good enough simply isn’t good enough. It’s why every day each of our 50,000+ employees goes beyond what’s expected to find what’s possible. Because to us, it’s not just collection, it’s waste management.
                        </p>


                    </Col>
                    <Col>

                        <Image src={banner} className='w-100' />

                    </Col>
                </Row>
                <Row xs={1} md={3} className="g-4">
                    {Array.from({ length: 6 }).map((_, idx) => (
                        <Col >
                            <Card style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                {/* <Card.Img variant="top" src={icons[idx]} className='' /> */}
                                <div>{icons[idx]}</div>
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '1.5rem', color: '#0b6e4f' }}>{coreValues[idx]}</Card.Title>

                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}
export default About;

