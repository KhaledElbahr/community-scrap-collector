import React from "react";
import { Card, Col, Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import "../orgDetails/OrgDetails.css";

export default function TableDetails() {
  const Per_Page = 6;
  const [currentPage, setCurrentPage] = useState(0);

  const organizationObj = [
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
    {
      id: 6,
      name: "mona",
      tel: "01223344556",
      email: "mmmmm@mmm.com",
      city: "alex",
    },
    {
      id: 7,
      name: "mona",
      tel: "01223344556",
      email: "mmmmm@mmm.com",
      city: "alex",
    },
    {
      id: 8,
      name: "mona",
      tel: "01223344556",
      email: "mmmmm@mmm.com",
      city: "alex",
    },
    {
      id: 9,
      name: "mona",
      tel: "01223344556",
      email: "mmmmm@mmm.com",
      city: "alex",
    },
    {
      id: 10,
      name: "mona",
      tel: "01223344556",
      email: "mmmmm@mmm.com",
      city: "alex",
    },
    {
      id: 11,
      name: "ali",
      tel: "01223344556",
      email: "mmmmm@mmm.com",
      city: "alex",
    },
    {
      id: 12,
      name: "ahmed",
      tel: "01223344556",
      email: "mmmmm@mmm.com",
      city: "cairo",
    },
    {
      id: 13,
      name: "sama",
      tel: "01223344556",
      email: "mmmmm@mmm.com",
      city: "siwa",
    },
    {
      id: 14,
      name: "aya",
      tel: "01223344556",
      email: "mmmmm@mmm.com",
      city: "qena",
    },
    {
      id: 15,
      name: "mona",
      tel: "01223344556",
      email: "mmmmm@mmm.com",
      city: "alex",
    },
    {
      id: 16,
      name: "mona",
      tel: "01223344556",
      email: "mmmmm@mmm.com",
      city: "alex",
    },
    {
      id: 17,
      name: "mona",
      tel: "01223344556",
      email: "mmmmm@mmm.com",
      city: "alex",
    },
    {
      id: 18,
      name: "mona",
      tel: "01223344556",
      email: "mmmmm@mmm.com",
      city: "alex",
    },
    {
      id: 19,
      name: "mona",
      tel: "01223344556",
      email: "mmmmm@mmm.com",
      city: "alex",
    },
    {
      id: 20,
      name: "mona",
      tel: "01223344556",
      email: "mmmmm@mmm.com",
      city: "alex",
    },
  ];

  const handlePageClick = ({ selected: selectedPage }) => {
    console.log("selected page ", selectedPage);
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * Per_Page;
  const currentPageData = organizationObj.slice(offset, offset + Per_Page);
  const totalPages = Math.ceil(organizationObj.length) / Per_Page;

  return (
    <div className="container-fluid">
      <div className="row">
        <Col className="p-4 " md="12">
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
                  {currentPageData.map((organization, index) => {
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
        </Col>
        <ReactPaginate
          previousLabel={"<<"}
          nextLabel={">> "}
          pageCount={totalPages}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination_link"}
          nextLinkClassName={"pagination_link"}
          disabledClassName={"pagination_link_disabled"}
          activeClassName={"pagination_link_active"}
        />
      </div>
    </div>
  );
}
