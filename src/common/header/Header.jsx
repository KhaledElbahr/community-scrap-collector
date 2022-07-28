import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/esm/Button';
import './Header.css';
export default function Header() {
  return (
    <>
    {['md'].map((expand) => (
      <Navbar key={expand} expand={expand} className="mb-3 green-bg" >
        <Container >
          <Navbar.Brand href="#" className='white-text fw-semibold' >LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='white-bg'   />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            
          >
            <Offcanvas.Header closeButton className='green-bg'>
              <Offcanvas.Title className='white-text fw-semibold' id={`offcanvasNavbarLabel-expand-${expand}`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='green-bg'>
              <Nav className=" justify-content-md-between align-items-md-center flex-grow-1 ps-md-5">
                <div className=' d-flex flex-column flex-md-row justify-content-center ps-md-5'>
                <Nav.Link href="#action1" className='white-text fw-semibold'>Home</Nav.Link>
                <Nav.Link href="#action2" className='white-text fw-semibold'>About</Nav.Link>
                <Nav.Link href="#action7" className='white-text fw-semibold'>Contact Us</Nav.Link>
                <Nav.Link href="#action8" className='white-text fw-semibold'>Stats</Nav.Link>
                </div>
                <div className=' d-flex flex-column flex-md-row justify-content-center align-items-md-center'>
                <Button

            variant="primary"

            className="nav-btn mx-md-1 d-block my-2 my-md-0 white-bg green-text fw-semibold border-0 shadow-none"

          

          >

            Log In

          </Button>
                <Button

            variant="primary"

            className="nav-btn mx-md-1 d-block my-2 my-md-0 white-bg green-text fw-semibold border-0 shadow-none"

          

          >

            Sign Up 

          </Button>
               <div className='user-border mx-md-1 d-block my-2 my-md-0'> 
                <NavDropdown 
                  title=""
                  className='user-info '
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action4" className='white-text fw-semibold '>
                    UserName
                    <small className='d-block fw-light'>email</small>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5" className='white-text fw-semibold '>
                    settings
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5" className='white-text fw-semibold '>
                    Dashboard
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5" className='white-text fw-semibold '>
                    News
                  </NavDropdown.Item>
                </NavDropdown>
                </div>
                
                </div>
                
                
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
  </>
  )
}

