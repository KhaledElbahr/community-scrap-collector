import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import UserPic from '../../../assets/images/profile/person.jpg';
import EditIcon from '../../../assets/images/profile/icons8-edit-50.png'
import './UserInfo.css';

function UserInfo() {
  return (
    <>
        <Container className='info-container rounded p-3 position-relative'>
            <a href="#edit" className='edit position-absolute d-block p-2 rounded-circle'><img src={EditIcon} alt="edit" className='edit-img'/></a>
            <Col>
                <Row className='user-pic-container mx-auto rounded-circle p-1 my-1'>
                    <img src={UserPic} alt="user pic" className='user-pic p-0 m-0 rounded-circle'/>
                </Row>
                <Row className='user-data'>
                    <h2 className='text-center text-capitalize mt-1 mb-0 dark-text'>user name</h2>
                    <p className='text-center text-capitalize light-text my-0' >adress</p>
                    <div className='contact d-flex justify-content-center align-items-center' >
                        <a href='#2' className='mx-2 mid-text text-decoration-none'>0100000000</a>
                        <a href='#3' className='mx-2 mid-text text-decoration-none'>mmmmm@mmmm.com</a>
                    </div>
                </Row>
            </Col>
        </Container>
    </>
  )
}

export default UserInfo