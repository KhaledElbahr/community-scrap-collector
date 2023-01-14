import React from "react";
import ReactPaginate from "react-paginate";


// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";



function TableList() {


  const adminObj = [
    {
      id: 1,
      name: "ali",
      tel: "01223344556",
      email: "mmmmm@mmm.com",
      city: "alex",
    },
    {
      id: 2,
      name: "ahmed",
      tel: "01223344556",
      email: "mmmmm@mmm.com",
      city: "cairo",
    },
    {
      id: 3,
      name: "sama",
      tel: "01223344556",
      email: "mmmmm@mmm.com",
      city: "siwa",
    },
    {
      id: 4,
      name: "aya",
      tel: "01223344556",
      email: "mmmmm@mmm.com",
      city: "qena",
    },
    {
      id: 5,
      name: "mona",
      tel: "01223344556",
      email: "mmmmm@mmm.com",
      city: "alex",
    },
  ];

  const individualObj = [
    {
      id: 1,
      name: "ali",
      tel: "01223344556",
      email: "mmmmm@mmm.com",
      address: "alex",
      reqStatus: "pending",
    },
    {
      id: 2,
      name: "ahmed",
      tel: "01223344556",
      email: "mmmmm@mmm.com",
      city: "cairo",
      reqStatus: "done",
    },
    {
      id: 3,
      name: "sama",
      tel: "01223344556",
      email: "mmmmm@mmm.com",
      city: "siwa",
      reqStatus: "pending",
    },
    {
      id: 4,
      name: "aya",
      tel: "01223344556",
      email: "mmmmm@mmm.com",
      city: "qena",
      reqStatus: "pending",
    },
    {
      id: 5,
      name: "mona",
      tel: "01223344556",
      email: "mmmmm@mmm.com",
      city: "alex",
      reqStatus: "done",
    },
  ];

  const organizationObj = [
    {
      id: 1,
      name: "ali",
      tel: "01223344556",
      email: "mmmmm@mmm.com",
      address: "alex",
      reqStatus: "pending",
      class: "a",
      contactPerson: "kamel",
    },
    {
      id: 2,
      name: "ahmed",
      tel: "01223344556",
      email: "mmmmm@mmm.com",
      address: "alex",
      reqStatus: "done",
      class: "a",
      contactPerson: "kamel",
    },
    {
      id: 3,
      name: "sama",
      tel: "01223344556",
      email: "mmmmm@mmm.com",
      address: "alex",
      reqStatus: "pending",
      class: "a",
      contactPerson: "kamel",
    },
    {
      id: 4,
      name: "aya",
      tel: "01223344556",
      email: "mmmmm@mmm.com",
      address: "alex",
      reqStatus: "pending",
      class: "a",
      contactPerson: "kamel",
    },
    {
      id: 5,
      name: "mona",
      tel: "01223344556",
      email: "mmmmm@mmm.com",
      address: "alex",
      reqStatus: "done",
      class: "a",
      contactPerson: "kamel",
    },
  ];

 


  return (
    <>
      <Container fluid>
        <Row>
          <Col className="border  mt-5 p-3 py-4 mb-3" md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Admins</Card.Title>
                <p className="card-category">check your team data</p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Tel</th>
                      <th className="border-0">Email</th>
                      <th className="border-0">City</th>
                    </tr>
                  </thead>
                  <tbody>
                    {adminObj.map((admin, index) => {
                      return (
                        <>
                          <tr>
                            <td> {admin.id}</td>
                            <td>{admin.name}</td>
                            <td>{admin.tel}</td>
                            <td>{admin.email}</td>
                            <td>{admin.city}</td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
            <Link
             className="text-decoration-none"
             to={'/tableDetails'}
             >
            <Button
             className="d-block m-auto " 
            variant="secondary">See More</Button>{' '}
            </Link>
          </Col>

          <Col className="border  mt-5 p-3 py-5 mb-3" md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Individual</Card.Title>
                <p className="card-category">check your individuals</p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Salary</th>
                      <th className="border-0">Country</th>
                      <th className="border-0">City</th>
                      <th className="border-0">Request Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {individualObj.map((individual, index) => {
                      return (
                        <>
                          <tr>
                            <td> {individual.id}</td>
                            <td>{individual.name}</td>
                            <td>{individual.tel}</td>
                            <td>{individual.email}</td>
                            <td>{individual.city}</td>
                            <td>{individual.reqStatus}</td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
            <Link
              className="text-decoration-none"
              to={'/individualDetails'}
            >
            <Button
             className="d-block m-auto " 
            variant="secondary">See More</Button>{' '}
            </Link>
          </Col>

          <Col className="border  mt-5 p-3 py-5" md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Orgnization</Card.Title>
                <p className="card-category">check your Orgnizations</p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Tel</th>
                      <th className="border-0">Email</th>
                      <th className="border-0">Address</th>
                      <th className="border-0">Request Status</th>
                      <th className="border-0">class</th>
                      <th className="border-0">contact person</th>
                    </tr>
                  </thead>
                  <tbody>
                    {organizationObj.map((organization, index) => {
                      return (
                        <>
                          <tr>
                            <td> {organization.id}</td>
                            <td>{organization.name}</td>
                            <td>{organization.tel}</td>
                            <td>{organization.email}</td>
                            <td>{organization.address}</td>
                            <td>{organization.reqStatus}</td>
                            <td>{organization.class}</td>
                            <td>{organization.contactPerson}</td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
           <Link
           className="text-decoration-none"
           to={'/orgDetails'}
           >
           <Button
             className="d-block m-auto " 
            variant="secondary">See More</Button>{' '}
           </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
