import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import { appendErrors, useForm, Controller, useWatch } from "react-hook-form";
import Select from "react-select";
import DatePicker from "react-multi-date-picker";
import InputIcon from "react-multi-date-picker/components/input_icon";
import transition from "react-element-popper/animations/transition";
import "react-multi-date-picker/styles/colors/green.css";
import "./Request.css";

const Request = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        control,
      } = useForm();
//   const [date, setdate] = useState(new Date());

  const onSubmit = (data) => {
    console.log("data", data);
    //API request
  };

  const time = [
    { value: "8 AM to 10 AM", label: "8 AM to 10 AM" },
    { value: "11 AM to 1 PM", label: "11 AM to 1 PM" },
    { value: "2 PM to 4 PM", label: "2 PM to 4 PM" },
    { value: "5 PM to 7 PM", label: "5 PM to 7 PM" },
    { value: "8 PM to 10 PM", label: "8 PM to 10 PM" },
  ];
  const garbageType =[
      { value: "metals", label: "metals" },
      { value: "plastic", label: "plastic" },
      { value: "papers", label: "papers" },
      { value: "organic waste", label: "organic waste" },
  ]

  return (
    <div className="container mx-auto border rounded p-3">
      <h1>Send Request</h1>
      <Form onSubmit={handleSubmit(onSubmit)} className="py-3">
        <Form.Group
          as={Col}
          controlId="formGridAvailablePhoneNumber"
          className="pt-3"
        >
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            className="shadow-none"
            type="text"
            placeholder="Enter Available Phone Number"
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
        <Form.Group
          as={Col}
          controlId="formGridCollectingTime"
          className="pt-3"
        >
          <Form.Label>Time</Form.Label>
          <Controller
            name="time"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                placeholder={<div>Choose The Most Suitable Hour</div>}
                {...field}
                options={time}
              />
            )}
          />
          {errors.time && errors.time.type === "required" && (
            <small className="text-danger">choose a suitable time </small>
          )}
        </Form.Group>

        <Form.Group
          as={Col}
          controlId="formGridCollectingDate"
          className="pt-3"
        >
          <Form.Label>Date</Form.Label>
          <Controller
            control={control}
            name="date"
            rules={{ required: true }} //optional
            render={({
              field: { onChange, name, value },
              formState: { errors }, //optional, but necessary if you want to show an error message
            }) => (
              <>
                <DatePicker
                //   value={date}
                //   onChange={setdate}
                  animations={[transition({ duration: 800, from: 35 })]}
                  render={<InputIcon />}
                  className="rmdp-prime green custom-date"
                  showOtherDays
                />
                {errors && errors.date && errors.date.type === "required" && (
                <small className="text-danger">Select a Day </small>              )}
              </>
            )}
          />
        </Form.Group>
        
        <Form.Group
          as={Col}
          controlId="formGridCollectingType"
          className="pt-3"
        >
          <Form.Label>Garbage Types</Form.Label>
          <Controller
            name="types"
            control={control}
            render={({ field }) => (
              <Select {...field} options={garbageType} isMulti />
            )}
          />
        </Form.Group>


        <Button
          variant="primary"
          type="submit"
          className="mt-3 d-block mx-auto"
          style={{ backgroundColor: "#628B48", border: "#628B48" }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Request;
