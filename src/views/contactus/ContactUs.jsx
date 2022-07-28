import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import { appendErrors, useForm, Controller, useWatch } from "react-hook-form";
// import "bootstrap/dist/css/bootstrap.min.css";
const ContactUs = () => {

    const { control, register, watch, handleSubmit,
        formState: { errors, touchedFields, dirtyFields },
    } = useForm();


    const onSubmit = (data) => {

        console.log("data", data);
        //API request


    }

    return (
        <div className='w-50 mx-auto border py-3 px-3'>
            <h1 >Contact Us</h1>
            <Form onSubmit={handleSubmit(onSubmit)} className='py-3'>

                <Row className="mb-3">
                    <Form.Group as={Col} className='pt-3' controlId="formGridName">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" name='email' placeholder="Enter email" {...register('email', { required: true, pattern: /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/ })} />

                        {(errors.email && errors.email.type) === 'required' &&
                            <p className="text-danger">Email is required</p>}
                        {((errors.email && errors.email.type) === 'pattern') &&
                            <p className="text-danger">Make sure your email is correct. Ex. example@name.com</p>}
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridName" className='pt-3'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name"  {...register('name', { required: true })} />
                        {((errors.name && errors.name.type === 'required')) &&
                            <p className="text-danger">Name is required</p>}
                    </Form.Group>
                </Row>




                <Form.Group as={Col} controlId="formGridPhoneNumber" className='pt-3'>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Phone Number" {...register('phoneNumber', { required: true, pattern: /^\+[1-9]{1}[0-9]{3,14}$/ })} />
                    {(errors.phoneNumber && errors.phoneNumber.type === 'required') &&
                        <p className="text-danger">Phone is required</p>}
                    {(errors.phoneNumber && errors.phoneNumber.type === 'pattern') &&
                        <p className="text-danger">Make sure your Number is correct. Ex. +1200536248 </p>}

                </Form.Group>

                <Form.Group as={Col} controlId="formGridRating" className='pt-3'>
                    <Form.Label>Rate our app</Form.Label>
                    <Form.Control type="number" placeholder="Pick a number from 1 to 10 to rate your app experience" {...register('rating', { required: true, pattern: /[1-9]|10/i, min: 1, max: 10 })} />
                    {(errors.rating && errors.rating.type === 'required') &&
                        <p className="text-danger">Rating is required</p>}
                    {(errors.rating && errors.rating.type === 'pattern') &&
                        <p className="text-danger">Rating out of range please select rating from 1 to 10</p>}
                    {(errors.rating && (errors.rating.type === 'min' || errors.rating.type === 'max')) &&
                        <p className="text-danger">Rating out of range please select rating from 1 to 10</p>}

                </Form.Group>



                <Form.Group className="mb-3 pt-3" controlId="formGridFormText" >
                    <Form.Label>How can we help you?</Form.Label>
                    <Form.Control as="textarea" placeholder="Please insert your message" {...register('formText', { required: true })} />
                    {(errors.formText && errors.formText.type === 'required') &&
                        <p className="text-danger">Text is required</p>}
                </Form.Group>

                <Button variant="primary" type="submit" className='mt-3 d-block mx-auto' style={{ backgroundColor: "#628B48", border: "#628B48" }} >
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default ContactUs;