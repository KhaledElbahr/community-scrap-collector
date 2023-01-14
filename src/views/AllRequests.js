import React, { useEffect, useState } from "react";
import { Card, Table, Container, Row, Col } from "react-bootstrap";

import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";

function AllRequests() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [req, setRequests] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getusersData();
  }, []);
  useEffect(() => {
    getRequestsData();
  }, [users]);

  const getusersData = async () => {
    let { data } = await axios.get("https://server-csc.herokuapp.com/users");
    setUsers(data);
  };

  const getRequestsData = () => {
    users.map((user) => {
      if (user.requests != null) {
        user.requests.map((request) => {
          req.push(request);
        });
      }
    });
  };

  return (
    <>
      <Container fluid>
        {(state.has_loged.type == "individual" ||
          state.has_loged.type == "org") && (
          <Row>
            <Col md="12">
              <Card className="strpied-tabled-with-hover">
                <Card.Header>
                  <Card.Title as="h4">All requests</Card.Title>
                  <p className="card-category">check your requests data</p>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <Table className="table-hover table-striped">
                    <thead>
                      <tr>
                        <th className="border-0">Admin ID</th>
                        <th className="border-0">Request ID</th>
                        <th className="border-0">Request Date</th>
                        <th className="border-0">Time Slot</th>
                        <th className="border-0">Request Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      {state.has_loged.requests.map((req, i) => {
                        return (
                          <>
                            <tr>
                              <td> {req.admin_Id}</td>
                              <td> {req.req_Id}</td>
                              <td> {req.req_date}</td>
                              <td> {req.time_slot}</td>
                              <td> {req.status}</td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
        {state.has_loged.type == "admin" && (
          <Row>
            <Col md="12">
              <Card className="strpied-tabled-with-hover">
                <Card.Header>
                  <Card.Title as="h4">All requests</Card.Title>
                  <p className="card-category">check your requests data</p>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <Table className="table-hover table-striped">
                    <thead>
                      <tr>
                        <th className="border-0">Request ID</th>
                        <th className="border-0">Request Date</th>
                        <th className="border-0">Time Slot</th>
                        <th className="border-0">Request Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      {req.map((req, i) => {
                        return (
                          <>
                            <tr>
                              <td> {req.req_Id}</td>
                              <td> {req.req_date}</td>
                              <td> {req.time_slot}</td>
                              <td> {req.status}</td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
        {state.has_loged.type == "super_admin" && (
          <Row>
            <Col md="12">
              <Card className="strpied-tabled-with-hover">
                <Card.Header>
                  <Card.Title as="h4">All requests</Card.Title>
                  <p className="card-category">check your requests data</p>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <Table className="table-hover table-striped">
                    <thead>
                      <tr>
                        <th className="border-0">Admin ID</th>
                        <th className="border-0">Request ID</th>
                        <th className="border-0">Request Date</th>
                        <th className="border-0">Time Slot</th>
                        <th className="border-0">Request Status</th>
                        <th className="border-0">Quantity</th>
                      </tr>
                    </thead>

                    <tbody>
                      {req.map((req, i) => {
                        return (
                          <>
                            <tr>
                              <td> {req.admin_Id}</td>
                              <td> {req.req_Id}</td>
                              <td> {req.req_date}</td>
                              <td> {req.time_slot}</td>
                              <td> {req.status}</td>
                              <td> {req.quantity}</td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
}

export default AllRequests;
