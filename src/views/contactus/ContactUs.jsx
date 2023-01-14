import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Header from "../../common/header/Header";
import "./ContactUs.css"
const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log("data", data);
    //API request
  };

  return (
    <div>
      <Header />
      <div
        className="container py-3 px-3 my-5"
      >
        <Form onSubmit={handleSubmit(onSubmit)} className="form-container border rounded mx-auto px-3 py-3">
        <h1 className=" dark-text">Contact Us</h1>
          <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} className="pt-3" controlId="formGridName">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                placeholder="Enter email"
                {...register("email", {
                  required: true,
                  pattern: /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/,
                })}
              />

              {(errors.email && errors.email.type) === "required" && (
                <p className="text-danger">Email is required</p>
              )}
              {(errors.email && errors.email.type) === "pattern" && (
                <p className="text-danger">
                  Make sure your email is correct. Ex. example@name.com
                </p>
              )}
            </Form.Group>

            <Form.Group as={Col} xs={12} md={6} controlId="formGridName" className="pt-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
              />
              {errors.name && errors.name.type === "required" && (
                <p className="text-danger">Name is required</p>
              )}
            </Form.Group>
          </Row>

          <Form.Group as={Col} controlId="formGridPhoneNumber" className="pt-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Phone Number"
              {...register("phoneNumber", {
                required: true,
                pattern: /^\+[1-9]{1}[0-9]{3,14}$/,
              })}
            />
            {errors.phoneNumber && errors.phoneNumber.type === "required" && (
              <p className="text-danger">Phone is required</p>
            )}
            {errors.phoneNumber && errors.phoneNumber.type === "pattern" && (
              <p className="text-danger">
                Make sure your Number is correct. Ex. +1200536248{" "}
              </p>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridRating" className="pt-3">
            <Form.Label>Rate our app</Form.Label>
            <Form.Control
              type="number"
              placeholder="Pick a number from 1 to 10 to rate your app experience"
              {...register("rating", {
                required: true,
                pattern: /[1-9]|10/i,
                min: 1,
                max: 10,
              })}
            />
            {errors.rating && errors.rating.type === "required" && (
              <p className="text-danger">Rating is required</p>
            )}
            {errors.rating && errors.rating.type === "pattern" && (
              <p className="text-danger">
                Rating out of range please select rating from 1 to 10
              </p>
            )}
            {errors.rating &&
              (errors.rating.type === "min" ||
                errors.rating.type === "max") && (
                <p className="text-danger">
                  Rating out of range please select rating from 1 to 10
                </p>
              )}
          </Form.Group>

          <Form.Group className="mb-3 pt-3" controlId="formGridFormText">
            <Form.Label>How can we help you?</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Please insert your message"
              {...register("formText", { required: true })}
            />
            {errors.formText && errors.formText.type === "required" && (
              <p className="text-danger">Text is required</p>
            )}
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="mt-3 d-block mx-auto home-btn"
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ContactUs;
