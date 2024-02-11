import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import './booking.css';

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  umail: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
});

function BookingForm() {
  const { carName, carPrice } = useParams();

  const initialValues = {
    name: "",
    umail: "",
    phone: "",
    carName: carName,
    carPrice: carPrice,
    context: "defaultContext",
  };

  const handleSubmit = async (values, { resetForm }) => {
    values.password = 'dummyPassword';
    try {
      const response = await axios.post('https://backend-carsales.onrender.com/u/h', values);
      
      if (response.data.message === "Booking successful") {
        // Send SMS to the inputted phone number
        const smsResponse = await axios.post('http://localhost:3001/send-sms', {
          to: values.phone,
          body: 'Your booking was successful!'
        });
      }
      if (response.data.message === "Booking successfull") {
        toast.success('Booking successful');
        resetForm();
      } else {
        toast.success( response.data.message);
      }
    } catch (error) {
      console.error('Error uploading data:', error);
      toast.error('Error uploading data');
    }
  }

  return (
    <div className="booking-form-container">
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
         
          <h2>Booking Form</h2>
          <div className="content">
            <label htmlFor="name">Name</label>
            <div className="input-field">
              <Field type="text" name="name" placeholder="Your Name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <label htmlFor="umail">Email</label>
            <div className="input-field">
              <Field type="text" name="umail" placeholder="Your Mail Id" />
              <ErrorMessage name="umail" component="div" className="error" />
            </div>
            <label htmlFor="phone">Phone</label>
            <div className="input-field">
              <Field type="text" name="phone" placeholder="Your Phone" />
              <ErrorMessage name="phone" component="div" className="error" />
            </div>
            <label htmlFor="carName">Car Name</label>
            <div className="input-field">
              <Field
                type="text"
                name="carName"
                placeholder="Car Name"
                value={initialValues.carName}
                disabled
              />
            </div>
            <label htmlFor="carPrice">Car Price</label>
            <div className="input-field">
              <Field
                type="text"
                name="carPrice"
                placeholder="Car Price"
                value={initialValues.carPrice}
                disabled
              />
            </div>
          </div>
          
          <button type="submit" id='i5'>Book Now</button>
        </Form>
      </Formik>
    </div>
  );
}

export default BookingForm;
