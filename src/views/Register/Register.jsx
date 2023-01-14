import { useState, useEffect } from "react";
import FormInput from "../../common/formInput";
import FormSelect from "../../common/formSelect";
import Checkbox from "../../common/Checkbox";
import "./Register.css";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
    phone: "",
    landline: "",
    addressConfirmImage: "",
    address: "",
    city: "",
    zone: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      pattern: `^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$`,
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      errorMessage: "Your age must be above 16 years",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
        id: 5,
        name: "confirmPassword",
        type: "password",
        placeholder: "Confirm Password",
        errorMessage: "Password doesn't match!",
        label: "Confirm Password",
        pattern: values.password,
        required: true,
    },
    {
      id: 6,
      name: "phone",
      type: "tel",
      placeholder: "Phone",
      errorMessage: "phone number should be 11 number",
      label: "Phone",
      // pattern: "",
      required: true,
    },
    {
      id: 7,
      name: "landline",
      type: "tel",
      placeholder: "Landline",
      errorMessage: "Password doesn't match!",
      label: "Landline",
      // pattern: "",
    },
    {
        id: 8,
        name: "city",
        type: "select",
        placeholder: "Select your city",
        label: "City",
        required: true, 
    },
    {
      id: 9,
      name: "zone",
      type: "select",
      placeholder: "Select your zone",
      label: "Zone",
      required: true, 
    },
    {
      id: 10,
      name: "address",
      type: "text",
      placeholder: "Address",
      errorMessage: "You should enter your current address!",
      label: "Zone",
      required: true, 
    },
  ];

  useEffect(() => {
    fetch('https://server-csc.herokuapp.com/users')
        .then(response => response.json())
        .then(data => console.log(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const onChange = (e) => {
    console.log("Input Name: ", e.target.name);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          (input.type === 'select' ? 
          <FormSelect 
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={onChange} />
          :
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
           />
          )
        ))}
        <Checkbox label="I Agree to the Privacy & Policy" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;