import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { handleHasLoged } from "../../redux/action";
import Toast from "react-bootstrap/Toast";
import Header from "../../common/header/Header";

import axios from "axios";

export default function Login() {
  const [users, setUsers] = useState([]);
  const getUsersData = async () => {
    let { data } = await axios.get("https://server-csc.herokuapp.com/users");
    setUsers(data);
    console.log(data,"dataaaa");
  };

  const [failedlogIn, setFailedlogIn] = useState(false);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (details) => {
    console.log(details);
    users.filter((user) => {
      if (details.email === user.email && details.password === user.password) {
        dispatch(handleHasLoged(user));
        navigate("/admin/dashboard");
      } else {
        setFailedlogIn(true);
        reset(user.data);
      }
    });
  };
  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <>
    <Header />
      {failedlogIn && (
        <Toast>
          <strong className="me-auto">Bootstrap</strong>

          <button
            type="button"
            className="btn-close ms-auto d-block"
            aria-label="Close"
            data-dismiss="toast"
            onClick={() => setFailedlogIn(false)}
          ></button>
          <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
      )}
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="register rounded mx-auto py-md-4 px-md-5 p-2 my-5"
      >
      <h2 className="text-center my-2 dark-text">Login</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email :</Form.Label>
          <Form.Control
            style={{ boxShadow: "none" }}
            type="text"
            name="email"
            placeholder="Enter email"
            {...register("email", {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            })}
          />

          {(errors.email && errors.email.type) === "required" && (
            <p className="text-danger">user email is required .!</p>
          )}
          {(errors.email && errors.email.type) === "pattern" && (
            <p className="text-danger">please enter a valid pattern .!</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password :</Form.Label>
          <Form.Control
            style={{ boxShadow: "none" }}
            type="password"
            name="password"
            placeholder="Password"
            {...register("password", {
              required: true,
              pattern:
                /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
            })}
          />
          {(errors.password && errors.password.type) === "required" && (
            <p className="text-danger">user password is required .!</p>
          )}
          {(errors.password && errors.password.type) === "pattern" && (
            <p className="text-danger">please enter a valid pattern .!</p>
          )}
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="my-3 d-block mx-auto home-btn"
        >
          Login
        </Button>
        <p style={{ color: "#818181" }} className="my-2 text-center">
          Don't have an account? <Link to='/register'>Register</Link>
        </p>
      </Form>
    </>
  );
}
